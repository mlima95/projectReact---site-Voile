import React from "react";

var sectionStyle = {
    width: "100%",
    height: "1070px",
    top:"0px",
    backgroundImage: "url('https://i.ibb.co/r5TRL2v/catamaran-2288349-1920.jpg')"
    
  };
  var section2Style = {
    width: "75%",
    left: "5%",
    top: "20%",
	display: "block" ,
	position: "absolute",
    background: "rgba(255,255,255,0.4)",
    textAlign:"justify",
    paddingLeft:"10%",
    paddingTop:"3%",
    paddingBottom:"3%",
    paddingRight:"5%"
  };

export default class Home extends React.Component{


    render(){
        return(
             <section style={ sectionStyle }>
                 <section style={ section2Style }>
                    <img src="https://i.ibb.co/tBRyqVf/kisspng-sailing-ship-boating-logo-5c023f185a0969-8793135915436510963688.png" height="150px"  width="150px" />
                    <h2>Votre Centre Nautique</h2> 
                    <br /><br />              
                    Votre Centre Nautique est ravi de vous accueillir sur son site de réservation. Fondé en 1976, le VCN est une association de voile créée par des professionnels souhaitant faire partager leur passion.
                    <br /><br />
                    Nous vous proposons sur ce site la possibilité d'organiser des séances de locations de matériel (Voile, Catamaran, Paddle). Pour cela, vous devez créer un compte et vous connecter.
                    <br /><br />
                    Vous aurez alors également accès au calendrier, répertoriant les différents rendez-vous vous concernant, ainsi que l'état de validation de ceux-ci.
                 </section>
             </section>
        );
    }
}