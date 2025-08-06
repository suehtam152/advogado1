'use client';
import React from 'react';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import Areas from '../components/Areas/Areas';

export default function HomeModular() {
  return (
    <div className="home-bg">
      <Layout>
        <Hero />
        <Areas />
        {/* Aqui você pode adicionar outros componentes modulares */}
      </Layout>
    </div>
  );
} 