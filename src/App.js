import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "./assets/themes";
import Dictionary from "./components/Dictionary";
import Nav from "./components/Nav";
import Search from "./components/Search";
import { selectTheme } from "./store/settings/settings-selectors";
// import * as darkTheme from './dark-theme.css'
// import lightTheme from './light-theme.css'

function App() {
  const theme = useSelector(selectTheme);
  
  const appStyles = {
    backgroundColor: theme && '#050505',
    minHeight: '100vh'   
  }

  return (
    <div className="App" style={appStyles}>
      <div className="app_wrapper">
        <Nav></Nav>
        <Search></Search>
        <Dictionary></Dictionary>
      </div>
      <style>{theme ? darkTheme : lightTheme}</style>
    </div>
  );
}

export default App;
