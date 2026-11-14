'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import Footer from './Footer';
import SearchModal from '../ui/SearchModal';

export default function AppShell({ children }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="app-container">
      <Sidebar 
        isOpen={mobileSidebarOpen} 
        onClose={() => setMobileSidebarOpen(false)} 
      />

      <div className="main-content-wrapper">
        <TopNav 
          onToggleMobileSidebar={() => setMobileSidebarOpen(prev => !prev)} 
        />
        
        <main className="page-body">
          {children}
        </main>

        <Footer />
      </div>

      <SearchModal />
    </div>
  );
}
