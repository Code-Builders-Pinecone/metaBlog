import { MainButtonWhite } from "./main-button-white"

export const BlogCard = ({ date, title, image }) => {
    return (
        <div className="border rounded-lg border-gray-300 p-4">
            <div className="h-60 rounded-lg bg-yellow-100">{image}</div>
            <div className="p-2 space-y-4">
                <MainButtonWhite children="Design" />
                <p className="text-black text-2xl">{title}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}