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
    }
    update(newText,i) {
        console.log('update item at index', i, newText)
        this.setState(prevState => ({
            Notes: prevState.Notes.map(
                note => (note.id !== i)? note :  {id:101, note: newText}
            )
        }))
    }

        eachNote(note, i){
            return (
                <Note key={i}
                    index={i} onChange={this.update} >
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