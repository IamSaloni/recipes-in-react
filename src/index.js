import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'

class Print extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : this.props.name
        }
    }

    handleChange(e){
        this.setState ({
            name : e.target.value
        })
    }

    render () {
        return (
            <div >
                <label htmlFor="firstname">
                    Name:
                </label>
                <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="Enter Name"
                    onChange={() => this.handleChange(event)}
                />
                <p>Hello {this.state.name}</p>
            </div>
        )
    }
}

ReactDOM.render (
    <Print name="Customer" />,document.getElementById('root')
 );


//Create a component 
//Which greets the customer
//It has Input to enter a name for greeting 
