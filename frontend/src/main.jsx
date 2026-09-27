import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TodoProvider } from './TodoContext.jsx'
import { ThemeProvider } from './themeContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContext.jsx'
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <UserProvider>
      <TodoProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </TodoProvider>
    </UserProvider>
  </StrictMode>,
)
