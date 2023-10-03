import React, { useEffect, useState } from "react";
import useTodo from "./store/todo";

const App = () => {
  const [title, setTitle] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");
  const { todo, addTodo } = useTodo();

  const addtodo = () => {
    if (
      title.trim().length &&
      (tel.trim().length || email.trim().length || telegram.trim().length)
    ) {
      const newTodo = {
        id: Date.now(),
        title,
        tel,
        email,
        telegram,
      };
      addTodo(newTodo);
      setTitle("");
      setTel("");
      setEmail("");
      setTelegram("");
    } else {
      alert(
        "hammasini toldiring  "
      );
    }
  };

  return (
    <>
      <div className="p-5 shadow-lg mx-auto w-75 mt-5 border-2">
      <label htmlFor="title">Title:</label>
        <input
                  id="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          className="form-control form my-3"
          placeholder="Enter  list"
        />
      <label htmlFor="tel">Tel:</label>
        <input
          onChange={(e) => setTel(e.target.value)}
          value={tel}
          type="number"
          className="form-control form my-3"
          placeholder="Enter telephone"
        />
              <label htmlFor="email">Email:</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="form-control form my-3"
          placeholder="Enter email"
        />
            <label htmlFor="telegram">Telegram:</label>
        <input
          onChange={(e) => setTelegram(e.target.value)}
          value={telegram}
          type="text"
          className="form-control form my-3"
          placeholder="Enter telegram"
        />
        <button className="btn btn-primary" onClick={addtodo}>
          Add todo
        </button>
        <div className="my-4 border">
          {todo.length ? (
            todo.map((item) => (
              <div key={item.id} className="mb-5 px-2">
                <p>Title: {item.title}</p>
                <p>Tel: {item.tel}</p>
                 <p>Email: {item.email}</p>
                 <p>Telegram: {item.telegram}</p>
              </div>
            ))
          ) : (
            <h3 className="p-4 shadow my-3">Todo empty</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
