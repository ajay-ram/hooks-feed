import './App.css';
import {ThemeProvider} from '@material-ui/core';
import FeedsPage from './pages/FeedsPage';
import theme from './theme';
function App() {

  return (
     <ThemeProvider theme={theme}>
       <div className = "container" style={{ width: '50rem' }}>
      <FeedsPage/>
    </div>
     </ThemeProvider>
  );
}

export default App;
