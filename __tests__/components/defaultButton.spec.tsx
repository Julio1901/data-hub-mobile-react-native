import React from 'react'
import {  render } from '@testing-library/react-native'
import { DefaultButton } from '../../src/components/DefaultButton/defaultButton'
import '@testing-library/jest-native/extend-expect';

describe('DefaultButton', () =>{

    it('Should render button with correct text', () => {
        const {getByText} = render(<DefaultButton title='Login'/>)
        const component = getByText('Login')
        expect(component).toBeTruthy()
    })

    it('Should render button with correct width when value is passed',  async () => {
        const { findByTestId } = render(<DefaultButton title="Login" width={200} />);   
        const view = await findByTestId('button-view');
        const estilo = view.props.style
        const largura = estilo && estilo.width ? estilo.width : undefined;
        expect(largura).toBe(200);
    })

    it('Should render button without view when value is not passed and button width auto',  async () => {
        const { findByTestId } = render(<DefaultButton title="Login"/>);   
        const button = await findByTestId('default-button-id');
        const estilo = button.props.style
        const largura = estilo && estilo.width ? estilo.width : undefined;
        expect(largura).toBe('auto');
    })



})
