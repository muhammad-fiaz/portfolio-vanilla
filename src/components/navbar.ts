import router from '../utils/router';
import siteConfig from '../site.config';

export default function Navbar(): HTMLElement {
    const nav = document.createElement('nav');
    nav.className = 'bg-white shadow-md sticky top-0 z-50 transition-all duration-300';

    // Navigation links HTML
    const navLinksHtml = siteConfig.navLinks.map(link =>
        `<li><a href="${link.href}" class="nav-link">${link.label}</a></li>`
    ).join('');

    // Mobile navigation links HTML
    const mobileNavLinksHtml = siteConfig.navLinks.map(link =>
        `<li><a href="${link.href}" class="block px-2 nav-link">${link.label}</a></li>`
    ).join('');

    nav.innerHTML = `
    <div class="max-w-6xl mx-auto px-2 md:px-4 relative">
      <div class="flex justify-between items-center py-4 relative z-20">
        <div class="text-2xl font-bold text-blue-600">${siteConfig.author}</div>

        <ul id="nav-links" class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 text-gray-700 font-medium">
          ${navLinksHtml}
        </ul>

        <div class="hidden md:block">
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-md font-medium transition">
            ${siteConfig.signIn.text}
          </button>
        </div>

        <div class="md:hidden flex items-center space-x-4 absolute right-2 top-4 z-30">
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-md font-medium transition">
            ${siteConfig.signIn.text}
          </button>
          <button class="text-gray-700 focus:outline-none" id="menu-toggle" aria-label="Toggle Menu" aria-expanded="false">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <div id="mobile-nav" class="md:hidden absolute left-0 right-0 top-full bg-white shadow-lg overflow-hidden transition-all duration-300 max-h-0 z-10">
        <ul class="flex flex-col items-center space-y-2 py-4 text-gray-700 font-medium">
          ${mobileNavLinksHtml}
        </ul>
      </div>
    </div>
    `;

    // Setup event listeners after innerHTML set
    const toggle = nav.querySelector('#menu-toggle') as HTMLButtonElement | null;
    const mobileNav = nav.querySelector('#mobile-nav') as HTMLDivElement | null;

    let isOpen = false;
    toggle?.addEventListener('click', () => {
        isOpen = !isOpen;
        if (mobileNav) {
            mobileNav.style.maxHeight = isOpen ? mobileNav.scrollHeight + 'px' : '0';
        }
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    const links = nav.querySelectorAll('.nav-link');
    links.forEach(link => {
        (link as HTMLAnchorElement).classList.add(
            'hover:text-blue-600',
            'transition-colors',
            'relative',
            'after:content-[""]',
            'after:absolute',
            'after:left-0',
            'after:-bottom-1',
            'after:h-[2px]',
            'after:w-0',
            'after:bg-blue-600',
            'after:transition-all',
            'after:duration-300',
            'hover:after:w-full'
        );
        // SPA navigation: intercept click events
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = (link as HTMLAnchorElement).getAttribute('href');
            if (href) {
                // Change browser URL and trigger your router
                history.pushState({}, '', href);
                router();
                // Optionally, close mobile nav on navigation
                if (mobileNav) {
                    mobileNav.style.maxHeight = '0';
                    isOpen = false;
                    toggle?.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    return nav;
}