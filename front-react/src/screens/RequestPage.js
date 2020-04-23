import React from "react";
import {useParams} from 'react-router-dom';
import RequestFullPage from "../components/RequestFullPage";

export default function RequestPage(props){
    return(
        <div className="row" style={{flexDirection:"column"}}>
            <Page/>
        </div>
    );
}

function Page(){
    let{id}=useParams();
    return(<RequestFullPage id={id}></RequestFullPage>);
}