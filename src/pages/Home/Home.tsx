import React from "react";


import { Form } from "react-bootstrap";

import { If, CardBox } from "../../components";
import { NotFoundMessage, SubmitButton } from "./styles";


type props = {
    notFound: boolean,
    validated: boolean,
    submitRegistration: (e: any) => void,
    changeRegistration: (e: any) => void
};

const Home: React.FC<props> = ({
    notFound,
    validated,
    submitRegistration,
    changeRegistration: handleChangeRegistration
}) => {

return  (
        <CardBox 
            size={4} 
            title='Hi, How are you?'>
            <Form
                noValidate
                validated={validated}
                onSubmit={submitRegistration}>
                <Form.Group controlId="formRegistration">
                    <Form.Control
                        required
                        size="lg"
                        type="text"
                        placeholder="Enter registration"
                        onChange={handleChangeRegistration} />
                    <Form.Control.Feedback type="invalid">
                        <span>Please enter your registration. =')</span>
                    </Form.Control.Feedback>
                    <If conditional={notFound}>
                        <Form.Text muted>
                            <NotFoundMessage>
                                Sorry we did not find you. ='(
                            </NotFoundMessage>
                        </Form.Text>
                    </If>
                    <Form.Text muted>
                        <span>We'll never share your registration with anyone else.</span>
                    </Form.Text>
                </Form.Group>
                <SubmitButton
                    type='submit'
                    variant='primary'>
                    Submit
                </SubmitButton>
            </Form>
        </CardBox>
    )
}

export default Home;