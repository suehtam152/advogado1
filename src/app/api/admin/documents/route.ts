import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
	const docs = await prisma.document.findMany({
		orderBy: { createdAt: 'desc' },
		include: { client: { select: { id: true, name: true } }, lawyer: { select: { id: true, name: true } } }
	});
	return NextResponse.json(docs);
}

export async function POST(request: Request) {
	const { title, description, fileUrl, clientId } = await request.json();
	if (!title || !fileUrl) return NextResponse.json({ error: 'Título e arquivo são obrigatórios.' }, { status: 400 });
	const doc = await prisma.document.create({
		data: {
			title,
			description,
			fileUrl,
			clientId: clientId || null
		}
	});
	return NextResponse.json(doc, { status: 201 });
}
