function Role(role) {
  return function (req, res, next) {
    if (req.user?.role === role) {
      return next();
    }
    res.status(403).json({ message: `Access denied: ${role}s only` });
  };
}

module.exports = Role;
