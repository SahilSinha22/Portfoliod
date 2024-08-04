import Image from 'next/image'
import React from 'react'

const Graphic = () => {
  return (
    <div>
      <div class="flex flex-col md:flex-row bg-background p-8">
  <div class="flex-1 grid grid-cols-2 gap-4">
    <Image class="object-cover rounded-lg" src="https://placehold.co/300x300?text=Image+1" alt="Image 1" />
    <Image class="object-cover rounded-lg" src="https://placehold.co/300x300?text=Image+2" alt="Image 2" />
    <Image class="object-cover rounded-lg" src="https://placehold.co/300x300?text=Image+3" alt="Image 3" />
    <Image class="object-cover rounded-lg" src="https://placehold.co/300x300?text=Image+4" alt="Image 4" />
    <Image class="object-cover rounded-lg" src="https://placehold.co/300x300?text=Image+5" alt="Image 5" />
    <Image class="object-cover rounded-lg" src="https://placehold.co/300x300?text=Image+6" alt="Image 6" />
    <Image class="object-cover rounded-lg" src="https://placehold.co/300x300?text=Image+7" alt="Image 7" />
    <Image class="object-cover rounded-lg" src="https://placehold.co/300x300?text=Image+8" alt="Image 8" />
    <Image class="object-cover rounded-lg" src="https://placehold.co/300x300?text=Image+9" alt="Image 9" />
  </div>
  <div class="flex-1 bg-card p-6 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold text-primary">UI/UX</h2>
    <h3 class="text-xl font-semibold text-secondary">Graphic Design</h3>
    <p class="text-muted-foreground">Seamlessly blending creativity and technical prowess to deliver.</p>
    <h3 class="text-xl font-semibold text-secondary">Branding</h3>
    <p class="text-muted-foreground">With an unwavering commitment to excellence.</p>

    <h3 class="text-xl font-semibold text-secondary">Web Design</h3>
    <p class="text-muted-foreground">Pushing the boundaries of creativity, I seamlessly integrate cutting-edge.</p>

    <h3 class="text-xl font-semibold text-secondary">3D Modeling</h3>
    <p class="text-muted-foreground">Leveraging the power of visual storytelling, I capture the essence of.</p>

    <h3 class="text-xl font-semibold text-secondary">My Track Record</h3>
    <p class="text-muted-foreground">From conceptualization to execution.</p>

    <h3 class="text-xl font-semibold text-secondary">Coding Expertise</h3>
    <p class="text-muted-foreground">Mastering the art of web development.</p>
  </div>
</div>
    </div>
  )
}

export default Graphic
