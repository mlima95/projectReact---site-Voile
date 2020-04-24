import React from 'react';
import Moment from 'moment';
import 'moment/locale/fr'
import '../css/request.css';

let parse = require('html-react-parser');

export default class Listrequest extends React.Component {
    constructor(props){
        super(props);
        this.state={aRequest:this.props.data}
    }

    componentDidMount(){
        if(this.state.aRequest){
            this.setState({newRequest:true});
        }
    }

    render(){
    Moment.locale("fr");
    return (
        
        <div className="card">
            {this.state.aRequest ?
            <div style={{ flexDirection: "row", display: "flex", width: "100%" }}>
                <div className="dataTitle">
                    <h3>{this.state.aRequest.title}</h3>
                    <h5 style={{ marginTop: "2px" }}>{Moment(this.state.aRequest.activityStart).format('L LT')} - {Moment(this.state.aRequest.activityEnd).format('L LT')}</h5>
                </div>
                <div style={{ width: '50%' }}>
                    <h5 style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>{this.state.aRequest.equipment}</h5>
                </div>
                <div className="status">
                    {this.state.aRequest.status == "En cours" &&
                        <h5 style={{ color: "orange", display: "flex", justifyContent: "flex-end" }}>{this.state.aRequest.status}</h5>
                    }

                    {this.state.aRequest.status == "Accepté" &&
                        <h5 style={{ color: "green", display: "flex", justifyContent: "flex-end" }}>{this.state.aRequest.status}</h5>
                    }
                    {this.state.aRequest.status == "Refusé" &&
                        <h5 style={{ color: "red", display: "flex", justifyContent: "flex-end" }}>{this.state.aRequest.status}</h5>
                    }
                    <a style={{ fontSize: "small", display: "flex", justifyContent: "flex-end" }} href={`/request/${this.state.aRequest._id}`}>Demande détaillée</a>
                </div>
            </div>
            :
            <div><h3>Besoin de faire une nouvelle demande ?</h3>
                <button onClick={()=> window.location="/formRequest"}>Nouvelle demande</button>
            </div>
}
        </div>
    );
}
}