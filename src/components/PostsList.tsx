import { PostContext } from "@/contexts/PostsContext"
import { useContext } from "react"

export const PostsList = () => {
    const postCtx = useContext(PostContext);

    return (
        <div>
            {postCtx?.posts.map(item => (
                <div key={item.id} className="border-b border-black p-3">
                    <div className="text-2xl font-bold mb-3">{item.title}</div>
                    <div className="text-md ">{item.body}</div>
                </div>
            ))}
        </div>
    )
}