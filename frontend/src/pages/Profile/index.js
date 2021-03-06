import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { FaSpinner } from 'react-icons/fa';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.user.profile);
    const loading = useSelector((state) => state.user.loading);

    const handleSubmit = useCallback(
        (data) => {
            dispatch(updateProfileRequest(data));
        },
        [dispatch]
    );

    const handleSignOut = useCallback(() => {
        dispatch(signOut());
    }, [dispatch]);

    return (
        <Container loading={loading}>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <Input type="text" name="name" placeholder="Nome completo" />
                <Input
                    type="email"
                    name="email"
                    placeholder="Seu endereço de e-mail"
                />
                <hr />

                <Input
                    type="password"
                    name="oldPassword"
                    placeholder="Sua senha atual"
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Nova senha"
                />
                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirma nova senha"
                />

                <button type="submit">
                    {loading ? (
                        <FaSpinner size={20} color="#fff" />
                    ) : (
                        'Atualizar perfil'
                    )}
                </button>
            </Form>
            <button type="submit" onClick={handleSignOut}>
                Sair
            </button>
        </Container>
    );
}
