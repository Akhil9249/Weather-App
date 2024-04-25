import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
import { WeatherProvider } from './context/WeatherContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <WeatherProvider>
        <App />
    </WeatherProvider>
    
)