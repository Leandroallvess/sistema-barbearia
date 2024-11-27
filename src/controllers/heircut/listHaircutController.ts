import { Request, Response } from "express";
import { ListHaircutServices } from "../../services/heicut/listHeicutService";

class ListHeircutController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id;
    const status = request.query.status as string;

    const listHaircuts = new ListHaircutServices();
    const haircuts = await listHaircuts.execute({
      user_id,
      status,
    });

    return response.json(haircuts);
  }
}

export { ListHeircutController };
