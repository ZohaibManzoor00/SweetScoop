const userRouter = require("express").Router();
const userController = require("../controllers/user");
const addModels = require("../middleware/add-models");
const checkAuthentication = require("../middleware/check-authentication");

userRouter.use(addModels);

userRouter.get("/users", userController.list);
userRouter.post("/users", userController.create);
userRouter.get("/users/:id", userController.show);
// We can use middleware slotted in between the route and the controller as well
userRouter.patch("/users/:id", checkAuthentication, userController.update);

userRouter.post("/login", userController.login);
userRouter.delete("/logout", userController.logout);
userRouter.get("/me", userController.showMe);

userRouter.get("/logged-in-secret", checkAuthentication, (req, res) => {
  res.send({ msg: "The secret is: there is no secret." });
});

module.exports = userRouter;
