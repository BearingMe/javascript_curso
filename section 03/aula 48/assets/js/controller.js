class Controller {
  constructor(useCase) {
    this.useCase = useCase;
  }

  createNew() {
    const taskInput = app.querySelector('input[name="new-task"]');

    const id = Date.now();
    const content = taskInput.value;

    if (content) {
      this.useCase.createNew(id, content);
      this.updateView();
      taskInput.value = '';
      return;
    }

    alert('Digite uma tarefa');
  }

  updateView() {
    const list = app.querySelector('ul');
    const data = this.useCase.getAll();

    list.innerHTML = '';

    data.forEach(task => {
      const li = document.createElement('li');
      li.innerHTML = `${task.content} <button onclick="deleteById(${task.id})">Delete</button>`;
      list.appendChild(li);
    });
  }

  deleteOne(id) {
    this.useCase.deleteOne(id);
    this.updateView();
  }
}
