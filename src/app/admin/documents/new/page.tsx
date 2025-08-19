'use client';
import React, { useState, useEffect } from 'react';

type Role = 'ADMIN' | 'LAWYER' | 'CLIENT';

interface User { id: number; name: string; role: Role; }

export default function NewDocumentPage() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [fileUrl, setFileUrl] = useState('');
	const [clientId, setClientId] = useState<number | ''>('');
	const [clients, setClients] = useState<User[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		(async () => {
			const res = await fetch('/api/admin/users?role=CLIENT');
			if (res.ok) setClients(await res.json());
		})();
	}, []);

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setLoading(true);
		try {
			const res = await fetch('/api/admin/documents', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ title, description, fileUrl, clientId: clientId || null })
			});
			if (res.ok) {
				alert('Documento criado');
				window.location.href = '/admin';
			} else {
				const data = await res.json();
				alert(data.error || 'Erro ao criar documento');
			}
		} finally {
			setLoading(false);
		}
	}

	return (
		<div style={{ padding: 16 }}>
			<h1 style={{ fontWeight: 700, fontSize: 20 }}>Novo documento</h1>
			<form onSubmit={handleSubmit} style={{ maxWidth: 560 }}>
				<div className="mb-2">
					<label className="form-label">Título</label>
					<input className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
				</div>
				<div className="mb-2">
					<label className="form-label">Descrição</label>
					<textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
				</div>
				<div className="mb-2">
					<label className="form-label">URL do arquivo</label>
					<input className="form-control" placeholder="/uploads/meu-arquivo.pdf" value={fileUrl} onChange={(e) => setFileUrl(e.target.value)} required />
				</div>
				<div className="mb-3">
					<label className="form-label">Cliente (opcional)</label>
					<select className="form-select" value={clientId} onChange={(e) => setClientId(e.target.value ? Number(e.target.value) : '')}>
						<option value="">Selecione um cliente</option>
						{clients.map(c => (
							<option key={c.id} value={c.id}>{c.name}</option>
						))}
					</select>
				</div>
				<button className="btn btn-primary" disabled={loading}>{loading ? 'Salvando...' : 'Salvar'}</button>
				<a className="btn btn-link" href="/admin" style={{ marginLeft: 8 }}>Cancelar</a>
			</form>
		</div>
	);
}
