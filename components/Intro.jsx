import Image from 'next/image'
import React from 'react'

const intro = () => {
    return (
        <div class="bg-[#081D16] text-[#BBBDB8] p-8">
            <header class="flex justify-between items-center mb-8">
                <h1 class="text-2xl font-bold">Portfolio</h1>
                <nav>
                    <ul class="flex space-x-4">
                        <li><a href="#" class="text-[#BBBDB8] ">Home</a></li>
                        <li><a href="#" class="text-[#BBBDB8]">About</a></li>
                        <li><a href="#" class="text-[#BBBDB8]">Services</a></li>
                        <li><a href="#" class="text-[#BBBDB8]">Contact</a></li>
                        <li><a href="#" class="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/80">Hire Me</a></li>
                    </ul>
                </nav>
            </header>

            <section class="mb-8">
                <h2 class="text-4xl text-white font-semibold">Introducing My Impressive</h2>
                <p class="text-muted-foreground mt-4">Welcome to my online portfolio, where I showcase my diverse skills and experiences. Explore the intricate details of my work.</p>
                <a href="#" class="bg-secondary text-secondary-foreground px-4 py-2 border-2 rounded mt-4 inline-block hover:bg-secondary/80">Discover More</a>
            </section>

            <div class="flex justify-center mb-8">
                <Image src="" alt="Portfolio Preview" class="rounded-lg shadow-lg" width={400} height={600} />
            </div>

            <div class="flex justify-center text-3xl  space-x-4">
                <span class="text-white">Shell</span>
                <span class="text-white">Ferrari</span>
                <span class="text-white">Microsoft</span>
                <span class="text-white">Apple</span>
                <span class="text-white">Google</span>
                <span class="text-white">Amazon</span>
                <span class="text-white">Walmart</span>
            </div>
        </div>
    )
}

export default intro
