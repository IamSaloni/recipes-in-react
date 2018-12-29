import React from 'react'

const Banner = ({firstName,lastName}) => (
    <div>
        <h1>Welcome to React</h1>
        <p>Created by {firstName +" "+lastName}</p>
    </div>
)


export default Banner