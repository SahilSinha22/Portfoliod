import Image from 'next/image'
import React from 'react'

const skills = () => {
  return (
    <div>
      <div class="bg-background p-6">
  <h2 class="text-2xl font-bold text-primary">My Skills</h2>
  <h3 class="text-xl font-medium text-muted-foreground">Exploring My Diverse</h3>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
    <div class="bg-card rounded-lg shadow-lg overflow-hidden">
      <Image  src="https://placehold.co/400x300" alt="Web Design" class="w-full h-48 object-cover" />
      <div class="p-4">
        <h4 class="text-lg font-semibold text-primary">Web Design</h4>
        <p class="text-muted-foreground">User Experience</p>
      </div>
    </div>

    <div class="bg-card rounded-lg shadow-lg overflow-hidden">
      <Image  src="https://placehold.co/400x300" alt="Graphic Design" class="w-full h-48 object-cover" />
      <div class="p-4">
        <h4 class="text-lg font-semibold text-primary">Graphic Design</h4>
        <p class="text-muted-foreground">Branding</p>
      </div>
    </div>

    <div class="bg-card rounded-lg shadow-lg overflow-hidden">
      <Image  src="https://placehold.co/400x300" alt="Crafting" class="w-full h-48 object-cover" />
      <div class="p-4">
        <h4 class="text-lg font-semibold text-primary">Crafting</h4>
        <p class="text-muted-foreground">Captivating Digital</p>
      </div>
    </div>
  </div>

  <div class="flex justify-between mt-6">
    <button class="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded">Contact</button>
    <button class="bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded">Lets Collaborate</button>
  </div>
</div>
    </div>
  )
}

export default skills
