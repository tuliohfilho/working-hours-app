import React, { ChangeEvent, useEffect, useState } from 'react';


import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { RootState } from '../../store';
import { clearEmployee } from "../../slices/employees/employee.slice";
import { fetchEmployee } from "../../slices/employees/employee.thunks";

import Home from "./Home";


const HomeContainer: React.FC = () => { 
    
    const history = useHistory();
    const dispatch = useDispatch();

    const [notFound, setNotFound] = useState(false);
    const [validity, setValidity] = useState(false);
    const [validated, setValidated] = useState(false);
    const [registration, setRegistration] = useState(String);
    const { employee } = useSelector((application: RootState) => application.employee);


    useEffect(() => {
        dispatch(clearEmployee());
    }, []);

    useEffect(() => {
        if (validity && employee) {
            if (Object.keys(employee).length === 0) {
                setNotFound(true);
            } else {
                history.push('/timekeeping');
            } 
        }
    }, [employee]);

    useEffect(() => {
        if (validity)
            dispatch(fetchEmployee(registration));
    }, [validity]);


    const changeRegistration = (e: ChangeEvent<HTMLInputElement>) => {
        setRegistration(e.target.value);
        setValidity(false);
        setNotFound(false);
        setValidated(false);
    };

    const submitRegistration = (event: ChangeEvent<HTMLInputElement>) => {
        const form = event.currentTarget;

        setValidated(true);
        setValidity(form.checkValidity());

        event.preventDefault();
        event.stopPropagation();
    };


    return (
        <Home 
            notFound={notFound}
            validated={validated}
            submitRegistration={submitRegistration}
            changeRegistration ={changeRegistration}/>
    )
}

export default HomeContainer;