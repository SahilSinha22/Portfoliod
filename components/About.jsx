import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div>
      <div class="flex flex-col items-start p-8 bg-background text-foreground">
  <h1 class="text-4xl font-bold mb-4">Revolutionize Your Online</h1>
  <p class="mb-2">Unleash the Potential of Your Brand</p>
  <p class="mb-2">Captivating Designs</p>
  <p class="mb-2">Innovative Strategies</p>
  <p class="mb-4">Elevate your digital landscape with my comprehensive web design and</p>
  <button class="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-lg">Lets Get Started</button>
</div>

<div class="flex justify-center mt-8">
  <Image src="https://openui.fly.dev/openui/400x300.svg?text=Explore+My+Web+Design" alt="Explore My Web Design" class="rounded-lg shadow-lg" />
  <div class="flex flex-col ml-4">
    <Image src="https://openui.fly.dev/openui/200x300.svg?text=Artwork" alt="Artwork" class="rounded-lg shadow-lg mb-4" />
    <Image src="https://openui.fly.dev/openui/200x300.svg?text=Artwork" alt="Artwork" class="rounded-lg shadow-lg" />
  </div>
</div>

<h2 class="text-3xl font-bold mt-8">About</h2>
<p class="text-muted-foreground">Discover the Depth of My</p>
    </div>
  )
}

export default About
