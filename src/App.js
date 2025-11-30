import "./App.css";
import { Component } from "react";
import AddContact from "./Components/addContact";
import ContactList from "./Components/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    filter: "",
  };

  collector = (newContact) => {
    if (
      this.state.contacts.some(
        (item) => item.name.trim() === newContact.name.trim()
      )
    ) {
      alert("такий контакт уже існує");
      return;
    }

    newContact.id = `id-${this.state.contacts.length + 1}`;

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = (contactToDelete) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.name !== contactToDelete
      ),
    }));
  };

  componentDidUpdate() {
    console.log(this.state.contacts);
  }

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <AddContact infoCollect={this.collector} />
        <h2>contacts</h2>
        <ContactList
          contacts={this.state.contacts}
          deleteFunction={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
