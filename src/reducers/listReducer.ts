import { Item } from "@/types/Item";

type AddAction = {
    type: 'add';
    payload: {
        text: string;
    };
}
type EditTextAction = {
    type: 'editText'
    payload : {
        id: number;
        newText: string;
    }
}
type ToggleDone = {
    type: 'toggleDone';
    payload: {id: number};
}
type RemoveAction = {
    type: 'remove';
    payload: {id: number}
}
type ListActions = AddAction | EditTextAction | ToggleDone | RemoveAction;


export const listReducer = (list: Item[],action: ListActions) => { // recebe a lista depois vai executar alguma ação e depois retorna a lista atualizada
    switch (action.type) {
        case 'add':
            return [...list, 
                {
                id: Date.now(),
                text: action.payload.text,
                done: false
            }]
        case 'editText':
            return list.map((t) => {
                if (t.id === action.payload.id) t.text = action.payload.newText;
                 return t;
            })
        case 'toggleDone':
            return list.map(i => 
            i.id === action.payload.id 
            ? { ...i, done: !i.done } // cria novo objeto com done invertido
            : i                      // retorna o objeto inalterado
            );
        case 'remove':
            return list.filter(i => i.id !== action.payload.id);
        default:
            return list;
    }
}