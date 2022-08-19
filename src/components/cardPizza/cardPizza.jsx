import React from 'react'
import './style.css'
import { Button, Card, CardTitle, CardSubtitle, CardText, CardBody } from 'reactstrap';

const card = (props) => {
    return (
        <div className="card-pizza">
            <div className="informations">
                <Card
                    outline
                    style={{
                        width: '18rem',
                        margin: '1rem'
                    }}
                >
                    <img
                        alt="Sample"
                        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            <p>{props.name}</p>
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            <p>R$ {props.price}</p>
                        </CardSubtitle>
                        <CardText>

                        </CardText>
                        <Button color='danger'>
                            Peça já!
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default card