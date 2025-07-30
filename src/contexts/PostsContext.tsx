import { Post } from "@/types/Post";
import { createContext, ReactNode, useState } from "react";

type contextType = {
    posts: Post[];
    addPost: (title: string, body: string) => void;

}


export const PostContext = createContext <contextType | null> (null);

export const PostProvider = ({children}: {children: ReactNode}) => {
    const [posts, setPosts] = useState <Post[]> ([]);
    const [nextId, setNextId] = useState(0);
    const addPost = (title: string, body:string) => {
        setPosts([
            ...posts,
            { id: nextId + 1 , title, body }
        ])
        setNextId(nextId + 1);
    }
    
    return (
        <PostContext.Provider value={{ posts, addPost }}>
            {children}
        </PostContext.Provider>
    )
}