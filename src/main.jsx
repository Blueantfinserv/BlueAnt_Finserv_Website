import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'

class ChunkErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.handleRetry = this.handleRetry.bind(this);
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    const isChunkError = /Failed to fetch dynamically imported module|Loading chunk|Loading CSS chunk/i.test(error.message);
    if (isChunkError) {
      const lastReload = sessionStorage.getItem('chunk_reloaded_at');
      const now = Date.now();
      // Allow auto-reload if it hasn't been reloaded in the last 15 seconds
      // (prevents infinite reload loops while still recovering on every refresh)
      if (!lastReload || (now - parseInt(lastReload, 10)) > 15000) {
        sessionStorage.setItem('chunk_reloaded_at', String(now));
        window.location.reload();
      }
    }
  }

  handleRetry() {
    // Clear the timer so the next auto-reload is always allowed
    sessionStorage.removeItem('chunk_reloaded_at');
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', minHeight: '100vh', textAlign: 'center',
          padding: '2rem', background: '#f8fafc', fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚠️</div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
            Something went wrong.
          </h1>
          <p style={{ color: '#64748b', marginBottom: '1.5rem', maxWidth: '400px', lineHeight: 1.6 }}>
            The page failed to load. This is usually a temporary issue — please try refreshing.
          </p>
          <button
            onClick={this.handleRetry}
            style={{
              background: 'linear-gradient(135deg, #2563eb, #00afef)',
              color: 'white', border: 'none', borderRadius: '9999px',
              padding: '12px 32px', fontWeight: 700, fontSize: '14px',
              cursor: 'pointer', letterSpacing: '0.05em',
              boxShadow: '0 4px 15px rgba(37,99,235,0.3)'
            }}
          >
            Refresh &amp; Retry
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChunkErrorBoundary>
      <App />
    </ChunkErrorBoundary>
  </StrictMode>,
)
