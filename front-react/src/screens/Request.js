import React from "react";
import '../css/request.css'
import Listrequest from '../components/request';
import {getRessources} from '../services/api_services';

export default class Request extends React.Component {


    constructor(props) {
        super(props);
        this.state = { request: [] }
    }

    componentDidMount(){
        this.refresh();
    }

    refresh(){
        getRessources("listRequest").then(result => {
            this.setState({request:result});
            console.log(result);
        });
    }



    render() {
        return (
            <div className="row">
                <div style={{justifyContent:"center",alignItems:"center"}}>
                <div style={{marginBottom:"10px"}}>
                    {this.state.request.length > 0 &&
                <button className="btnFullPage" onClick={()=> window.location="/formRequest"}>Nouvelle demande</button>
            }
                </div>
                {this.state.request.map((item,index)=>{
                    return <Listrequest
                        key={index}
                        data={item}>
                    </Listrequest>
                })}
                {this.state.request.length === 0 &&
                    <Listrequest></Listrequest>
                }
                </div>
            </div>
        );
    }
}