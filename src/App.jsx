import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS bhi import karo
import NavBar from './assets/Components/NavBar';
import Banner from './assets/Components/Banner';
import Skills from './assets/Components/Skills';
import Projects from './assets/Components/Project';
import Contact from './assets/Components/Contact';
import Footer from './assets/Components/Footer';




function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
