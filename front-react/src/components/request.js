import React from 'react';
import Moment from 'moment';
import 'moment/locale/fr'
import '../css/request.css';

let parse = require('html-react-parser');

export default function Listrequest(props) {
    Moment.locale("fr");
    return (
        <div className="card">
            <div style={{flexDirection:"row", display:"flex", width:"100%"}}>
            <div className="dataTitle">
            <h3>{props.data.title}</h3>
            </div>
            <div style={{width:'50%'}}>
            <h5 style={{justifyContent:"center",alignItems:"center",display:"flex"}}>{props.data.equipment}</h5>
            {/* {console.log(props.data.activityStart.toString())} */}
            <h5>{ Moment(props.data.activityStart).format('L LT') } - {Moment(props.data.activityEnd).format('L LT')}</h5>
            </div>
            <div className="status">
            {props.data.status == "En cours" &&
                <h5 style={{ color: "orange" }}>{props.data.status}</h5>
            }
            {props.data.status == "Accepté" &&
                <h5 style={{ color: "green" }}>{props.data.status}</h5>
            }
            {props.data.status == "Refusé" &&
                <h5 style={{ color: "red" }}>{props.data.status}</h5>
            }
            </div>
            </div>
        </div>

    );
}