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
        getRessources("request").then(result => {
            this.setState({request:result});
        });
    }



    render() {
        return (
            <div className="row">
                <div style={{justifyContent:"center",alignItems:"center"}}>
                {this.state.request.map((item,index)=>{
                    return <Listrequest
                        key={index}
                        data={item}>
                    </Listrequest>
                })}
                </div>
            </div>
        );
    }
}