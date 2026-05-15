import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import { GlassMemPage } from './pages/GlassMemPage';
import { ContactPage }  from './pages/ContactPage';
import { SignUpPage }   from './pages/SignUpPage';
import { AppPage }      from './pages/AppPage';
import { DXPage }       from './pages/DXPage';
import { ArchitecturePage } from './pages/ArchitecturePage';
import { ManifestoPage }    from './pages/ManifestoPage';
import { ObservabilityPage } from './pages/ObservabilityPage';

function ProtectedApp() {
  const email = localStorage.getItem('gm_email');
  return email ? <AppPage /> : <Navigate to="/signup" replace />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"              element={<GlassMemPage />} />
        <Route path="/dx"            element={<DXPage />} />
        <Route path="/architecture"  element={<ArchitecturePage />} />
        <Route path="/manifesto"     element={<ManifestoPage />} />
        <Route path="/thesis"        element={<ManifestoPage />} />
        <Route path="/observability" element={<ObservabilityPage />} />
        <Route path="/contact"       element={<ContactPage />}  />
        <Route path="/signup"        element={<SignUpPage />}   />
        <Route path="/app"           element={<ProtectedApp />} />
        <Route path="*"              element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
