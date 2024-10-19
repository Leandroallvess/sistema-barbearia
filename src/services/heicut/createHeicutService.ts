import { PrismaClient } from "@prisma/client";
import prismaClient from "../../prisma";

interface HeircutRequest {
  user_id: string;
  name: string;
  price: number;
}

class CreateHeircutService {
  async execute({ user_id, name, price }: HeircutRequest) {
    if (!name || !price) {
      throw new Error("Error");
    }

    const myHeicuts = await prismaClient.haircut.count({
      where: {
        user_id: user_id,
      },
    });

    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
      include: {
        subscriptions: true,
      },
    });

    if (myHeicuts >= 3 && user?.subscriptions?.status !== "active") {
      throw new Error("Not autorized");
    }

    const heircut = await prismaClient.haircut.create({
      data: {
        name: name,
        price: price,
        user_id: user_id,
      },
    });

    return heircut;
  }
}

export { CreateHeircutService };
