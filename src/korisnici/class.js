import React from 'react';

export default class Class extends React.Component {
  render() {
    const { name, years } = this.props;
    return (
     <p>
         <ul>
         Novi korisnik: 
         <li>
             {name} ({years})
         </li>
         </ul>

     </p>
    );
  }
}