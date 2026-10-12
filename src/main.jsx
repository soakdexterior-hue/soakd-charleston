import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import dedupeHeadTags from '@/lib/dedupeHeadTags'
import '@/index.css'

dedupeHeadTags()

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
