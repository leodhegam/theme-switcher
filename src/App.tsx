import React from 'react';
import GlobalStyles from './styles/global'
import Header from './components/Header/index'
import usePersistedStade from './utils/usePersistedState'
import {ThemeProvider,DefaultTheme} from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
const App = () => {

 const [theme,setTheme] = usePersistedStade<DefaultTheme>('theme',light);

 const toggleTheme = () => {
   setTheme(theme.title === 'light' ? dark : light);
 };

  return (
    <ThemeProvider theme={theme}>

    <div className="App">
      <GlobalStyles/>
      <Header toggleTheme={toggleTheme}/>
    </div>

    </ThemeProvider>
  );
}

export default App;
