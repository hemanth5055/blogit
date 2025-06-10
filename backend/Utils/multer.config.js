import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary.config.js";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "blogit-temp", // Folder name in Cloudinary
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

export default upload;
