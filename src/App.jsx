import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Catalogue from "./components/pages/CATALOGUE";
import Fashion from "./components/pages/Fashion";
import Favourite from "./components/pages/Favourite";
import Home from "./components/pages/Home";
function App() {
  return (
    <>
      <Header />
      <Home />
      <Catalogue />
      <Fashion />
      <Favourite />
      <Footer />
    </>
  );
}

export default App;
