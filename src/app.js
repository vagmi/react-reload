require("!style!css!less!./styles/app.less");
const immstruct = require('immstruct');
const state = immstruct({state: null});
const React = require('react');
import MyComponent from './components/my_component';
import IncrementComponent from './components/increment';

const render = () => {
  React.render(
    <div>
      <MyComponent/>
      <IncrementComponent/>
    </div>,
  document.getElementById('root'));
}
render()
immstruct('state').reference([]).observe(render);
