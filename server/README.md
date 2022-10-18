API: 
- POST `/api/newTicket`
    - body{ID_Counter (must be 0), ST_ID, TDate, State}

- PUT `/api/ticketState/:ID/:TDate`
    - param{ID, TDate}, body{counter, newState}

- GET `/ServiceCounter`. Gets the services asociated to a counter id in the form of dictionaries within a list. e.g. [{ST_ID: 1}, {ST_ID: 3}]
    - param{ID}

- PUT `/api/Ticket`. Updates the Counter and State for a Date, Counter and Service. newState is 'CLOSE' and newID_Counter is ID_Counter.
    - body{ST_ID, ID_Counter}