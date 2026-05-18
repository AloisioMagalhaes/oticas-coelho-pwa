import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-footer')
export class AppFooter extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: var(--color-gray-900);
      color: var(--color-gray-300);
    }

    .footer {
      max-width: var(--container-xl);
      margin-inline: auto;
      padding: var(--space-12) var(--space-4);
    }

    @media (min-width: 768px) {
      .footer {
        padding: var(--space-16) var(--space-8);
      }
    }

    .footer-grid {
      display: grid;
      gap: var(--space-8);
      margin-bottom: var(--space-8);
    }

    @media (min-width: 768px) {
      .footer-grid {
        grid-template-columns: 2fr 1fr 1fr 1fr;
        gap: var(--space-12);
      }
    }

    .footer-brand {
      max-width: 300px;
    }

    .footer-logo {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      margin-bottom: var(--space-4);
    }

    .footer-logo-icon {
      width: 32px;
      height: 32px;
      background: linear-gradient(135deg, var(--color-primary-500), var(--color-primary-700));
      border-radius: var(--border-radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: var(--font-weight-bold);
      font-size: var(--font-size-md);
    }

    .footer-logo-text {
      font-family: var(--font-family-heading);
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-bold);
      color: var(--color-gray-0);
    }

    .footer-description {
      font-size: var(--font-size-sm);
      line-height: var(--line-height-relaxed);
      color: var(--color-gray-400);
      margin-bottom: var(--space-4);
    }

    .footer-social {
      display: flex;
      gap: var(--space-3);
    }

    .social-link {
      width: 36px;
      height: 36px;
      border-radius: var(--border-radius-full);
      background: var(--color-gray-800);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-gray-400);
      transition: all var(--transition-fast);
      text-decoration: none;
    }

    .social-link:hover {
      background: var(--color-primary-600);
      color: var(--color-gray-0);
      text-decoration: none;
    }

    .social-link svg {
      width: 18px;
      height: 18px;
    }

    .footer-column h3 {
      font-family: var(--font-family-heading);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-semibold);
      color: var(--color-gray-0);
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide);
      margin-bottom: var(--space-4);
    }

    .footer-links {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
    }

    .footer-links a {
      font-size: var(--font-size-sm);
      color: var(--color-gray-400);
      text-decoration: none;
      transition: color var(--transition-fast);
    }

    .footer-links a:hover {
      color: var(--color-secondary-400);
      text-decoration: none;
    }

    .footer-contact-item {
      display: flex;
      align-items: flex-start;
      gap: var(--space-2);
      font-size: var(--font-size-sm);
      color: var(--color-gray-400);
      margin-bottom: var(--space-2);
    }

    .footer-contact-item svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      margin-top: 2px;
      color: var(--color-primary-400);
    }

    .footer-bottom {
      padding-top: var(--space-6);
      border-top: 1px solid var(--color-gray-800);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-2);
      text-align: center;
    }

    @media (min-width: 768px) {
      .footer-bottom {
        flex-direction: row;
        justify-content: space-between;
      }
    }

    .footer-copyright {
      font-size: var(--font-size-xs);
      color: var(--color-gray-500);
    }

    .footer-legal {
      display: flex;
      gap: var(--space-4);
    }

    .footer-legal a {
      font-size: var(--font-size-xs);
      color: var(--color-gray-500);
      text-decoration: none;
    }

    .footer-legal a:hover {
      color: var(--color-gray-300);
    }
  `;

  render() {
    return html`
      <footer class="footer" role="contentinfo">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">
              <div class="footer-logo-icon" aria-hidden="true">Ó</div>
              <span class="footer-logo-text">Óticas Coelho</span>
            </div>
            <p class="footer-description">
              20 anos trazendo visão e estilo para você. Óculos de grau, de sol e avaliação visual com qualidade e preço justo.
            </p>
            <div class="footer-social" aria-label="Redes sociais">
              <a href="https://www.instagram.com/oticascoelhooficial" class="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/oticascoelhooficial" class="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://wa.me/5594000000000" class="social-link" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="footer-column">
            <h3>Navegação</h3>
            <nav class="footer-links" aria-label="Links do rodapé">
              <a href="/">Início</a>
              <a href="/produtos">Produtos</a>
              <a href="/sobre">Sobre Nós</a>
              <a href="/contato">Contato</a>
            </nav>
          </div>

          <div class="footer-column">
            <h3>Categorias</h3>
            <nav class="footer-links" aria-label="Categorias de produtos">
              <a href="/produtos">Armações</a>
              <a href="/produtos">Óculos de Sol</a>
              <a href="/produtos">Lentes de Contato</a>
              <a href="/produtos">Acessórios</a>
            </nav>
          </div>

          <div class="footer-column">
            <h3>Contato</h3>
            <div class="footer-contact">
              <div class="footer-contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span>Tailândia - PA<br>Goianésia - TO<br>Breu Branco, Jacundá, Tucuruí</span>
              </div>
              <div class="footer-contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <span>(94) XXXX-XXXX</span>
              </div>
              <div class="footer-contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                <span>Seg - Sáb: 8h às 18h</span>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p class="footer-copyright">© ${new Date().getFullYear()} Óticas Coelho. Todos os direitos reservados.</p>
          <div class="footer-legal">
            <a href="/privacidade">Política de Privacidade</a>
            <a href="/termos">Termos de Uso</a>
          </div>
        </div>
      </footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-footer': AppFooter;
  }
}
