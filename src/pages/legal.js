import React from "react";

const Legal = () => {
  return (
    <div className="container py-5">
      {/* Titre principal */}
      <h1 className="text-center">MENTIONS LÉGALES</h1>
      {/* Accordion */}
      <div className="accordion mt-4" id="legalAccordion">
        {/* Section Éditeur du site */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Éditeur du site
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#legalAccordion"
          >
            <div className="accordion-body">
              <p>
                <strong>John Doe</strong>
              </p>
              <p>40 Rue Laure Diebold</p>
              <p>69009 Lyon, France</p>
              <p>
                <i className="fa-solid fa-phone text-primary"></i> 06 20 30 40
                50
              </p>
              <p>
                <i className="fa-solid fa-envelope text-primary"></i>{" "}
                <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Section Hébergeur */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Hébergeur
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#legalAccordion"
          >
            <div className="accordion-body">
              <p>
                <strong>Always Data</strong>
              </p>
              <p>91 rue du Faubourg Saint-Honoré</p>
              <p>75008 Paris</p>
              <p>
                <a
                  href="https://www.alwaysdata.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.alwaysdata.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Section Crédits */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Crédits
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#legalAccordion"
          >
            <div className="accordion-body">
              <p>
                Site développé par <strong>John Doe</strong>, étudiant du CEF.
              </p>
              <p>
                Les images libres de droit sont issues du site{" "}
                <a
                  href="https://pixabay.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pixabay
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
