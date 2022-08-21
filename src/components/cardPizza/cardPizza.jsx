import './style.css'
import { Button, Card, CardTitle, CardSubtitle, CardFooter, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom'


const card = (props) => {
    return (
        <div className="card-pizza">
            <Card
                outline
                style={{
                    width: '16rem',
                    margin: '1rem',
                    minHeight: '30rem',
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
                    <ul>
                        {
                            props.pizza.ingredients.map((ingredients, key) => {
                                return <li key={props.pizza.name + key}>{ingredients}</li>
                            })
                        }
                    </ul>
                </CardBody>
                <CardFooter>
                    <Link to={`/pedir-pizza/${props.id}`}>
                        <Button color='danger'>
                            Peça já!
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}

export default card