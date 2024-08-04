import Image from 'next/image'
import React from 'react'

const Professional = () => {
  return (
    <div>
      <div class="bg-background p-8">
  <h1 class="text-4xl font-bold mb-4">Unlock the<br />Power of</h1>
  <p class="text-muted-foreground mb-6">As a skilled and versatile professional, I am committed to delivering exceptional results for my clients.</p>
  <button class="bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-md">Hire Me</button>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
    <div class="bg-card p-4 rounded-lg shadow-md">
      <Image  aria-hidden="true" alt="Web Development Prowess" src="https://openui.fly.dev/openui/400x300.svg?text=Web+Development+Prowess" class="rounded-md mb-2" />
      <h2 class="text-lg font-semibold">Web Development Prowess</h2>
      <p class="text-muted-foreground">Graphic Design Mastery</p>
    </div>

    <div class="bg-card p-4 rounded-lg shadow-md">
      <Image  aria-hidden="true" alt="Branding Brilliance" src="https://openui.fly.dev/openui/400x300.svg?text=Branding+Brilliance" class="rounded-md mb-2" />
      <h2 class="text-lg font-semibold">Branding Brilliance</h2>
      <p class="text-muted-foreground">UI/UX Expertise</p>
    </div>
  </div>
</div>
    </div>
  )
}

export default Professional
