const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    at(state, action) {
      state.todos = action.payload;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    bt(state, action) {
      state.todos = action.payload;
    },
  },
});

export const { at, bt } = todoSlice.actions;

export default todoSlice.reducer;
