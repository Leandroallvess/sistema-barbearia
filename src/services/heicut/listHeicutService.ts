import prismaClient from "../../prisma";

interface HaircutResquest {
  user_id: string;
  status: boolean | string;
}

class ListHaircutServices {
  async execute({ user_id, status }: HaircutResquest) {
    const haircut = await prismaClient.haircut.findMany({
      where: {
        user_id: user_id,
        status: status === "true" ? true : false,
      },
    });

    return haircut;
  }
}
export { ListHaircutServices };
