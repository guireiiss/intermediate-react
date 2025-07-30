"use client"


import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import { LoggedUserProvider } from "@/contexts/LoggedUser";
import { PostContext, PostProvider } from "@/contexts/PostsContext";
import { use, useContext, useEffect, useReducer, useState } from "react";

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
// A Context API do React serve para compartilhar dados entre componentes sem precisar ficar passando props de pai para filho manualmente
// etapas pra criar um context 1 - Criaccao do contexto 2- como usar o contexto 3- como englobar contexto onde eu quero(provider)


const Page = () => {

    const postCtx = useContext(PostContext);
    const [titleInput, setTitleInput] = useState(``);
    const [bodyInput, setBodyInput] = useState(``);


    const handleAddButton = () => {
      if(titleInput && bodyInput) {
        {postCtx?.addPost(titleInput, bodyInput);
          setTitleInput(``);
          setBodyInput(``);
        }
      }
    }


    return (
      <PostProvider>
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-indigo-950">
        
          <Header />   
          <PostsList />
          <div className="flex flex-col justify-center items-center my-7 border border-gray-300 p-6 rounded-lg">
            <h3 className="text-2xl font-bold">Add post</h3>
            <form className="flex flex-col">
              <label>
                Title:<br/>
                <input type="text" 
                  placeholder="Title" 
                  className="outline-none w-84 bg-indigo-200 rounded-md p-1 text-lg text-black font-bold"
                  value={titleInput}
                  onChange={e => setTitleInput(e.target.value)}
                />
              </label>
              <label>
                Body: <br/>
                <textarea 
                  className="bg-indigo-200 w-84 max-h-35 text-black outline-none p-1"
                  value={bodyInput}
                  onChange={e => setBodyInput(e.target.value)} 
                />
              </label>
              <input 
                type="submit" 
                className="py-2 px-3 bg-blue-500 rounded-lg mt-2 cursor-pointer"
                onClick={handleAddButton}
              />
            </form>
          </div>
          <Footer />
        
        </div>
       </PostProvider>
    )
     
     
    
  
}
export default Page;     