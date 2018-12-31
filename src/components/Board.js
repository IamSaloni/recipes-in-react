import React from 'react'

import Note from './Note'

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            Notes : [
                {
                    id:33,
                    note:"call lisa"
                },
                {
                    id:34,
                    note:"email John"
                },
                {
                    id:35,
                    note:"Saloni email"
                },
                
            ]
        }
        this.eachNote=this.eachNote.bind(this)
    }

        eachNote(note, i){
            return (
                <Note key={i}
                    index={i}>
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