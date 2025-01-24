import Socials from "./Hero/Socials"

const Footer = () => {
  return (
    <footer className="py-12 ">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between">
            {/* Socials */}
            <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4" 
            iconStyles="text-primay text-2xl"/>
            {/* Copyright */}
            <div className="text-muted-foreground">
              Copyright &copy; Lee Hainuo. All rights reserved.
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer