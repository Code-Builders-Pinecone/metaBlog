import { MainContainer } from "./main-container"

export const MainLoadMore = () => {
    return (
        <MainContainer>
            <div className="flex justify-center">
                <button className="px-4 py-2 border border-gray-300 rounded-lg">
                    Load More
                </button>
            </div>
        </MainContainer>
    )
}