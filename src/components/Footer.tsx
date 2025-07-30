import { PostContext } from "@/contexts/PostsContext"
import { useContext } from "react"

export const Footer = () => {
    const postCtx = useContext(PostContext);


    return (
        <footer>
            {postCtx?.posts && 
                <p>Total de posts: {postCtx?.posts.length}</p>
            }
        </footer>
    )
}