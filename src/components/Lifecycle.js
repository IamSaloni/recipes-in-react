import React from 'react'

class Lifecycle extends React.Component {
        constructor(props){
            super(props);
            this.state={
                backgroundColor: 'purple'
            }
            this.update=this.update.bind(this)
        }
        update(){
            this.setState({
                backgroundColor:'green'
            })
        }
        componentDidUpdate(){
            console.log('component has been updated')
        }
    render() {
        return (
            <div className="react-life" style={this.state} onClick={this.update}></div>
        )
    }
}

export default Lifecycle