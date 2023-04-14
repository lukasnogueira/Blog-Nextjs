'use client'
import Link from "next/link";
// import { useBlog } from "../contexts/Blog";
// import { useState } from "react";
import { Pposts } from "../../components/pposts";
import { CriaPost } from "../../components/criaPost";

export default function login() {

    // const { createPost, posts, like } = useBlog()
    // const [menssager, setMenssager] = useState('')

    return (
        <div>
            <h1> Pagina inicial</h1>
            {/* {posts.map(post => (
                <div key={post.date.toISOString()}>
                    <span>
                        {post.menssager} - {post.date.toLocaleDateString()} - {post.cLike}
                        <button onClick={()=>like(post.id)}>like</button>
                    </span>
                </div>
            ))} */}
            <Pposts/>
            {/* <input type="text" placeholder="Post" onChange={(e) => setMenssager(e.target.value)} />
            <button onClick={() => createPost({ menssager })}>Criar Post</button> */}
            <CriaPost/>
            <Link href={"/"}>Home</Link>
        </div>
    )
}