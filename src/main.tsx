import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil';
import App from './App'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </React.StrictMode>
  </BrowserRouter>,
)
