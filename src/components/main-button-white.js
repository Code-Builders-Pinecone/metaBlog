import { Children } from "react"

export const MainButtonWhite = ({ children }) => {
    return (
        <button className="text-indigo-600 px-3 py-1 bg-indigo-100 rounded-lg max-w-fit">
            {children}
        </button>
    )
}