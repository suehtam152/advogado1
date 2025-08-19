import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const role = searchParams.get('role');
	const where = role ? { role } : {};
	const users = await prisma.user.findMany({ where, orderBy: { createdAt: 'desc' } });
	return NextResponse.json(users);
}

export async function POST(request: Request) {
	const { name, email, password, role } = await request.json();
	if (!name || !email || !password) {
		return NextResponse.json({ error: 'Nome, email e senha são obrigatórios.' }, { status: 400 });
	}
	const existing = await prisma.user.findUnique({ where: { email } });
	if (existing) return NextResponse.json({ error: 'Email já cadastrado.' }, { status: 409 });
	const passwordHash = crypto.createHash('sha256').update(password).digest('hex');
	const user = await prisma.user.create({ data: { name, email, passwordHash, role: role || 'CLIENT' } });
	return NextResponse.json(user, { status: 201 });
}
