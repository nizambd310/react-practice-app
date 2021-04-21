import React, { Component } from 'react'

export default class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name:'Nizam Uddin AHmed',
            Designation: 'Assistant Director',
            Age: 41
        };
    }
        newAge = ()=> {
            this.setState({Age:42});
        }

        
    
    render() {
        return (
            <div>
                <h3>welcome you all</h3>
                <p>I am {this.state.Name} and I am {this.state.Designation} of DTE. <br /> I am {this.state.Age}</p>

                <button type="button" onClick={this.newAge}>Clik ME change your age.</button>
            </div>
        );
    }
}
