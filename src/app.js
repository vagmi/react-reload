require("!style!css!less!./styles/app.less");
const immstruct = require('immstruct');
const state = immstruct({state: null});
const React = require('react');
import Layout from './components/layout';

const render = () => {
  React.render(
    <Layout/>,
  document.getElementById('root'));
}
render()
immstruct('state').reference([]).observe(render);
