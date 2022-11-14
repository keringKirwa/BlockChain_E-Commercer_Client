import { cloudName, presetName } from "./constants";
export const uploadImageToCloudinary = async (image) => {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", "kkdevImages");
  data.append("cloud_name", "dirasazrt");
  try {
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dirasazrt/image/upload",
      {
        method: "post",
        body: data,
      }
    );
    const file = await res.json();
    alert(file.url);
    return file.url;
    
  } catch (error) {
    console.log("This is the error :::: =====>", error);
  }
};
