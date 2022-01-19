import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Modal, Button } from 'react-bootstrap';
// import ModalTop from '../ModalTop';

Header.propTypes = {

};

function Header(props) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <Container fluid>
            <Navbar bg="primary" variant="dark" expand="lg" className='mb-3'>
                <Navbar.Brand href="#home">User Management Application</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="">Show Data</Nav.Link>
                        <Nav.Link href="">Vaccinated</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Age</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="" variant='primary' onClick={handleShow}>Report</Nav.Link>
                    </Nav>
                </Navbar.Collapse>


                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Báo cáo tổng hợp</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>


                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Navbar>

        </Container>
    )
}

export default Header;