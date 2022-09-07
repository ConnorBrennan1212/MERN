import React, {Component} from 'react';

class PersonComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    
    render(){
        return(
            <div>
                <h1>{this.props.lastName},{this.props.firstName}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button style={btnStyle} onClick={ () => { this.setState({age: this.state.age + 1})} }>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        )
    }
}

export default PersonComponent