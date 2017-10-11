import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

class GarbageCalendar extends Component {
    constructor(props)
    {
        super(props);
        let today = new Date();

        this.state = {
            today: today,
            lastWeek: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7),
            events: [],
            garbageDates: []
        }
    }

    componentDidMount(){
        axios.get(`https://api.myjson.com/bins/l7z21`)
            .then(res => {
                let greenDates = res.data.greenDates.map(greenDates => (
                    {
                        'title': 'GREEN GARBAGE',
                        'start': greenDates.start,
                        'end': greenDates.end
                    }
                ));
                let greyDates = res.data.greyDates.map(greyDates => (
                    {
                        'title': 'GREY GARBAGE',
                        'start': greyDates.start,
                        'end': greyDates.end
                    }
                ));
                let plasticDates = res.data.plasticDates.map(plasticDates => (
                    {
                        'title': 'PLASTIC GARBAGE',
                        'start': plasticDates.start,
                        'end': plasticDates.end
                    }
                ));
                let paperDates = res.data.paperDates.map(paperDates => (
                    {
                        'title': 'PAPER GARBAGE',
                        'start': paperDates.start,
                        'end': paperDates.end
                    }
                ));
                this.setState({ garbageDates: [...greenDates, ...greyDates, ...plasticDates, ...paperDates] });
            });
    }

    render() {
        return (
            <div>
                <BigCalendar
                    events={this.state.garbageDates}
                    style={{height: "600px", marginBottom: ''}}
                    startAccessor='start'
                    endAccessor='end'
                    defaultDate={new Date()}
                    views={['month']}
                />
            </div>
        );
    }
}

export default GarbageCalendar;
