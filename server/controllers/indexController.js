async function indexRouterGet(req, res) {
  res.json({
    message: "Index router"
  })
}

module.exports = {
  indexRouterGet
}