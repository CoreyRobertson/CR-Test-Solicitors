import React from 'react'

const Team = () => {
    return (
        <div class="py-40 bg-black" id='Team'>
            <div class="container mx-auto px-6 md:px-12 xl:px-32">
                <div class="mb-16 text-center">
                    <h2 class="font-serif mb-4 text-center text-2xl text-amber-200 md:text-4xl py-10">Leadership at CR Test Solicitors</h2>
                    <p class="text-gray-300 lg:w-8/12 lg:mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..</p>
                </div>
                <div class="grid gap-12 items-center md:grid-cols-3">
                    <div class="space-y-4 text-center">
                        <img class="grayscale border-2 border-gray-500 w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64  p-2"
                            src="https://images.unsplash.com/photo-1614786269829-d24616faf56d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="woman" loading="lazy" width="640" height="805" />
                        <div>
                            <h4 class="text-2xl text-gray-300">Jane Doe</h4>
                            <span class="block text-sm text-gray-500">Partner</span>
                        </div>
                    </div>
                    <div class="space-y-4 text-center">
                        <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80 border-2 border-gray-500 p-2"
                            src="https://images.unsplash.com/photo-1542190891-2093d38760f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="man" loading="lazy" width="1000" height="667" />
                        <div>
                            <h4 class="text-2xl text-gray-300">Jonathan Doe</h4>
                            <span class="block text-sm text-gray-500">Partner</span>
                        </div>
                    </div>
                    <div class="space-y-4 text-center">
                        <img class=" grayscale w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64 border-2 border-gray-500 p-2"
                            src="https://images.unsplash.com/photo-1508835277982-1c1b0e205603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="woman" loading="lazy" width="1000" height="667" />
                        <div>
                            <h4 class="text-2xl text-gray-300">Don Joe</h4>
                            <span class="block text-sm text-gray-500">Partner</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team