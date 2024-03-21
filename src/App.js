import React, { useState } from 'react';

import TodoList from './components/Todos/TodoList/TodoList';
import Input from './components/Todos/Input/Input';
import './App.css';

const App = () => {
  const [courseTodos, setTodos] = useState([
    { text: 'Go grocery shopping', id: 'g1' },
    { text: 'Fix the upstairs batheroom', id: 'g2' }
  ]);

  const addTodoHandler = enteredText => {
    setTodos(prevTodos => {
      const updatedTodos = [...prevTodos];
      updatedTodos.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedTodos;
    });
  };

  const deleteItemHandler = todoId => {
    setTodos(prevTodos => {
      const updatedTodos = prevTodos.filter(todo => todo.id !== todoId);
      return updatedTodos;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No todos found. Maybe add one?</p>
  );

  if (courseTodos.length > 0) {
    content = (
      <TodoList items={courseTodos} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="todo-form">
        <Input onAddTodo={addTodoHandler} />
      </section>
      <section id="todos">
      <p style={{ textAlign: 'center' }}>Left click to delete todo.</p>
        {content}
      </section>
    </div>
  );
};

export default App;
