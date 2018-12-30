import React from 'react'
import {FaRegEdit,FaTrash} from 'react-icons/fa'

class Note extends React.Component {
    render() {
        return (
            <div className="sticky">
                <h1 >Sticky Note </h1>
                <button id="edit"><FaRegEdit /></button>
                <button id="remove"><FaTrash /></button>
            </div>
        )
}

}
export default Note
