import siteConfig from '../site.config';
import { setMeta } from '../utils/meta';

export default function NotFound(): HTMLElement {
    setMeta({
        title: `404 - Page Not Found | ${siteConfig.titlePrefix}`,
        description: `Sorry, the page you are looking for does not exist on ${siteConfig.domain}.`,
        keywords: `404, Page Not Found, ${siteConfig.titlePrefix}`,
        image: `${siteConfig.baseUrl}/images/og-404.png`,
        url: `${siteConfig.baseUrl}/404`
    });

    const div = document.createElement('div');
    div.innerHTML = `
        <h2 class="text-red-600 text-3xl font-bold">404 — Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
    `;
    return div;
}
