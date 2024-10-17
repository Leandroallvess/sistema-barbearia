import { Request, Response } from "express";
import { detailUserService } from "../../services/user/detailUserService";

class detailUserController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id;

    const userDetailService = new detailUserService();

    const detailUser = await userDetailService.execute(user_id);

    return response.json(detailUser);
  }
}

export { detailUserController };
