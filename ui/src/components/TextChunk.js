import React, { useState, useEffect, useRef } from 'react';

const TextChunk = ({ key, text }) => {
    return(
        <div >
            {text === "" ? <br></br> : text}
        </div>
    )
}

export default TextChunk;