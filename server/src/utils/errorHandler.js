const errorHandler = (req, res, next) => {
  res.status(500).send('error, please try again');

  next();
};

module.exports = errorHandler;
