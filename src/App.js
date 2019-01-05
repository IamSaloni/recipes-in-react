import React, {Component,Fragment} from 'react'
import Greetings from "./components/Greetings";
import Banner from "./components/Banner"
import Checkbox from "./components/Checkbox"
import Board from "./components/Board"
import Billtrim from "./Billtrim"
import Card from "./components/Card"



class App extends Component {

    constructor(props){
        super(props);
        this.state={
            name:{
                firstName:'',
                lastName:''
            }
        }
    }
  

    componentDidMount(){
        fetch(`http://localhost:8080/src/data.json`)
        .then(response => response.json())
        .then((data)=>{
   this.setState(data);


        })
    }
    render(){
        console.log(this.state)
       return (
            <Fragment>
                {/* <Banner firstName={this.state.name.firstName} lastName={this.state.name.lastName} hometown="Amritsar" /> */}
                {/* <Greetings name="Customer " />  */}
                {/* <Checkbox /> */}
                {/* <Board count={20}/> */}
                {/* <Lifecycle /> */}
                {/* <Billtrim /> */}
                <Card />
            </Fragment>
        )
    }
}

export default App



// ReactDOM.render (
//     <Greetings name="Customer" />,document.getElementById('root')
//  );
