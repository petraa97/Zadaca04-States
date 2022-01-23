import { Component } from "react";


export default class App extends Component{
    
    constructor(){
        super();
        this.state = {
            korisnici: ["Ivan, ", "Iva, ", "Ivana"]
        };
    }
    
    render() {
        return (
             <div>
                 <h2>Korisnici:</h2>
                 <ul>
                     <li>{this.state.korisnici}</li>
                 </ul>
             </div>
        );
    }
}