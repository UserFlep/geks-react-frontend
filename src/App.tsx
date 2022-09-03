import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from './components/AppRouter';
import {StoreProvider} from "./context";


function App() {

  return (
      <StoreProvider>
          <BrowserRouter>
              {/*<AppNavbar/>*/}
              <AppRouter/>
          </BrowserRouter>
      </StoreProvider>
  );
}

export default App;
