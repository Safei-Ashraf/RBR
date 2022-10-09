import { ReactElement, useState } from "react";
import "./TodoItem.css";

export interface _TodoItem {
	text: string;
	id: string;
}

export const TodoItem = ({ id, text }: _TodoItem): ReactElement => {
	return (
		<li key={id} className="item">
			<p>{text}</p>
		</li>
	);
};
