import { useBlog } from "../app/contexts/Blog";


const Pposts = () => {
    const { posts, like } = useBlog()
    
    return(
        <>        
        {posts.map(post => (
            <div key={post.date.toISOString()}>
                <span>
                    {post.menssager} - {post.date.toLocaleDateString()} - {post.cLike}
                    <button onClick={()=>like(post.id)}>like</button>
                </span>
            </div>
        ))}
        </>
    )
}

export {Pposts}