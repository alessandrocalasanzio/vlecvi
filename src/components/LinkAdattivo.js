import React from 'react';
import { Link } from 'react-router-dom';

/*
  Sceglie da solo come aprire un indirizzo:
  - esterno (http/https)  -> <a> in una scheda nuova
  - mailto: o tel:        -> <a> normale, senza scheda nuova
  - interno (/blog, ...)  -> <Link> di react-router, come prima

  rel="noopener noreferrer" impedisce alla pagina aperta di agire
  sulla scheda di partenza.
*/
const LinkAdattivo = ({ to, children, ...resto }) => {
  const indirizzo = typeof to === 'string' ? to : '';

  if (/^(mailto:|tel:)/i.test(indirizzo)) {
    return <a href={indirizzo} {...resto}>{children}</a>;
  }

  if (/^(https?:)?\/\//i.test(indirizzo)) {
    return (
      <a href={indirizzo} target="_blank" rel="noopener noreferrer" {...resto}>
        {children}
      </a>
    );
  }

  return <Link to={to} {...resto}>{children}</Link>;
};

export default LinkAdattivo;
