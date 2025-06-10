import jwt from "jsonwebtoken";
import { User } from "../Models/user.model.js";
export async function verifyToken(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized - no token provided" });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET);

    if (!decoded)
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized - invalid token" });

    const user = await User.findById(decoded.id);
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized - No User Found" });
    }
    req.user = user;
    return next();
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
}
