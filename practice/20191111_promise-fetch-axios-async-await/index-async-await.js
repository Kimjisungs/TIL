let todos = [];
let todosId = 'all';

const $input = document.querySelector('.input-todo');
const $todos = document.querySelector('.todos');
const $allChecked = document.querySelector('#ck-complete-all');
const $completeTodo = document.querySelector('.completed-todos');
const $activeTodo = document.querySelector('.active-todos');
const $nav = document.querySelector('.nav');
const $clearCompleted = document.querySelector('.clear-completed > .btn');

const render = () => {
  todos.sort((todo1, todo2) => todo2.id - todo1.id);
  let html = '';

  const _todos = todosId === 'all' ? todos : (todosId === 'active' ? todos.filter(todo => !todo.completed) : todos.filter(todo => todo.completed));

  _todos.forEach(({ id, content, completed }) => {
    html += `
      <li id="${id}" class="todo-item">
        <input class="checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
        <label for="ck-${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>
    `;
  });

  $todos.innerHTML = html;
  $completeTodo.textContent = todos.filter(todo => todo.completed).length;
  $activeTodo.textContent = todos.filter(todo => !todo.completed).length;
};

const getTodos = async () => {
  try {
    const res = await axios.get('/todos');
    todos = res.data;
    render();
  } catch(e) {
    console.log(new Error('Error'));
  }
};

const maxId = () => (todos.length ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1);

const thisId = (target) => +target.parentNode.id;

const addTodo = async (content) => {
  try {
    const res = await axios.post('/todos', { id: maxId(), content, completed: false });
    todos = res.data;
    render();
  } catch(e) {
    console.log(new Error('Error'));
  }
};

const checkedTodo = async (target, id) => {
  const completed = !todos.find(todo => (todo.id === id)).completed;
  try {
    const res = await axios.patch(`/todos/${id}`, { completed });
    todos = res.data;
    render();
  } catch(e) {
    console.log(new Error('Error'));
  }
};

const deleteTodo = async (target) => {
  try {
    const res = await axios.delete(`/todos/${thisId(target)}`);
    todos = res.data;
    render();
  } catch(e) {
    console.log(new Error('Error'));
  }
};

const allCheckedTodo = (checked) => {
  todos = todos.map((todo) => ({ ...todo, completed: checked }));
}

const navSelect = async ($child, target) => {
  for ($item of $child) $item.classList.toggle('active', $item === target);

  try {
    const res = await axios.get('/todos');
    todos = res.data;
    render();
  } catch(e) {
    console.log(new Error('Error'));
  }
};

// Event

window.addEventListener('load', () => {
  getTodos();
});

$input.addEventListener('keyup', ({ target, keyCode }) => {
  const content = target.value.trim();
  if (keyCode !== 13 || content === '') return;
  addTodo(content);
  target.value = '';
});

$todos.addEventListener('change', ({ target }) => {
  checkedTodo(target, thisId(target));
});

$todos.addEventListener('click', ({ target }) => {
  if (!target.classList.contains('remove-todo')) return;
  deleteTodo(target);
});

$allChecked.addEventListener('change', ({ target }) => {
  const { checked } = target;
  allCheckedTodo(checked);
  render();
});

$clearCompleted.addEventListener('click', () => {
  todos = todos.filter(todo => !todo.completed);
  render();
});

$nav.addEventListener('click', ({ target }) => {
  const $child = $nav.children;
  if (target.classList.contains('nav')) return;
  todosId = target.id;
  navSelect($child, target);
});
