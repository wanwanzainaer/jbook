import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ReactDOM from 'react-dom';
// import { CodeCell } from './components/code-cell';

import { Provider } from 'react-redux';
import { store } from './state';
import { CellList } from './components/cell-list';
const App = () => {
  return (
    <div>
      <CellList />
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
