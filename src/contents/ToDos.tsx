import reactLogo from './../assets/react.svg';
import viteLogo from './../../public/vite.svg';
import '../App.css';
import { Box, Button, Link, Typography, Card } from '@mui/material';
import { ReactElement, useState } from 'react';

import { inputToDo, displayToDo } from '../contents/ToDo';

const todoVolume: number = 32;

function makeTodosTest(vol: number): displayToDo[] {
  let returnToDos: displayToDo[] = new Array<displayToDo>();
  for (let i: number = 0; i < vol; i++) {
    const _tmpToDo: inputToDo = new inputToDo(
      'test' + (i + 1),
      'Tokyo',
      'test todo task:' + (i + 1),
      new Date(Date.now()),
      new Date(Date.now()),
    );
    const _tmpdispTodo: displayToDo = new displayToDo(_tmpToDo);
    returnToDos = [...returnToDos, _tmpdispTodo];
  }
  return returnToDos;
}

function ToDos(): ReactElement {
  const [count, setCount] = useState(0);
  const todos: displayToDo[] = makeTodosTest(todoVolume);
  return (
    <>
      <Box
        sx={{
          position: 'flex',
          flexDirection: 'column',
          alignItem: 'center',
          justifyContent: 'center',
          margin: 0,
        }}
      >
        {todos.map((singleTodo) => {
          return (
            <Card
              key={singleTodo.id}
              sx={{
                marginLeft: '1.5vw',
                marginRight: '1.5vw',
                maxWidth: '97vw',
                marginTop: '8px',
                marginBottom: '8px',
                border: 1,
                textAlign: 'start'
              }}
            >
              <Typography variant='h4'>{singleTodo.todoTitle}</Typography>
              <Typography variant='h5'>place:{singleTodo.todoPlace}</Typography>
              <Typography>id:{singleTodo.id}</Typography>
              <Typography>Date:{singleTodo.todoDeadLineDate.toLocaleDateString()} {singleTodo.todoDeadLineDate.toTimeString()}</Typography>
            </Card>
          );
        })}
      </Box>
    </>
  );
}
export default ToDos;
