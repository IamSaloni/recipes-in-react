import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'

class Print extends React.Component {
    render () {
        return (
            <div >
                <p>Hello World</p>
            </div>
        )
    }
}

ReactDOM.render (
    <Print />,document.getElementById('root')
 );


