const app = document.querySelector('#app');

const repository = new Repository();
const useCase = new UseCase(repository);
const controller = new Controller(useCase);

const form = app.querySelector('form');

controller.updateView();

form.onsubmit = e => {
  e.preventDefault();
  controller.createNew();
};

function deleteById(taskId) {
  controller.deleteOne(taskId);
}
