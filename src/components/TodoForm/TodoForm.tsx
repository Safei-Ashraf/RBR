import React from "react";
import { _TodoItem } from "../TodoItem/TodoItem";

interface _TodoForm {
	todo: _TodoItem;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TodoForm = ({ handleSubmit, handleChange, todo }: _TodoForm) => {
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Bring laundary.."
				value={todo && todo.text}
				className="todo-input"
				onChange={handleChange}
			/>
			<button type="submit">
				Add <span>TODO</span>
			</button>
		</form>
	);
};
