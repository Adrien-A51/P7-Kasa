/* eslint-disable no-sequences */
import {Routes, Route } from "react-router-dom";

// Banner
import Banner from "./components/Banner/Banner";
// Page d'accueil
import Home from './pages/Home/Home';
// Page Apropos
import Apropos from "./pages/Apropos/Apropos";
// Page Logement
import Logement from "./pages/Logements/Logement"
// Erreur 404
import Error from "./components/Error/Error";
// Footer
import Footer from './components/Footer/Footer';



function App() {
  return (
<div className="App">
  <Banner/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/logement/:id" element={<Logement />} />
    <Route path="/Apropos" element={<Apropos />} />
    <Route path="*" element={<Error />} />
  </Routes>
<Footer/>
</div>
  );
}
export default App;
