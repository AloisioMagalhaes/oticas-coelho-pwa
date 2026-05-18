/**
 * Óticas Coelho — PWA Entry Point
 * 
 * Web Components + Lit + Vite + PWA
 */

// Import design tokens
import '@/design-tokens/base.css';

// Import global styles
import '@/styles/global.css';

// Import components
import '@/components/organisms/header/app-header';
import '@/components/organisms/hero-banner/app-hero-banner';
import '@/components/organisms/product-grid/app-product-grid';
import '@/components/organisms/testimonials/app-testimonials';
import '@/components/organisms/footer/app-footer';
import '@/components/organisms/footer/app-bottom-nav';

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('async', async () => {
    try {
      const { Workbox } = await import('workbox-window');
      const wb = new Workbox('/sw.js');
      await wb.register();
      console.log('[PWA] Service Worker registered');
    } catch (error) {
      console.error('[PWA] Service Worker registration failed:', error);
    }
  });
}

// Cart state management (simple)
let cartCount = 0;
const header = document.querySelector('app-header');
const productGrid = document.querySelector('app-product-grid');

if (productGrid) {
  productGrid.addEventListener('add-to-cart', ((e: CustomEvent) => {
    cartCount++;
    if (header) {
      (header as any).cartCount = cartCount;
    }
    // Show toast notification
    showToast('Produto adicionado ao carrinho!');
  }) as EventListener);
}

function showToast(message: string) {
  const existing = document.querySelector('.toast-notification');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--color-gray-900);
    color: var(--color-gray-0);
    padding: var(--space-3) var(--space-6);
    border-radius: var(--border-radius-full);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    box-shadow: var(--shadow-lg);
    z-index: var(--z-toast);
    animation: slideUp 0.3s ease forwards;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// Smooth scroll for anchor links
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const anchor = target.closest('a[href^="#"]');
  if (anchor) {
    e.preventDefault();
    const id = anchor.getAttribute('href')?.slice(1);
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        el.focus();
      }
    }
  }
});

console.log('🕶️ Óticas Coelho PWA loaded');
