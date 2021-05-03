import styled from "styled-components";

import { Table, Row, Col } from "react-bootstrap";


export const DayCardContainer = styled(Row)`
    margin: 25px;
`;

export const DayCard = styled(Table)`
    min-height: 210px;
`;

export const DayCardTitle = styled.th`
    height: 50px;
    width: 14.28%;
    text-transform: uppercase;
    text-align: center !important;
    vertical-align: middle !important;  
`;

export const DayCardBody = styled.td`
    width: 14.28%;
    min-height: 160px;
    text-transform: uppercase;
    text-align: center !important;
    vertical-align: middle !important!;

    font-size: 30px;
    font-weight: 100;
    text-transform: uppercase;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const DayButton = styled.button`
    border: 0;
    width: 100%;
    color: #fff;
    height: 100px;
    font-size: 11pt;
    padding: 5px 34px;
    border-radius: 4px;
    background: #2e7d03;
    box-shadow: 1px 1px 2px 1px #a7a4a4;    
`;