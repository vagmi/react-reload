const React = require('react');
import counterRecord,{increment} from '../stores/counter_store';

export default class IncrementComponent extends React.Component {
  constructor() {
    super();
    this.state = {counterRecord: counterRecord}
    this.increase= this.increase.bind(this);
  }
  increase() {
    increment()
  }
  render() {
    return (
      <button onClick={this.increase}>increment {this.state.counterRecord().deref()}</button>
    );
  }
}
