import React from 'react'

class Lifecycle extends React.Component {
        componentWillMount() {
            console.log('Component is about to mount')
        }
        componentDidMount(){
            console.log('Component has just mounted')
        }
    render() {
        return (
            <div className="react-life"></div>
        )
    }
}

export default Lifecycle