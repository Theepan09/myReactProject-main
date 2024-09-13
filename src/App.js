import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import About from './Component/About';
import Sidepanel from './Component/Sidepanel';
import Portfolio from './Component/Portfolio';
import Services from './Component/Services';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Hero from './Component/Hero';
import AOS from "aos";
import "aos/dist/aos.css";



function App() {

  React.useEffect(() => {
      let scripts = [
        { src: "assets/vendor/bootstrap/js/bootstrap.bundle.min.js" },
        { src: "assets/vendor/typed.js/typed.umd.js" },
        { src: " assets/vendor/purecounter/purecounter_vanilla.js" },
        { src: "assets/vendor/glightbox/js/glightbox.min.js" },
        { src: "assets/vendor/waypoints/noframework.waypoints.js" },
        { src: "assets/vendor/imagesloaded/imagesloaded.pkgd.min.js" },
        { src: "assets/vendor/isotope-layout/isotope.pkgd.min.js" },
        { src: "assets/vendor/swiper/swiper-bundle.min.js" },
        { src: "assets/js/main.js" }
      ]

     

    const LoadExternalScript = () => {
      
      scripts.map(item => {
        const script = document.createElement("script")
        script.id = "external"
        script.src = item.src
        script.async = true
        script.defer = false
        script.type =  "text/javascript"
        document.body.appendChild(script)
      })     
      
      // const externalScript = document.createElement("script");
      // externalScript.id = "external";
      // externalScript.async = true;
      // externalScript.type = "text/javascript";
      // externalScript.setAttribute("crossorigin", "anonymous");
      // document.body.appendChild(externalScript);
      // externalScript.src = 'assets/js/main.js';
    };

    LoadExternalScript();
    return () => {
    };
  }, []);


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      {/* <Header /> */}
      <Sidepanel />

      <main className="main">
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Contact />
        <Footer/>
      </main>
    </div>
  );
}

export default App;
