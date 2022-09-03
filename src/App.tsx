import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
// import AppNavbar from "./components/AppNavbar";
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';
import  AuthStore from './stores/authStore';


function App() {

  return (
      <AuthContext.Provider value={{
          authStore: AuthStore
      }}>
          <BrowserRouter>
              {/*<AppNavbar/>*/}
              <AppRouter/>
          </BrowserRouter>
      </AuthContext.Provider>
  );
}

export default App;
