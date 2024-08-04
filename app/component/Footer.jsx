import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer class="bg-background text-foreground py-8">
  <div class="container mx-auto flex justify-between items-start">
    <div class="flex items-center">
      <Image aria-hidden="true" alt="logo" src="https://openui.fly.dev/openui/24x24.svg?text=📡" class="mr-2" />
      <span>© 2024 Portfolio, Inc. All rights reserved.</span>
    </div>
    <div class="flex flex-col">
      <h3 class="font-bold">Quick Links</h3>
      <ul class="mt-2">
        <li><a href="#" class="text-muted-foreground hover:text-muted">Home</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-muted">About</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-muted">Services</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-muted">Contact</a></li>
      </ul>
    </div>
    <div class="flex flex-col">
      <h3 class="font-bold">Explore More</h3>
      <ul class="mt-2">
        <li><a href="#" class="text-muted-foreground hover:text-muted">Web Design</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-muted">Graphic Design</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-muted">Branding</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-muted">UI/UX</a></li>
      </ul>
    </div>
    <div class="flex flex-col">
      <h3 class="font-bold">Get in Touch</h3>
      <ul class="mt-2">
        <li><a href="#" class="text-muted-foreground hover:text-muted">Inquiry</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-muted">Portfolio</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-muted">Testimonials</a></li>
        <li><a href="#" class="text-muted-foreground hover:text-muted">Hire Me</a></li>
      </ul>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
