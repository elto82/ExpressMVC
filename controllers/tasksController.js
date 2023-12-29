let tasks = [
  { id: 1, name: "Task 1", completed: false },
  { id: 2, name: "Task 2", completed: true },
  { id: 3, name: "Task 3", completed: false },
];

const getAllTasks = (req, res) => {
  res.render("index", { title: "lista de tareas", tasks });
};

const getAddTaskForm = (req, res) => {};

const addTasks = (req, res) => {};

const getEditTaskForm = (req, res) => {};

const editTask = (req, res) => {};

const completeTask = (req, res) => {};

const uncompleteTask = (req, res) => {};

const deleteTask = (req, res) => {};

export default {
  getAllTasks,
  getAddTaskForm,
  addTasks,
  getEditTaskForm,
  editTask,
  completeTask,
  uncompleteTask,
  deleteTask,
};
