import Image from 'next/image'
import React from 'react'
Image
const Elevate = () => {
  return (
    <div>
      <div class="bg-background text-foreground p-8">
  <h1 class="text-4xl font-bold mb-4">Elevate Your Online Presence</h1>
  <p class="mb-8">
    Unlock the full potential of your digital landscape with my comprehensive web design and development services. From stunning visuals to seamless functionality, I’ll help you create an online
    presence that commands attention.
  </p>

  <div class="flex flex-col md:flex-row md:space-x-8 mb-8">
    <div class="flex-1 bg-card p-4 rounded-lg shadow-lg">
      <Image aria-hidden="true" alt="Web Design" src="https://openui.fly.dev/openui/400x300.svg?text=Web+Design" class="rounded-lg mb-4" />
      <h2 class="text-xl font-semibold">Web Development</h2>
      <p>Harness the power of cutting-edge technologies and innovative strategies to build web experiences that captivate, engage, and drive tangible results for your business.</p>
    </div>

    <div class="flex-1 bg-card p-4 rounded-lg shadow-lg">
      <h2 class="text-xl font-semibold">Graphic Design</h2>
      <p>
        Elevate your brand’s visual identity with my expertise in graphic design. From bold logos to captivating marketing materials, I’ll help you create a cohesive and memorable brand presence that
        resonates with your target.
      </p>
      <div class="grid grid-cols-2 gap-4 mt-4">
        <div class="bg-muted p-2 rounded-lg text-center">
          <Image aria-hidden="true" alt="Branding" src="https://openui.fly.dev/openui/100x100.svg?text=Branding" />
          <p>Branding</p>
        </div>
        <div class="bg-muted p-2 rounded-lg text-center">
          <Image aria-hidden="true" alt="UI Design" src="https://openui.fly.dev/openui/100x100.svg?text=UI+Design" />
          <p>UI Design</p>
        </div>
        <div class="bg-muted p-2 rounded-lg text-center">
          <Image aria-hidden="true" alt="Illustration" src="https://openui.fly.dev/openui/100x100.svg?text=Illustration" />
          <p>Illustration</p>
        </div>
        <div class="bg-muted p-2 rounded-lg text-center">
          <Image aria-hidden="true" alt="3D Modelling" src="https://openui.fly.dev/openui/100x100.svg?text=3D+Modelling" />
          <p>3D Modelling</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Elevate
