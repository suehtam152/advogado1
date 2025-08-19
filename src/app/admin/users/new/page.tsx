'use client';
import React, { useState } from 'react';

type Role = 'ADMIN' | 'LAWYER' | 'CLIENT';

export default function NewUserPage() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [role, setRole] = useState<Role>('CLIENT');
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setLoading(true);
		try {
			const res = await fetch('/api/admin/users', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, password, role })
			});
			if (res.ok) {
				alert('Usuário criado');
				window.location.href = '/admin';
			} else {
				const data = await res.json();
				alert(data.error || 'Erro ao criar usuário');
			}
		} finally {
			setLoading(false);
		}
	}

	return (
		<div style={{ padding: 16 }}>
			<h1 style={{ fontWeight: 700, fontSize: 20 }}>Novo usuário</h1>
			<form onSubmit={handleSubmit} style={{ maxWidth: 480 }}>
				<div className="mb-2">
					<label className="form-label">Nome</label>
					<input className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
				</div>
				<div className="mb-2">
					<label className="form-label">Email</label>
					<input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
				</div>
				<div className="mb-2">
					<label className="form-label">Senha</label>
					<input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
				</div>
				<div className="mb-3">
					<label className="form-label">Papel</label>
					<select className="form-select" value={role} onChange={(e) => setRole(e.target.value as Role)}>
						<option value="ADMIN">ADMIN</option>
						<option value="LAWYER">LAWYER</option>
						<option value="CLIENT">CLIENT</option>
					</select>
				</div>
				<button className="btn btn-primary" disabled={loading}>{loading ? 'Salvando...' : 'Salvar'}</button>
				<a className="btn btn-link" href="/admin" style={{ marginLeft: 8 }}>Cancelar</a>
			</form>
		</div>
	);
}
