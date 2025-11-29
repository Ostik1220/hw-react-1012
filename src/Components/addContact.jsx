import { Component } from "react";

class AddContact extends Component {
    state = {
        name: '',
        number: ''
    };

    collectingInput = (event) => {
        event.preventDefault();
        this.setState({
            name: event.target.elements.name.value,
            number: event.target.elements.number.value
        });
        console.log(this.state);
        event.target.elements.name.value = '';
        event.target.elements.number.value = '';
    }

    render() {
        return (
                  <form  onSubmit={this.collectingInput}>
        <h2>Add new contact</h2>
      <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
<br />
<input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
<br />
<button type="submit">Add contact</button>
</form>
        )
    }
}

export default AddContact;