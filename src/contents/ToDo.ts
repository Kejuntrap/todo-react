import { v4 as uuidv4 } from 'uuid';

const INITIAL_DATE: Date = new Date(1970, 1, 1, 0, 0, 0);

interface ToDoContent {
  id: string;
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

/**
 * ToDoを登録するときの情報
 *
 * @param id ToDoの識別子
 * @param todoTitle やることの情報（文字数64以下くらい？）
 * @param todoPlace やることの場所（文字数64以下くらい？）
 * @param todoMemo メモ（文字数512以下くらい？）
 * @param todoDeadLineDate 締め切り
 * @param todoRemindDate リマインドを投げるタイミング
 */
export class inputToDo implements ToDoContent {
  id: string;
  todoTitle: string = '';
  todoPlace: string = '';
  todoMemo: string = '';
  todoDeadLineDate: Date = INITIAL_DATE;
  todoRemindDate: Date = INITIAL_DATE;

  constructor(
    _title: string,
    _place: string,
    _memo: string,
    _deadline: Date,
    _remind: Date,
  ) {
    this.id = uuidv4();
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
export class displayToDo implements ToDoElement {
  id!: string;
  createdDate: Date = INITIAL_DATE;
  isVisible: boolean = true;
  viewScopeChangedDate: Date = INITIAL_DATE;
  todoTitle: string = '';
  todoPlace: string = '';
  todoMemo: string = '';
  todoDeadLineDate: Date = INITIAL_DATE;
  todoRemindDate: Date = INITIAL_DATE;

  constructor(_todo: inputToDo) {
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
