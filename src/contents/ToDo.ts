const INITIAL_DATE: Date = new Date(1970, 1, 1, 0, 0, 0);

interface ToDoContent {
  todoTitle: string;
  todoPlace: string;
  todoMemo: string;
  todoDeadLineDate: Date;
  todoRemindDate: Date;
}

interface ToDoElement extends ToDoContent {
  createdDate: Date;
  isVisible: boolean;
  viewScopeChangedDate: Date;

  setVisible(): void;
  setInvisible(): void;
}

class inputToDo implements ToDoContent {
  todoTitle: string = '';
  todoPlace: string = '';
  todoMemo: string = '';
  todoDeadLineDate: Date = INITIAL_DATE;
  todoRemindDate: Date = INITIAL_DATE;

  inputToDo(
    _title: string,
    _place: string,
    _memo: string,
    _deadline: Date,
    _remind: Date,
  ): void {
    this.todoTitle = _title;
    this.todoPlace = _place;
    this.todoMemo = _memo;
    this.todoDeadLineDate = _deadline;
    this.todoRemindDate = _remind;
  }
}

/**
 * 登録されたToDoに、登録日時、可視性、不可視にされたタイミングなど表示に必要な情報をさらに持つクラス
 * （ToDoElementからimplements）
 *
 * @param createDate ToDo作成の日時（msまで）
 * @param isVisible ToDoを削除の1段階目（削除ではなく、不可視リストに移す判定をこれでする）
 * @param viewScopeChangeDate 削除フラグが最後に立ったタイミング
 *  */
class displayToDo implements ToDoElement {
  createdDate: Date = INITIAL_DATE;
  isVisible: boolean = true;
  viewScopeChangedDate: Date = INITIAL_DATE;
  todoTitle: string = '';
  todoPlace: string = '';
  todoMemo: string = '';
  todoDeadLineDate: Date = INITIAL_DATE;
  todoRemindDate: Date = INITIAL_DATE;

  displayTodo(_todo: ToDoElement): void {
    Object.assign(this, _todo);
    this.createdDate = new Date(Date.now());
    this.isVisible = true;
    this.viewScopeChangedDate = INITIAL_DATE;
  }

  setInvisible(): void {
    this.isVisible = false;
    this.viewScopeChangedDate = new Date(Date.now());
  }

  setVisible(): void {
    this.isVisible = true;
    this.viewScopeChangedDate = INITIAL_DATE;
  }
}
