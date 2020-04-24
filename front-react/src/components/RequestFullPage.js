import React from 'react';
import Moment from 'moment';
import 'moment/locale/fr';
import FormRequest from '../components/FormRequest';
import { connect } from 'react-redux';
import { getRessource, deleteRessource,updateRessource } from '../services/api_services';
let parse = require('html-react-parser');

 class PostFullPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { aRequest: null, selectedRequest: null, displayForm: false,user:props.user }
        // this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        getRessource("request", this.props.id).then(result => {
            this.setState({ aRequest: result });
        });
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value);
    }

    save(e) {
        e.preventDefault();
        let postData = Object.assign({}, this.state.aRequest);
        console.log(postData._id);
        // postData.description = postData.description.toString('html');
        if (!this.props.data) {
            delete postData.__v;
            delete postData._id;
            //postData.updated= new Date();
         //   console.log(postData);
            
            updateRessource("request",this.state.aRequest._id,postData).then(result=>{
                alert("enregistrement effectué");
                console.log(result);
                window.location="/listRequest";
            });
        }
    }


    delete(e) {
        e.preventDefault();
        var alertRequest = window.confirm("Etes vous sûr de vouloir supprimer cette demande ?");
        if (alertRequest == true) {
            deleteRessource('request', this.props.id).then(result => {
                // this.props.refresh();
                // this.props.onHide();
                window.location = "/listRequest";
            });
        } else {
            console.log("L'utilisateur a annulé la suppresion");
        }
    }

    render() {
        Moment.locale("fr");
        return (
            <div className="row" style={{ flexDirection: "column" }}>
            {this.state.displayForm &&
                <FormRequest data={this.state.selectedRequest}
                    //   refresh={()=>{this.refresh()}}
                    onHide={() => { this.setState({ displayForm: false }) }}
                />
            }
            {this.state.aRequest && !this.state.displayForm && this.state.user.idGroups !="5e9ff7591c9d440000db4ed1" &&
            <div className="cardDescription">
                <div style={{ textAlign:"center",padding:"10px"}}>
                    <h2>{this.state.aRequest.title}</h2>
                    <h5>Equipment : {this.state.aRequest.equipment}</h5>
                    <h5>Nombre de personne : {this.state.aRequest.nbPerson}</h5>
                    <h5>{Moment(this.state.aRequest.activityStart).format('L LT')} - {Moment(this.state.aRequest.activityEnd).format('L LT')}</h5>
                    <h5>Status : {this.state.aRequest.status}</h5>
                    <h2>{this.state.aRequest.statusReply}</h2>
                    Description : {parse(this.state.aRequest.description)}
                    <div>
                        <button className="btnFullPage" onClick={() => {
                            this.setState({ selectedRequest: this.state.aRequest, displayForm: true });
                        }}>Mettre à jour</button>
                        <button className="btnFullPage" onClick={this.delete.bind(this)}>Supprimer</button>
                    </div>
                </div>
                </div>
            }
            {this.state.aRequest && !this.state.displayForm && this.state.user.idGroups ==="5e9ff7591c9d440000db4ed1" &&

            
            <div className="cardDescription">
                <div style={{ textAlign:"center",padding:"10px"}}>
                    <h2>{this.state.aRequest.title}</h2>
                    <h5>Equipement : {this.state.aRequest.equipment}</h5>
                    <h5>Nombre de personne : {this.state.aRequest.nbPerson}</h5>
                    <h5>{Moment(this.state.aRequest.activityStart).format('L LT')} - {Moment(this.state.aRequest.activityEnd).format('L LT')}</h5>
                    {/* <h5>Status : {this.state.aRequest.status}</h5> */}
                    <select name="status" value={this.state.aRequest.status ? this.state.aRequest.status:"undefined"} onChange={this.onChange.bind(this)}>
                    <option value="">--Veuillez choisir une option--</option>
                        <option value="En cours">En cours</option>
                        <option value="Accepté">Accepté</option>
                        <option value="Refusé">Refusé</option>
                    </select>
                    <h2>{this.state.aRequest.statusReply}</h2>
                    Description : {parse(this.state.aRequest.description)}
                    <div>
                        <button className="btnFullPage" onClick={this.save.bind(this)}>Mettre à jour</button>
                        {/* <button className="btnFullPage" onClick={this.delete.bind(this)}>Supprimer</button> */}
                    </div>
                </div>
                </div>
                }
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
  
  export default connect(mapStateToProps)(PostFullPage);