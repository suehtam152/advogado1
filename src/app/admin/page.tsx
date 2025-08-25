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
		<div style={{ minHeight: '100vh', background: '#f5f5f5', overflow: 'hidden' }}>
			<div className="container-fluid px-2 px-md-3" style={{ maxWidth: 1200, margin: '0 auto', paddingTop: '1rem', paddingBottom: '2rem' }}>
				<h1 className="h3 h-md-2" style={{ color: '#1a1a1a', marginBottom: '0.75rem', fontWeight: 800, fontSize: 'clamp(1.25rem, 4vw, 1.5rem)' }}>Painel Administrativo</h1>

				<div className="d-flex flex-column flex-sm-row flex-wrap gap-1 gap-sm-2" style={{ marginBottom: 16 }}>
					<button className={`btn btn-sm ${activeTab === 'users' ? 'btn-primary' : 'btn-light'} flex-fill flex-sm-grow-0`} onClick={() => setActiveTab('users')}>Usuários</button>
					<button className={`btn btn-sm ${activeTab === 'documents' ? 'btn-primary' : 'btn-light'} flex-fill flex-sm-grow-0`} onClick={() => setActiveTab('documents')}>Documentos</button>
					<button className={`btn btn-sm ${activeTab === 'contacts' ? 'btn-primary' : 'btn-light'} flex-fill flex-sm-grow-0`} onClick={() => setActiveTab('contacts')}>Contatos</button>
				</div>

				<div style={{ background: '#fff', borderRadius: 12, padding: '0.75rem' }}>
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
			<div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center" style={{ gap: 8, marginBottom: 12 }}>
				<h2 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>Usuários</h2>
				<a className="btn btn-sm btn-success w-100 w-sm-auto" href="/admin/users/new">Novo usuário</a>
			</div>
			<div className="table-responsive" style={{ overflow: 'visible' }}>
				<table className="table table-sm align-middle" style={{ minWidth: 'auto', width: '100%', fontSize: '0.875rem' }}>
				<thead>
					<tr>
						<th style={{ whiteSpace: 'nowrap' }}>Nome</th>
						<th style={{ whiteSpace: 'nowrap' }}>Email</th>
						<th style={{ whiteSpace: 'nowrap' }}>Papel</th>
						<th style={{ whiteSpace: 'nowrap' }}>Criado em</th>
					</tr>
				</thead>
				<tbody>
					{users.map((u) => (
						<tr key={u.id}>
							<td style={{ wordBreak: 'break-word' }}>{u.name}</td>
							<td style={{ wordBreak: 'break-word' }}>{u.email}</td>
							<td style={{ whiteSpace: 'nowrap' }}>{u.role}</td>
							<td style={{ whiteSpace: 'nowrap' }}>{new Date(u.createdAt).toLocaleDateString('pt-BR')}</td>
						</tr>
					))}
				</tbody>
				</table>
			</div>
		</div>
	);
}

function DocumentTab({ documents, onReload }: { documents: DocumentItem[]; onReload: () => void }) {
	return (
		<div>
			<div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center" style={{ gap: 8, marginBottom: 12 }}>
				<h2 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>Documentos</h2>
				<a className="btn btn-sm btn-success w-100 w-sm-auto" href="/admin/documents/new">Novo documento</a>
			</div>
			<div className="table-responsive" style={{ overflow: 'visible' }}>
				<table className="table table-sm align-middle" style={{ minWidth: 'auto', width: '100%', fontSize: '0.875rem' }}>
				<thead>
					<tr>
						<th style={{ whiteSpace: 'nowrap' }}>Título</th>
						<th style={{ whiteSpace: 'nowrap' }}>Cliente</th>
						<th style={{ whiteSpace: 'nowrap' }}>Arquivo</th>
						<th style={{ whiteSpace: 'nowrap' }}>Criado em</th>
					</tr>
				</thead>
				<tbody>
					{documents.map((d) => (
						<tr key={d.id}>
							<td style={{ wordBreak: 'break-word' }}>{d.title}</td>
							<td style={{ wordBreak: 'break-word' }}>{d.client?.name || '-'}</td>
							<td style={{ whiteSpace: 'nowrap' }}><a href={d.fileUrl} target="_blank" rel="noreferrer">baixar</a></td>
							<td style={{ whiteSpace: 'nowrap' }}>{new Date(d.createdAt).toLocaleDateString('pt-BR')}</td>
						</tr>
					))}
				</tbody>
				</table>
			</div>
		</div>
	);
}

function ContactTab({ contacts }: { contacts: Contact[] }) {
	return (
		<div>
			<h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Contatos Recebidos</h2>
			<div className="table-responsive" style={{ overflow: 'visible' }}>
				<table className="table table-sm align-middle" style={{ minWidth: 'auto', width: '100%', fontSize: '0.875rem' }}>
				<thead>
					<tr>
						<th style={{ whiteSpace: 'nowrap' }}>Nome</th>
						<th style={{ whiteSpace: 'nowrap' }}>Email</th>
						<th style={{ whiteSpace: 'nowrap' }}>Telefone</th>
						<th style={{ whiteSpace: 'nowrap' }}>Data</th>
						<th style={{ whiteSpace: 'nowrap' }}>Mensagem</th>
					</tr>
				</thead>
				<tbody>
					{contacts.map((c) => (
						<tr key={c.id}>
							<td style={{ wordBreak: 'break-word' }}>{c.name}</td>
							<td style={{ wordBreak: 'break-word' }}>{c.email}</td>
							<td style={{ whiteSpace: 'nowrap' }}>{c.phone}</td>
							<td style={{ whiteSpace: 'nowrap' }}>{new Date(c.createdAt).toLocaleString('pt-BR')}</td>
							<td style={{ wordBreak: 'break-word', maxWidth: '200px' }}>{c.messages[0]?.content || '—'}</td>
						</tr>
					))}
				</tbody>
				</table>
			</div>
		</div>
	);
} 