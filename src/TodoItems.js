import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoItems extends Component {
  constructor(props) {
   super(props);

   this.createTasks = this.createTasks.bind(this);
   this.createAmts = this.createAmts.bind(this);
 }

 delete(key) {
   this.props.delete(key);
   this.props.deletea(key);
 }
  createTasks(item) {
  return <li onClick={() => this.delete(item.key)}
              key={item.key}>{item.text}</li>
}
createAmts(amount) {
    return <li
               key={amount.key}>{amount.text}</li>
  }
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
    var amtEntries = this.props.aentry;
    var listAmts = amtEntries.map(this.createAmts);




    return (
      <table>
      <tbody>
         <tr>
            <td> <ul className="theList">
      {listItems}
  </ul></td>
            <td> <ul className="theList">
      {listAmts}
  </ul></td>
         </tr>
         </tbody>
      </table>
    );
  }
};

export default TodoItems;
