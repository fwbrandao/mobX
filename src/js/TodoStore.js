import { autorun, observable } from "mobx";

class TodoStore {
  @observable
  todos = ["eggs", "bacon"];
  @observable
  filter = "";
}

var store = (window.storw = new TodoStore());

export default store;

autorun(() => {
  console.log(store.filter);
  console.log(store.todos[0]);
});
