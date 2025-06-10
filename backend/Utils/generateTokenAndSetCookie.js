import jwt from "jsonwebtoken";
export const generateTokenAndSetCookie = (res, id) => {
  const token = jwt.sign({ id }, process.env.SECRET, {
    expiresIn: "7d", //expires in 7 days
  });
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "none",
    secure: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};
