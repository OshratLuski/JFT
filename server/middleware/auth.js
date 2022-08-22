import UnAuthorizedError from "../errors/unauthorized.js";
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization || !authorization.startsWith("Bearer")) {
    throw new UnAuthorizedError("Unauthorized user");
  }
  console.log("test", authorization);
  const token = authorization.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId };

    next();
  } catch (error) {
    throw new UnAuthorizedError("Unauthorized user");
  }
};

export default auth;
