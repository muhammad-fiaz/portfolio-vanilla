import Layout from "../layout.ts";
import {routes} from "../routes.ts";

export default async function router() {
    const app = document.querySelector<HTMLDivElement>('#app')!;
    app.innerHTML = '';

    let match = routes.find(r => r.path === window.location.pathname);

    // If no exact match, use 404 route (path === '*')
    if (!match) {
        match = routes.find(r => r.path === '*')!;
    }

    const page = await match.view();

    // Layout only if not 404
    const content = match.path === '*' ? page : Layout(page);

    app.appendChild(content);
}

export function navigateTo(url: string) {
    window.history.pushState(null, '', url);
    router();
}
