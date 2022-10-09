import { useState } from "react";
import "./App.css";

interface TodoItem {
	text: string;
	id: string;
}
function makeid(length: number): string {
	var result = "";
	var characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(
			Math.floor(Math.random() * charactersLength)
		);
	}
	return result;
}
function App() {
	const [todo, setTodo] = useState<TodoItem>({ text: "", id: "" });
	const [todoItems, setTodoItems] = useState<TodoItem[]>([todo]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodo({ text: e.target.value, id: makeid(12) });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (todo.text.length > 0) {
			setTodoItems((todoItems) => [...(todoItems || []), todo]);
			setTodo({ text: "", id: "" });
		}
	};

	return (
		<div className="App">
			<h1>Fancy💥App</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Bring laundary.."
					value={todo.text}
					className="todo-input"
					onChange={handleChange}
				/>
				<button type="submit">
					Add <span>TODO</span>
				</button>
			</form>
			<div className="card">
				{todoItems?.length > 0 && (
					<div className="card">
						{todoItems.map((todo) => (
							<p key={todo.id}>{todo.text}</p>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
