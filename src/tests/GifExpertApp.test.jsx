import React from 'react';
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { GifExpertApp } from '../GifExpertApp';

describe('Test in GifExpertApp', () => {

    test('should  add a new category to the categories array', async() => {

        const { getByRole } = render( <GifExpertApp/>);
        const newCategory = 'New Category';
        const input = getByRole('textbox');
        const form = getByRole('form');
        screen.debug();

        fireEvent.input(input, {target: {value: newCategory}});
        fireEvent.submit(form);

        await waitFor(() => {
            expect(input.value).toBe('');
        });


    })
})