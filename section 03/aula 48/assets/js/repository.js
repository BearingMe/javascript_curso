// database
class Repository {
  constructor() {
    this.tasks = [];
  }

  add(task) {
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  delete(id) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  list() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return this.tasks;
  }
}
