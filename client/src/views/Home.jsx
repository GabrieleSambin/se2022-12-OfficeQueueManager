//Imports
import { Row, Col, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench, faDesktop, faTicket } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <Container className='h-100 d-flex flex-column align-item-center justify-content-center'>
            <Row className='mb-5'>
                <h2 className='mb-4 text-center'>Welcome to the Office Queue Management System</h2>
                <h4 className='mb-4 text-center'>Choose your role! </h4>
                <Col className='mt-3 text-center'>
                    <Link to={'/customer'}>
                        <Button size="lg" className='mx-5 p-2'>
                            Customer
                            <FontAwesomeIcon icon={faTicket} className='ps-2' />
                        </Button>
                    </Link>
                    <Link to={'/counter'}>
                        <Button size="lg" className='mx-5 p-2'>
                            Counter
                            <FontAwesomeIcon icon={faDesktop} className='ps-2' />
                        </Button>
                    </Link>
                    <Link to={'/managerStats'}>
                        <Button size="lg" className='mx-5 p-2'>
                            Manager
                            <FontAwesomeIcon icon={faScrewdriverWrench} className='ps-2' />
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;