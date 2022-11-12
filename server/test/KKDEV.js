const { expect } = require("chai");
const { ethers } = require("hardhat");
const { json } = require("hardhat/internal/core/params/argumentTypes");

let kkdevInstance;
let deployer;
const items = [
  { orderId: 1, subTotal: 1400, productId: 234, quantity: 3 },
  { orderId: 1, subTotal: 170, productId: 234, quantity: 1 },
];
const imageURL =
  "https://fatjoe.com/wp-content/uploads/2018/08/URL-structure-FATJOE-Blog-Header.png";

describe("DecentralizedShopSystem", async () => {
  before(async () => {
    const [owner, otherAccount] = await ethers.getSigners();
    const kkdevFactory = await ethers.getContractFactory("KKDEV");
    kkdevInstance = await kkdevFactory.deploy(owner.address);
    await kkdevInstance.deployed();
    deployer = owner;
  });

  describe("BuyerRegistration", () => {
    it("successfully registers a new user", async () => {
      await kkdevInstance.registerBuyer(
        deployer.address,
        "kkirwa230@gmail.com",
        "kelvin",
        "077Pqc7rs"
      );
    });
  });
  describe("BuyerLogin", () => {
    it("successfully Logs in the Buyer.", async () => {
      const [password, emailAddress, customerName] =
        await kkdevInstance.loginBuyer(deployer.address, "kkirwa230@gmail.com");
      expect(emailAddress).to.equal("kkirwa230@gmail.com");
    });
  });

  describe("Super Seller Shop Register ", () => {
    it("successfully allows users to create  a Shop ", async () => {
      const transaction = await kkdevInstance.createShop(
        deployer.address,
        "kkDEVShop",
        "kelvin",
        imageURL
      );
      await transaction.wait();
    });
  });

  describe("Login Seller", () => {
    it("Successfully allows a user to log into  his/her account .", async () => {
      const [shopName, iconUrl, sellerAccountAddress, shopId] =
        await kkdevInstance.logIntoMyShop(deployer.address, "kelvin");
      expect(shopName).to.equal("kkDEVShop");
      console.log("shop name ::::", shopName);
    });
  });

  describe("AddProduct", () => {
    it("Successfully allows a seller to add  the first product to his/her shop.", async () => {
      const transaction = await kkdevInstance.addProductsToShop(
        deployer.address,
        "Sugar",
        5,
        imageURL,
        "super product selling in the market."
      );
      await transaction.wait();
    });
  });
  describe("AddProduct", () => {
    it("Successfully allows a user to add the second product to the database to his/her shop.", async () => {
      const transaction = await kkdevInstance.addProductsToShop(
        deployer.address,
        "Sugar",
        5,
        imageURL,
        "super product selling in the market."
      );
      await transaction.wait();
    });
  });

  describe("Get User Products", () => {
    it("Successfully fetches all the products of the user ::: ", async () => {
      const userProducts = await kkdevInstance.getUserProducts(
        deployer.address
      );
      console.log("user products :::: -------->", userProducts);
    });
  });

  describe("Save Order", () => {
    it("Successfully saves the order made by the user ::: ", async () => {
      const saveOrderTransaction = await kkdevInstance.saveOrder(
        deployer.address,
        deployer.address,
        10000
      );
      await saveOrderTransaction.wait();
    });
  });

  describe("SaveProductsBought :", () => {
    it("Successfully saves (n) products of a given order ::: ", async () => {
      const forLoop = async (item, index) => {
        const transaction = await kkdevInstance.saveProductsForAnOrder(
          item.orderId,
          item.subTotal,
          item.productId,
          item.quantity
        );
        await transaction.wait();
      };
      items.forEach(forLoop);
    });
  });
  describe("Products:", () => {
    it("  Gets the products of a given order ::: ", async () => {
      const transaction = await kkdevInstance.getProductsForAnOrder(1);
      console.log("products for order 1 ------>", transaction);
    });
  });

  describe("GetBuyerOrders:", () => {
    it("  Gets all the orders associated with the buyer ::: ", async () => {
      const transaction = await kkdevInstance.getAllBuyerOrders(
        deployer.address
      );
      console.log("orders for the Buyer :::::  ------>", transaction);
    });
  });

  describe("GetSellerOrders:", () => {
    it("  Gets all the orders associated with the seller ::: ", async () => {
      const transaction = await kkdevInstance.getAllSellerOrders(
        deployer.address
      );
      console.log("orders for the Seller :::::  ------>", transaction);
    });
  });

  describe("UpdateDeliveryStatus:", () => {
    it("  updates the delivery status of a given product ::: ", async () => {
      const transaction = await kkdevInstance.updateDeliveryStatus(
        1,
        "Delivery on  progress"
      );
      await transaction.wait();
      console.log("Delivery status updated successfully ");
    });
  });
});
