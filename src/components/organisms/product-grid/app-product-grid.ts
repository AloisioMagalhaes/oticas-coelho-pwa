import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  rating: number;
  reviews: number;
}

const PRODUCTS: Product[] = [
  {
    id: '1', name: 'Armação Aviador Clássico', category: 'Armações',
    price: 149.90, originalPrice: 199.90, image: '',
    badge: '-25%', rating: 4.8, reviews: 124
  },
  {
    id: '2', name: 'Óculos de Sol Polarizado', category: 'Óculos de Sol',
    price: 189.90, image: '',
    badge: 'Novo', rating: 4.9, reviews: 89
  },
  {
    id: '3', name: 'Armação Redonda Vintage', category: 'Armações',
    price: 129.90, originalPrice: 169.90, image: '',
    badge: '-24%', rating: 4.7, reviews: 67
  },
  {
    id: '4', name: 'Lente Anti-Reflexo Premium', category: 'Lentes',
    price: 299.90, image: '',
    rating: 4.9, reviews: 203
  },
  {
    id: '5', name: 'Armação Retangular Moderna', category: 'Armações',
    price: 169.90, image: '',
    badge: 'Mais Vendido', rating: 4.8, reviews: 156
  },
  {
    id: '6', name: 'Óculos de Grau Infantil', category: 'Infantil',
    price: 99.90, originalPrice: 139.90, image: '',
    badge: '-29%', rating: 4.6, reviews: 45
  },
];

const CATEGORIES = ['Todos', 'Armações', 'Óculos de Sol', 'Lentes', 'Infantil'];

