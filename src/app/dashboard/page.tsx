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
            <Pposts/>
            <CriaPost/>
            <Link href={"/"}>Home</Link>
        </div>
    )
}