import { useSelector } from "react-redux";
import Dictionary from "./components/Dictionary";
import Nav from "./components/Nav";
import Search from "./components/Search";
import { selectTheme } from "./store/settings/settings-selectors";

function App() {

  const theme = useSelector(selectTheme);

  const appStyles = {
    backgroundColor: theme && '#050505',
    minHeight: '100vh'   
  }

  return (
    <div className="App" style={appStyles}>
      <Nav></Nav>
      <Search></Search>
      <Dictionary></Dictionary>
    </div>
  );
}

export default App;
