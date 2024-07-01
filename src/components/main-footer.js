import { MetaBlogLogo } from "@/assets/metaBlog-logo"
import { MainContainer } from "./main-container"

export const MainFooter = () => {
    return (
        <MainContainer background="bg-gray-100">
            <footer className="pt-12 px-4 space-y-6">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex-1">
                        <h1 className="font-bold text-black">About</h1>
                        <p className="mt-3 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum animi optio in aut ea voluptates odio voluptate repellat, magni distinctio doloremque possimus debitis modi nulla error, ullam atque deleniti ipsam.
                        </p>
                        <p>Email : <a>info@jstemplate.net</a></p>
                        <p>Phone : <a>880 123 456 789</a></p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <ul className="flex flex-row lg:flex-col lg:gap-2 gap-6 my-5 lg:my-0">
                            <li>Home</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="flex-1 flex gap-6">icons</div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center py-8 space-y-12 lg:space-y-0 border-t border-gray-300">
                    <div className="flex space-x-2">
                        <MetaBlogLogo></MetaBlogLogo>
                        <div>
                            <h1 className="flex text-xl">Meta<p className="font-bold">Blog</p></h1>
                            <p>© All Rights Reserved.</p>
                        </div>
                    </div>
                    <ul className="flex flex-col lg:flex-row lg:gap-4 lg:items-center">
                        <li>Terms of Use</li>
                        <li className="border-l border-gray-200 h-4"></li>
                        <li>Privacy Policy</li>
                        <li className="border-l border-gray-200 h-4"></li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
            </footer>
        </MainContainer>
    )
}