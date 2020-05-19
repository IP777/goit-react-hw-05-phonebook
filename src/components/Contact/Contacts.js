import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
//------------------------------------------
import style from "./Contacts.module.css";
import popTransition from "./../transition/pop.module.css";

const Contacts = ({ contacts, onRemoveContact }) => {
	return (
		<TransitionGroup component="ul" className={style.list}>
			{contacts.map(({ id, name, number, newItem }) => (
				<CSSTransition
					key={id}
					timeout={250}
					classNames={popTransition}
				>
					<li
						className={
							newItem ? style.newComponent : style.component
						}
					>
						{name}: {number}
						<input
							type="button"
							value="Delete"
							onClick={() => onRemoveContact(id)}
							className={style.btn}
						/>
					</li>
				</CSSTransition>
			))}
		</TransitionGroup>
	);
};

export default Contacts;
