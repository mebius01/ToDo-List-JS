const tasks = [{
    _id: '5d2ca9e2e03d40b326596aa7',
    completed: true,
    body: 'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt',
  },
  {
    _id: '5d2ca9e29c8a94095c1288e0',
    completed: false,
    body: 'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title: 'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
  {
    _id: '5d2ca9e2e03d40b3232496aa7',
    completed: true,
    body: 'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095564788e0',
    completed: false,
    body: 'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title: 'Deserunt laborum id',
  },
];

const ulContainer = document.querySelector('.tasks-list-section .list-group');
const form = document.forms['addTask'];
const formTitle = form.elements['title'];
const formBody = form.elements['body'];
/**
 * Рендеринг масива с объектами
 */
// Формирует готовый li
function listItemTemplate({_id,title,body} = {}) {
  const li = document.createElement('li');
  li.classList.add('list-group-item', 'd-flex', 'align-items-center', 'flex-wrap', 'mt-2');

  const h2 = document.createElement('h2');
  h2.textContent = title;

  const p = document.createElement('p');
  p.classList.add('mt-2', 'w-100');
  p.textContent = body;

  const buttonDelete = document.createElement('button');
  buttonDelete.classList.add('btn', 'btn-danger', 'ml-auto', 'delete-btn');
  buttonDelete.textContent = 'Delete';

  li.appendChild(h2);
  li.appendChild(p);
  li.appendChild(buttonDelete);

  return li;
}

// Принимает массив проверяет не пуст ли он
// Создает фрагмент
// Перебирает каждый елемент в forEach и на каждой итерации
// вызывает  listItemTemplate кторая возвращает наполненный li
// фрагмент наполняет ul
function renderAllTasks(arr) {
if (!arr) {
alert("Таски пустые");
return;
}
const fragment = document.createDocumentFragment();
arr.forEach(item => {
// listItemTemplate(item)
fragment.appendChild(listItemTemplate(item))
})
return ulContainer.appendChild(fragment);
// console.log(fragment)
}
renderAllTasks(tasks)

form.addEventListener("submit", formSubmitHendler)



/**
 * Добавляет нвый таск
*/
// Формирует таск-объект
function ObjectTask(title, body) {
  return {
    _id: 'task-'+ String(Math.random()).split('.')[1],
    title: title,
    body: body,
    completed: false,
  }
}

// Наполняет объект данными из формы и вставляет его в ul.
function formSubmitHendler(event) {
  event.preventDefault();
  const title = formTitle.value;
  const body = formBody.value;

  if (!title || !body) {
    alert("Input none!");
    return;
  }

  const newTask = ObjectTask(title, body);
  const liNewTask = listItemTemplate(newTask);
  ulContainer.insertAdjacentElement("afterbegin", liNewTask);
  form.reset();
}

// Формирует объект объектов с ключом в виде id
// const arrOfTasks = tasks.reduce((acc, item)=>{
//   acc[item._id]=item;
//   return acc;
// }, {})
// console.log(arrOfTasks)



// arrOfTasks(tasks);
// (function (arrOfTasks) {
//   // Сздать объект объектов с ключем _id
//   const objOfTask = arrOfTasks.reduce((acc, task) => {
//     acc[task._id] = task;
//     return acc;
//   }, {});

//   // Найти ul в который будет рендерится все li (таски)
//   const ulContainer = document.querySelector('.tasks-list-sobjOfTask

//   // рендеринг таков
//   renderAllTasks(objOfTask);

//   // добавления нового таска
//   form.addEventListener("submit", onFormSubmitHendler);

//   // Деструктурирует объекта task
//   // Создает елементы и наполняет елементы данными из task
//   // Возвращает готовый елемент li
//   function listItemTemplate({
//     _id,
//     title,
//     body
//   } = {}) {
//     const li = document.createElement('li');
//     li.classList.add('list-group-item', 'd-flex', 'align-items-center', 'flex-wrap', 'mt-2');

//     const h2 = document.createElement('h2');
//     h2.textContent = title;

//     const p = document.createElement('p');
//     p.classList.add('mt-2', 'w-100');
//     p.textContent = body;

//     const buttonDelete = document.createElement('button');
//     buttonDelete.classList.add('btn', 'btn-danger', 'ml-auto', 'delete-btn');
//     buttonDelete.textContent = 'Delete';

//     li.appendChild(h2);
//     li.appendChild(p);
//     li.appendChild(buttonDelete);

//     return li;
//   }

//   // Принимает объект проверяет не пуст ли он
//   // Создает фрагмент
//   // Перебирает каждый елемент в forEach и на каждой итерации
//   // вызывает  listItemTemplate кторая возвращает наполненный li
//   // фрагмент наполняет ul
//   function renderAllTasks(tasksList) {
//     const objValue = Object.values(tasksList);
//     const fragment = document.createDocumentFragment();

//     if (!tasksList) {
//       console.error("ТаскЛист пуст!");
//       return;
//     }

//     objValue.forEach(task => {
//       const fragmentLi = listItemTemplate(task);
//       fragment.appendChild(fragmentLi);
//     });
//     ulContainer.appendChild(fragment);
//   }

//   // Формирует объект нового такска
//   function createNewTask(title, body) {
//     const newTask = {
//       _id: 'task-' + String(Math.random()).split('.')[1],
//       title: title,
//       body: body,
//       completed: true,
//     };
//     objOfTask[newTask._id] = newTask;
//     return {
//       ...newTask
//     };
//   }

//   // Добавляет новый таск в разметку
//   function onFormSubmitHendler(event) {
//     event.preventDefault();

//     const titleValue = formTitle.value;
//     const bodyValue = formBody.value;

//     if (!titleValue && !bodyValue) {
//       alert('add Title and Body');
//       return;
//     }
//     const task = createNewTask(titleValue, bodyValue);
//     const listItem = listItemTemplate(task);
//     ulContainer.insertAdjacentElement("afterbegin", listItem);
//     form.reset();
//   }

// })(tasks);