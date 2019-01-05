import React from 'React'


class Card extends React.Component {
    constructor(props) {
        super(props);
            this.state={
                 newData: " "
            }

    componentDidMount() {
            fetch(`http://localhost:8080/src/avtar.json`)
            .then(results =>{
                return results.json();
            })
            .then(data => {
                return let newData=data.results.map((newData)=> {
                        return(
                            <div key={newData.results}>
                            <img src={"https://avatars3.githubusercontent.com/u/38960717?s=460&v=4"}/>
                            <h1>
                                <span>{newData.name}</span>
                                <span>{newData.company}</span>
                            </h1>
                            </div>
                        )
                })
            })

            this.setState({
                newData:newData
            });
    }
        render() {
            return (
                <div>
                    <img src="https://avatars3.githubusercontent.com/u/38960717?s=460&v=4"/>
                    <h1>
                        <span>{this.state.name}</span>
                        <span>{this.state.company}</span>
                    </h1>
                    {this.state.newData}
                </div>
            )
        }
    }
}

export default Card
