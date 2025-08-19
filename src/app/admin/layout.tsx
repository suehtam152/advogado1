import React from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	return (
		<div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
			<header style={{ background: '#fff', borderBottom: '1px solid #eee', padding: '0.75rem 1rem', position: 'sticky', top: 0, zIndex: 10 }}>
				<div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
					<strong>Admin</strong>
					<nav style={{ display: 'flex', gap: 8 }}>
						<a className="btn btn-sm btn-light" href="/admin">Dashboard</a>
						<a className="btn btn-sm btn-light" href="/admin/users/new">Novo usuário</a>
						<a className="btn btn-sm btn-light" href="/admin/documents/new">Novo documento</a>
					</nav>
				</div>
			</header>
			<main style={{ maxWidth: 1200, margin: '0 auto' }}>{children}</main>
		</div>
	);
}
