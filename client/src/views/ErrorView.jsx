//Imports
import { Link } from 'react-router-dom';
import { Row, Button } from 'react-bootstrap';

const ErrorView = () => {
    return (
        <Row className='p-4 my-4 mx-auto flex-fill text-dark align-items-center'>
            <div className='d-flex flex-column align-items-center'>
                <h3 className='mb-0 fw-bold mt-3'>Page Not Found</h3>
                <div className='my-5'>
                    <Link to={'/'}>
                        <Button size='xs'>Back to home</Button>
                    </Link>
                </div>
            </div>
        </Row>
    );
}

export default ErrorView;