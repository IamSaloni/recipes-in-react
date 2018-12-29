import React, {Component,Fragment} from 'react'
import Greetings from "./components/Greetings";
import Banner from "./components/Banner"

class App extends Component {
    render(){
        return (
            <Fragment>
                <Banner />
                <Greetings name="Customer " />
            </Fragment>
        )
    }
}

export default App



// ReactDOM.render (
//     <Greetings name="Customer" />,document.getElementById('root')
//  );
