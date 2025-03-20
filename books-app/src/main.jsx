import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
//now import your custom css
import './app.css'
import App from './App'

//step#2 add the react to your browser
let root = document.getElementById('root');
createRoot(root).render(<App />);