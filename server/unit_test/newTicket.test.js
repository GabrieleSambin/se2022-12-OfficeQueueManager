const { expect } = require('chai');

const TicketDAO = require('../dao/TicketDAO');
const { Queue, QueueList } = require('../models/queueModel');
const dayjs = require('dayjs');

function nTicket(ID, ID_Counter, ST_ID, Date, State, Ticket_Number){
    this.ID = ID;
    this.ID_Counter = ID_Counter;
    this.ST_ID = ST_ID;
    this.Date = Date;
    this.State = State;
    this.Ticket_Number = Ticket_Number;  
}

const expTicket1= new nTicket(1, 0, 1, "Mon, 17 Oct 2022 09:59:56 GMT", 0, 1);
testGetTicket(expTicket1)

const expTicket2= new nTicket(3, 0, 1, dayjs().format('ddd, DD MMM YYYY HH:mm:ss GMT'), 0, 1);
testInsertTicket(expTicket2);


function testGetTicket(expTicket1){
    test("test ability to get ticket ", async () => {
        let tick = await TicketDAO.getTicket(expTicket1.Ticket_Number, expTicket1.ST_ID, expTicket1.Date);
        expect(JSON.stringify(tick)).equals(JSON.stringify(expTicket1));
    });
}

function testInsertTicket(expTicket2){
    test("test add new ticket", async () => {
        let resp = await TicketDAO.insertTicket(expTicket2.ID_Counter, expTicket2.ST_ID, expTicket2.Date, expTicket2.State, expTicket2.Ticket_Number);
        expect(resp).equals(undefined);
    });
    test("test ticket added correctly", async () => {
        let tick = await TicketDAO.getTicket(expTicket2.Ticket_Number, expTicket2.ST_ID, expTicket2.Date);
        expect(JSON.stringify(tick)).equals(JSON.stringify(expTicket2));
    });
}
