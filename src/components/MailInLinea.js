import React from 'react';
import { IndirizzoSpezzabile, useMostraECopia, AvvisoMailCopiata } from './usaMail.js';

/*
  Mail dentro una frase (pagina Janay): un pulsante "mostra la mia mail" che al clic
  diventa l'indirizzo e lo copia negli appunti. Stesso sistema della tessera MAIL.
*/
const MailInLinea = () => {
  const { mostrata, copiata, mostraECopia } = useMostraECopia();

  return (
    <>
      {mostrata ? (
        <strong className="mailInLinea__indirizzo"><IndirizzoSpezzabile /></strong>
      ) : (
        <button
          type="button"
          className="mailInLinea"
          onClick={mostraECopia}
          aria-label="Mostra e copia il mio indirizzo mail"
        >
          mostra la mia mail
        </button>
      )}
      <AvvisoMailCopiata visibile={copiata} />
    </>
  );
};

export default MailInLinea;
