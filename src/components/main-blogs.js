import { BlogCard } from "./blog-card"
import { MainContainer } from "./main-container"

export const MainBlogs = () => {
    return (
        <MainContainer>
            <h1 className="text-black font-bold text-xl mb-6">All Blog Post</h1>
            <div className="flex justify-between my-8">
                <ul className="flex gap-3">
                    <li>All</li>
                    <li>Design</li>
                    <li>Travel</li>
                    <li>Fashion</li>
                    <li>Technology</li>
                    <li>Branding</li>
                </ul>
                <p className="hidden lg:flex">View All</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <BlogCard date="August 20, 2022" title="The Impact of Technology on the Workplace: How Technology is Changing"></BlogCard>
                <BlogCard date="August 20, 2022" title="The Impact of Technology on the Workplace: How Technology is Changing"></BlogCard>
                <BlogCard date="August 20, 2022" title="The Impact of Technology on the Workplace: How Technology is Changing"></BlogCard>
                <BlogCard date="August 20, 2022" title="The Impact of Technology on the Workplace: How Technology is Changing"></BlogCard>
                <BlogCard date="August 20, 2022" title="The Impact of Technology on the Workplace: How Technology is Changing"></BlogCard>
                <BlogCard date="August 20, 2022" title="The Impact of Technology on the Workplace: How Technology is Changing"></BlogCard>
                <BlogCard date="August 20, 2022" title="The Impact of Technology on the Workplace: How Technology is Changing"></BlogCard>
                <BlogCard date="August 20, 2022" title="The Impact of Technology on the Workplace: How Technology is Changing"></BlogCard>
                <BlogCard date="August 20, 2022" title="The Impact of Technology on the Workplace: How Technology is Changing"></BlogCard>
            </div>
        </MainContainer>
    )
}