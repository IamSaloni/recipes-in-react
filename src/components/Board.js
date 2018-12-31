import React from 'react'

import Note from './Note'
import {FaFolderPlus} from 'react-icons/fa'

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            Notes : []
        }
        this.eachNote=this.eachNote.bind(this)
        this.update=this.update.bind(this)
        this.remove=this.remove.bind(this)
        this.add=this.add.bind(this)
        this.nextId=this.nextId.bind(this)
    }

    add(text) {
        this.setState(prevState => ({
            Notes: [
                ...prevState.Notes, 
                {
                    id:this.nextId(),
                    note:text
                }
            ]
        }))
    }
    nextId() {
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
    }
    update(newText,i) {
        console.log('update item at index', i, newText)
        this.setState(prevState => ({
            Notes: prevState.Notes.map(
                note => (note.id !== i)? note :  {id:note.id, note: newText}
            )
        }))
    }

        remove(id) {
            console.log('remove item at', id)
            this.setState(prevState => ({
                Notes: prevState.Notes.filter(note => note.id !==id)
            }))
        }

        
        eachNote(note, i){
            return (
                <Note key={i}
                    index={i} onChange={this.update} 
                            onRemove={this.remove}>
                    {note.note}</Note>
            )
        }
    render() {
        return (
            <div className="board">
                {this.state.Notes.map(this.eachNote)}
                <button onClick={this.add.bind(null,"New Note")} id="add"><FaFolderPlus /></button>
            </div>
        )
    }
}

export default Board