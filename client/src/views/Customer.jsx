//Imports

import { Button, Col, Row , Container} from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import api from "../API";

const Customer = (props) => {
    return (
        <>
        <Container className='h-100 d-flex flex-column align-item-center justify-content-center'>
        <Row className="justify-content-md-center">
            <Col><h2 className="cnt">Choose your service</h2></Col>
        </Row>
        
        <Row className="cnt1">
            <Col xs lg="2"><Button size="lg" onClick={() => {api.addTicket(1)}}> Service 1</Button></Col>
            <Col xs lg="2"><Button size="lg" onClick={() => {api.addTicket(2)}}> Service 2</Button></Col>
            <Col xs lg="2"><Button size="lg" onClick={() => {api.addTicket(3)}}> Service 3</Button></Col>
            <Col xs lg="2"><Button size="lg" onClick={() => {api.addTicket(4)}}> Service 4</Button></Col>
        </Row>

        <Row className="cnt1">
            <Col>
            <Table className="table">
                <thead>
                    <tr className="white">
                        <th>#</th>
                        <th>Counter</th>
                        <th>Called code</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="white">
                        <td>1</td>
                        <td>Counter 1</td>
                        <td>67</td>
                    </tr>
                </tbody>
            </Table>
            </Col>
            <Col>
            <Table>
                <thead>
                    <tr className="white">
                        <th>#</th>
                        <th>Service type</th>
                        <th>Queue length</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="white">
                        <td>1</td>
                        <td>Service 1</td>
                        <td>22</td>
                    </tr>
                </tbody>
                
            </Table>
            </Col>
        </Row>
        </Container>
        </>
    );

function tableCounterData(props){
    return(
        <>
        <td>{props.course.number}</td>
        <td>{props.course.name}</td>
        <td>{props.course.code}</td>
        </>
    );
}
function tableServiceData(){
    return(
        <>
        <td>{props.course.code}</td>
        <td>{props.course.name}</td>
        <td>{props.course.length}</td>
        </>
    );
}
}

export default Customer;