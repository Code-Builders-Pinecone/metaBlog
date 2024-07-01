import { MainButton } from "./main-button"

export const TrendingCard = ({ title, image, status }) => {
    return (
        <div className={`h-96 w-72 bg-green-200 rounded-lg relative ${image}`}>
            <div className="absolute bottom-0 p-6">
                <MainButton children={status} />
                <p className="text-white mt-4">{title}</p>
            </div>
        </div>
    )
}