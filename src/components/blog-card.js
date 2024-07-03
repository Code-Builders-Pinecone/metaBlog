import { MainButtonWhite } from "./main-button-white"
import { parseISO, format } from 'date-fns';

export const BlogCard = ({ date, title, image, tags }) => {
    const published_at = parseISO(date)
    return (
        <div className="border rounded-lg border-gray-300 p-4">
            <img className="h-60 rounded-lg shadow-lg g-cover bg-center" src={image} alt="" />
            <div className="p-2 h-60 flex flex-col justify-between">
                <div className="flex flex-wrap gap-4">
                    {
                        tags.map((item, index) => (index <= 1 ? <MainButtonWhite btnContent={item} /> : null
                        ))
                    }
                </div>
                <p className="text-black text-2xl">{title}</p>
                <p>{format(published_at, 'LLLL d, yyyy')}</p>
            </div>
        </div>
    )
}