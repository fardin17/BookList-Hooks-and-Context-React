import React from 'react';
import './App.css';
import Booklist from "./components/Booklist";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./contexts/ThemeContext";
import ToggleTheme from "./components/ToggleTheme";
import AuthContextProvider from "./contexts/AuthContext";
function App() {
  return (

      <div className='App'>
          <AuthContextProvider>
              <ThemeContextProvider>
                  <Navbar/>
                  <Booklist/>
                  <ToggleTheme/>
              </ThemeContextProvider>
          </AuthContextProvider>
      </div>


  );
}

export default App;
