import { Component } from "react";

class ContactList extends Component {
  state = {
    filter: "",
  };

  valueCollector = (event) => {
    this.setState({
      filter: event.target.value,
    });
    console.log(this.state.filter);
  };

  deletionHandler = (event) => {
    const contactToDelete = event.target.parentNode.firstChild.textContent;
    console.log(contactToDelete);
    this.props.deleteFunction(contactToDelete);
  };

  render() {
    return (
      <>
        <input type="text" onChange={this.valueCollector} />
        <ul>
          {this.props.contacts.map((contact) =>
            contact.name
              .toLowerCase()
              .includes(this.state.filter.toLowerCase()) ? (
              <li key={contact.id}>
                {contact.name} : {contact.number}
                <button onClick={this.deletionHandler}>delete contact</button>
              </li>
            ) : null
          )}
        </ul>
      </>
    );
  }
}

export default ContactList;
