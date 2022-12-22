import React from 'react'

const Header = () => {
    return (
        <section
            class="relative bg-[url(https://images.unsplash.com/photo-1589216532372-1c2a367900d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80)] bg-cover bg-center bg-no-repeat"
        >
            <div
                class="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-black/10"
            ></div>

            <div
                class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div class="max-w-xl text-center sm:text-left">
                    <h1 class="font-serif text-3xl sm:text-7xl text-gray-200">
                        Here, for all

                        <strong class="font-serif text-3xl sm:text-7xl  block text-amber-200">
                            legal issues.
                        </strong>
                    </h1>

                    <p class="mt-4 max-w-lg sm:text-3xl sm:leading-relaxed text-gray-200">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                        tenetur fuga ducimus numquam ea!
                    </p>

                    <div class="mt-8 flex flex-wrap gap-4 text-center">
                        <a
                            href="#"
                            class="border-4 block w-full rounded  px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring sm:w-auto"
                        >
                            Get In Touch
                        </a>

                        <a
                            href="#"
                            class="border-4 border-white block w-full rounded bg-white  px-12 py-3 text-sm font-medium text-black shadow focus:outline-none focus:ring sm:w-auto"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Header