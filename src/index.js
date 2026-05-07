import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import { GlassMemPage } from './pages/GlassMemPage';
import { SignUpPage }   from './pages/SignUpPage';
import { AppPage }      from './pages/AppPage';

function ProtectedApp() {
  const email = localStorage.getItem('gm_email');
  return email ? <AppPage /> : <Navigate to="/signup" replace />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"       element={<GlassMemPage />} />
        <Route path="/signup" element={<SignUpPage />}   />
        <Route path="/app"    element={<ProtectedApp />} />
        <Route path="*"       element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
