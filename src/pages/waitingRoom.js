import React, { useState } from 'react';
import { Form, Button, Col, Row } from "react-bootstrap";

const WaitingRoom = ({ joinChatRoom }) => {

    const [username, setUsername] = useState();
    const [chatRoom, setChatRoom] = useState();

    return <Form onSubmit={e => {
        e.preventDefault();
        joinChatRoom(username, chatRoom);
    }}>
        <Row class='px-5 y-5' style={{ width : "500px", margin : "20px"}}>
            <Col sm={12}>
                <h5 className='fw-normal'>Username</h5>
                <Form.Group>
                    <Form.Control placeholder="Username"
                        onChange={e => setUsername(e.target.value)} />
                    <br />
                    <h5 className='fw-normal'>Room Chat Number</h5>
                    <Form.Control placeholder="Room"
                        onChange={e => setChatRoom(e.target.value)} />
                </Form.Group>
            </Col>
            <Col sm={12}>
                <hr />
                <div className="d-grid gap-2">
                    <Button variant='success' type='submit' className='justify-center'>Join</Button>
                </div>
            </Col>
        </Row>
    </Form>
}

export default WaitingRoom;