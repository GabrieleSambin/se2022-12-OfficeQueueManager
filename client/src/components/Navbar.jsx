//Imports
import { Container, Navbar as MyNavbar } from 'react-bootstrap';

const Navbar = () => {
    return (
        <MyNavbar fixed='top' bg="primary" variant="dark">
            <Container fluid>
                <MyNavbar.Brand>
                    <span className='fw-bold fst-italic'>Office Queue Management</span>
                </MyNavbar.Brand>
            </Container>
        </MyNavbar>
    );
}

export default Navbar;