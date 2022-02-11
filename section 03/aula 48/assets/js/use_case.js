// actions performed by the user
class UseCase {
  constructor(repository) {
    this.repository = repository;
  }

  createNew(id, content) {
    const task = new Entity(id, content);
    this.repository.add(task);
  }

  deleteOne(id) {
    this.repository.delete(id);
  }

  getAll() {
    return this.repository.list();
  }
}
