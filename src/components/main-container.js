import { Children } from "react"

export const MainContainer = ({ children, background }) => {
    return (
        <div className={`${background}`}>
            <div className="max-w-screen-xl p-4 lg:p-0 m-auto">
                {children}
            </div>
        </div>
    )
}