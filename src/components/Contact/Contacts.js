import React from "react";
import style from "./Contacts.module.css";

const Contacts = ({ contacts, onRemoveContact }) => {
	return (
		<ul className={style.list}>
			{contacts.map(({ id, name, number, newItem }) => (
				<li
					key={id}
					className={newItem ? style.newComponent : style.component}
				>
					{name}: {number}
					<input
						type="button"
						value="Delete"
						onClick={() => onRemoveContact(id)}
						className={style.btn}
					/>
				</li>
			))}
		</ul>
	);
};

export default Contacts;
