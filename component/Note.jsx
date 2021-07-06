import React from "react";
import DeleteOutLineIcon from '@material-ui/icons/DeleteForever';

const Note = (props) => {
    const deleteNote = () => {
        props.deleteItem(props.id);
    };
    return (
        <>
            <div className="note">
                <h1 className="title">{props.title}</h1>
                <br />
                <p>{props.content}</p>

                <button className='btn' onClick={deleteNote}>
                    <DeleteOutLineIcon className=" deleteIcon" />
                </button>
            </div>
        </>

    );
}
export default Note;