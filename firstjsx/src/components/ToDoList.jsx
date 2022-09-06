import React, {Component} from 'react'
class ToDoList extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <h1>Hello Dojo!</h1>
                <h2>Things I need to do:</h2>
                <ul>
                    <li>Learn React</li>
                    <li>Climb Mt. Everest</li>
                    <li>Run a marthon</li>
                    <li>Feed the dogs</li>
                </ul>
            </div>
        )
    }
}
export default ToDoList;