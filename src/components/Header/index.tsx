import React, { useEffect, useState } from 'react';


import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { Nav, Navbar} from "react-bootstrap";

import { RootState } from '../../store';
import { If } from "./../../components";

import { clearEmployee } from "../../slices/employees/employee.slice";


const Header: React.FC = () => { 

    const history = useHistory();
    const dispatch = useDispatch();
    
    const [validity, setValidity] = useState(true);

    const { employee } = useSelector((application: RootState) => application.employee);


    useEffect(() => {
        if(!employee || Object.keys(employee).length === 0)
            setValidity(false);
        else
            setValidity(true);
    }, [employee]);

    const homeHandler = () => {
        setValidity(false);
        dispatch(clearEmployee());

        history.push('/');
    };

    return (
        <If conditional={validity}>
            <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand href="#home">KEEPING</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link onClick={homeHandler}>Home</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        </If>
    )
}

export default Header;