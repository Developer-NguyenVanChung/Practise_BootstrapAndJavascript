import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

ShowData.propTypes = {
    data: PropTypes.array
};

function ShowData({ data }) {
    return (
        <Container>
            <Row>
                {data.map(item => {
                    return (
                        <Col sm={3} key={item.id} className='m-0'>
                            <Card className="text-center" >
                                <Card.Img variant="top" src={item.avatar} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        Age:{(new Date().getFullYear()) - item.dateOfBirth}
                                    </Card.Text>
                                    <Button variant= {item.vaccinated? "primary" : "danger"} >{
                                        item.vaccinated? 'Vaccinated':'Not vaccinated'
                                    }</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>

        </Container>
    );
}

export default ShowData;