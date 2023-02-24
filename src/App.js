import { useSelector } from "react-redux";
import Nav from "./components/Nav";
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
    </div>
  );
}

export default App;
