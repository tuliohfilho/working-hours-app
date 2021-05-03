import React from "react";


import { Title } from "./../../components";
import { CardContainer, Card, CardTitle, CardBody } from "./styles";


interface CardType {
    size: number,
    align?: string,
    title?: string
};

const CardBox: React.FC<CardType> = ({
    children,
    size,
    title
  }) => {

    return (
        <CardContainer>
            <Card md={size}>
                <CardTitle>
                    <Title>{title}</Title>
                </CardTitle>
                <hr />
                <CardBody>
                    {children} 
                </CardBody>
            </Card>
        </CardContainer>
    )
}

export default CardBox; 