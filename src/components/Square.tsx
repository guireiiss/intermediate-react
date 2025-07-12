import { useEffect } from "react";

/* //Conteudo do page.tsx
    <button onClick={() => setShow(!show)} className="py-2 px-3 bg-white text-black text-lg mb-3 rounded-lg">Show/hide</button>
    {show && <Square />} 
*/


export const Square = () => {
    useEffect(() => {
       window.addEventListener('scroll', () => {}) // Adicionando um monitoranto que mesmo que o elemento seja desconectado ele irá continuar monitorando


        return () => { // QUANDO USAMOS O RETURN NO USE EFFECT, PASSAMOS UMA FUNÇÃO QUE SERÁ EXIBIDA QUANDO O COMPONENTE DER UNLOAD // Cleanup
            console.log('Rodou o cleanUP');
            window.removeEventListener('scroll', () => {}); // Removendo o monitoramento pois o elemento foi desconectado então não faz sentido continuar monitorando, e também caso o elemento seja adicionado novamente não fique com 2 event listeners.
        }
    })

    return (
        <div className="w-40 h-40 bg-gradient-to-b from-cyan-500 to-blue-500">

        </div>
    )
}