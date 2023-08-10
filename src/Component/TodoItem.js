import React, { useState } from 'react';
import {
    ListItem,
    ListItemText,
    IconButton,
    ListItemSecondaryAction,
    Checkbox,
    TableCell,
    TableRow,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';

const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);

    const handleEditClick = () => {
        setIsEditMode(true);
    };

    const handleSaveClick = () => {
        if (editedText.trim() !== '') {
            // Update the todo text
            setEditedText(editedText);
            setIsEditMode(false);
        }
    };

    const handleCancelClick = () => {
        setEditedText(todo.text);
        setIsEditMode(false);
    };

    return (
        <TableRow>
            <TableCell style={{ border: 'none' }}>
                <Checkbox
                    checked={todo.completed}
                    icon={<CheckCircleOutlineIcon />}
                    checkedIcon={<CheckCircleOutlineIcon />}
                    onChange={() => onToggleComplete(todo.id)}
                />
            </TableCell>
            <TableCell style={{ border: 'none' }}>
                {isEditMode ? (
                    <input
                        type="text"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                    />
                ) : (
                    <ListItemText primary={editedText} />
                )}
            </TableCell>
            <TableCell style={{ border: 'none' }}>
                {isEditMode ? (
                    <div>
                        <IconButton aria-label="save" onClick={handleSaveClick}>
                            <CheckCircleOutlineIcon />
                        </IconButton>
                        <IconButton aria-label="cancel" onClick={handleCancelClick}>
                            <CancelIcon />
                        </IconButton>
                    </div>
                ) : (
                    <div>
                        <IconButton aria-label="edit" onClick={handleEditClick}>
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={() => onDelete(todo.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                )}
            </TableCell>
        </TableRow>
    );
};

export default TodoItem;
