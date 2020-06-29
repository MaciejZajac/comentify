import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import Arrow from 'react-feather/dist/icons/arrow-right';
import { StyledButton, StyledHeader } from '../StyledComponents';
const StyledContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
`;

const StyledInput = styled.input`
    border: 1px solid white;
    outline: none;

    padding: 10px;
    margin-bottom: 8px;
    ${({ error }) =>
        error &&
        `
        border-color: red;
        box-shadow: 0 0 2px red;
    `};
    transition: all 0.25s linear;
`;

export default function SignIn() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async (data) => {
        try {
            const response = await Axios.post(
                'http://localhost:5000/api/auth/signin',
                data
            );
            const json = await response.json();
        } catch (err) {
            console.log('err', err);
        }
    };

    return (
        <StyledContainer>
            <StyledHeader>Create free account</StyledHeader>
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
                    error={errors.nickName}
                    name='nickName'
                    type='text'
                    defaultValue=''
                    placeholder='Nickname'
                    ref={register({ required: true })}
                />
                <StyledInput
                    error={errors.password}
                    name='password'
                    type='password'
                    defaultValue=''
                    placeholder='Password'
                    ref={register({ required: true })}
                />
                <StyledInput
                    error={errors.repeatPassword}
                    name='repeatPassword'
                    type='password'
                    defaultValue=''
                    placeholder='Repeat password'
                    ref={register({ required: true })}
                />
                {errors.exampleRequired && <span>This field is required</span>}

                <StyledButton type='submit'>
                    Create an Account <Arrow />
                </StyledButton>
            </StyledForm>
        </StyledContainer>
    );
}
