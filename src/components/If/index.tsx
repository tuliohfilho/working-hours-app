import React from 'react';


type props = {
    conditional: boolean
};

const If: React.FC<props> = ({
    children,
    conditional
}) => { 

    return (
        <>
            {conditional && children}
        </>
    )
}

export default If;