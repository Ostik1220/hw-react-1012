import './App.css';
import { Component } from 'react';
import AddContact from './Components/addContact';

class App extends Component {
state = {
  contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }],
  filter: '',
  name: ''
};

  render() {
    return (
          <div className="App">
              <h1>Phonebook</h1>
              <AddContact />
    </div>)}
}

export default App;




