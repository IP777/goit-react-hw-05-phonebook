import React, { Component } from "react";
import shortid from "shortid";
//---------------------------------------
import Contacts from "./contact/Contacts";
import AddContactForm from "./contactForm/AddContactForm";
import PhonebookTitle from "./phonebookTitle/PhonebookTitle";
import SearchForm from "./searchForm/SearchForm";
import AlertWindow from "./alertWindow/AlertWindow";

const filterContacts = (contacts, filter) => {
	return contacts.filter((contact) =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	);
};

export default class App extends Component {
	state = {
		contacts: [],
		filter: "",
		alertWindow: false,
		alertWindowDelay: 250,
	};

	changeFilter = (e) => {
		this.setState({ filter: e.target.value });
	};

	addContact = (contact) => {
		const { name } = contact;

		if (this.state.contacts.find((i) => i.name === name)) {
			//alert(`${name} is already in contacts`);
			this.alertToggle();
		} else {
			const contactToAdd = {
				...contact,
				id: shortid.generate(),
				newItem: true,
			};

			this.setState((state) => ({
				contacts: [contactToAdd, ...state.contacts],
			}));
			this.setState({ alert: false });
		}
	};

	alertToggle = () => {
		this.setState({ alertWindow: true });

		setTimeout(() => {
			this.setState({ alertWindow: false });
			console.log(this.state.alertWindow);
		}, this.state.alertWindowDelay);
	};

	removeContact = (id) => {
		this.setState((state) => ({
			contacts: state.contacts.filter((contact) => contact.id !== id),
		}));
	};

	componentDidUpdate() {
		localStorage.setItem("contact", JSON.stringify(this.state.contacts));
	}

	componentDidMount() {
		const contact = localStorage.getItem("contact");

		if (contact) {
			const convrtArr = JSON.parse(contact);
			this.setState(() => ({
				contacts: [...convrtArr],
			}));
		}
		console.log("componentDidMount");
	}

	render() {
		const { contacts, filter, alertWindow, alertWindowDelay } = this.state;
		const filteredContacts = filterContacts(contacts, filter);

		return (
			<>
				<PhonebookTitle name="Phonebook" />

				<AddContactForm addContact={this.addContact} />

				<SearchForm
					value={filter}
					handleChange={this.changeFilter}
					toggle={contacts.length > 2 || filter ? true : false}
				/>

				<Contacts
					contacts={filteredContacts}
					onRemoveContact={this.removeContact}
				/>

				<AlertWindow
					delay={alertWindowDelay}
					toggle={alertWindow}
					text={`Contact already exists!`}
				/>
			</>
		);
	}
}
