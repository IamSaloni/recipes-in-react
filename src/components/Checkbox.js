import React from 'react'

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked : false
        }
        // this.handleChange = this.handleChange.bind(this)
    }
    handleChange (e){
        this.setState ({
            checked:e.target.checked
        })
    }
    render() {
        var msg;
        if(this.state.checked) {
            msg="Checked";
        }
        else {
            msg="Unchecked"
        }
        return (
            <div>
                <input type="checkbox" 
                onChange={() => this.handleChange(event)} 
                defaultChecked={this.state.checked}
                />
                <p>This Box is {msg}</p>
            </div>
        )
    }
}

export default Checkbox