import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

const TESTIMONIALS = [
  {
    name: 'Maria Silva',
    location: 'Tailândia - PA',
    text: 'Atendimento excelente! Fiz meu exame de vista e escolhi uma armação linda. Preço justo e qualidade top.',
    rating: 5,
    avatar: 'MS'
  },
  {
    name: 'João Santos',
    location: 'Tucuruí - PA',
    text: 'Comprei óculos de sol polarizado e estou muito satisfeito. Entrega rápida e ótima qualidade.',
    rating: 5,
    avatar: 'JS'
  },
  {
    name: 'Ana Oliveira',
    location: 'Goianésia - TO',
    text: 'A Óticas Coelho é referência na região! Sempre que preciso de óculos de grau, é lá que compro.',
    rating: 5,
    avatar: 'AO'
  },
];

@customElement('app-testimonials')
export class AppTestimonials extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: var(--color-gray-0);
    }

    .section {
      padding-block: var(--space-12);
      max-width: var(--container-xl);
      margin-inline: auto;
      padding-inline: var(--space-4);
    }

    @media (min-width: 768px) {
      .section {
        padding-block: var(--space-16);
        padding-inline: var(--space-8);
      }
    }

    .section-header {
      text-align: center;
      margin-bottom: var(--space-8);
    }

    .section-title {
      font-family: var(--font-family-heading);
      font-size: var(--font-size-2xl);
      font-weight: var(--font-weight-bold);
      color: var(--color-gray-900);
      margin-bottom: var(--space-2);
    }

    @media (min-width: 768px) {
      .section-title {
        font-size: var(--font-size-3xl);
      }
    }

    .section-subtitle {
      font-size: var(--font-size-base);
      color: var(--color-gray-600);
    }

    .testimonials-grid {
      display: grid;
      gap: var(--space-4);
    }

    @media (min-width: 768px) {
      .testimonials-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-6);
      }
    }

    .testimonial-card {
      background: var(--color-gray-50);
      border-radius: var(--border-radius-xl);
      padding: var(--space-6);
      border: 1px solid var(--color-gray-200);
      transition: all var(--transition-base);
    }

    .testimonial-card:hover {
      box-shadow: var(--shadow-md);
      border-color: var(--color-primary-200);
    }

    .stars {
      color: var(--color-secondary-500);
      font-size: var(--font-size-md);
      margin-bottom: var(--space-3);
    }

    .testimonial-text {
      font-size: var(--font-size-sm);
      line-height: var(--line-height-relaxed);
      color: var(--color-gray-700);
      margin-bottom: var(--space-4);
      font-style: italic;
    }

    .testimonial-author {
      display: flex;
      align-items: center;
      gap: var(--space-3);
    }

    .author-avatar {
      width: 40px;
      height: 40px;
      border-radius: var(--border-radius-full);
      background: linear-gradient(135deg, var(--color-primary-500), var(--color-primary-700));
      color: var(--color-gray-0);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: var(--font-weight-bold);
      font-size: var(--font-size-sm);
    }

    .author-info {
      display: flex;
      flex-direction: column;
    }

    .author-name {
      font-weight: var(--font-weight-semibold);
      font-size: var(--font-size-sm);
      color: var(--color-gray-900);
    }

    .author-location {
      font-size: var(--font-size-xs);
      color: var(--color-gray-500);
    }
  `;

  render() {
    return html`
      <section class="section" aria-label="Depoimentos de clientes">
        <div class="section-header">
          <h2 class="section-title">O que nossos clientes dizem</h2>
          <p class="section-subtitle">A satisfação de quem confia na Óticas Coelho há 20 anos</p>
        </div>

        <div class="testimonials-grid">
          ${TESTIMONIALS.map(t => html`
            <article class="testimonial-card">
              <div class="stars" aria-label="${t.rating} de 5 estrelas" role="img">
                ${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}
              </div>
              <p class="testimonial-text">"${t.text}"</p>
              <div class="testimonial-author">
                <div class="author-avatar" aria-hidden="true">${t.avatar}</div>
                <div class="author-info">
                  <span class="author-name">${t.name}</span>
                  <span class="author-location">${t.location}</span>
                </div>
              </div>
            </article>
          `)}
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-testimonials': AppTestimonials;
  }
}
