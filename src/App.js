import './App.css';

//Stylesheets
import "./stylesheets/lightbox.css";

//Components
import Header from "./components/Header";
import Body from "./components/MainGallery";
import Footer from "./components/Footer";

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
