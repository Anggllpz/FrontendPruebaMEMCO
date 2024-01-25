// App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Routes';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* ... Contenido existente ... */}
        </header>
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
