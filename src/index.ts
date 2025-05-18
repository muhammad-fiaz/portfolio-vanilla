import './styles/global.css';
import router, { navigateTo } from "./utils/router.ts";

// Delegate navigation links to the router
document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.matches('[data-link]')) {
        e.preventDefault();
        navigateTo(target.getAttribute('href')!);
    }
});

router(); // Initial render
window.addEventListener("popstate", router); // Handle back/forward navigation