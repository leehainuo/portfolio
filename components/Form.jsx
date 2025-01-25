'use client'

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { User, MailIcon, MessageSquare} from 'lucide-react'

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
        {/* input */}
        <div className="relative flex items-center">
            <Input type="name" id="name" placeholder="Name" />
            <User className="absolute right-6" size={20} />
        </div>
        <div className="relative flex items-center">
            <Input type="email" id="email" placeholder="Email" />
            <MailIcon className="absolute right-6" size={20} />
        </div>
        {/* textarea */}
        <div className="relative flex items-center">
            <Textarea placeholder="Type Your Message Here." />
            <MessageSquare className="absolute right-6 top-4" size={20} />
        </div>
        <Button className="flex items-center  max-w-[166px]" >
            Let's Talk
        </Button>
    </form>
  )
}

export default Form