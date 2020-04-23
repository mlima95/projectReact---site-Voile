import React, { Component } from "react";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import 'moment/locale/fr'
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

moment.locale('fr');
const DnDCalendar = withDragAndDrop(Calendar);
const proTypes = {};

export default class CalendarView extends React.Component{
  constructor(...args) {
    super(...args)
    this.state = {
      events: [
        {
          start: moment().toDate(),
          end: moment()
            .add(1, "days")
            .toDate(),
          title: "Some title"
        }
      ]
    };
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

  /*onDoubleClickEvent = ({ event }) => {
    if (event != null) {
      console.log(this.state.events[0].title);

    } else {
      console.log("no event");
    }

  }*/

  onEventDrop = ({ event, start, end, allDay }) => {
    console.log(event.start + "okd");
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

  render() {
    const localizer = momentLocalizer(moment);

    return (
        <DnDCalendar
          selectable
          localizer={localizer}
          events={this.state.events}
          defaultView={Views.WEEK}
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date(2015, 3, 12)}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={this.handleSelect}
          defaultDate={moment().toDate()}
          onEventDrop={this.onEventDrop}
          style={{ height: "100vh" }}
          onDoubleClickEvent={this.onDoubleClickEvent}
        />
    );
  }
}
