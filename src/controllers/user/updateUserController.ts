import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/updateUserService";

class UpdateUserController {
  async handle(Request: Request, Response: Response) {
    const { name, endereco } = Request.body;
    const user_id = Request.user_id;

    const updateUser = new UpdateUserService();

    const user = await updateUser.execute({
      user_id,
      name,
      endereco,
    });

    return Response.json(user);
  }
}

export { UpdateUserController };
