import React, { useEffect } from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { IconButton } from '@material-ui/core';
import './ListItem.css';
import db from './firebase';
function ListItem({text, date, id}) {

    useEffect(() => {
        console.log(text, date);
    }, []);

    const handleDelete = (e) => {
        db.collection('todos').doc(id).delete();
    }
    return (
        <div className="listItem">
            <div className="listItem__body">
                <div className="listItem__left">
                    <p className="listItem__text">{text}</p>
                    <p className="listItem__date">{date}</p>
                </div>
                <div className="listItem__right">
                    <IconButton onClick={handleDelete}>
                        <DeleteForeverIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default ListItem
