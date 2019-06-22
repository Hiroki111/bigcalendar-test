import React from 'react';
import BigCalendar from 'react-big-calendar'
// This line causes an error
// (Attempted import error: 'react-big-calendar' does not contain a default export (imported as 'BigCalendar'))
// using "import Calendar from 'react-big-calendar" results in a different error, saying
// Attempted import error: 'react-big-calendar' does not contain a default export (imported as 'BigCalendar')

import moment from 'moment'
import events from './events'

const localizer = BigCalendar.momentLocalizer(moment);

const App: React.FC = () => {
  return (
    <div className="App">
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
}

export default App;
