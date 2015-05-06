const React = require('react');
import counterRecord from '../stores/counter_store';
export default class MyComponent extends React.Component {
  constructor() {
    super();
    this.state = {counterRecord: counterRecord}
  }
  render() {
    return (
      <div>
        <p className="green-text bold-text">Chainigng component</p>
        <p>This is awesome</p>
        <h1>Hello, {this.state.counterRecord().deref()}</h1>
      </div>
    );
  }
};
