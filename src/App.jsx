import { useState } from "react";
import languages from "./assets/languages";
import "./App.css";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <div className="app">
      <h1>Learn Web Development</h1>

      {/* BOTTONI */}
      <div className="buttons">
        {languages.map((language) => (
          <button
            key={language.id}
            onClick={() => setSelectedLanguage(language)}
            className={
              selectedLanguage?.id === language.id ? "active" : ""
            }
          >
            {language.title}
          </button>
        ))}
      </div>

      {/* CARD DETTAGLIO */}
      <div className="card">
        {selectedLanguage ? (
          <>
            <h2>{selectedLanguage.title}</h2>
            <p>{selectedLanguage.description}</p>
          </>
        ) : (
          <p>Nessun linguaggio selezionato</p>
        )}
      </div>
    </div>
  );
}

export default App;
