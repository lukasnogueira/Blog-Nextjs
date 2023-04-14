import { useState } from "react"
import { useBlog } from "../app/contexts/Blog";


const CriaPost = () => {
    
    const [menssager, setMenssager] = useState('')
    const { createPost } = useBlog()

    return (
        <>
        <input type="text" placeholder="Post" onChange={(e) => setMenssager(e.target.value)} />
        <button onClick={() => createPost({ menssager })}>Criar Post</button>
        </>
    )
}

export {CriaPost}

