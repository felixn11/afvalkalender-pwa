import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import GarbageCalendar from './GarbageCalendar/GarbageCalendar';
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component
{

    render()
    {
        return (
            <BrowserRouter>
                <div className="App">

                    <MuiThemeProvider muiTheme={getMuiTheme()}>
                        <div>
                            <AppBar title="Afvalkalender"
                                    iconElementRight={
                                        <IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                                                  targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                                  anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
                                            <MenuItem primaryText="Kalender">

                                            </MenuItem>
                                            <MenuItem primaryText="Instellingen"/>
                                        </IconMenu>
                                    }
                            />
                            <GarbageCalendar/>
                        </div>
                    </MuiThemeProvider>
                </div>
            </BrowserRouter>
        );
    }

}

export default App;
