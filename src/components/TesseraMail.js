import React from 'react';
import white from '../img/Generale/white.jpg';
import { INDIRIZZO_MAIL, IndirizzoSpezzabile, useMostraECopia, AvvisoMailCopiata } from './usaMail.js';

/*
  Tessera "MAIL" di homepage e Contatti.
  Prima era un link mailto: che apriva il programma di posta senza mostrare l'indirizzo.
  Ora al clic la scritta diventa l'indirizzo e lo copia negli appunti.
*/
const TesseraMail = () => {
  const { mostrata, copiata, mostraECopia } = useMostraECopia();

  return (
    <div className="responsive">
      <div className="gallery">
        <div className="content">
          <div className="content-overlay"></div>

          <button
            type="button"
            className="content-link tesseraMail"
            onClick={mostraECopia}
            aria-label={mostrata ? `Indirizzo mail: ${INDIRIZZO_MAIL}` : 'Mostra e copia il mio indirizzo mail'}
          >
            <img src={white} width="80%" height="280px" alt="Mail Icon" />
            <div className="content-details fadeIn-bottom">
              <h3 className={`content-title buttone ${mostrata ? 'tesseraMail__indirizzo' : ''}`}>
                {mostrata ? <IndirizzoSpezzabile /> : 'MAIL'}
              </h3>
            </div>
          </button>

          <AvvisoMailCopiata visibile={copiata} />
        </div>
      </div>
    </div>
  );
};

export default TesseraMail;
