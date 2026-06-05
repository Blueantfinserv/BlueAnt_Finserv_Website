import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.handleRetry = this.handleRetry.bind(this);
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleRetry() {
    this.setState({ hasError: false });
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', minHeight: '60vh', textAlign: 'center',
          padding: '3rem 2rem', background: '#ffffff', fontFamily: 'system-ui, sans-serif'
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>😕</div>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
            This page ran into a problem
          </h2>
          <p style={{ color: '#64748b', marginBottom: '1.5rem', maxWidth: '380px', lineHeight: 1.6, fontSize: '0.95rem' }}>
            Don't worry — your data is safe. Try refreshing the page or navigate to another section.
          </p>
          <button
            onClick={this.handleRetry}
            style={{
              background: 'linear-gradient(135deg, #2563eb, #00afef)',
              color: 'white', border: 'none', borderRadius: '9999px',
              padding: '11px 28px', fontWeight: 700, fontSize: '13px',
              cursor: 'pointer', letterSpacing: '0.05em',
              boxShadow: '0 4px 15px rgba(37,99,235,0.25)',
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={e => e.target.style.opacity = '0.85'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            Refresh &amp; Retry
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
