export default function Navbar(): HTMLElement {
    const nav = document.createElement('nav');
    nav.className = 'bg-white shadow-md sticky top-0 z-50';

    nav.innerHTML = `
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <div class="text-xl font-bold text-blue-600">Muhammad Fiaz</div>
        <ul class="flex space-x-6 text-gray-700 font-medium">
          <li><a href="#about" class="hover:text-blue-600 transition-colors">About</a></li>
          <li><a href="#projects" class="hover:text-blue-600 transition-colors">Projects</a></li>
          <li><a href="#contact" class="hover:text-blue-600 transition-colors">Contact</a></li>
        </ul>
      </div>
    </div>
  `;

    return nav;
}
