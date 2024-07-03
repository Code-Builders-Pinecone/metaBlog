import { MainButton } from "./main-button"

export const TrendingCard = ({ title, zur, status }) => {
    return (
        <div className={`h-96 w-72 bg-green-200 rounded-lg relative`} style={{ backgroundImage: `url(${zur})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute bottom-0 p-6">
                <MainButton btnContent={status} />
                <p className="text-white mt-4">{title}</p>
            </div>
        </div>
    )
}