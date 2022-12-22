import React from 'react'

const Testimonials = () => {
    return (
        <div class="py-16 bg-black" id='Testimonials'>
            <div class="container m-auto py-40 px-6 text-gray-600 md:px-12 xl:px-6">
                <h2 class="font-serif mb-12 text-center text-2xl text-amber-200 md:text-4xl">Hear from our clients</h2>
                <div class="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
                    <div class="bg-black row-span-2 p-6 border-2 border-gray-500 rounded-xl text-center sm:p-8">
                        <div class="h-full flex flex-col justify-center space-y-4">

                            <p class="text-gray-200 md:text-xl"> <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span></p>
                            <div>
                                <h6 class="text-lg font-semibold leading-none">John Doe</h6>
                                <span class="text-xs text-gray-500">Client</span>
                            </div>
                        </div>
                    </div>

                    <div class="p-6 border-2 border-gray-500 rounded-xl bg-black sm:flex sm:space-x-8 sm:p-8">

                        <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                            <p class="text-gray-200"> <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span></p>
                            <div>
                                <h6 class="text-lg font-semibold leading-none">Jane Doe</h6>
                                <span class="text-xs text-gray-500">Product Designer</span>
                            </div>
                        </div>
                    </div>
                    <div class="p-6 border-2 border-gray-500 rounded-xl bg-black sm:flex sm:space-x-8 sm:p-8">

                        <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                            <p class="text-gray-200"> <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span></p>
                            <div>
                                <h6 class="text-lg font-semibold leading-none">Jane Doe</h6>
                                <span class="text-xs text-gray-500">Product Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials