import React from 'react';
import { Children, Class, Function } from './korisnici';

export default class App extends React.Component {
  state = {
    users: [
      { name: 'Iva', years: 30 },
      { name: 'Ivan', years: 35 },
      { name: 'Ivana', years: 25 },
      { name: 'Ivica', years: 27 },
    ],
  };

  render() {
    const { users } = this.state;

    return (
      <div>
        <h2>Korisnici: </h2>

        <Function name={users[0].name} years={users[0].years} />
        <Function name={users[1].name} years={users[1].years} />
        <Class name={users[2].name} years={users[2].years} />
        <Children name={users[2].name} years={users[2].years}>
        </Children>
      </div>
    );
  }
}