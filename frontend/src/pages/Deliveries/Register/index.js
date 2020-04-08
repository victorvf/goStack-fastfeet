import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import history from '~/services/history';

import MainButton from '~/components/MainButton';

import { Container, Content, FirstForm, LastForm } from './styles';

export default function RegisterDelivery() {
    return (
        <Container>
            <div>
                <h1>Cadastro de encomendas</h1>
                <div>
                    <MainButton
                        back
                        onClick={() => history.push('/deliveries')}
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
                    <FirstForm>
                        <div>
                            <span>Destinatário</span>
                            <Input
                                name="recipient"
                                placeholder="Nome do destinatário"
                            />
                        </div>

                        <div>
                            <span>Entregador</span>
                            <Input
                                name="deliveryman"
                                placeholder="Nome do entregador"
                            />
                        </div>
                    </FirstForm>

                    <LastForm>
                        <span>Produto</span>
                        <Input name="delivery" placeholder="Nome do produto" />
                    </LastForm>
                </Form>
            </Content>
        </Container>
    );
}
