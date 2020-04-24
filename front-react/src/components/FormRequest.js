import React from 'react';
import Moment from 'moment';
import 'moment/locale/fr'
import RichTextEditor from 'react-rte';
import { connect } from 'react-redux';
import { updateRessource, createRessource, deleteRessource, getRessource,getRessources } from '../services/api_services';

class FormRequest extends React.Component{
    constructor(props){
        super(props);
        if(props.data){
            this.state= Object.assign({},props.data);
            this.state.description = RichTextEditor.createValueFromString(this.state.description,'html');
            console.log(this.state);
        }else{
            this.state = { title: "", description: RichTextEditor.createEmptyValue(),equipment:"",nbPerson:0,activityStart:null,activityEnd:null,status:"En cours",user:props.user._id};
        }
    }

    componentDidMount(){
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.data && this.props.data != nextProps.data) {
            Object.assign(nextState, nextProps.data);
        }
        return true;
    }

    cancel(e) {
        e.preventDefault();
        this.props.onHide();
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value);
    }


    save(e) {
        e.preventDefault();
        let postData = Object.assign({}, this.state);
        postData.description = postData.description.toString('html');
        if (this.props.data) {
            delete postData.__v;
            delete postData._id;
            //postData.updated= new Date();
         //   console.log(postData);
            
            updateRessource("request",this.props.data._id,postData).then(result=>{
                alert("enregistrement effectué");
                console.log(result);
                window.location="/listRequest";
            });
        } else {
            createRessource("request",postData).then(result =>{
                alert("Enregistrement effectué.");
            });
            window.location="/listRequest";
        }
    }

    render() {
        Moment.locale("fr");
        return (
            <form style={{ flexDirection: "row", display: "flex", padding: 10, flex: 1 }}>
                <div style={{ flexDirection: "column", display: "flex", flex: 1 }}>
                    <input name="title" value={this.state.title} onChange={this.onChange.bind(this)}>
                    </input>
                    <select name="equipment" value={this.state.equipment ? this.state.equipment:"undefined"} onChange={this.onChange.bind(this)}>
                    <option value="">--Please choose an option--</option>
                        <option value="Voile">Voile</option>
                        <option value="Catamaran">Catamaran</option>
                        <option value="Paddle">Paddle</option>
                    </select>
                    {/* {console.log(this.state.description)} */}
                    <RichTextEditor name="description" style={{ flex: 1 }} value={this.state.description}
                        onChange={(value) => this.setState({ description: value })}>
                    </RichTextEditor>
                    <input name="nbPerson" value={this.state.nbPerson} onChange={this.onChange.bind(this)}></input>
                    <input name="activityStart" type="datetime-local"  value={this.state.activityStart} onChange={this.onChange.bind(this)}></input>
                    <input name="activityEnd" type="datetime-local"  value={this.state.activityEnd} onChange={this.onChange.bind(this)}></input>
                    <div style={{marginTop:10}}>
                        <button className="button" onClick={this.save.bind(this)}>Valider</button>
                        <button className="button" onClick={(e) => this.cancel(e)}>Annuler</button>
                    </div>
                </div>
            </form>
        );
    }


}

const mapStateToProps = state => {
    console.log(state.user.data)
    return {
        user: state.user.data 
    }
  };
  
  export default connect(mapStateToProps)(FormRequest);