import { Children } from "react"

export const MainContainer = ({ children, background }) => {
    return (
        <div className={`${background}`}>
            <div className="max-w-screen-xl m-auto">
                {children}
            </div>
        </div>
    )
}