'use client'
import { createContext, useContext, useState } from "react";

type TBlogContext = {
    posts: TPost[]
    createPost: (param:{menssager:string}) => void
    like: (id:number) => void
}

type TPost = {
    id:number
    menssager: string
    date: Date
    cLike: number
}

const BlogContext = createContext({} as TBlogContext)
const useBlog = () => useContext(BlogContext)

const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [posts, setPosts] = useState<TPost[]>([]) 
    
    const like = (id:number) => {
        const updatedPosts = posts.map(post => {
            if (post.id === id) return ({
                ...post,
                cLike:post.cLike + 1
            })
            return post
        })
        setPosts(updatedPosts)        
    }
        
    const createPost = ({menssager}:{menssager:string}) => {
        const newPost:TPost = {
            menssager,
            id:Math.random(),
            cLike:0,
            date: new Date()
        }
        setPosts([...posts,newPost])
    }

    return (
        <BlogContext.Provider value={{
            posts,
            createPost,
            like,
        }}>
            {children}
        </BlogContext.Provider>
    )
}

export { BlogContext, BlogProvider, useBlog }