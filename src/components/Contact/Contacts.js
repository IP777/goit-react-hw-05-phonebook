import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
//------------------------------------------
import style from "./Contacts.module.css";
import slideTransition from "./../transition/slide.module.css";

const Contacts = ({ contacts, onRemoveContact }) => {
	return (
		<TransitionGroup component="ul" className={style.list}>
			{contacts.map(({ id, name, number }) => (
				<CSSTransition
					key={id}
					timeout={250}
					classNames={slideTransition}
					unmountOnExit
				>
					<li className={style.cardWrapper}>
						{name}
						<span>{number}</span>
						<button
							onClick={() => onRemoveContact(id)}
							className={style.cardBtn}
						>
							&#10006;
						</button>
					</li>
				</CSSTransition>
			))}
		</TransitionGroup>
	);
};

export default Contacts;
