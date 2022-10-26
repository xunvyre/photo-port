import React from 'react';
import PhotoList from '../PhotoList';
import {capitalizeFirstLetter} from '../../utils/helpers';

function Gallery({currentCategory})
{
    const {name, description} = currentCategory;
    return(
        <section>
            <h1>{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <PhotoList category={currentCategory.name}></PhotoList>
        </section>
    );
};

export default Gallery;