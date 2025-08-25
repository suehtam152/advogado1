import React from 'react';
import Header from '../../components/Header';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	return (
		<div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
			<Header showContactButton={false} />
			<main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem', marginTop: '5rem' }}>{children}</main>
		</div>
	);
}
