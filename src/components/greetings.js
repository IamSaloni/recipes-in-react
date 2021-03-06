import React from "react"



class Greetings extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : this.props.name,
            highlight: false
        }
    }

    handleChange(e){
        this.setState ({
            name : e.target.value
        })
    }
    handleMouseOver(e){
          this.setState ({
            highlight: true
          })



        //   setTimeout(()=>{
        //     this.setState ({
        //         highlight: false
        //       })
        //   }  , 2000); //1s = 1000ms
    }
    handleMouseOut(e){
        this.setState ({
            highlight : false
        })
    }

    render () {
        return (
            <div >
                <label htmlFor={"firstname"} >
                    Name:
                </label>
                <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="Enter Name"
                    onChange={() => this.handleChange(event)}
                    onMouseOver={() => this.handleMouseOver(event)}
                    onMouseOut={() => this.handleMouseOut(event)}
                />
                <p
                style={this.state.highlight?{backgroundColor:'aqua'}:{}}
                className={this.state.name==="Saloni"?"bg-green":''} >
                    Hello {this.state.name}
                </p>
            </div>
        )
    }
}
export default Greetings