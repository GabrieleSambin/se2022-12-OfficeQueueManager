//Imports
import Form from 'react-bootstrap/Form';
import { Button, Col, Row , Container} from "react-bootstrap";

const Counter = () => {
    return (
        <>
        <Container className='h-100 d-flex flex-column align-item-center justify-content-center'>
            <Row className='mb-5'>
                <h2 className='mb-4 text-center'>Select a Cunter</h2>
            </Row>
            <Row>
                <Col className='mt-1 text-center'>
                        <Form>
                            <div className="mb-3">
                            <Form.Check
                                inline
                                label="Counter 1"
                            />
                            <Form.Check
                                inline
                                label="Counter 2"
                            />
                            <Form.Check
                                inline
                                label="Counter 3"
                            />
                            </div>
                        </Form>
                </Col>
            </Row>
            <Row>
                <Col className='mt-3 text-center'>
                    <Button className='mx-5 p-2'>
                        Call Next
                    </Button>
                </Col>  
            </Row>
        </Container>
        </>
    );
}

export default Counter;