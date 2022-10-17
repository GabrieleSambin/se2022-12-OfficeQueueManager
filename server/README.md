API: 
- POST `/api/newTicket`
    - body{ID_Counter (must be 0), ST_ID, TDate, State}

- PUT `/api/ticketState/:ID/:TDate`
    - param{ID, TDate}, body{counter, newState}