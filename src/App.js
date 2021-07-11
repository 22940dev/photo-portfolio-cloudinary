import './App.css';

//Stylesheets
import "./stylesheets/lightbox.css";

//Components
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
