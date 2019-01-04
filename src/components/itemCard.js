import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const ItemCard = (props) => {
    console.log("props", props);
    return (
        <div className="col-lg-3 col-md-3 col-sm-12 shopping-item-card" key={props.title.toString()}>
            <Card>
                <CardImg top width="100%" height="173px" src={props.imgPath} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>Price: {props.price}</CardSubtitle>
                    {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                    <Button onClick={() => props.onClick(props)}>Add To Cart</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default ItemCard;