import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { nanoid } from 'nanoid';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { originalUrl, customSlug } = await request.json();

  // Verifica se a URL já está encurtada
  const existingUrl = await prisma.url.findFirst({
    where: { originalUrl },
  });

  if (existingUrl) {
    return NextResponse.json({ existingUrl: existingUrl.shortUrl });
  }

  const shortUrl = customSlug ? customSlug : nanoid(5);

  const newUrl = await prisma.url.create({
    data: {
      originalUrl,
      shortUrl,
    },
  });

  return NextResponse.json({ shortUrl: newUrl.shortUrl });
}
