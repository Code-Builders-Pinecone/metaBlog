import { MainButtonWhite } from "./main-button-white"
import { parseISO, format } from 'date-fns';

export const BlogListCard = ({ date, title, image, tags, userName, userProfle }) => {
    const published_at = parseISO(date)
    const handlePost = () => {
        console.log("hello")
    }
    return (
        <div onClick={handlePost} className="border rounded-lg border-gray-300 p-4">
            <img className="h-60 rounded-lg shadow-lg g-cover bg-center" src={image} alt="" />
            <div className="p-2 h-60 flex flex-col justify-between">
                <div className="flex flex-wrap gap-4">
                    {
                        tags.map((item, index) => (index <= 1 ? <MainButtonWhite btnContent={item} /> : null
                        ))
                    }
                </div>
                <p className="text-black text-2xl">{title}</p>
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <div className="w-8 h-8 bg-gray-100 rounded-full" style={{ backgroundImage: `url(${userProfle})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        <p>{userName}</p>
                    </div>
                    <p>{format(published_at, 'LLLL d, yyyy')}</p>
                </div>
            </div>
        </div>
    )
}