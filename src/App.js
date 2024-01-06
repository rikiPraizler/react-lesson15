import logo from './logo.svg';
import './App.css';
import List from './components/List';
import SongDetails from './components/SongDetails';
import Edit from './components/Edit';
import { useSelector } from 'react-redux';
import AddBook from './components/AddBook';

function App() {
  let selected = useSelector(state => state.selectedBook);
  let selectedBookForEdit = useSelector(state => state.selectedBookForEdit);
  let openFormForAdd = useSelector(state => state.openFormForAdd);
  return (
    <div className="App">
      <List />
      {selected && <SongDetails />}
      {selectedBookForEdit && <Edit />}
      {openFormForAdd && <AddBook/>}
    </div>
  );
}

export default App;
