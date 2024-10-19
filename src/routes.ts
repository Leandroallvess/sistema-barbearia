import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/createUserController";
import { AuthUserController } from "./controllers/user/authUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { detailUserController } from "./controllers/user/detailUserController";
import { UpdateUserController } from "./controllers/user/updateUserController";
import { CreateHeircutController } from "./controllers/heircut/createHeircutController";
const router = Router();

// router.get("/teste", (req: Request, res: Response) => {
//   return res.json({ ok: true });
// });

// -- ROTAS USER --//

router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new detailUserController().handle);
router.put("/users", isAuthenticated, new UpdateUserController().handle);

// -- ROTAS HAIRCUT --//

router.post("/haircut", isAuthenticated, new CreateHeircutController().handle);

export { router };
