'use client';
import React, { useState, useEffect } from 'react';

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
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchContacts();
  }, [currentPage]);

  const fetchContacts = async () => {
    try {
      const response = await fetch(`/api/contacts?page=${currentPage}&limit=10`);
      if (response.ok) {
        const data = await response.json();
        setContacts(data.contacts);
        setTotalPages(data.pagination.pages);
      }
    } catch (error) {
      console.error('Erro ao buscar contatos:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Carregando...</h2>
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#f5f5f5', 
      padding: '2rem',
      fontFamily: 'Inter, Arial, sans-serif'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ 
          color: '#1a1a1a', 
          marginBottom: '2rem',
          fontSize: '2rem',
          fontWeight: 'bold'
        }}>
          Painel Administrativo - Juston
        </h1>

        <div style={{ 
          background: '#fff', 
          borderRadius: '12px', 
          padding: '2rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ 
            color: '#1a1a1a', 
            marginBottom: '1.5rem',
            fontSize: '1.5rem'
          }}>
            Contatos Recebidos
          </h2>

          {contacts.length === 0 ? (
            <p style={{ color: '#666', textAlign: 'center', padding: '2rem' }}>
              Nenhum contato encontrado.
            </p>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ 
                width: '100%', 
                borderCollapse: 'collapse',
                fontSize: '14px'
              }}>
                <thead>
                  <tr style={{ 
                    background: '#f8f9fa',
                    borderBottom: '2px solid #dee2e6'
                  }}>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Nome</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Email</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Telefone</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Data</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Mensagem</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr key={contact.id} style={{ 
                      borderBottom: '1px solid #dee2e6',
                      background: '#fff'
                    }}>
                      <td style={{ padding: '12px', fontWeight: '500' }}>{contact.name}</td>
                      <td style={{ padding: '12px' }}>{contact.email}</td>
                      <td style={{ padding: '12px' }}>{contact.phone}</td>
                      <td style={{ padding: '12px' }}>{formatDate(contact.createdAt)}</td>
                      <td style={{ padding: '12px', maxWidth: '300px' }}>
                        <div style={{ 
                          maxHeight: '100px', 
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}>
                          {contact.messages[0]?.content || 'Nenhuma mensagem'}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {totalPages > 1 && (
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '1rem',
              marginTop: '2rem'
            }}>
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                style={{
                  padding: '8px 16px',
                  border: '1px solid #dee2e6',
                  background: currentPage === 1 ? '#f8f9fa' : '#fff',
                  borderRadius: '4px',
                  cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
                }}
              >
                Anterior
              </button>
              <span style={{ padding: '8px 16px' }}>
                Página {currentPage} de {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                style={{
                  padding: '8px 16px',
                  border: '1px solid #dee2e6',
                  background: currentPage === totalPages ? '#f8f9fa' : '#fff',
                  borderRadius: '4px',
                  cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
                }}
              >
                Próxima
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 