import HeroSection from './components/HeroSection/HeroSection';
import './App.css';
function App() {
  return (
    <div className="App">
      
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

    </div>
  );
}

export default App;
