import React from 'react';
import { Children, Class, Function } from './korisnici';

export default class App extends React.Component {
  state = {
    korisnik: [
      { name: 'Iva', years: 30 },
      { name: 'Ivan', years: 35 },
      { name: 'Ivana', years: 25 },
      { name: 'Ivica', years: 27 },
    ],
  };

  render() {
    const { korisnik } = this.state;

    return (
      <div>
        <h2>Korisnici: </h2>

        <Function name={korisnik[0].name} years={korisnik[0].years} />
        <Function name={korisnik[1].name} years={korisnik[1].years} />
        <Class name={korisnik[2].name} years={korisnik[2].years} />
        <Children name={korisnik[2].name} years={korisnik[2].years}>
        </Children>
      </div>
    );
  }
}