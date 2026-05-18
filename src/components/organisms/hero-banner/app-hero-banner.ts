import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-hero-banner')
export class AppHeroBanner extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: linear-gradient(135deg, var(--color-primary-600) 0%, var(--color-primary-800) 50%, var(--color-primary-900) 100%);
      color: var(--color-gray-0);
      position: relative;
      overflow: hidden;
    }

    .hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: var(--space-12) var(--space-4);
      max-width: var(--container-xl);
      margin-inline: auto;
      position: relative;
      z-index: 1;
    }

    @media (min-width: 768px) {
      .hero {
        flex-direction: row;
        text-align: left;
        gap: var(--space-12);
        padding: var(--space-16) var(--space-8);
      }
    }

    .hero-content {
      flex: 1;
      animation: fadeIn 0.8s ease forwards;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: var(--space-1);
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(10px);
      padding: var(--space-1) var(--space-3);
      border-radius: var(--border-radius-full);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      margin-bottom: var(--space-4);
    }

    .hero-badge::before {
      content: "★";
      color: var(--color-secondary-400);
    }

    .hero-title {
      font-family: var(--font-family-heading);
      font-size: var(--font-size-3xl);
      font-weight: var(--font-weight-extrabold);
      line-height: var(--line-height-tight);
      margin-bottom: var(--space-4);
    }

    @media (min-width: 768px) {
      .hero-title {
        font-size: var(--font-size-4xl);
      }
    }

    .hero-title .highlight {
      color: var(--color-secondary-400);
      font-family: var(--font-family-accent);
      font-style: italic;
    }

    .hero-description {
      font-size: var(--font-size-base);
      line-height: var(--line-height-relaxed);
      opacity: 0.9;
      margin-bottom: var(--space-6);
      max-width: 500px;
    }

    @media (min-width: 768px) {
      .hero-description {
        font-size: var(--font-size-md);
      }
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-3);
    }

    @media (min-width: 768px) {
      .hero-actions {
        justify-content: flex-start;
      }
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      background: var(--color-secondary-500);
      color: var(--color-gray-900);
      padding: var(--space-3) var(--space-6);
      border-radius: var(--border-radius-full);
      font-weight: var(--font-weight-semibold);
      font-size: var(--font-size-sm);
      text-decoration: none;
      transition: all var(--transition-base);
      box-shadow: var(--shadow-secondary);
    }

    .btn-primary:hover {
      background: var(--color-secondary-400);
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
      text-decoration: none;
    }

    .btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      background: rgba(255, 255, 255, 0.1);
      color: var(--color-gray-0);
      padding: var(--space-3) var(--space-6);
      border-radius: var(--border-radius-full);
      font-weight: var(--font-weight-medium);
      font-size: var(--font-size-sm);
      text-decoration: none;
      border: 1px solid rgba(255, 255, 255, 0.3);
      transition: all var(--transition-base);
      backdrop-filter: blur(10px);
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.2);
      text-decoration: none;
    }

    .hero-visual {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: var(--space-8);
    }

    @media (min-width: 768px) {
      .hero-visual {
        margin-top: 0;
      }
    }

    .hero-image-placeholder {
      width: 280px;
      height: 280px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: var(--border-radius-2xl);
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    @media (min-width: 768px) {
      .hero-image-placeholder {
        width: 360px;
        height: 360px;
      }
    }

    .hero-image-placeholder svg {
      width: 120px;
      height: 120px;
      opacity: 0.6;
    }

    .hero-stats {
      display: flex;
      gap: var(--space-8);
      margin-top: var(--space-8);
      padding-top: var(--space-6);
      border-top: 1px solid rgba(255, 255, 255, 0.15);
    }

    @media (min-width: 768px) {
      .hero-stats {
        justify-content: flex-start;
      }
    }

    .stat {
      text-align: center;
    }

    @media (min-width: 768px) {
      .stat {
        text-align: left;
      }
    }

    .stat-value {
      font-family: var(--font-family-heading);
      font-size: var(--font-size-2xl);
      font-weight: var(--font-weight-bold);
      color: var(--color-secondary-400);
    }

    .stat-label {
      font-size: var(--font-size-xs);
      opacity: 0.8;
      font-weight: var(--font-weight-medium);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

  render() {
    return html`
      <section class="hero" aria-label="Destaque">
        <div class="hero-content">
          <span class="hero-badge">20 anos no mercado</span>
          <h1 class="hero-title">
            Veja o mundo com<br>
            <span class="highlight">estilo</span>
          </h1>
          <p class="hero-description">
            Óculos de grau, de sol e avaliação visual com qualidade e preço justo. 
            5 unidades no Pará e Tocantins para melhor atender você.
          </p>
          <div class="hero-actions">
            <a href="/produtos" class="btn-primary" role="button">
              Ver Catálogo
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </a>
            <a href="https://wa.me/5594000000000" class="btn-secondary" role="button" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.812 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
              </svg>
              Fale Conosco
            </a>
          </div>
          <div class="hero-stats">
            <div class="stat">
              <div class="stat-value">20+</div>
              <div class="stat-label">Anos de mercado</div>
            </div>
            <div class="stat">
              <div class="stat-value">5</div>
              <div class="stat-label">Unidades</div>
            </div>
            <div class="stat">
              <div class="stat-value">14K+</div>
              <div class="stat-label">Seguidores</div>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-image-placeholder" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-hero-banner': AppHeroBanner;
  }
}
