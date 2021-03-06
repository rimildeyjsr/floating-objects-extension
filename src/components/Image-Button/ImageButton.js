import React from 'react'
import './ImageButton.css';

export default function ImageButton(props) {
  return (
    <button
      onClick={() => props.handleClick(props.imageKey)}
    >
      <img
        src={props.imageSrc}
        alt={props.imageAltText}
      />
    </button>
  )
}
