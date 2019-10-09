import React from 'react'

export default Image = ({width, height}) => {
    const url = `https://picsum.photos/${width}/${height}`;
    return (
        <img src={url}/>
    )
}