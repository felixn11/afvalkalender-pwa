import React, { Component } from 'react';
import eventCalendar from 'react-event-calendar';

class Navbar extends Component {

    constructor(){
        super(props);
        this.state = {events: []};
    }



    componentDidMount(){
        console.log('yes');
    }

    render() {
        return (
            <div className="App">
                <EventCalendar
                    month={7}
                    year={2015}
                    events={this.state.events}/>
            </div>
        );
    }
}

export default App;
