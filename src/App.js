import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Form from './Components/Form/Form';
import ContextApiProvider from './Context/useApi';

function App() {
  return (
    <div>
      <ContextApiProvider>
        <Navbar />
        <Form />
      </ContextApiProvider>
    </div>
  );
}

export default App;





