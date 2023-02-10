import { SendOutlined, CommentOutlined, CloseCircleOutlined } from '@ant-design/icons';
import PlaceIcon from '@mui/icons-material/Place';
import LinkIcon from '@mui/icons-material/Link';
/*import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

const echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.NEXT_PUBLIC_PUSHER_KEY,
    wsHost: process.env.NEXT_PUBLIC_PUSHER_HOST,
    wsPort: process.env.NEXT_PUBLIC_PUSHER_PORT,
    disableStats: true,
    encrypted: true,
    forceTLS: false,
});*/

const ChatForm = ({ setShowChat }) =>
{
    return (
        <div className="w-full flex flex-col max-h-screen">
            <div className="hidden sm:block sticky top-0 z-10">
              <div className="border-b border-gray-200 dark:border-gray-600">
                 <nav className="-mb-px flex bg-white dark:bg-gray-900" aria-label="Tabs"><a
                    onClick={() => setShowChat(false) } className="flex justify-between bg-indigo-800 text-gray-50 w-full py-4 px-3 text-center border-b-2 dark:text-gray-50  dark:border-gray-600 font-medium text-sm" aria-current="page">AltusTech IT Solutions Corp <CloseCircleOutlined style={{ fontSize: 22 }} /></a>
                 </nav>
              </div>
           </div>
           <section className="w-full flex scrollbar-thin hover:scrollbar-thumb-indigo-700 dark:hover:scrollbar-thumb-indigo-700 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800 scrollbar-thumb-gray-400 scrollbar-track-gray-50 overflow-y-scroll">
              <ul className="divide-y dark:divide-gray-700 divide-dotted divide-gray-200 w-full">
                 <li className="bg-gray-300 py-2 px-3">
                    <div className="flex space-x-3">
                       <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt=""/>
                       <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                             <h3 className="text-sm font-medium">Username</h3>
                             <p className="text-sm text-gray-500 dark:text-gray-200">1h</p>
                          </div>
                          <div className="flex items-center justify-between">
                             <p className="text-sm text-gray-500">test</p>
                             <p className="text-sm bg-blue-500 p-1 rounded text-gray-50">public</p>
                          </div>
                       </div>
                    </div>
                 </li>
                 <li className="bg-gray-300 py-2 px-3">
                    <div className="flex space-x-3">
                       <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="" />
                       <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                             <h3 className="text-sm font-medium">Username</h3>
                             <p className="text-sm text-gray-500 dark:text-gray-200">1h</p>
                          </div>
                          <div className="flex items-center justify-between">
                             <p className="text-sm text-gray-500">test</p>
                             <p className="text-sm bg-blue-500 p-1 rounded text-gray-50">public</p>
                          </div>
                       </div>
                    </div>
                 </li>
                 <li className="bg-gray-300 py-2 px-3">
                    <div className="flex space-x-3">
                       <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="" />
                       <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                             <h3 className="text-sm font-medium">Username</h3>
                             <p className="text-sm text-gray-500 dark:text-gray-200">1h</p>
                          </div>
                          <div className="flex items-center justify-between">
                             <p className="text-sm text-gray-500">test</p>
                             <p className="text-sm bg-blue-500 p-1 rounded text-gray-50">public</p>
                          </div>
                       </div>
                    </div>
                 </li>
                 <li className="bg-gray-300 py-2 px-3">
                    <div className="flex space-x-3">
                       <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="" />
                       <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                             <h3 className="text-sm font-medium">Username</h3>
                             <p className="text-sm text-gray-500 dark:text-gray-200">1h</p>
                          </div>
                          <div className="flex items-center justify-between">
                             <p className="text-sm text-gray-500">test</p>
                             <p className="text-sm bg-blue-500 p-1 rounded text-gray-50">public</p>
                          </div>
                       </div>
                    </div>
                 </li>
                 <li className="bg-gray-300 py-2 px-3">
                    <div className="flex space-x-3">
                       <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="" />
                       <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                             <h3 className="text-sm font-medium">Username</h3>
                             <p className="text-sm text-gray-500 dark:text-gray-200">1h</p>
                          </div>
                          <div className="flex items-center justify-between">
                             <p className="text-sm text-gray-500">test</p>
                             <p className="text-sm bg-blue-500 p-1 rounded text-gray-50">public</p>
                          </div>
                       </div>
                    </div>
                 </li>
                 <li className="bg-gray-300 py-2 px-3">
                    <div className="flex space-x-3">
                       <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="" />
                       <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                             <h3 className="text-sm font-medium">Username</h3>
                             <p className="text-sm text-gray-500 dark:text-gray-200">1h</p>
                          </div>
                          <div className="flex items-center justify-between">
                             <p className="text-sm text-gray-500">test</p>
                             <p className="text-sm bg-blue-500 p-1 rounded text-gray-50">public</p>
                          </div>
                       </div>
                    </div>
                 </li>
                 <li className="bg-gray-300 py-2 px-3">
                    <div className="flex space-x-3">
                       <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="" />
                       <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                             <h3 className="text-sm font-medium">Username</h3>
                             <p className="text-sm text-gray-500 dark:text-gray-200">1h</p>
                          </div>
                          <div className="flex items-center justify-between">
                             <p className="text-sm text-gray-500">test</p>
                             <p className="text-sm bg-blue-500 p-1 rounded text-gray-50">public</p>
                          </div>
                       </div>
                    </div>
                 </li>
                 <li className="bg-gray-300 py-2 px-3">
                    <div className="flex space-x-3">
                       <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="" />
                       <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                             <h3 className="text-sm font-medium">Username</h3>
                             <p className="text-sm text-gray-500 dark:text-gray-200">1h</p>
                          </div>
                          <div className="flex items-center justify-between">
                             <p className="text-sm text-gray-500">test</p>
                             <p className="text-sm bg-blue-500 p-1 rounded text-gray-50">public</p>
                          </div>
                       </div>
                    </div>
                 </li>
                 <li className="bg-gray-300 py-2 px-3">
                    <div className="flex space-x-3">
                       <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="" />
                       <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                             <h3 className="text-sm font-medium">Username</h3>
                             <p className="text-sm text-gray-500 dark:text-gray-200">1h</p>
                          </div>
                          <div className="flex items-center justify-between">
                             <p className="text-sm text-gray-500">test</p>
                             <p className="text-sm bg-blue-500 p-1 rounded text-gray-50">public</p>
                          </div>
                       </div>
                    </div>
                 </li>
                 <li className="bg-gray-300 py-2 px-3">
                    <div className="flex space-x-3">
                       <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="" />
                       <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                             <h3 className="text-sm font-medium">Username</h3>
                             <p className="text-sm text-gray-500 dark:text-gray-200">1h</p>
                          </div>
                          <div className="flex items-center justify-between">
                             <p className="text-sm text-gray-500">test</p>
                             <p className="text-sm bg-blue-500 p-1 rounded text-gray-50">public</p>
                          </div>
                       </div>
                    </div>
                 </li>
                 <li className="bg-gray-300 py-2 px-3">
                    <div className="flex space-x-3">
                       <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="" />
                       <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                             <h3 className="text-sm font-medium">Virgil</h3>
                             <p className="text-sm text-gray-500 dark:text-gray-200">1h</p>
                          </div>
                          <div className="flex items-center justify-between">
                             <p className="text-sm text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia
                             </p>
                             <p className="text-sm bg-blue-500 p-1 rounded text-gray-50">public</p>
                          </div>
                       </div>
                    </div>
                 </li>

                 <li className="bg-gray-300 py-8 px-3">
                    <div className="flex space-x-3">
                       <img className="h-6 w-6 rounded-full" src="" alt="" />
                       <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                             <h3 className="text-sm font-medium">&nbsp;</h3>
                             <p className="text-sm text-gray-500 dark:text-gray-200">1h</p>
                          </div>
                          <div className="flex items-center justify-between">
                             <p className="text-sm text-gray-500">&nbsp;</p>
                             <p className="text-sm bg-blue-500 p-1 rounded text-gray-50">&nbsp;</p>
                          </div>
                       </div>
                    </div>
                 </li>

              </ul>
           </section>
           <section aria-labelledby="chat-footer" className="h-auto w-full sticky shadow-2xl bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-900 border-l dark:border-gray-800 border-gray-200 bottom-0 min-w-full flex-1 flex flex-col lg:order-last">
              <div>
                 <div className="px-3 py-3 h-full mt-1 flex rounded-md shadow-sm">
                    <div className="relative flex items-stretch flex-grow focus-within:z-10">
                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-gray-400">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                          </svg>
                       </div>
                       <input type="text" name="email" id="email" className="w-full h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300" placeholder="Type your message..." />
                    </div>
                    <button id="switchTheme" className="-ml-px bg-indigo-700 relative inline-flex items-center space-x-2 px-4 py-1 border border-gray-300 dark:border-transparent text-sm font-medium rounded-r-md text-white bg-transparent hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-3 w-3 text-gray-400" viewBox="0 0 16 16"> <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/> </svg>
                       <span className="text-gray-50">Send</span>
                    </button>
                 </div>
              </div>
           </section>
        </div>
    )
}

export default ChatForm;
