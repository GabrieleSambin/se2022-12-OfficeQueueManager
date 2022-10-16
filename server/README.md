API: 
- POST `/api/newTicket`
    - body{ID, ID_Counter, ST_ID, TDate, State}

- PUT `/api/ticketState/:ID/:TDate`
    - param{ID, TDate}, body{newState}