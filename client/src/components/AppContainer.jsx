//Imports
import { Col, Row, Container } from "react-bootstrap";

//Components
import Navbar from './Navbar';

const AppContainer = ({ ...props }) => {
    return (
        <Container fluid className='app-container'>
            <Navbar />
            <Row className='flex-fill'>
                <Col>{props.children}</Col>
            </Row>
        </Container >
    );
}

export default AppContainer;