import './App.css';
import {ThemeProvider} from '@material-ui/core';
import FeedsPage from './pages/FeedsPage';
import theme from './theme';
import Typography from './components/atoms/Typography/Typography';
function App() {

  return (
     <ThemeProvider theme={theme}>
      <div className = "container" style={{ width: '50rem' }}>
      <div style = {{marginLeft:"30%"}}>
        <Typography variant = "h2" body = "Feeds List"/>
      </div>
      <FeedsPage/>
    </div>
     </ThemeProvider>
  );
}

export default App;
