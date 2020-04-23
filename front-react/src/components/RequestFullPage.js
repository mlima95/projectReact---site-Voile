import React from 'react';
import Moment from 'moment';
import 'moment/locale/fr';
import FormRequest from '../components/FormRequest';
import { getRessource, deleteRessource } from '../services/api_services';
let parse = require('html-react-parser');

export default class PostFullPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { aRequest: null, selectedRequest: null, displayForm: false }
    }

    componentDidMount() {
        getRessource("request", this.props.id).then(result => {
            this.setState({ aRequest: result });
        });
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
                {this.state.aRequest &&
                    <div style={{ flexDirection: "column" }}>
                        <h2>{this.state.aRequest.title}</h2>
                        <h5>{this.state.aRequest.equipment}</h5>
                        <h5>{this.state.aRequest.nbPerson}</h5>
                        <h5>{Moment(this.state.aRequest.activityStart).format('L LT')} - {Moment(this.state.aRequest.activityEnd).format('L LT')}</h5>
                        <h5>{this.state.aRequest.status}</h5>
                        <h2>{this.state.aRequest.statusReply}</h2>
                        {parse(this.state.aRequest.description)}
                        <div>
                            <button onClick={() => {
                                this.setState({ selectedRequest: this.state.aRequest, displayForm: true });
                            }}>Mettre à jour</button>
                            <button onClick={this.delete.bind(this)}>Supprimer</button>
                        </div>
                    </div>
                }
                {/* <div>
            <h1>Veuillez rafraichir la page</h1>
        </div> */}
            </div>
        );
    }

}