// import { useEffect, useState } from "react";
import React from 'react';
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types';
// import { getGifs } from "../helpers/getGifs";

/* eslint-disable react/prop-types */
export const GifGrid = ({category}) => {

    const {images, isLoading } = useFetchGifs( category );
    // console.log({images, isLoading});
    
    
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading &&  (<h2>Loading...</h2>)
            }           

            <div className="card-grid">
                {
                    images.map((image)=>(
                    //   <li key={id}>{title}</li>
                        <GifItem 
                            key={image.id}
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.prototypes = {
    category: PropTypes.string.isRequired,
}