@customElement('app-product-grid')
export class AppProductGrid extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: var(--color-gray-50);
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

    .categories {
      display: flex;
      gap: var(--space-2);
      overflow-x: auto;
      padding-block: var(--space-2);
      margin-bottom: var(--space-6);
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }

    .categories::-webkit-scrollbar {
      display: none;
    }

    .category-btn {
      flex-shrink: 0;
      padding: var(--space-2) var(--space-4);
      border-radius: var(--border-radius-full);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      border: 2px solid var(--color-gray-200);
      background: var(--color-gray-0);
      color: var(--color-gray-700);
      cursor: pointer;
      transition: all var(--transition-fast);
    }

    .category-btn:hover {
      border-color: var(--color-primary-300);
      color: var(--color-primary-600);
    }

    .category-btn[aria-selected="true"] {
      background: var(--color-primary-600);
      border-color: var(--color-primary-600);
      color: var(--color-gray-0);
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-4);
    }

    @media (min-width: 768px) {
      .products-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-6);
      }
    }

    @media (min-width: 1024px) {
      .products-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    .product-card {
      background: var(--color-gray-0);
      border-radius: var(--border-radius-xl);
      overflow: hidden;
      box-shadow: var(--shadow-sm);
      transition: all var(--transition-base);
      cursor: pointer;
      position: relative;
    }

    .product-card:hover {
      box-shadow: var(--shadow-lg);
      transform: translateY(-4px);
    }

    .product-image {
      aspect-ratio: 1;
      background: linear-gradient(135deg, var(--color-gray-100), var(--color-gray-200));
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .product-image svg {
      width: 64px;
      height: 64px;
      color: var(--color-gray-400);
    }

    .product-badge {
      position: absolute;
      top: var(--space-2);
      left: var(--space-2);
      padding: var(--space-1) var(--space-2);
      border-radius: var(--border-radius-sm);
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-bold);
    }

    .product-badge--discount {
      background: var(--color-error-500);
      color: var(--color-gray-0);
    }

    .product-badge--new {
      background: var(--color-success-500);
      color: var(--color-gray-0);
    }

    .product-badge--bestseller {
      background: var(--color-secondary-500);
      color: var(--color-gray-900);
    }

    .product-info {
      padding: var(--space-3);
    }

    .product-category {
      font-size: var(--font-size-xs);
      color: var(--color-gray-500);
      font-weight: var(--font-weight-medium);
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide);
    }

    .product-name {
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-semibold);
      color: var(--color-gray-900);
      margin-block: var(--space-1);
      line-height: var(--line-height-heading);
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    @media (min-width: 768px) {
      .product-name {
        font-size: var(--font-size-base);
      }
    }

    .product-rating {
      display: flex;
      align-items: center;
      gap: var(--space-1);
      margin-bottom: var(--space-2);
    }

    .stars {
      color: var(--color-secondary-500);
      font-size: var(--font-size-xs);
    }

    .rating-count {
      font-size: var(--font-size-xs);
      color: var(--color-gray-500);
    }

    .product-price {
      display: flex;
      align-items: baseline;
      gap: var(--space-2);
    }

    .price-current {
      font-size: var(--font-size-md);
      font-weight: var(--font-weight-bold);
      color: var(--color-primary-600);
    }

    @media (min-width: 768px) {
      .price-current {
        font-size: var(--font-size-lg);
      }
    }

    .price-original {
      font-size: var(--font-size-xs);
      color: var(--color-gray-400);
      text-decoration: line-through;
    }

    .price-installment {
      font-size: var(--font-size-xs);
      color: var(--color-gray-600);
      margin-top: var(--space-1);
    }

    .product-actions {
      padding: var(--space-3);
      padding-top: 0;
    }

    .btn-add-cart {
      width: 100%;
      padding: var(--space-2);
      background: var(--color-primary-600);
      color: var(--color-gray-0);
      border: none;
      border-radius: var(--border-radius-md);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-semibold);
      cursor: pointer;
      transition: all var(--transition-fast);
    }

    .btn-add-cart:hover {
      background: var(--color-primary-700);
    }

    .btn-add-cart:focus-visible {
      outline: 3px solid var(--color-primary-300);
      outline-offset: 2px;
    }
  `;

  @state() private activeCategory = 'Todos';
  @state() private products = PRODUCTS;

  get filteredProducts() {
    if (this.activeCategory === 'Todos') return this.products;
    return this.products.filter(p => p.category === this.activeCategory);
  }

  private formatPrice(price: number): string {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  private getInstallment(price: number): string {
    const installment = price / 3;
    return `ou 3x de ${this.formatPrice(installment)}`;
  }

  private handleCategoryClick(category: string) {
    this.activeCategory = category;
  }

  private handleAddToCart(productId: string) {
    this.dispatchEvent(new CustomEvent('add-to-cart', {
      detail: { productId },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    return html`
      <section class="section" aria-label="Produtos">
        <div class="section-header">
          <h2 class="section-title">Nossos Produtos</h2>
          <p class="section-subtitle">Encontre o óculos perfeito para você</p>
        </div>

        <div class="categories" role="tablist" aria-label="Filtrar por categoria">
          ${CATEGORIES.map(cat => html`
            <button
              class="category-btn"
              role="tab"
              aria-selected=${this.activeCategory === cat}
              @click=${() => this.handleCategoryClick(cat)}
              type="button"
            >
              ${cat}
            </button>
          `)}
        </div>

        <div class="products-grid" role="tabpanel">
          ${this.filteredProducts.map(product => html`
            <article class="product-card" aria-label="${product.name}">
              <div class="product-image">
                ${product.badge ? html`
                  <span class="product-badge product-badge--${
                    product.badge.includes('%') ? 'discount' :
                    product.badge === 'Novo' ? 'new' : 'bestseller'
                  }">${product.badge}</span>
                ` : ''}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating" aria-label="Avaliação: ${product.rating} de 5">
                  <span class="stars" aria-hidden="true">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                  <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-price">
                  <span class="price-current">${this.formatPrice(product.price)}</span>
                  ${product.originalPrice ? html`
                    <span class="price-original">${this.formatPrice(product.originalPrice)}</span>
                  ` : ''}
                </div>
                <p class="price-installment">${this.getInstallment(product.price)}</p>
              </div>
              <div class="product-actions">
                <button
                  class="btn-add-cart"
                  @click=${() => this.handleAddToCart(product.id)}
                  aria-label="Adicionar ${product.name} ao carrinho"
                  type="button"
                >
                  Adicionar
                </button>
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
    'app-product-grid': AppProductGrid;
  }
}
