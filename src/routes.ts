import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/createUserController";
import { AuthUserController } from "./controllers/user/authUserController";
import { UserDetailController } from "./controllers/user/detailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

// router.get("/teste", (req: Request, res: Response) => {
//   return res.json({ ok: true });
// });

// -- ROTAS USER --//

router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new UserDetailController().handle);

export { router };
