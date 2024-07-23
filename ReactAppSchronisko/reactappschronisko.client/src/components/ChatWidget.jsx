import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="chat-widget" style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
            {isOpen ? (
                <Card style={{ width: '300px', height: '400px' }}>
                    <Card.Header>
                        <Button variant="link" onClick={toggleChat} style={{ float: 'right' }}>X</Button>
                        <Card.Title>Porozmawiajmy :)</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="chatForm.ControlTextarea1">
                                <Form.Label>Napisz wiadmosc</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="O czym chcesz porozmiwiac ?" />
                            </Form.Group>
                            <Button variant="primary" type="submit">Wyslij</Button>
                        </Form>
                    </Card.Body>
                </Card>
            ) : (
                    <Button variant="primary" onClick={toggleChat}><Card.Img variant="top" src="/image/chat.png" /></Button>
            )}
        </div>
    );
}
