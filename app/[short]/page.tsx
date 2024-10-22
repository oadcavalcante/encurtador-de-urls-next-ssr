import { PrismaClient } from "@prisma/client";
import { notFound, redirect } from "next/navigation";

const prisma = new PrismaClient();

interface Props {
  params: {
    short: string;
  };
}

export default async function ShortUrlPage({ params }: Props) {
  const { short } = params;

  // Procurar o URL correspondente ao código curto
  const urlData = await prisma.url.findUnique({
    where: { short },
  });

  if (!urlData) {
    notFound();
  }

  // Redirecionar para o URL original
  redirect(urlData?.original || "/");
}
