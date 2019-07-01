import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'

import moment from 'moment'
import events from './events'

const localizer = momentLocalizer(moment);

const App: React.FC = () => {
  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
}

export default App;
