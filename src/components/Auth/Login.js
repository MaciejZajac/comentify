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
import { ArrowRight } from 'react-feather';
import Axios from 'axios';

const StyledContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
`;

export default function Login() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async (data) => {
        try {
            const response = await Axios.post(
                'http://localhost:5000/api/auth/login',
                data
            );
            const json = await response.json();
        } catch (err) {
            console.log('err', err);
        }
    };

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

                <StyledButton type='submit'>
                    Log in
                    <ArrowRight />
                </StyledButton>
                <Link to='/signin'>Do not have an account yet?</Link>
                <Link to='/forgot-password'>Forgot your password?</Link>
            </StyledForm>
        </StyledContainer>
    );
}
