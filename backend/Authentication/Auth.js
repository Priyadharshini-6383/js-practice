const jwt = require("jsonwebtoken");

function Middleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  }   catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
}

module.exports = Middleware;
