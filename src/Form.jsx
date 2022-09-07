import { motion } from "framer-motion";

function Form({ state, setState, todos, SetTodo }) {
    const onSave = () => {
        if(state){
            SetTodo([...todos, [state, 0]])
            reset();
        }
    }

    const reset = () => {
        setState('');
    };

    return(
      <motion.div 
        className="flex justify-center py-1 w-1/4"
        whileHover={{ scale: 2 }}
      >
        <input 
          className="w-96 rounded-lg border-2 border-zinc-900 placeholder:text-slate-400"
          placeholder="Write a TODO✨"
          value={state}
        //   onChange={(e)=>setState(e.target.value)}
          onChange={(e)=>setState(e.target.value)}
        >
        </input>
        <motion.button 
          className="rounded-lg mx-2 bg-white border-2 border-zinc-900"
          whileTap={{ scale: 0.9 }}
          onClick={onSave}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </motion.button>
        <motion.button 
          className="rounded-lg bg-white border-2 border-zinc-900"
          whileTap={{ scale: 0.9 }}
          onClick={reset}
        >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
        </svg>
        </motion.button>
      </motion.div>
    );
}

export default Form;