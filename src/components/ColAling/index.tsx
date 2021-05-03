import React from 'react';


import { ColStyled } from "./styles";


type props = {
    align?: string
};


const ColAling: React.FC<props> = ({
    align,
    children
}) => { 
    return (
        <ColStyled align={align?.toString()}>{children}</ColStyled>
    )
}

export default ColAling;