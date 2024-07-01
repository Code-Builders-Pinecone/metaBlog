import { MainContainer } from "./main-container"
import { TrendingCard } from "./trending-card"

export const MainTrending = () => {
    return (
        <MainContainer>
            <h1 className="text-black font-bold text-xl mb-6">Trending</h1>
            <div className="overflow-x-auto">
                <div className="flex w-fit gap-[43px]">
                    <TrendingCard status="Trending" title="The Impact of Technology on the Workplace: How Technology is Changing" />
                    <TrendingCard />
                    <TrendingCard />
                    <TrendingCard />
                </div>
            </div>
        </MainContainer>
    )
}