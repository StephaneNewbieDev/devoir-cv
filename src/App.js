import React from "react";

function App() {
  return (
    <div>
      {/* Header */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              John Doe
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Accueil
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    À propos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container">
        <section className="my-5">
          <h1 className="text-center">
            Bienvenue sur le portfolio de John Doe
          </h1>
          <p className="text-center">
            Découvrez mes projets, services et contactez-moi pour en savoir
            plus.
          </p>
        </section>

        <section className="my-5">
          <h2>À propos</h2>
          <p>
            Je suis un développeur web passionné, spécialisé dans la création de
            sites modernes et performants.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-light py-3">
        <div className="container text-center">
          <p>© 2025 John Doe</p>
          <p>
            <a href="#top">Revenir en haut</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
