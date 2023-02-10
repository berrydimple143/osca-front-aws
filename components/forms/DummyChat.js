import { SendOutlined, CommentOutlined, CloseCircleOutlined } from '@ant-design/icons';
import PlaceIcon from '@mui/icons-material/Place';
import LinkIcon from '@mui/icons-material/Link';

const DummyChat = ({ setShowChat }) =>
{
    return (
        <section className="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 min-h-full p-4">
            <div className="h-full">

                <div className="relative max-w-[340px] mx-auto bg-white shadow-lg rounded-lg">

                    <header className="pt-4 pb-2 px-5 border-b border-gray-200">
                        <div className="flex justify-between items-center mb-3">

                            <div className="flex items-center">
                                <a className="inline-flex items-start mr-3" href="#0">
                                    <img className="rounded-full" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-48-01_nugblk.jpg" width="48" height="48" alt="Lauren Marsano" />
                                </a>
                                <div className="pr-1">
                                    <a className="inline-flex text-gray-800 hover:text-gray-900" href="#0">
                                        <h2 className="text-xl leading-snug font-bold">Lauren Marsano</h2>
                                    </a>
                                    <a className="block text-sm font-medium hover:text-indigo-500" href="#0">@lauren.mars</a>
                                </div>
                            </div>

                            <div className="relative inline-flex flex-shrink-0">
                                <button onClick={() => setShowChat(false) } className="text-gray-400 hover:text-gray-500 rounded-full focus:ring-0 outline-none focus:outline-none">
                                    <span className="sr-only">Close</span>
                                    <CloseCircleOutlined className="w-10 h-10" style={{ fontSize: 24 }} />
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center sm:justify-start space-x-4">
                            <div className="flex items-center">
                                <PlaceIcon className="w-4 h-4 fill-current flex-shrink-0 text-gray-400" />
                                <span className="text-sm whitespace-nowrap ml-2">Milan, IT</span>
                            </div>
                            <div className="flex items-center">
                                <LinkIcon className="w-4 h-4 fill-current flex-shrink-0 text-gray-400" />
                                <a className="text-sm font-medium whitespace-nowrap text-indigo-500 hover:text-indigo-600 ml-2" href="#0">carolinmcneail.com</a>
                            </div>
                        </div>
                    </header>

                    <div className="py-3 px-5">
                        <h3 className="text-xs font-semibold uppercase text-gray-400 mb-1">Chats</h3>

                        <div className="divide-y divide-gray-200 overflow-scroll">

                            <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                <div className="flex items-center">
                                    <img className="rounded-full items-start flex-shrink-0 mr-3" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-01_pfck4u.jpg" width="32" height="32" alt="Marie Zulfikar" />
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">Marie Zulfikar</h4>
                                        <div className="text-[13px]">The video chat ended · 2hrs</div>
                                    </div>
                                </div>
                            </button>

                            <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                <div className="flex items-center">
                                    <img className="rounded-full items-start flex-shrink-0 mr-3" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-02_vll8uv.jpg" width="32" height="32" alt="Nhu Cassel" />
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">Nhu Cassel</h4>
                                        <div className="text-[13px]">Hello Lauren, · 24 Mar</div>
                                    </div>
                                </div>
                            </button>

                            <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                <div className="flex items-center">
                                    <img className="rounded-full items-start flex-shrink-0 mr-3" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-03_uzwykl.jpg" width="32" height="32" alt="Patrick Friedman" />
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">Patrick Friedman</h4>
                                        <div className="text-[13px]">Yes, you’re right but… · 14 Mar</div>
                                    </div>
                                </div>
                            </button>

                            <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                <div className="flex items-center">
                                    <img className="rounded-full items-start flex-shrink-0 mr-3" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-04_ttlftd.jpg" width="32" height="32" alt="Byrne McKenzie" />
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">Byrne McKenzie</h4>
                                        <div className="text-[13px]">Hey Lauren ✨, first of all… · 14 Mar</div>
                                    </div>
                                </div>
                            </button>

                            <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                <div className="flex items-center">
                                    <img className="rounded-full items-start flex-shrink-0 mr-3" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-04_ttlftd.jpg" width="32" height="32" alt="Byrne McKenzie" />
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">Byrne McKenzie</h4>
                                        <div className="text-[13px]">Hey Lauren ✨, first of all… · 14 Mar</div>
                                    </div>
                                </div>
                            </button>

                        </div>
                    </div>

                    <button className="absolute bottom-5 right-5 inline-flex items-center text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 rounded-full text-center px-3 py-2 shadow-lg focus:outline-none focus-visible:ring-2">
                        <CommentOutlined className="w-3 h-3 fill-current text-indigo-300 flex-shrink-0 mr-2" />
                        <span>New Chat</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ChatForm;
