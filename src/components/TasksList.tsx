import { listReducer } from "@/reducers/listReducer";
import { useEffect, useReducer, useState } from "react";

// Notes

// 3 phases // 1.defining the function that will run // 2. defining when it will run // 3. defining what to do when the element is unloaded
// useEffect é executado toda vez que uma renderização acontece (caso não seja definido quando exatamente ele deve rodar);
// [] como segundo parametro do useEffect define que o useEffect será executado somente na primeira vez que o componenete for executado;
// Geralmente usa Effect quando precisa integração com alguma coisa externa ao react (ao itens padrão do react) exemplo: API's, PLAYER EXTERNO DE VIDEO;
// useRef é um hook do React que serve principalmente para acessar diretamente elementos do DOM ou armazenar valores que não causam re-renderização quando mudam.
/*O cleanUp é uma função de limpeza (ou desfazer) que você retorna dentro do useEffect:
Ela é executada:
Antes de rodar o useEffect novamente (se as dependências mudarem);
Quando o componente for desmontado (ou seja, removido da tela). */
/* Reducer, no React, é uma função usada com o useReducer para controlar o estado do componente.
Ela recebe o estado atual e uma ação, e devolve um novo estado.
É útil quando o estado tem várias partes ou a lógica de atualização é mais complexa.
*/


export const TasksList = () => {
     const [list, dispatch] = useReducer (listReducer, [{id:1,text:'Item de teste',done:true}]); // Função a ser executada e estado atual da lista;
        const [textAdd, setTextAdd] = useState('');
    
        const addText = () => {
        //  if (textAdd.trim() === '') return false;
          dispatch({
            type: 'add',
            payload: {
              text: textAdd.trim()
            }
          })
        }
        const removeTask = (id: number) => {
          if (!window.confirm(`Tem certeza que deseja excluir?`)) return false;
          dispatch({
            type: `remove`,
            payload: {
              id: id
            }
          })
        }
        const swictchDone = (id: number) => {
           dispatch({
            type: 'toggleDone',
            payload: { id }
          })
        }
        const handleEdit = (id: number) => {
          const item = list.find((it) => it.id === id)  
          if (!item) return false;
    
          const newText = window.prompt(`Editar tarefa`, item.text);
          if(!newText || newText?.trim() === ``) return false;
    
          dispatch ({
            type: `editText`,
            payload: {id, newText}
          })
          
        }
        
        return (
          <div className="w-screen h-screen flex flex-col items-center justify-center bg-indigo-950">
              <div className="bg-indigo-500 p-3 text-center w-full max-w-2xl">
                <h1 className="text-2xl font-black mb-4">TASKS LIST</h1>
                {list.map((item) => (
                  <div key={item.id} className="bg-indigo-400 mb-1 rounded-lg text-xl font-semibold p-3 flex items-center justify-between">
                      <img src='/assets/pen.png'  className="w-4 h-4 hover:opacity-60 hover:scale-125 cursor-pointer" onClick={() => handleEdit(item.id)}/>
                      <div className="flex items-center">
                          {item.text} -  
                          <input type="checkbox" className="w-6 h-6 ml-2" checked={item.done} onChange={() => swictchDone(item.id)}/>
                      </div>
                      <img src='/assets/trash.png' className="w-4 h-4 hover:opacity-60 hover:scale-125 cursor-pointer" onClick={() => removeTask(item.id)}/>
    
                  </div>
                ))}
              </div>
              <div className="w-full max-w-md bg-indigo-500 mt-4 text-center">
                  <h2 className="text-xl mb-3 font-bold mt-4">Type a task to add</h2>
                <form className="flex flex-col items-center" onSubmit={addText}>
                  <label className="flex justify-center">
                      <input type="text" placeholder="Task name" className="bg-indigo-400 outline-0 w-70 h-10 text-lg p-2 rounded-md" value={textAdd} onChange={(e) => setTextAdd(e.target.value)}/>
                  </label>
                  <label>
                      <input type="submit" value="Add"  className="py-2 px-3 bg-indigo-800 m-3 rounded-lg text-lg font-semibold hover:opacity-60 cursor-pointer"/>
                  </label>
                </form>
                
              </div>
          </div>
        )
}