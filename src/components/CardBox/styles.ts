import styled from "styled-components";

import { Row, Col } from "react-bootstrap";


export const CardContainer = styled(Row)`
    height: 80vh;
    align-items: center;
    justify-content: center;
`;

export const Card = styled(Col)`
    padding: 25px;
    border-radius: 5px;
    background-color: #fff;
`;

export const CardTitle = styled(Col)`
    text-align: center !important;
`;

export const CardBody = styled(Col)`
    margin-top: 20px;
`;