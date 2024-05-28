import React from 'react';
import { GifGrid } from "../../components/GifGrid";
import {render, screen} from '@testing-library/react';
import { useFetchGifs } from '../../hooks/useFetchGifs';

// Create a full mock of this path
jest.mock('../../hooks/useFetchGifs');

describe('Test in <GifGrid/>', () => {
    const category = 'One punch';

    test('should display the loading first', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render( <GifGrid category={ category }/> );
        // screen.debug();
        expect( screen.getByText('Loading...'));
        expect( screen.getByText( category ));
    });

    test('should display items when images are loaded useFetchiGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: 'ABC',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });
        render( <GifGrid category={ category }/> );
        // screen.debug(); 
        expect( screen.getAllByRole('img').length ).toBe(2)
    })
})