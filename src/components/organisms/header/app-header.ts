import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: var(--z-sticky);
      background: var(--color-gray-0);
      box-shadow: var(--shadow-sm);
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: var(--header-height-mobile);
      padding-inline: var(--space-4);
      max-width: var(--container-xl);
      margin-inline: auto;
    }

    @media (min-width: 768px) {
      header {
        height: var(--header-height);
        padding-inline: var(--space-6);
      }
    }

    .logo {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      text-decoration: none;
    }

    .logo:hover {
      text-decoration: none;
    }

    .logo-icon {
      width: 36px;
      height: 36px;
      background: linear-gradient(135deg, var(--color-primary-500), var(--color-primary-700));
      border-radius: var(--border-radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: var(--font-weight-bold);
      font-size: var(--font-size-lg);
    }

    .logo-text {
      display: flex;
      flex-direction: column;
    }

    .logo-name {
      font-family: var(--font-family-heading);
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-bold);
      color: var(--color-primary-600);
      line-height: 1.1;
    }

    .logo-tagline {
      font-size: var(--font-size-xs);
      color: var(--color-gray-500);
      font-weight: var(--font-weight-medium);
    }

    .nav-desktop {
      display: none;
    }

    @media (min-width: 768px) {
      .nav-desktop {
        display: flex;
        align-items: center;
        gap: var(--space-6);
      }

      .nav-desktop a {
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
        color: var(--color-gray-700);
        text-decoration: none;
        transition: color var(--transition-fast);
        padding-block: var(--space-1);
      }

      .nav-desktop a:hover,
      .nav-desktop a[aria-current="page"] {
        color: var(--color-primary-600);
        text-decoration: none;
      }
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: var(--space-2);
    }

    .icon-btn {
      width: 40px;
      height: 40px;
      border-radius: var(--border-radius-full);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-gray-700);
      transition: background var(--transition-fast);
      cursor: pointer;
      border: none;
      background: none;
    }

    .icon-btn:hover {
      background: var(--color-gray-100);
    }

    .icon-btn svg {
      width: 22px;
      height: 22px;
    }

    .cart-badge {
      position: relative;
    }

    .cart-badge::after {
      content: attr(data-count);
      position: absolute;
      top: 2px;
      right: 2px;
      width: 18px;
      height: 18px;
      background: var(--color-secondary-500);
      color: var(--color-gray-900);
      font-size: 10px;
      font-weight: var(--font-weight-bold);
      border-radius: var(--border-radius-full);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  @property({ type: Number }) cartCount = 0;

  render() {
    return html`
      <header role="banner">
        <a href="/" class="logo" aria-label="Óticas Coelho — Página inicial">
          <div class="logo-icon" aria-hidden="true">Ó</div>
          <div class="logo-text">
            <span class="logo-name">Óticas Coelho</span>
            <span class="logo-tagline">Veja o mundo com estilo</span>
          </div>
        </a>

        <nav class="nav-desktop" aria-label="Navegação principal">
          <a href="/" aria-current="page">Início</a>
          <a href="/produtos">Produtos</a>
          <a href="/sobre">Sobre</a>
          <a href="/contato">Contato</a>
        </nav>

        <div class="header-actions">
          <button class="icon-btn" aria-label="Buscar" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
          <button class="icon-btn cart-badge" aria-label="Carrinho de compras" data-count="${this.cartCount}" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </button>
          <button class="icon-btn" aria-label="Menu" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-header': AppHeader;
  }
}
