import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import history from '~/services/history';

import MainButton from '~/components/MainButton';

import { Container, Content, FirstForm, MiddleForm, LastForm } from './styles';

export default function RegisterRecipient() {
    return (
        <Container>
            <div>
                <h1>Cadastro de encomendas</h1>
                <div>
                    <MainButton back onClick={() => history.push('/recipient')}>
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
                        <span>Nome</span>
                        <Input name="name" placeholder="Nome do destinatário" />
                    </FirstForm>
                    <MiddleForm>
                        <div>
                            <span>Rua</span>
                            <Input
                                name="street"
                                placeholder="Ex. Rua de baixo"
                            />
                        </div>

                        <div>
                            <span>Número</span>
                            <Input name="number" placeholder="0000" />
                        </div>

                        <div>
                            <span>Complemento</span>
                            <Input name="complement" />
                        </div>
                    </MiddleForm>
                    <LastForm>
                        <div>
                            <span>Cidade</span>
                            <Input name="city" placeholder="Nome da cidade" />
                        </div>

                        <div>
                            <span>Estado</span>
                            <Input name="state" placeholder="Nome do estado" />
                        </div>

                        <div>
                            <span>CEP</span>
                            <Input name="cep" placeholder="00.000-000" />
                        </div>
                    </LastForm>
                </Form>
            </Content>
        </Container>
    );
}