import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();

export async function POST(request: Request) {
	const { email, password } = await request.json();
	if (!email || !password) return NextResponse.json({ error: 'Credenciais inválidas' }, { status: 400 });
	const user = await prisma.user.findUnique({ where: { email } });
	if (!user) return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });
	const hash = crypto.createHash('sha256').update(password).digest('hex');
	if (hash !== user.passwordHash) return NextResponse.json({ error: 'Senha incorreta' }, { status: 401 });
	const token = Buffer.from(JSON.stringify({ id: user.id, role: user.role, iat: Date.now() })).toString('base64');
	return NextResponse.json({ token, user: { id: user.id, name: user.name, role: user.role } });
}
