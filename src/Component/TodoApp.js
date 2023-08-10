import React, { useState } from 'react';
import { Container, Typography, TextField, IconButton } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';
import TodoList from './TodoList';
import '../style/TodoApp.css';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTodoText, setNewTodoText] = useState('');

    const addTodo = () => {
        if (newTodoText.trim() === '') return;
        const newTodo = { id: Date.now(), text: newTodoText, completed: false };
        setTodos([...todos, newTodo]);
        setNewTodoText('');
    };

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    const toggleComplete = (id) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Todo App
            </Typography>
            <div className="todo-input">
                <TextField
                    label="New Todo"
                    fullWidth
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addTodo()}
                />
                <IconButton color="primary" onClick={addTodo}>
                    <AddCircleOutline />
                </IconButton>
            </div>
            <TodoList todos={todos} onDelete={deleteTodo} onToggleComplete={toggleComplete} />
        </Container>
    );
};

export default TodoApp;
