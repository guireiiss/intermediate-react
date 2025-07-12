"use client"

import { Square } from "@/components/Square";
import { VideoPlayer } from "@/components/VideoPlayer";
import { useEffect, useState } from "react";

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




const Page = () => {
    const [show, setShow] = useState(false);

    
  
  
    return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
        <button onClick={() => setShow(!show)} className="py-2 px-3 bg-white text-black text-lg mb-3 rounded-lg">Show/hide</button>
        {show && <Square />} 
    </div>
  );
}

export default Page         