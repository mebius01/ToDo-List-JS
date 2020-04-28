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

(function (arrTasks) {
  const ulContainer = document.querySelector('.tasks-list-section .list-group');
  const form = document.forms['addTask'];
  const formTitle = form.elements['title'];
  const formBody = form.elements['body'];

  form.addEventListener("submit", formSubmitHendler);

  renderAllTasks(arrTasks);

  ulContainer.addEventListener('click', delTaskHendler);


  // Формирует шаблон li
  function listItemTemplate({
    _id,
    title,
    body
  } = {}) {
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

  // Рендеринг таска
  function renderAllTasks(arr) {
    if (!arr) {
      alert("Таски пустые");
      return;
    }
    const fragment = document.createDocumentFragment();
    arr.forEach(item => {
      // listItemTemplate(item)
      fragment.appendChild(listItemTemplate(item));
    });
    return ulContainer.appendChild(fragment);
    // console.log(fragment)
  }

  // Формирует таск-объект
  function ObjectTask(title, body) {
    return {
      _id: 'task-' + String(Math.random()).split('.')[1],
      title: title,
      body: body,
      completed: false,
    }
  }

  // Добавляет нвый таск в разметку
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

  // Удаляет таск
  function delTaskHendler(event) {
    const delBtn = event.target;
    if (delBtn.classList.contains('delete-btn')) {
      if (confirm("Ты здесь главный?")) {
        delBtn.parentElement.remove();
      }
    }
  }

})(tasks);