import React from 'react'
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


// ReactDOM.render (
//    React.createElement('h1', {className: 'kk' }, 'hello saloni'),document.getElementById('root')
// );

// React.createElement('h1', {className: 'kk' }, 'hello gugu')
