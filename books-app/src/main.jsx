import { createRoot } from 'react-dom/client';
import './app.css'
import App from './App'

//step#2 add the react to your browser
let root = document.getElementById('root');
createRoot(root).render(<App />);