import React, { useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Note from "./component/Note";
import CreateNote from "./component/CreateNote";

const App = () => {

    const [addItem, setAddItem] = useState([]);

    const addNote = (note) => {
        setAddItem((prevData) => {
            return [...prevData, note];
        });
    }

    const onDelete = (id) => {
        setAddItem((olddata) =>
            olddata.filter((currdata, indx) => {
                return indx !== id;
            })
        );
    };
    return (
        <>
            <Header />
            <CreateNote passNote={addNote} />
            {addItem.map((value, index) => {
                
                return (<Note
                    key={index}
                    id={index}
                    title={value.title}
                    content={value.content}
                    deleteItem={onDelete}
                />
                );
            })}
            <Footer />
        </>
    );
}
export default App;