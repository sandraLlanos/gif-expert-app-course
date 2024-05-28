import React from 'react';
import { useState } from "react"
// import { AddCategoryB } from "./components/AddCategoryB"
import { AddCategoryA, GifGrid } from "./components/";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

    // const onAddCategory = () => {
    //     // console.log('Valorant');
    //     // setCategories( cat => [...cat, 'Valorant'])
    //     setCategories([ ...categories, 'Valorant'])
    // }
    const onAddCategory = (newCategory) => {
        console.log('newCategory :>> ', newCategory);
        // validate unique key
        if (categories.includes(newCategory)) return;

        setCategories([ newCategory, ...categories])
    }
   
    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            {/* <AddCategoryB onAddCategories={setCategories} /> */}
            <AddCategoryA onNewCategory={ event => onAddCategory(event) }/> 
            {/* Listado de Gifs */}

            {/* <button onClick={ onAddCategory }>Add</button> */}
            {/* <ol> */}
                { categories.map(category => (
                    <GifGrid key={category} category={category} />)
                )}
            {/* </ol> */}

            {/* gifs items */} 
        </>
    )
}
