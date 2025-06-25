import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SpeedInsights } from '@vercel/speed-insights/react';

const App = () => (
  <>
    <h1>Welcome to TeleApp!</h1>
    <SpeedInsights />
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
