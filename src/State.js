import React, { Component } from 'react'

export class State extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Person: {
                FullName: "- BENTLEY -",
                Bio: "Fabrication Super Cars",
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLiHcMBk9ZvI_9bAD28xkYZSX478DE2iPpVg&usqp=CAU",
                Profession: "Entreprise"
            },
            shows: true,
            mountingTime:0,
        };
    }
    componentDidMount() {

        setInterval(() => {
            this.setState({mountingTime:this.state.mountingTime+=1})
        },1000)
    }

    Changes = () => {
        this.setState({ shows:!this.state.shows })
        this.setState({ mountingTime:0 })
    }

    render() {
        return (
            <div>

                {this.state.shows ? <>
                    <h1>{this.state.Person.FullName}</h1>
                    <h3>  {this.state.Person.Profession} </h3>
                    <h3>  {this.state.Person.Bio} </h3>
                    <img src={this.state.Person.imgSrc} alt='PIC'></img>
                    <p> Time : {this.state.mountingTime}</p>
                </> :
                    <h2>Not Show</h2>
                }

                <button onClick={this.Changes}> Show </button>

            </div>
        )
    }
}

export default State