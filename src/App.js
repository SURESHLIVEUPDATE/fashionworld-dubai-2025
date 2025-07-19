import './App.css';

function App() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>FashionWorld Fashion Week</h1>
          <h2>Dubai Edition 2025</h2>
          <p className="tagline">Where Style Meets Culture</p>
          <button className="register-btn">Register Now</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About FashionWorld</h2>
        <p>
          FashionWorld is a global platform that celebrates beauty, creativity,
          and cultural elegance. Hosting fashion shows, beauty pageants, and
          style-forward events across the world, we connect designers, icons,
          and enthusiasts into one vibrant showcase of global fashion.
        </p>
      </section>

      {/* Highlights Section */}
      <section className="highlights">
        <h2>Event Highlights</h2>
        <div className="grid">
          <div className="card">
            <h3>👑 Celebrity Guests</h3>
            <p>Glamour on the red carpet with global fashion icons.</p>
          </div>
          <div className="card">
            <h3>🎨 Designer Showcases</h3>
            <p>Witness exclusive collections by top-tier designers.</p>
          </div>
          <div className="card">
            <h3>🌍 Cultural Fusion</h3>
            <p>A celebration of traditional styles with modern flair.</p>
          </div>
          <div className="card">
            <h3>💄 Beauty & Beyond</h3>
            <p>Pageantry, styling labs, and backstage brilliance.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
