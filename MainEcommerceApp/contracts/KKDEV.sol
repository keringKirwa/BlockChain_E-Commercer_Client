// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract KKDEV {
    address public contractOwner;

    constructor(address ownerAddress) {
        contractOwner = ownerAddress;
    }

    modifier onlyOwner() {
        require(
            msg.sender == contractOwner,
            "Only the owner can delete a seller or  a buyer registered. !!! "
        );
        _;
    }

    using Counters for Counters.Counter;
    Counters.Counter private shopIdCounter;
    Counters.Counter private productIdCounter;
    Counters.Counter private orderIdCounter;

    struct Shop {
        address sellerEthereumAddress;
        bytes32 shopPassword;
        uint256 shopId;
        string shopName;
        string iconURL;
        uint256[] userproductsId; /* dynamic arrray */
    }

    struct Product {
        address sellerAddress;
        string productName;
        uint256 productQuantity;
        string productDescription;
        string imageURL;
    }
    struct Customer {
        address customerAddress;
        string emailAddress;
        string customerName;
        string password;
    }

    struct OrderDetails {
        address buyerAddress;
        address sellerAddress;
        uint256 totalAmountPaid;
        uint256 orderId;
        string transactionStatus;
        uint256 dateCreated;
    }

    struct ItemBought {
        uint256 orderId;
        uint256 subTotal;
        uint256 productId;
        uint256 quantity;
    }

    mapping(uint256 => ItemBought[]) public orderIdtoProductsMap;

    mapping(address => Shop) sellerShopDetails;
    mapping(address => bool) buyerHasShop;
    mapping(address => mapping(uint256 => Product)) internal productTable; /* the address here is the foreign key of the table  */
    mapping(address => Customer) userAddressToAccountDetailsMapping;

    mapping(address => uint256[]) sellerToOrderIdMapping;
    mapping(address => uint256[]) buyerToOrderIdMapping;
    mapping(uint256 => OrderDetails) private allOrders;

    function registerBuyer(
        address custAccountAddress,
        string memory emailAddress,
        string memory customerName,
        string memory password
    ) public returns (bool) {
        Customer memory newCust = Customer({
            customerAddress: custAccountAddress,
            emailAddress: emailAddress,
            customerName: customerName,
            password: password
        });
        userAddressToAccountDetailsMapping[custAccountAddress] = newCust;

        return true;
    }

    function loginBuyer(address custAccountAddress, string memory email)
        external
        view
        returns (
            string memory password,
            string memory emailAddress,
            string memory customerName
        )
    {
        Customer memory loggedInCustomer = userAddressToAccountDetailsMapping[
            custAccountAddress
        ];

        require(
            compare(email, loggedInCustomer.emailAddress) == true,
            "The email address provided is not correct"
        );

        password = loggedInCustomer.password;
        emailAddress = loggedInCustomer.emailAddress;
        customerName = loggedInCustomer.customerName;
    }

    function deleteBuyer(address buyerAddress)
        external
        onlyOwner
        returns (address deletedAddress)
    {
        bool hasShop = buyerHasShop[buyerAddress];

        if (hasShop) {
            console.log(
                "Address of the seller deleted :::: --->>>",
                deleteSeller(buyerAddress)
            );
        }

        delete userAddressToAccountDetailsMapping[buyerAddress];
        delete buyerToOrderIdMapping[buyerAddress];

        deletedAddress = buyerAddress;
    }

    function deleteSeller(address sellerAddress)
        public
        onlyOwner
        returns (address deletedAddress)
    {
        delete userAddressToAccountDetailsMapping[sellerAddress];

        delete sellerShopDetails[sellerAddress];

        uint256[] memory sellerOrderIdsArray = sellerToOrderIdMapping[
            sellerAddress
        ];

        for (uint256 i = 1; i < sellerOrderIdsArray.length; i++) {
            delete allOrders[sellerOrderIdsArray[i]];
        }

        delete sellerToOrderIdMapping[sellerAddress];
        deletedAddress = sellerAddress;
    }

    function createShop(
        address sellerEthAccountAddress,
        string memory shopName,
        string memory shopPassword,
        string memory iconURL
    ) external returns (uint256 shopId, string memory message) {
        shopIdCounter.increment();
        uint256 currentShopId = shopIdCounter.current();
        bytes32 hashedPassword = hashPassword(shopPassword);
        uint256[] memory myProductsIds;

        Shop memory newShop = Shop(
            sellerEthAccountAddress,
            hashedPassword,
            shopId,
            shopName,
            iconURL,
            myProductsIds
        );
        sellerShopDetails[sellerEthAccountAddress] = newShop;
        buyerHasShop[sellerEthAccountAddress] = true;
        message = "Shop successfully created";
        shopId = currentShopId;
    }

    function logIntoMyShop(
        address sellerEthAccountAddress,
        string calldata userPassword
    )
        external
        view
        returns (
            string memory shopName,
            string memory iconUrl,
            address sellerAccountAddress,
            uint256 shopId
        )
    {
        Shop memory sellersShopDetails = sellerShopDetails[
            sellerEthAccountAddress
        ];
        bool isPasswordCorrect = checkForCorrectPassword(
            userPassword,
            sellersShopDetails.shopPassword
        );
        require(
            isPasswordCorrect == true,
            "the passsword provided is not correct."
        );

        shopName = sellersShopDetails.shopName;
        iconUrl = sellersShopDetails.iconURL;
        sellerAccountAddress = sellersShopDetails.sellerEthereumAddress;
        shopId = sellersShopDetails.shopId;
    }

    function addProductsToShop(
        address userAccAddress,
        string memory productName,
        uint256 productQuantity,
        string calldata imageURI,
        string calldata productDesc
    ) external returns (uint256 prodId) {
        productIdCounter.increment();

        uint256 currentProdId = productIdCounter.current();

        Product memory prod = Product(
            userAccAddress,
            productName,
            productQuantity,
            productDesc,
            imageURI
        );
        productTable[userAccAddress][currentProdId] = prod;
        uint256[] storage idArray = sellerShopDetails[userAccAddress]
            .userproductsId;
        idArray.push(currentProdId); /* save the ids of the user products in the storage . */

        prodId = currentProdId;
    }

    function getUserProducts(address userAccAddress)
        public
        view
        returns (Product[] memory)
    {
        Shop memory sellersShopDetails = sellerShopDetails[userAccAddress];

        uint256[] memory arrayOfProductIds = sellersShopDetails.userproductsId;
        require(arrayOfProductIds.length > 0, "The user has no products yet");
        Product[] memory userProducts = new Product[](arrayOfProductIds.length);

        for (uint256 i = 0; i < arrayOfProductIds.length; i++) {
            userProducts[i] = productTable[userAccAddress][
                arrayOfProductIds[i]
            ];
        }
        return userProducts;
    }

    function saveOrder(
        address buyerAddress,
        address sellerAddress,
        uint256 totalPaid
    ) external returns (uint256) {
        /* this function is only called when  a successful payment of the orderr happens(when ether is trasferred to the seller. */

        orderIdCounter.increment();
        uint256 id = orderIdCounter.current();

        OrderDetails memory orderDetails = OrderDetails(
            buyerAddress,
            sellerAddress,
            totalPaid,
            id,
            "pending",
            block.timestamp
        );
        allOrders[id] = orderDetails;
        buyerToOrderIdMapping[buyerAddress].push(id);
        sellerToOrderIdMapping[sellerAddress].push(id);
        return id;
    }

    function saveProductsForAnOrder(
        uint256 orderId,
        uint256 subTotal,
        uint256 productId,
        uint256 quantity
    ) external returns (uint256) {
        /* this function is only called when the order id is received in the frontend. */

        ItemBought memory itemBought = ItemBought(
            orderId,
            subTotal,
            productId,
            quantity
        );
        orderIdtoProductsMap[orderId].push(itemBought);
        return orderId;
    }

    function getOrderItem()
        public
        view
        returns (OrderDetails memory orderMade)
    {
        orderMade = allOrders[1];
    }

    function getAllBuyerOrders(address _buyerAddress)
        public
        view
        returns (OrderDetails[] memory)
    {
        uint256[] memory buyerIds = buyerToOrderIdMapping[_buyerAddress];

        require(
            buyerIds.length > 0,
            "Cant fetch the order details for this buyer"
        );

        OrderDetails[] memory orderDetails = new OrderDetails[](
            buyerIds.length
        );

        for (uint256 i = 0; i < buyerIds.length; i++) {
            orderDetails[i] = allOrders[buyerIds[i]];
        }

        return orderDetails;
    }

    function getAllSellerOrders(address _sellerAddress)
        public
        view
        returns (OrderDetails[] memory)
    {
        uint256[] memory sellerIds = buyerToOrderIdMapping[_sellerAddress];
        require(
            sellerIds.length > 0,
            "Cant fetch the order details for this buyer"
        );
        OrderDetails[] memory orderDetails = new OrderDetails[](
            sellerIds.length
        );

        for (uint256 i = 0; i < sellerIds.length; i++) {
            orderDetails[i] = allOrders[sellerIds[i]];
        }
        return orderDetails;
    }

    function getProductsForAnOrder(uint256 orderId)
        public
        view
        returns (ItemBought[] memory products)
    {
        products = orderIdtoProductsMap[orderId];
    }

    function updateDeliveryStatus(
        uint256 orderId,
        string calldata newDeliveryStatus
    ) external returns (bool) {
        OrderDetails storage orderDetails = allOrders[orderId];
        require(
            msg.sender == orderDetails.sellerAddress,
            "Ony seller can update the delivey status"
        );
        orderDetails.transactionStatus = newDeliveryStatus;
        return true;
    }

    function getOrderIdsForSeller(address _address)
        internal
        view
        returns (uint256[] memory idArray)
    {
        idArray = sellerToOrderIdMapping[_address];
    }

    function getOrderIdsForBuyer(address _address)
        internal
        view
        returns (uint256[] memory idArray)
    {
        idArray = buyerToOrderIdMapping[_address];
    }

    function checkForCorrectPassword(
        string memory passwordFromUser,
        bytes32 passwordInStorage
    ) internal pure returns (bool) {
        return
            keccak256(abi.encodePacked(passwordFromUser)) == passwordInStorage;
    }

    function hashPassword(string memory pass)
        internal
        pure
        returns (bytes32 hashedPassword)
    {
        hashedPassword = keccak256(abi.encodePacked(pass));
    }

    /* for gas optimization , we check if the length is not the same then the length is not the same then we stop the comparison process. */

    function compare(string memory str1, string memory str2)
        internal
        pure
        returns (bool)
    {
        if (bytes(str1).length != bytes(str2).length) {
            return false;
        }
        return
            keccak256(abi.encodePacked(str1)) ==
            keccak256(abi.encodePacked(str2));
    }
}
