import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="highlights">
        <h2>Event Highlights</h2>
        <div className="grid">
          <div className="card">
            <img src={require("./assets/celebrity.jpg")} alt="Celebrity Guests" />
            <h3>👑 Celebrity Guests</h3>
            <p>Glamour on the red carpet with global fashion icons.</p>
          </div>
          <div className="card">
            <img src={require("./assets/designer.jpg")} alt="Designer Showcases" />
            <h3>🎨 Designer Showcases</h3>
            <p>Witness exclusive collections by top-tier designers.</p>
          </div>
          <div className="card">
            <img src={require("./assets/culture.jpg")} alt="Cultural Fusion" />
            <h3>🌍 Cultural Fusion</h3>
            <p>A celebration of traditional styles with modern flair.</p>
          </div>
          <div className="card">
            <img src={require("./assets/beauty.jpg")} alt="Beauty & Beyond" />
            <h3>💄 Beauty & Beyond</h3>
            <p>Pageantry, styling labs, and backstage brilliance.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6 text-sm w-full mt-auto">
  <div className="max-w-screen-xl mx-auto space-y-6">

    {/* Contact + Address */}
    <div className="text-center hero1 ">
      <p className="text-base"> © 2025 Fashion World. All rights reserved.</p>
      <p className="mt-2 flex flex-wrap justify-center items-center gap-6">
        <span>📍 Jumeirah, Dubai</span> | 
        <span>📞 +91 8123456789</span> | 
        <span>✉️ <a href="mailto:fashionworld@gmail.com" className="underline text-gray-400 hover:text-blue-300">fashionworld@gmail.com</a></span>
      </p>
    </div>

    {/* Social Icons Centered */}


  </div>
</footer>


    </div>
  );
}

export default App;
