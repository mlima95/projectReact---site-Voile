import React from "react";
import { connect } from 'react-redux';
import {getRessources} from '../services/api_services';

class Home extends React.Component{

constructor(props){
    super(props);
    // console.log(props.user._id);
    // this.state={user:props.user._id};
}


    componentDidMount(){
        getRessources("listRequest").then(result => {
            this.setState({request:result});
            console.log(result);
        });
    }
    render(){
        return(
            <div>
                <h1>TOTO</h1>
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
  
  export default connect(mapStateToProps)(Home);
