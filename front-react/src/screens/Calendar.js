import React, { Component } from "react";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import 'moment/locale/fr'
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import {getRessources} from '../services/api_services';
let parse = require('html-react-parser');

moment.locale('fr');
const DnDCalendar = withDragAndDrop(Calendar);
const proTypes = {};

export default class CalendarView extends React.Component{
  constructor(...args) {
    super(...args)
    this.state = {
      request: [],
      events: [
      ],
      test:[]
    };
    this.onEventDrop = this.onEventDrop.bind(this);
    this.eventStyleGetter = this.eventStyleGetter.bind(this);

  getRessources("request").then(result => {
      this.setState({request:result});
  });

  console.log(this.state.request);
  console.log("test");
  console.log(this.state.events);
  }


  refresh(){
    getRessources("request").then(result => {
      this.setState({request:result});
      console.log("coucou" + this.state.request);

  });
}

  handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name')
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      })
  }



  onEventDrop({ event, start, end}) {
    const { events } = this.state;
    const idx = events.indexOf(event);

    const updatedEvent = { ...event, start, end }
    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)
    this.setState({
      events : nextEvents,
    })
}
eventStyleGetter(couleur) {

//  var couleur = event.hexColor;
  if (couleur == null) {
    console.log("tamere")
  }
  var backgroundColor = '#' + couleur;
  var style = {
      backgroundColor: backgroundColor
  };
  return {
      style: style
  };
}

  render() {
    const localizer = momentLocalizer(moment);
    

    if (this.state.request != null) {
      var color = "008080";
      this.state.request.forEach(aRequest => {
        switch (aRequest.status) {
          case "En cours":
            color = "FFA500";
            break;
          case "Accepté":
            color = "008000";
            break;
          case "Refusé":
            color = "FF0000";
            break;
          default:
            color = "008080"
            break;
        }
        this.state.events.push({
          start: new Date(aRequest.activityStart),
          end: new Date(aRequest.activityEnd),
          title: aRequest.title,
          resource: aRequest.description.substr(3, aRequest.description.length-7),
          hexColor: color
        })
      });
    }


    return (
      <div>
        <DnDCalendar
          selectable
          localizer={localizer}
          events={this.state.events}
          defaultView={Views.WEEK}
          style={{ height: "100vh" }}
          scrollToTime={new Date(1970, 1, 1, 6)}
          onSelectEvent={event => alert(event.resource)}
          onSelectSlot={this.handleSelect}
          defaultDate={moment().toDate()}
          onEventDrop={this.onEventDrop}
          onDoubleClickEvent={this.onDoubleClickEvent}
          eventPropGetter={event => this.eventStyleGetter(event.hexColor)}
        />
        </div>
    );
  }
}
