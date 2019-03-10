import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";


class TodoList extends Component {
  constructor(props) {
   super(props);
   this.state = {
    items: [],
    amounts: []
  };

   this.addItem = this.addItem.bind(this);
   this.deleteItem = this.deleteItem.bind(this);
   this.deleteamt = this.deleteamt.bind(this);
 }
 deleteItem(key) {
  var filteredItems = this.state.items.filter(function (item) {
    return (item.key !== key);
  });

  this.setState({
    items: filteredItems
  });
}
deleteamt(key) {
 var filteredamts = this.state.amounts.filter(function (amount) {
   return (amount.key !== key);
 });

 this.setState({
   amounts: filteredamts
 });
}
 addItem(e) {
   if (this._inputElement.value !== "") {
    var newItem = {
      text: this._inputElement.value,
      key: Date.now()
    };
    this.setState((prevState) => {
      return {
        items: prevState.items.concat(newItem)
      };
    });
    this._inputElement.value = "";
  }
  if (this.ainputElement.value !== "") {
   var newAmt = {
     text: this.ainputElement.value,
     key: Date.now()
   };
   this.setState((prevState) => {
     return {
       amounts: prevState.amounts.concat(newAmt)
     };
   });
   this.ainputElement.value = "";
 }


  console.log(this.state.amounts);

  e.preventDefault();

  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
             placeholder="enter expense">
            </input> EXPENSE INVOLVED :
            <input ref={(b) => this.ainputElement = b}
             type = "number" min ="0" max= "1,00,000"
             placeholder="enter amount">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}
        aentry={this.state.amounts}
        delete={this.deleteItem}
        deletea={this.deleteamt}/>
      </div>
    );
  }
}

export default TodoList;
