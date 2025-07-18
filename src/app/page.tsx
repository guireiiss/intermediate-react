"use client"


import { Header } from "@/components/Header";
import { CountContext, CountProvider} from "@/contexts/CountContext";
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
// A Context API do React serve para compartilhar dados entre componentes sem precisar ficar passando props de pai para filho manualmente


const Page = () => {
    
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-indigo-950">

      <CountProvider >
        <Header />
      </CountProvider>
       
          
      </div>
    )
    
  
}
export default Page;     