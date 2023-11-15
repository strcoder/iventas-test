import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './routes/App.tsx';
import './styles/index.css';

const root = document.getElementById('root');
const app = ReactDOM.createRoot(root!);

app.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
