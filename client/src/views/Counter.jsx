//Imports
import Form from 'react-bootstrap/Form';
import {Button, Col, Row , Container} from "react-bootstrap";
import api from "../API";
import useNotification from '../hooks/useNotification';

const Counter = () => {
    let counterNumber = 1; 
    const notify = useNotification();

    async function callClient(counterNumber) {
        try {
            let service = await api.getService(counterNumber)
            let ticketNumber = await api.putTicket(service, counterNumber)
            notify.success('You served ticket ' + ticketNumber + ' for service ' + service);
        }
        catch (err) {
            throw err;
        }
    }

    return (
        <>
        <Container className='h-100 d-flex flex-column align-item-center justify-content-center'>
            <Row className='mb-5'>
                <h2 className='mb-4 text-center'>Select a Counter</h2>
            </Row>
            <Row>
                <Col className='mt-1 text-center'>
                        <Form>
                            <div className="mb-3">
                            <Form.Check
                                inline
                                label="Counter 1"
                                onChange = {() => {counterNumber = 1}}
                            />
                            <Form.Check
                                inline
                                label="Counter 2"
                                onChange = {() => {counterNumber = 2}}
                            />
                            <Form.Check
                                inline
                                label="Counter 3"
                                onChange = {() => {counterNumber = 3}}
                            />
                            </div>
                        </Form>
                </Col>
            </Row>
            <Row>
                <Col className='mt-3 text-center'>
                    <Button className='mx-5 p-2' onClick={() => callClient(counterNumber)}>
                        Call Next
                    </Button>
                </Col>  
            </Row>
        </Container>
        </>
    );
}

export default Counter;