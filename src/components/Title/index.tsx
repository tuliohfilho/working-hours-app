 import React from 'react';


import { TitleStyled } from "./styles";


const Title: React.FC = (props) => { 

    return (
        <TitleStyled>{props.children}</TitleStyled>
    )
}

export default Title;