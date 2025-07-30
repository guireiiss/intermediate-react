import { createContext, ReactNode, useState } from "react";

/* conteudo do header
 const userCtx = useContext(LoggedUserContext);
    
    const handleLogout = () => {
        userCtx?.setUser(``);
    }
    return (
        <header>
            <h1 className="text-3xl">Titulo da pagina</h1>
            {userCtx?.user && 
                <>
                    <p>Usuario logado: {userCtx?.user}</p>
                    <button className="bg-amber-100" onClick={handleLogout}>Limpar usuario</button>
                </>
            }
            {!userCtx || userCtx?.user === `` && 
                <p>Usuario deslogado</p>
            }
            
        </header>
    )
}
*/



type ContextType = {
    user: string,
    setUser: (u: string) => void;
}

export const LoggedUserContext = createContext <ContextType | null> (null);


type Props = {
    children: ReactNode;
}

export const LoggedUserProvider = ({children}: Props) => {
    const [user, setUser] = useState(`notto`)


    return (
        <LoggedUserContext.Provider value={{user,setUser}}>
            {children}
        </LoggedUserContext.Provider>
    )
}