import React from 'react'
import {FaEdit,FaTrash,FaWpforms} from 'react-icons/fa'


class Note extends React.Component {
    constructor(props){
        super(props);
        this.state={
            editing:false
        }
        this.edit=this.edit.bind(this)
        this.remove=this.remove.bind(this)
        this.renderForm=this.renderForm.bind(this)
        this.renderDisplay=this.renderDisplay.bind(this)
    }
    
    edit() {
       this.setState({
           editing:true
       })
    }
    remove() {
        alert('removing Note')
    }

    renderForm() {
        return(
            <div className="sticky">
            <form>
            <textarea />
            <button style={{backgroundColor:'pink'}}><FaWpforms /></button>
            </form>
           </div>

        )
    }
    renderDisplay() {
        return (
            <div className="sticky">
                <p>Sticky Note</p>
                <span className="action-btns">
                    <button onClick={this.edit} id="edit"><FaEdit /></button>
                    <button onClick={this.remove} id="remove"><FaTrash /></button>
                </span>
            </div>
        )
    }
    render() {
        if(this.state.editing) {
            return this.renderForm()
        }else {
            return this.renderDisplay()
        }
    }
}
    
export default Note