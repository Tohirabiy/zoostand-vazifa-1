import { create } from 'zustand';

const useTodo = create((set) => ({
  todo: [],
  addTodo: (task) =>
    set((state) => ({
      todo: [...state.todo, task],
    })),
}));

export default useTodo;


