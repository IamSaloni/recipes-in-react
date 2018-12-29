import React from 'react'
import Greetings from "./components/greetings";

class App extends React.Component {
    render(){
        return (
            <Greetings name="Customer " />
        )
    }
}

export default App



// ReactDOM.render (
//     <Greetings name="Customer" />,document.getElementById('root')
//  );
