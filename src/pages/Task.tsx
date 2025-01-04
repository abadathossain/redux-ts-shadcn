import Taskcard from "@/modules/task/Taskcard";
import { selectTasks } from "@/redux/features/task/TaskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
// import { RootState } from "@/redux/store";
import { AddTask } from "../modules/task/AddTask";

const Task = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTasks);
  console.log(dispatch, tasks);
  return (
    <div>
      <AddTask />
      {tasks.map((task) => (
        <Taskcard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Task;
