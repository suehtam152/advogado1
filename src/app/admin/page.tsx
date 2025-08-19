'use client';
import React, { useEffect, useState } from 'react';

type Role = 'ADMIN' | 'LAWYER' | 'CLIENT';

interface User {
	id: number;
	name: string;
	email: string;
	role: Role;
	createdAt: string;
}

interface DocumentItem {
	id: number;
	title: string;
	description?: string;
	fileUrl: string;
	client?: { id: number; name: string } | null;
	lawyer?: { id: number; name: string } | null;
	createdAt: string;
}

interface Contact {
	id: number;
	name: string;
	email: string;
	phone: string;
	createdAt: string;
	messages: Message[];
}

interface Message {
	id: number;
	content: string;
	fromClient: boolean;
	createdAt: string;
}

export default function AdminPage() {
	const [activeTab, setActiveTab] = useState<'users' | 'documents' | 'contacts'>('users');
	const [users, setUsers] = useState<User[]>([]);
	const [documents, setDocuments] = useState<DocumentItem[]>([]);
	const [contacts, setContacts] = useState<Contact[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		loadData(activeTab);
	}, [activeTab]);

	async function loadData(tab: 'users' | 'documents' | 'contacts') {
		setLoading(true);
		try {
			if (tab === 'users') {
				const res = await fetch('/api/admin/users');
				if (res.ok) setUsers(await res.json());
			}
			if (tab === 'documents') {
				const res = await fetch('/api/admin/documents');
				if (res.ok) setDocuments(await res.json());
			}
			if (tab === 'contacts') {
				const res = await fetch('/api/contacts?page=1&limit=20');
				if (res.ok) {
					const data = await res.json();
					setContacts(data.contacts || []);
				}
			}
		} finally {
			setLoading(false);
		}
	}

	return (
		<div style={{ minHeight: '100vh', background: '#f5f5f5', padding: '2rem' }}>
			<div style={{ maxWidth: 1200, margin: '0 auto' }}>
				<h1 style={{ color: '#1a1a1a', marginBottom: '1rem', fontWeight: 800, fontSize: 26 }}>Painel Administrativo</h1>

				<div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
					<button className={`btn btn-sm ${activeTab === 'users' ? 'btn-primary' : 'btn-light'}`} onClick={() => setActiveTab('users')}>Usuários</button>
					<button className={`btn btn-sm ${activeTab === 'documents' ? 'btn-primary' : 'btn-light'}`} onClick={() => setActiveTab('documents')}>Documentos</button>
					<button className={`btn btn-sm ${activeTab === 'contacts' ? 'btn-primary' : 'btn-light'}`} onClick={() => setActiveTab('contacts')}>Contatos</button>
				</div>

				<div style={{ background: '#fff', borderRadius: 12, padding: 16 }}>
					{loading ? (
						<p>Carregando...</p>
					) : activeTab === 'users' ? (
						<UserTab users={users} onReload={() => loadData('users')} />
					) : activeTab === 'documents' ? (
						<DocumentTab documents={documents} onReload={() => loadData('documents')} />
					) : (
						<ContactTab contacts={contacts} />
					)}
				</div>
			</div>
		</div>
	);
}

function UserTab({ users, onReload }: { users: User[]; onReload: () => void }) {
	return (
		<div>
			<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
				<h2 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>Usuários</h2>
				<a className="btn btn-sm btn-success" href="/admin/users/new">Novo usuário</a>
			</div>
			<table className="table">
				<thead>
					<tr>
						<th>Nome</th>
						<th>Email</th>
						<th>Papel</th>
						<th>Criado em</th>
					</tr>
				</thead>
				<tbody>
					{users.map((u) => (
						<tr key={u.id}>
							<td>{u.name}</td>
							<td>{u.email}</td>
							<td>{u.role}</td>
							<td>{new Date(u.createdAt).toLocaleDateString('pt-BR')}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

function DocumentTab({ documents, onReload }: { documents: DocumentItem[]; onReload: () => void }) {
	return (
		<div>
			<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
				<h2 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>Documentos</h2>
				<a className="btn btn-sm btn-success" href="/admin/documents/new">Novo documento</a>
			</div>
			<table className="table">
				<thead>
					<tr>
						<th>Título</th>
						<th>Cliente</th>
						<th>Arquivo</th>
						<th>Criado em</th>
					</tr>
				</thead>
				<tbody>
					{documents.map((d) => (
						<tr key={d.id}>
							<td>{d.title}</td>
							<td>{d.client?.name || '-'}</td>
							<td><a href={d.fileUrl} target="_blank" rel="noreferrer">baixar</a></td>
							<td>{new Date(d.createdAt).toLocaleDateString('pt-BR')}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

function ContactTab({ contacts }: { contacts: Contact[] }) {
	return (
		<div>
			<h2 style={{ fontSize: 18, fontWeight: 700 }}>Contatos Recebidos</h2>
			<table className="table">
				<thead>
					<tr>
						<th>Nome</th>
						<th>Email</th>
						<th>Telefone</th>
						<th>Data</th>
						<th>Mensagem</th>
					</tr>
				</thead>
				<tbody>
					{contacts.map((c) => (
						<tr key={c.id}>
							<td>{c.name}</td>
							<td>{c.email}</td>
							<td>{c.phone}</td>
							<td>{new Date(c.createdAt).toLocaleString('pt-BR')}</td>
							<td>{c.messages[0]?.content || '—'}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
} 