import './App.css'

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="header-inner">
          <span className="logo">🐱 GatitoWorld</span>
          <nav>
            <a href="#">Inicio</a>
            <a href="#">Adoptar</a>
            <a href="#">Galería</a>
            <a href="#">Contacto</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <h1>El mundo de los gatitos 🐾</h1>
          <p>Descubre todo sobre los felinos más adorables del planeta. Adopta, cuida y ama a tu gatito.</p>
          <button className="btn-primary">Adopta un gatito</button>
        </section>

        <section className="cards">
          <div className="card">
            <span>😺</span>
            <h3>Razas populares</h3>
            <p>Conoce las razas más queridas: Persa, Siamés, Maine Coon y muchas más.</p>
          </div>
          <div className="card">
            <span>🏠</span>
            <h3>Cuidados en casa</h3>
            <p>Aprende a darle el mejor hogar a tu gatito con nuestras guías de cuidado.</p>
          </div>
          <div className="card">
            <span>❤️</span>
            <h3>Adopción responsable</h3>
            <p>Más de 500 gatitos esperan un hogar. Sé parte del cambio y adopta hoy.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 GatitoWorld — Hecho con amor y muchos ronroneos 🐱</p>
        <p>contacto@gatitoworld.com</p>
      </footer>
    </div>
  )
}

export default App
