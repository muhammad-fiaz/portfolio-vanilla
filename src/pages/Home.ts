import { setMeta } from '../utils/meta';
import siteConfig from '../site.config';

export default function Home(): HTMLElement {
    setMeta({
        title: `${siteConfig.titlePrefix}`,
        description: siteConfig.metadata.description,
        keywords: siteConfig.metadata.keywords,
        image: siteConfig.profile_image,
        url: siteConfig.baseUrl + '/',
    });

    const div = document.createElement('div');
    div.innerHTML = `<h1>Home Page</h1>`;
    return div;
}
