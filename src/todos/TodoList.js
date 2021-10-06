import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { removeTodo, markTodoAsCompleted } from './actions';
import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => {
	const completedTodos = todos.filter(todo => todo.isCompleted)
	const notCompletedTodos = todos.filter(todo => !todo.isCompleted)


	return (	
		<div className="list-wrapper">
			<NewTodoForm />
			<h2>{notCompletedTodos.length | completedTodos.length ? null : "No todos to display 😥"}</h2>
			<h2>{notCompletedTodos.length ? "Pending Todos" : null}</h2>
			{notCompletedTodos.map(todo => <TodoListItem
				todo={todo}
				onRemovePressed={onRemovePressed}
				onCompletedPressed={onCompletedPressed}/>
				)
			}
			<h2>{completedTodos.length ? "Completed Todos" : null}</h2>
			{completedTodos.map(todo => <TodoListItem
				todo={todo}
				onRemovePressed={onRemovePressed}/>
				)
			}
		</div>
	)
};

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);