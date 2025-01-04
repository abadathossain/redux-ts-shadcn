import { RootState } from "@/redux/store";
import { ITask } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";
interface InitialState {
  tasks: ITask[];
}
const initialState: InitialState = {
  tasks: [
    {
      id: "dddf",
      title: "dhjdhd",
      description: "djdfjdkjdf",
      dueDate: "2025-11",
      isComplete: false,
      priority: "High",
    },
    {
      id: "dddf",
      title: "dhjdhd",
      description: "djdfjdkjdf",
      dueDate: "2025-11",
      isComplete: false,
      priority: "High",
    },
  ],
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export default taskSlice.reducer;
