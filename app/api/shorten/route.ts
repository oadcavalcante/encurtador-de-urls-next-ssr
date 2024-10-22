import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { url }: { url: string } = await request.json();

  // Gerar um código curto único
  const short = Math.random().toString(36).substring(2, 8);

  try {
    const newUrl = await prisma.url.create({
      data: { original: url, short },
    });
    return NextResponse.json(newUrl);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao encurtar a URL' }, { status: 500 });
  }
}
