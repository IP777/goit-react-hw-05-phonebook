import React, { Component } from "react";
import shortid from "shortid";
import { CSSTransition } from "react-transition-group";
//---------------------------------------
import Contacts from "./contact/Contacts";
import AddContactForm from "./contactForm/AddContactForm";
import PhonebookTitle from "./phonebookTitle/PhonebookTitle";
import SearchForm from "./searchForm/SearchForm";
import popTransition from "./transition/pop.module.css";

const filterContacts = (contacts, filter) => {
	return contacts.filter((contact) =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	);
};

export default class App extends Component {
	state = {
		contacts: [],
		filter: "",
	};

	changeFilter = (e) => {
		this.setState({ filter: e.target.value });
	};

	addContact = (contact) => {
		const { name } = contact;

		if (this.state.contacts.find((i) => i.name === name)) {
			alert(`${name} is already in contacts`);
		} else {
			const contactToAdd = {
				...contact,
				id: shortid.generate(),
				newItem: true,
			};

			this.setState((state) => ({
				contacts: [contactToAdd, ...state.contacts],
			}));
		}
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
	}

	render() {
		const { contacts, filter } = this.state;
		const filteredContacts = filterContacts(contacts, filter);

		return (
			<>
				<PhonebookTitle name="Phonebook" />
				<AddContactForm addContact={this.addContact} />

				<CSSTransition
					timeout={250}
					classNames={popTransition}
					in={contacts.length > 2 || filter ? true : false}
					unmountOnExit
				>
					<SearchForm
						value={filter}
						handleChange={this.changeFilter}
					/>
				</CSSTransition>
				<Contacts
					contacts={filteredContacts}
					onRemoveContact={this.removeContact}
				/>
			</>
		);
	}
}
