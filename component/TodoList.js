import React, { useState } from "react";
import todo from "../images/todo.svg";

const App = () => {

    const [inputData, setinputData] = useState('');
    const [items, setItems] = useState([]);

    // additem//
    const addItem = () => {
        if (!inputData) {

        } else {
            setItems([...items, inputData]);
            setinputData('');
        }
    }

    //delete item //
    const deleteItem = (id) => {
        console.log(id);
        const updateditems = items.filter((elem, ind) => {
            return ind !== id;
        });
        setItems(updateditems);
    }

    //remove all //
    const removeAll = () => {
        setItems([]);
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="todologo" />
                        <figcaption>Add Your List✌️</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder="Add Your Items✍️"
                            value={inputData} onChange={(e) => setinputData(e.target.value)} />
                        <i className="fa fa-plus add-btn" title="Add Items" onClick={addItem} />
                    </div>
                    <div className="showItems" >

                        {
                            items.map((elem, ind) => {
                                return (

                                    <div className="eachItem" key={ind}>
                                        <h3>{elem}</h3>
                                        <i className="far fa-trash-alt add-btn" title="Delete Items" onClick={() => deleteItem(ind)} />
                                    </div>
                                );

                            })
                        }
                    </div>
                    <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>CheckList</span></button>
                </div>
            </div>
        </>
    );

}
export default App;

