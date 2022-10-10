import { useState } from "react";
import { _TodoItem, TodoItem } from "./components/TodoItem/TodoItem";
import "./App.css";
import { TodoForm } from "./components/TodoForm/TodoForm";

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
	const [todo, setTodo] = useState<_TodoItem>({
		text: "",
		id: "",
		handleDelete: () => void 0,
	});
	const [todoItems, setTodoItems] = useState<_TodoItem[]>();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodo({ ...todo, text: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (todo && todo.text.length > 0) {
			setTodoItems((todoItems) => [
				...(todoItems || []),
				{ ...todo, id: makeid(12) },
			]);
			setTodo({ text: "", id: "", handleDelete: () => void 0 });
		}
	};
	const handleDelete = (id: string) => {
		const updatedList = todoItems?.filter((todo) => todo.id !== id);
		setTodoItems((todoItems) => (todoItems = updatedList));
	};

	return (
		<div className="App">
			<h1>Fancy💥App</h1>

			<TodoForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				todo={todo}
			/>
			{todoItems && todoItems?.length > 0 && (
				<div className="card">
					<div className="todo-list">
						<ul>
							{todoItems.map(({ id, text }) => (
								<li key={id}>
									<TodoItem
										id={id}
										text={text}
										key={makeid(12)}
										handleDelete={handleDelete}
									/>
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
