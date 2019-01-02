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
        this.save=this.save.bind(this)
        this.renderForm=this.renderForm.bind(this)
        this.renderDisplay=this.renderDisplay.bind(this)
    }
    
    edit() {
       this.setState({
           editing:true
       })
    }
    remove() {
        this.props.onRemove(this.props.index)
    }
    save(e) {
        e.preventDefault();
        this.props.onChange(this._newText.value, this.props.index)
        this.setState({
            editing:false
        })
    }

    renderForm() {
        return(
            <div className="sticky">
            <form action="POST" onSubmit={this.save}>
            <textarea ref={input => this._newText=input} />
            <button id="save" style={{backgroundColor:'pink'}} ><FaWpforms /></button>
            </form>
           </div>

        )
    }

    renderDisplay() {
        return (
            <div className="sticky" >
                <p>{this.props.children}</p>
                <span className="action-btns">
                    <button onClick={this.edit} id="edit"><FaEdit /></button>
                    <button onClick={this.remove} id="remove"><FaTrash /></button>
                </span>
            </div>
        )
    }
    render() {
       return this.state.editing ? this.renderForm() : this.renderDisplay()
    }
}
    
export default Note