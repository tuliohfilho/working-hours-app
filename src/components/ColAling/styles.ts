import styled from "styled-components";

import { Col } from 'react-bootstrap';


export const ColStyled = styled(Col)`
    text-align: ${props => props.align}
`;