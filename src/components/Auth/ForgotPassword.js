import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import {
    StyledHeader,
    StyledForm,
    StyledInput,
    StyledButton,
} from '../StyledComponents';

const StyledContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
`;

export default function ForgotPassword() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => console.log('Data', data);

    return (
        <>
            <StyledContainer>
                <StyledHeader>Forgot your Password?</StyledHeader>
                <StyledHeader small>
                    Write email we send you a link to reset your password
                </StyledHeader>
                <StyledContainer>
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
                        <StyledButton type='submit'>
                            Send me a link!
                        </StyledButton>
                    </StyledForm>
                </StyledContainer>
            </StyledContainer>
        </>
    );
}
