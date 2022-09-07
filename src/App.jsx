import styles from './App.module.scss';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import TodoList from './TodoList';
import Form from './Form';

function App() {
  /*
  Local Storage Schema: 
    'todos': [ ["Todo Text", completed? ], [], []...] 
  */
  const [col, setcol] = useState("#FFC971");
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todoList))
  }, [todoList])

  const bgcolors = [
    "#92B6B1",
    "#D3EFBD",
    "#F4BFDB",
    "#5E7CE2",
    "#444140",
    "#ECFFB0",
    "#EF3054",
    "#DF928E",
    "#F5B700",
    "#89FC00",
    "#2B3A67",
    "#2E282A",
    "B6DC76"
  ];

  const changebg = () => {
    const color = bgcolors[Math.floor(Math.random() * bgcolors.length)];
    setcol(color);
  }


  return (
    <div className={styles.container}
        style={{background: col}}
    >
      <div className="text-7xl text-white">
        What is your 
      </div>
      <motion.button 
        className="rounded-lg text-9xl bg-orange-600/50 my-5 text-white border-2 border-zinc-900"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={changebg}
      >
        TODO
      </motion.button>
      <Form state={text} setState={setText} todos={todoList} SetTodo={setTodoList} />
      <TodoList localtodosList={todoList} setlocaltodolist={setTodoList}/>
    </div>
  );
}

export default App;