const { Router } = require("express");
const { postsRouterGet } = require("../controllers/postsController");

const postsRouter = Router();

postsRouter.get("/", postsRouterGet);

module.exports = postsRouter;