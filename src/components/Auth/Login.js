import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {
    StyledHeader,
    StyledButton,
    StyledForm,
    StyledInput,
} from '../StyledComponents';

const StyledContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
`;

export default function Login() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => console.log('Data', data);

    return (
        <StyledContainer>
            <StyledHeader>Log in</StyledHeader>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <StyledInput
                    error={errors.email}
                    name='email'
                    type='text'
                    defaultValue=''
                    placeholder='Email'
                    ref={register({
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'invalid email address',
                        },
                    })}
                />
                <StyledInput
                    error={errors.password}
                    name='password'
                    type='password'
                    defaultValue=''
                    placeholder='Password'
                    ref={register({ required: true })}
                />

                <StyledButton type='submit'>Create an Account</StyledButton>
                <Link to='/signin'>Do not have an account yet?</Link>
                <Link to='/forgot-password'>Forgot your password?</Link>
            </StyledForm>
        </StyledContainer>
    );
}
