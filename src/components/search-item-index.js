import { parseISO, format } from "date-fns";
export const SearchItemIndex = ({ date, userProfile, username, title }) => {
    const published_at = parseISO(date);
    return (
        <div className="border w-full rounded-lg px-4 py-2 border-gray-300 cursor-pointer flex flex-col gap-2">
            <p className="text-black">{title}</p>
            <div className="flex justify-between">
                <p>{username}</p>
                <p>{format(published_at, "LLLL d, yyyy")}</p>
            </div>
        </div>
    )
}