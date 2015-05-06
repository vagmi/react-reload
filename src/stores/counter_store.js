const immstruct = require('immstruct');
const state = immstruct('state').reference([])

const counterRecord = () => immstruct('state').reference('ctr').cursor();
export default counterRecord;

export function increment() {
  let newCursor=counterRecord().update(x => x + 1);
};

function initState() {
  if(!counterRecord().deref()) {
    state.cursor().update(state => state.merge({ctr: 1}));
  }
}

initState();
