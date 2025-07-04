import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '70vh',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3em', color: '#1d938d', marginBottom: '20px' }}>404</h1>
      <h2 style={{ fontSize: '1.5em', color: '#333', marginBottom: '20px' }}>Página no encontrada</h2>
      <p style={{ fontSize: '1.1em', color: '#666', marginBottom: '30px' }}>
        La página que estás buscando no existe o ha sido movida.
      </p>
      <Link 
        to="/" 
        style={{
          backgroundColor: '#1c7291',
          color: '#80e6cb',
          padding: '12px 26px',
          border: '4px solid #80e6cb',
          borderRadius: '50px',
          fontSize: '1em',
          textDecoration: 'none',
          fontFamily: 'Verdana, sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          transition: 'all 0.3s ease'
        }}
      >
        Volver al Inicio
      </Link>
    </div>
  );
}

export default NotFound;