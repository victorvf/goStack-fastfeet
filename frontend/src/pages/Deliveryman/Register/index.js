import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import history from '~/services/history';

import MainButton from '~/components/MainButton';

import AvatarInput from '../AvatarInput';

import { Container, Content } from './styles';

export default function RegisterDeliveryman() {
    return (
        <Container>
            <div>
                <h1>Cadastro de encomendas</h1>
                <div>
                    <MainButton
                        back
                        onClick={() => history.push('/deliveryman')}
                    >
                        <MdKeyboardArrowLeft size={20} color="#fff" />
                        Voltar
                    </MainButton>
                    <MainButton>
                        <MdDone size={20} color="#fff" />
                        Salvar
                    </MainButton>
                </div>
            </div>

            <Content>
                <Form>
                    <AvatarInput name="avatar_id" />

                    <span>Entregador</span>
                    <Input
                        name="deliveryman"
                        placeholder="Nome do entregador"
                    />

                    <span>Produto</span>
                    <Input name="delivery" placeholder="Nome do produto" />
                </Form>
            </Content>
        </Container>
    );
}