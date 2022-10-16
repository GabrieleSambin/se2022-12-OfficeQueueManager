//Imports

import { Button, Col, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

const Customer = (props) => {
    return (
        <>
        <Row className="justify-content-md-center">
            <Col><h1 className="cnt">Choose your service</h1></Col>
        </Row>
        
        <Row className="cnt1">
            <Col xs lg="2"><Button variant="primary" size="lg"> Service 1</Button></Col>
            <Col xs lg="2"><Button variant="primary" size="lg"> Service 2</Button></Col>
            <Col xs lg="2"><Button variant="primary" size="lg"> Service 3</Button></Col>
            <Col xs lg="2"><Button variant="primary" size="lg"> Service 4</Button></Col>
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