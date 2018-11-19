import { observable } from "mobx"

export class TodoStore {
  @observable
  todos = ["eggs", "bacon"]
  @observable
  filter = ""
}

export default new TodoStore

