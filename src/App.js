import { ThemeProvider } from '@mui/material';

import NavBar from './components/NavBar';
import theme from './themes/theme';

import HomeContent from './component/HomeContent';
import Footer from './component/Footer';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <HomeContent/>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;