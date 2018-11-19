import { computed, observable } from "mobx"

export class TodoStore {
  @observable
  todos = ["eggs", "bacon"]
  @observable
  filter = ""
  @computed get filteredTodos() {
    var matchesFilter = new RegExp(this.filter, 'i')
    return this.todos.filter(todo => !this.filter || matchesFilter.test(todo))
  }
}

export default new TodoStore

