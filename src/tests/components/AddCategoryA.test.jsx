import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategoryA } from '../../components/AddCategoryA';

describe('test in <AddCategoryA/>', () => { 

    test('should change an input value', () => { 
        // This is the subject of testing.
        render( <AddCategoryA onNewCategory={ () => {} } />);
        // screen.debug();
        const input = screen.getByRole('textbox');
        fireEvent.input( input, {target: {value: 'Saitama'}} );
        expect( input.value ).toBe('Saitama');
        // screen.debug();

    });

    test('should call onNewCategory if the input has a value', () => {
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        // render( <AddCategoryA onNewCategory={ () => {} } />);
        render( <AddCategoryA onNewCategory={ onNewCategory } />);
        const input =  screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: { value: inputValue }} );
        fireEvent.submit(form);
        // screen.debug();
        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalled();
        // expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);
    }); 

    test('should not call onNewCategory if the input is empty', () => {
        const onNewCategory = jest.fn();

        render( <AddCategoryA onNewCategory={ onNewCategory } />);
        const form = screen.getByRole('form');

        fireEvent.submit(form);

        // expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
    })


})