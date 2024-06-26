import React from 'react';
import { getGifs } from "../../helpers/getGifs";

describe('Test in getGifs', () => { 

    test('It should return an array of gifs', async() => { 
        const gifs = await getGifs('One Punch');
        // console.log('gifs :>> ', gifs);
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })

    })

})