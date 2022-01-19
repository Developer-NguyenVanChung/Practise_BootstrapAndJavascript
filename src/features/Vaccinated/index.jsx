import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Button, Row, Col } from 'react-bootstrap'

Vaccinated.propTypes = {

};

function Vaccinated({ data }) {
    
    return (
        <Container>
            Vaccinated
            <Row>
                {data.map(item => {
                    if(item.vaccinated){
                        return (
                            <Col sm={3} key={item.id}>
                                <Card >
                                    <Card.Img variant="top" src={item.avatar} />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>
                                            Age: {new Date().getFullYear() - item.dateOfBirth}
                                        </Card.Text>
                                        <Button variant="primary">Vaccinated</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                })}
            </Row>
        </Container>
    );
}

export default Vaccinated;