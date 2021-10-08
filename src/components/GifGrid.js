import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const { data, loading } = useFetchGifs(category);

    return (
        <div className="card-grid">
            <h3>{ category }</h3>
            { loading && <p>Loading...</p> }
            <ol>
                { 
                    data.map(img => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </ol>
        </div>
    )
}
