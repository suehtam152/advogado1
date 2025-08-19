import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { name, email, content } = body;

		if (!name || !email || !content) {
			return NextResponse.json(
				{ error: 'Todos os campos são obrigatórios' },
				{ status: 400 }
			);
		}

		const feedback = await prisma.feedback.create({
			data: {
				name,
				email,
				content
			}
		});

		return NextResponse.json(
			{ message: 'Feedback enviado com sucesso!', feedbackId: feedback.id },
			{ status: 200 }
		);
	} catch (error) {
		console.error('Erro ao processar feedback:', error);
		return NextResponse.json(
			{ error: 'Erro interno do servidor' },
			{ status: 500 }
		);
	}
} 