//Imports
import { Container, Row, Navbar as MyNavbar } from 'react-bootstrap';

const Navbar = () => {
    return (
        <Row>
            <MyNavbar bg="primary" variant="dark">
                <Container fluid>
                    <MyNavbar.Brand>
                        <span className='fw-bold fst-italic'>OfficeQueueManager</span>
                    </MyNavbar.Brand>
                </Container>
            </MyNavbar>
        </Row>
    );
}

export default Navbar;