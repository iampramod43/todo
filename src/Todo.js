import React, { useState, useEffect } from 'react'
import ListItem from './ListItem';
import './Todo.css';
import AddIcon from '@material-ui/icons/Add';
import db from './firebase';
import moment from 'moment';
function Todo() {
    const [listItems, setListItems] = useState([]);
    const [input, setInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('todos').add({
            text: input,
            timestamp: new Date().getTime(),
        })
        setInput('');
    }

    useEffect(() => {
        db.collection("todos").orderBy('timestamp', 'asc').onSnapshot(snapshot => (
            setListItems(snapshot.docs.map(doc => (
                     {
                        id: doc.id,
                        text: doc.data().text,
                        date: moment(doc.data().timestamp).format('MMMM Do YYYY, h:mm:ss a'),
                    }
        )))
        ));
    }, []);


    return (
        <div className="todo">
            <div className="todo__body">
                <div className="todo__header">
                    <span className="todo__headerName">
                        Todo List
                    </span>
                </div>
                <div className="todo__todoList">
                    {listItems.map((item) => (
                        <ListItem key={item.id} id={item.id} text={item.text} date={item.date}/>
                    ))}
                    
                    {/* <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem /> */}
                </div>
                <div className="todo__addList">
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Add your todo item" />
                        <button type="submit" onClick={handleSubmit}><AddIcon /></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Todo
