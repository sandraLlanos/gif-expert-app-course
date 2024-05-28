import React from 'react';
import { render, screen } from "@testing-library/react"
import { GifItem } from "../../components/GifItem"

describe('test in GifItem', () => { 
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('It should match with a snapshot', () => {
        const {container} = render( <GifItem title={title} url={url}/>);
        expect( container ).toMatchSnapshot();
    });

    test('It should show the image with the correct url and the ALT text', () => { 
        render( <GifItem title={title} url={url}/>);
        screen.debug();
        // expect(screen.getByRole( 'img' ).src).toBe( url );
        // expect(screen.getByRole( 'img' ).alt).toBe( title );
        const {src, alt} = screen.getByRole('img');
        expect( src ).toBe( url);
        expect( alt ).toBe( alt );
    });

    test('It should show the title in the component', () => { 
        render( <GifItem title={title} url={url}/>);
        expect( screen.getByText(title) ).toBeTruthy();
    })
})