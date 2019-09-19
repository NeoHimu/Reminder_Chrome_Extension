import React, {useState} from 'react';
import ScheduleAlarmContainer from './ScheduleAlarmContainer';
import BottomNavigation from './BottomNavigation';
import TasksContainer from './TasksContainer';
import HistoryContainer from './HistoryContainer';

const App = () => {
    const [showAlarmsList, setAlarmView] = useState('Set Reminder');
    console.log('showAlarmsList', showAlarmsList);

    return (
        <div className="container">
            {

                        (() => {
                            if (showAlarmsList === 'Set Reminder') {
                              return (
                                <ScheduleAlarmContainer />
                              )
                            } else if (showAlarmsList === 'Active Reminders') {
                              return (
                                <TasksContainer />
                              )
                            } else {
                              return (
                                <HistoryContainer />
                              )
                            }
                          })()


            }
            <BottomNavigation 
                links={['Set Reminder', '|', 'Active Reminders','|', 'History']}
                className="bottomNavigation"
                onClick={setAlarmView}
                active={showAlarmsList}
            />
            <div id="snackbar">Reminder set!!</div>
        </div>
    );
};

export default App;