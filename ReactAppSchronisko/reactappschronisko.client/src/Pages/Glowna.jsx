import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
import { Gallery } from 'react-grid-gallery';

function Glowna() {
    const images = [
        {
            src: '/image/adoptowany1.jpeg',
            thumbnail: '/image/adoptowany1.jpeg',
            thumbnailWidth: 320,
            thumbnailHeight: 212,
        },
        {
            src: '/image/adoptowany2.jpg',
            thumbnail: '/image/adoptowany2.jpg',
            thumbnailWidth: 320,
            thumbnailHeight: 212,
        },
        {
            src: '/image/adoptowany3.jpg',
            thumbnail: '/image/adoptowany3.jpg',
            thumbnailWidth: 320,
            thumbnailHeight: 212,
        },
        {
            src: '/image/adoptowany4.jpg',
            thumbnail: '/image/adoptowany4.jpg',
            thumbnailWidth: 320,
            thumbnailHeight: 212,
        },
        {
            src: '/image/adoptowany5.jpg',
            thumbnail: '/image/adoptowany5.jpg',
            thumbnailWidth: 320,
            thumbnailHeight: 212,
        },
        {
            src: '/image/adoptowany6.jpg',
            thumbnail: '/image/adoptowany6.jpg',
            thumbnailWidth: 320,
            thumbnailHeight: 212,
        },
        {
            src: '/image/adoptowany7.jpg',
            thumbnail: '/image/adoptowany7.jpg',
            thumbnailWidth: 320,
            thumbnailHeight: 212,
        },
        {
            src: '/image/adoptowany8.jpg',
            thumbnail: '/image/adoptowany8.jpg',
            thumbnailWidth: 320,
            thumbnailHeight: 212,
        },
        {
            src: '/image/adoptowany10.jpg',
            thumbnail: '/image/adoptowany10.jpg',
            thumbnailWidth: 320,
            thumbnailHeight: 212,
        },
        {
            src: '/image/adoptowany11.jpg',
            thumbnail: '/image/adoptowany11.jpg',
            thumbnailWidth: 320,
            thumbnailHeight: 212,
        },
    ];


    return (
        <div>
            <div className="section-margin">
                <h2 className="text-center">Aktualnosci:</h2> 
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="/image/main1.jpg" />
                    <Card.Body>
                        <Card.Title>Pozyskano nowego sponsora !</Card.Title>
                        <Card.Text>
                            Renomowana uczelnia WSB-NLU z siedziba w nowym Saczu naszym nowym sponsorem ! Dziekujemy !
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 30 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="/image/main2.jpg" />
                    <Card.Body>
                        <Card.Title>Pomoc powyborcza</Card.Title>
                        <Card.Text>
                            Plakaty wyborcze dostana drugie zycie, beda otulaly kojce zima, by zimny wiatr nie doskwieral naszym podopiecznym :)
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 hours ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="/image/main3.jpg" />
                    <Card.Body>
                        <Card.Title>Duuuuzy zapas karmy dzieki Panstwu Tomczyk</Card.Title>
                        <Card.Text>
                            Czy mozna na prezent weselny prosic o cos lepszego, niz szczescie czworonowgow, Panstwo Mateusz i Amelia uznali ze nie, i przekazali naszemu schronisku 137kg karmy !!!
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 12 hours ago</small>
                    </Card.Footer>
                </Card>
                </CardGroup>
            </div>
            
            <Row className="justify-content-center align-items-center" >
                <h2 className="text-center">Czekaja na adopcje:</h2> 

                <Card style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src="image/dog11.jpg" />
                    <Card.Body>
                        <Card.Title>Mangus</Card.Title>
                        <Card.Text>
                            3 Letni piesek czeka na dom
                        </Card.Text>
                        <Button variant="primary">Adoptuj</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src="image/dog12.jpg" />
                    <Card.Body>
                        <Card.Title>Sif</Card.Title>
                        <Card.Text>
                            Starsza suczka poszukuje domu
                        </Card.Text>
                        <Button variant="primary">Adoptuj</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src="image/dog13.jpg" />
                    <Card.Body>
                        <Card.Title>Quelag</Card.Title>
                        <Card.Text>
                            Pozna towazysza do zabaw
                        </Card.Text>
                        <Button variant="primary">Adoptuj</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src="image/kot11.jpg" />
                    <Card.Body>
                        <Card.Title>Puszek</Card.Title>
                        <Card.Text>
                            Czai sie na nowych wlascicieli
                        </Card.Text>
                        <Button variant="primary">Adoptuj</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src="image/kot12.jpeg" />
                    <Card.Body>
                        <Card.Title>Capra</Card.Title>
                        <Card.Text>
                            Wypatruje nowego domu
                        </Card.Text>
                        <Button variant="primary">Adoptuj</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src="image/kot13.jpg" />
                    <Card.Body>
                        <Card.Title>Taurus</Card.Title>
                        <Card.Text>
                            Ciekawa nowych przygod
                        </Card.Text>
                        <Button variant="primary">Adoptuj</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '17rem', margin: '10px' }}>
                    <Card.Img variant="top" src="image/strzalka.jpg" />
                    <Card.Body>
                        <Button variant="primary">Przegladaj wiecej</Button>
                    </Card.Body>
                </Card>

            </Row>

            <Row className="justify-content-center">
                <Col xs={10} md={10} className="text-center align-self-center">
                    <h2>Nasi podopieczni w nowych rodzinach:</h2>

                    <Gallery images={images} />
                </Col>

                <Carousel className="my-carousel">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/image/karuzela1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Psy</h3>
                            <p>W naszym schronisku znajduje sie ponad 70 psow, kazdy wymaga opieki i pozywienia, jak rowniez spacerow</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/image/karuzela2.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Koty</h3>
                            <p>Posiadamy rowniez ok 30 bezpanskich kotow, ktore caly czas szukaja ludzi dobrej woli, i o wielkim sercu</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/image/karuzela3.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Kocia kawiarnia</h3>
                            <p>Planujemy wraz z kawiarnia "Kawowe-Love" otworzyc kocia kawiarne, a przez to dac kota szansze na lepsze zycie i zmiane otoczenia</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>



        </div>
    );
}

export default Glowna;