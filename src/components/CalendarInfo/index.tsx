import React from 'react';


import { Row } from 'react-bootstrap';

import { SpanStyled } from "./styles";
import { DateFormatCurrent } from "../../utils";
import { ColAling, CalendarIcon } from "./../../components";


type props = {
    align?: string
};


const CalendarInfo: React.FC<props> = ({
    align
}) => {
    return (
        <Row>
            <ColAling align={align}>
                <CalendarIcon />
                <SpanStyled>{DateFormatCurrent()}</SpanStyled>
            </ColAling>
        </Row>
    )
}

export default CalendarInfo;