const chai = require ('chai');
const chaiHttp = require ('chai-http');
chai.use(chaiHttp);
chai.should();

const app = require('../server');
var agent = chai.request.agent(app);

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
const expTicket2= new nTicket(3, 0, 1, dayjs().format('ddd, DD MMM YYYY HH:mm:ss GMT'), 0, 1);


describe('get /api/Ticket', function() {
    it('Getting a ticket given number, service and date', function(done) {
        agent.get('/api/Ticket/1/1/Mon, 17 Oct 2022 09:59:56 GMT')
        .then(function(res) {
            res.should.have.status(200);
            res.body.should.be.eql(expTicket1);
            done();
        }).catch(done);
    } )
})

describe('post /api/newTicket', function() {
    it('Creating a ticket', function(done) {
        agent.post('/api/newTicket')
        .set('content-type', 'application/json')
        .send(expTicket2)
        .then(function(res) {
            res.should.have.status(201);
            done();
        }).catch(done);
    })
})
