import React from "react";

var sectionStyle = {
    width: "100%",
    height: "1070px",
    top:"0px",
    backgroundImage: "url('https://i.ibb.co/r5TRL2v/catamaran-2288349-1920.jpg')"
    
  };
  var section2Style = {
    width: "75%",
    left: "10%",
    top: "20%",
	display: "block" ,
	position: "absolute",
    background: "rgba(255,255,255,0.4)",
    textAlign:"center"
  };
  var section3Style = {
    width: "100%",

    
  };
  var section4Style = {
    width: "100%",

    
  };
export default class Home extends React.Component{


    render(){
        return(
             <section style={ sectionStyle }>
                 <section style={ section2Style }>
                    <h2>Votre Centre Nautique</h2>
                    Votre Centre Nautique est ravi de vous accueillir sur son site de réservation. Fondé en 1976, le VCN est une association de voile créée par des professionnels souhaitant faire partager leur passion.
                 </section>
                 <section style={ section3Style }>
                 
                 </section>
                 <section style={ section4Style }>
                 
                 </section>
             </section>
        );
    }
}