import React from "react";
import '../css/request.css'
import Listrequest from '../components/request';
import { connect } from 'react-redux';
import {getRessources} from '../services/api_services';

class Request extends React.Component {


    constructor(props) {
        super(props);
        this.state = { requestUser: [],requestAdmin:[],user:props.user }
        console.log(this.state.user);
    }

    componentDidMount(){
        this.refresh();
    }

    refresh(){
        getRessources("listRequest").then(resultUser => {
            getRessources("request").then(resultAdmin=>{
                this.setState({requestUser:resultUser,requestAdmin:resultAdmin});
                console.log(resultUser);
                console.log(resultAdmin);
            });
            
        });
    }



    render() {
        return (
            <div className="row">
                <div style={{justifyContent:"center",alignItems:"center"}}>
                <div style={{marginBottom:"10px"}}>
                    {this.state.requestUser.length > 0 && this.state.user.idGroups ==="5e9ff7031c9d440000db4ed0" &&
                    <div>
                    <h1>Mes demandes</h1>
                <button className="btnFullPage" onClick={()=> window.location="/formRequest"}>Nouvelle demande</button>
                </div>
            }
                </div>

                
                {this.state.user.idGroups ==="5e9ff7031c9d440000db4ed0" && this.state.requestUser.map((item,index)=>{
                    return <Listrequest
                        key={index}
                        data={item}>
                    </Listrequest>
                })}

            {this.state.user.idGroups ==="5e9ff7591c9d440000db4ed1" && this.state.requestAdmin.map((item,index)=>{
                    return <Listrequest
                        key={index}
                        data={item}>
                    </Listrequest>
                })}
                
                {this.state.requestUser.length === 0 &&
                    <Listrequest></Listrequest>
                }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state.user.data)
    return {
        user: state.user.data 
    }
  };
  
  export default connect(mapStateToProps)(Request);