import { ReactElement, useState } from "react";
import "./TodoItem.css";

export interface _TodoItem {
	text: string;
	id: string;
	handleDelete: (id: string) => void;
}

export const TodoItem = ({
	id,
	text,
	handleDelete,
}: _TodoItem): ReactElement => {
	return (
		<div className="item">
			<p>{text}</p>
			<span className="remove" onClick={() => handleDelete(id)}>
				❌
			</span>
		</div>
	);
};
