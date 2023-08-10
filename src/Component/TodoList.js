import React from 'react';
import { List, Typography, Paper, Box } from '@mui/material';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onToggleComplete }) => {
    const completedTodos = todos.filter(todo => todo.completed);
    const pendingTodos = todos.filter(todo => !todo.completed);

    return (
        <div>
            <Typography variant="h6">Tasks</Typography>
            <Box display="flex" justifyContent="space-between">
                <Paper style={{ background: 'none', boxShadow: 'none', }}>
                    <Typography variant="subtitle1">Pending Tasks</Typography>
                    <List style={{ padding: '0' }}>
                        {pendingTodos.map(todo => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                onDelete={onDelete}
                                onToggleComplete={onToggleComplete}
                            />
                        ))}
                    </List>
                </Paper>
                <Paper style={{ background: 'none', boxShadow: 'none', }}>
                    <Typography variant="subtitle1">Completed Tasks</Typography>
                    <List style={{ padding: '0' }}>
                        {completedTodos.map(todo => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                onDelete={onDelete}
                                onToggleComplete={onToggleComplete}
                            />
                        ))}
                    </List>
                </Paper>
            </Box>
        </div>
    );
};

export default TodoList;
