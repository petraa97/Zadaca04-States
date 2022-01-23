import React from 'react';

export default function Children({ name, years, children }) {
  return (

    <div>
      <p>
        Ime novog korisnika: {name}. <br/>
        Godina starosti: {years} godina.
      </p>
      <p>{children}</p>
    </div>
  );
  
}