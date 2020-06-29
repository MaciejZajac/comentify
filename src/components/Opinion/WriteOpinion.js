import React, { useState } from 'react';
import {
    StyledInput,
    StyledForm,
    StyledTextArea,
    StyledButton,
    StyledHeader,
} from '../StyledComponents';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import { Loader } from 'react-feather';

export default function WriteOpinion() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            const response = await Axios.post(
                'http://localhost:5000/opinions/add',
                data
            );
            console.log('response', response);
            setIsLoading(false);
        } catch (err) {
            console.log('err', err);
            setError('Something went wrong, try again later.');
        }
    };
    return (
        <div style={{ textAlign: 'center' }}>
            <StyledHeader>Write something!</StyledHeader>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <StyledInput
                    error={errors.email}
                    name='email'
                    type='text'
                    defaultValue=''
                    placeholder='Your Email (not visible for others)'
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
                    placeholder='Nick (visible for others)'
                    ref={register({ required: true })}
                />

                <StyledTextArea
                    error={errors.text}
                    name='text'
                    defaultValue=''
                    placeholder='Your opinion...'
                    ref={register({ required: true })}
                />
                {error && <div>{error}</div>}
                <StyledButton type='submit'>
                    {isLoading ? <Loader /> : 'Add your opinion'}
                </StyledButton>
            </StyledForm>
        </div>
    );
}
