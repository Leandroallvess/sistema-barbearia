import { Request, Response } from "express";
import { CreateHeircutService } from "../../services/heicut/createHeicutService";

class CreateHeircutController {
  async handle(request: Request, response: Response) {
    const { name, price } = request.body;
    const user_id = request.user_id;

    const createHeircurService = new CreateHeircutService();
    const heicut = await createHeircurService.execute({
      user_id,
      name,
      price,
    });

    return response.json(heicut);
  }
}

export { CreateHeircutController };
