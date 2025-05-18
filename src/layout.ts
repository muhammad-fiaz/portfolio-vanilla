import Navbar from './components/navbar.ts';

export default function Layout(content: HTMLElement): HTMLElement {
    const container = document.createElement('div');
    container.id = "layout";

    // Add Navbar (common for all main pages)
    container.appendChild(Navbar());

    // Add main content area
    const main = document.createElement('main');
    main.id = "main-content";
    main.appendChild(content);
    container.appendChild(main);

    return container;
}