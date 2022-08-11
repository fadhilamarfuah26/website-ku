import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const ToDoForm = ({ handleClick }) => {
  const [todo, setTodo] = useState("");

  return (
    <div className="todo-form">
      <p>~ Kegiatan Pembinaan ~</p>
      <span>
        <TextField
          label="Task"
          variant="filled"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <Button
          variant="contained"
          onClick={() => {
            handleClick(todo);
            setTodo("");
          }}
        >
          Submit
        </Button>
      </span>
    </div>
  );
};

export default ToDoForm;