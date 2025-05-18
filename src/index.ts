import './styles/global.css';
import Navbar from './components/navbar.ts';

const app = document.querySelector<HTMLDivElement>('#app')!;
app.appendChild(Navbar());
