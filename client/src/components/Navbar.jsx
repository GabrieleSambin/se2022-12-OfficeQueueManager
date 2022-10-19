//Imports
import { Container, Navbar as MyNavbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <MyNavbar fixed='top' bg="primary" variant="dark">
            <Container fluid>
                <MyNavbar.Brand>
                    <span className='fw-bold fst-italic'>Office Queue Management</span>
                </MyNavbar.Brand>
                <Link to={'/'} className='ms-auto'>
                    <Button>
                        <FontAwesomeIcon icon={faHouse} className='pe-2' />
                        Back to the Homepage
                    </Button>
                </Link>
            </Container>
        </MyNavbar>
    );
}

export default Navbar;