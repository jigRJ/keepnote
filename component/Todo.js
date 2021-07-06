import React from "react";
import todo from "../images/todo.svg";

const App = () => {

    return (

        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src={todo} alt="todologo" />
                    <figcaption>Add Your Items ✌️</figcaption>
                </figure>

                <div className="addItems">
                    <input type="text" placeholder="Add Items ..✍️" />
                    <i className="fa fa-plus add-btn" title="Add Item" />
                </div>

                <div className="showItems">
                    <div className="eachItem">
                        <h3>Apple</h3>
                        <i className="far fa-trash-alt add-btn" title="Delete Item" />
                    </div>
                </div>

                <button className="btn effect04" data-sm-link-text="Remove All"><span>CheckList</span></button>
            </div>
        </div>
    );

}
export default App;