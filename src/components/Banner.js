import React from 'react'

const Banner = ({firstName,lastName}) => (
    <div>
        <h1>Bulletin Board App</h1>
        <p>Created by {firstName +" "+lastName}</p>
    </div>
)


export default Banner