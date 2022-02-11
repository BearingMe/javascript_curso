// my task
class Entity {
  constructor(id, content) {
    this.id = id;
    this.content = content;
  }

  getData() {
    return {
      id: this.id,
      content: this.content
    };
  }
}
