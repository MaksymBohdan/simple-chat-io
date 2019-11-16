const homePage = (req, res) => {
  console.log('req', req);

  res.set('Content-Type', 'application/json');
  res.status(200);
  res.json(`<h1>HOME PAGE</h1>`);
};

module.exports = homePage;
