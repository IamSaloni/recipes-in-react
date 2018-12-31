import React from 'react'

import Note from './Note'

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            Notes : [
                {
                    id:0,
                    note:"call lisa"
                },
                {
                    id:1,
                    note:"email John"
                },
                {
                    id:2,
                    note:"Saloni email"
                }
            ]
        }
        this.eachNote=this.eachNote.bind(this)
        this.update=this.update.bind(this)
        this.remove=this.remove.bind(this)
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
            </div>
        )
    }
}

export default Board