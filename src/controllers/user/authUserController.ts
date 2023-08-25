import { Request, Response } from "express";
import { AuthUserSservice } from "../../services/user/authUserService";

class AuthUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authUserService = new AuthUserSservice();

    const session = await authUserService.execute({
      email,
      password,
    });

    return response.json(session);
  }
}

export { AuthUserController };
