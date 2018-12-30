import React, {Component,Fragment} from 'react'
import Greetings from "./components/Greetings";
import Banner from "./components/Banner"
import Checkbox from "./components/Checkbox"
import Note from "./components/Note"


class App extends Component {
    render(){
        return (
            <Fragment>
                <Banner firstName="Saloni" lastName="Sharma" hometown="Amritsar" />
                <Greetings name="Customer " />
                <Checkbox />
                <Note />
            </Fragment>
        )
    }
}

export default App



// ReactDOM.render (
//     <Greetings name="Customer" />,document.getElementById('root')
//  );
