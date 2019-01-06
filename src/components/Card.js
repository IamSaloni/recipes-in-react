import React from 'React'


class Card extends React.Component {

    constructor(props) {
        super(props);
            this.state={
                name:' ',
                company:'',
                avatar_url:''
            }
        }
            componentDidMount(){
                fetch('http://localhost:8080/src/avtar.json')
                .then(response=>response.json())
                .then(data=>{
                    this.setState({
                        name:data.name,
                        company:data.company,
                        avatar_url:data.avatar_url
                    })
                })
            }

         render() {
            return (
                <div>
                    <img src={this.state.avatar_url}/>
                    <h1>
                        <span>{this.state.name}</span>
                        <span >{this.state.company}</span>
                    </h1>
                </div>
            )
        }
    }


export default Card
