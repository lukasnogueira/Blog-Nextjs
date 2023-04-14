import { ReactNode } from "react";

interface DashLayoutProps {
    children: ReactNode
}

export default function DashLayout({ children }: DashLayoutProps) {

    return (
        <div>
            <h1>Post</h1>
            {children}
        </div>
    )
    
}