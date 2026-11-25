import React, { useState } from 'react';

/*
  Indirizzo mail e logica "mostra e copia", condivisi da TesseraMail (homepage, Contatti)
  e MailInLinea (pagina Janay). L'indirizzo compare nella pagina solo dopo il clic:
  i programmi che raccolgono indirizzi per lo spam leggono l'HTML e non lo trovano.
*/
export const INDIRIZZO_MAIL = 'acalasanzio@outlook.com';

// L'indirizzo con un punto di "a capo" (<wbr/>) prima della @, per gli spazi stretti
export const IndirizzoSpezzabile = () => {
  const [nome, dominio] = INDIRIZZO_MAIL.split('@');
  return <>{nome}<wbr />@{dominio}</>;
};

export const useMostraECopia = () => {
  const [mostrata, setMostrata] = useState(false);
  const [copiata, setCopiata] = useState(false);

  const mostraECopia = async () => {
    setMostrata(true);
    try {
      await navigator.clipboard.writeText(INDIRIZZO_MAIL);
      setCopiata(true);
      setTimeout(() => setCopiata(false), 2000);
    } catch (errore) {
      // Appunti non disponibili (browser vecchio o permesso negato): l'indirizzo resta comunque visibile
    }
  };

  return { mostrata, copiata, mostraECopia };
};

export const AvvisoMailCopiata = ({ visibile }) => (
  visibile ? (
    <div className="toastCopiato" role="status" aria-live="polite">
      Mail copiata negli appunti
    </div>
  ) : null
);
