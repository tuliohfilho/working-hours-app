import React from 'react';


import { AppWrapperStyled } from "./styles";

const AppWrapper: React.FC = ({ children }) => { 

    return (
        <AppWrapperStyled>{children}</AppWrapperStyled>
    )
}

export default AppWrapper;