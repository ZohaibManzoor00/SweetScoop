const postRouter = require("express").Router();
const postController = require("../controllers/post");
const addModels = require("../middleware/add-models");

postRouter.use(addModels);

postRouter.get("/posts", postController.list);
// postRouter.post("/users", userController.create);
// postRouter.get("/users/:id", userController.show);
// // We can use middleware slotted in between the route and the controller as well
// postRouter.patch("/users/:id", checkAuthentication, userController.update);

// postRouter.post("/login", userController.login);
// postRouter.delete("/logout", userController.logout);
// postRouter.get("/me", userController.showMe);

// postRouter.get("/logged-in-secret", checkAuthentication, (req, res) => {
//   res.send({ msg: "The secret is: there is no secret." });
// });

module.exports = postRouter;
