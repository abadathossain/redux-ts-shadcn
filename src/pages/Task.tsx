import Taskcard from "@/modules/task/Taskcard";
import { selectTasks } from "@/redux/features/task/TaskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
// import { RootState } from "@/redux/store";
import { AddTask } from "../modules/task/AddTask";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Task = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTasks);
  console.log(dispatch, tasks);
  return (
    <div>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2 justify-end">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
      </Tabs>
      <AddTask />
      {tasks.map((task) => (
        <Taskcard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Task;
