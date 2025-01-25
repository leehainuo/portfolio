import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneIcon } from "lucide-react";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* Text & Illustration */}
        <div className="flex mb-6 lg:mb-24">
          {/* Text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 😊
            </div>
            <h1 className="primary-title mb-8">Let's Work Together.</h1>
            <p className="max-w-[400px] text-muted-foreground text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
              nostrum.
            </p>
          </div>
          {/* Illustration */}
          <div className="hidden lg:flex w-full bg-illsutration_light dark:bg-illsutration_dark
           bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* Info text & Form */}
        <div className="grid lg:grid-cols-2 mb-24 xl:mb-32">
          {/* Info text */}
          <div className="flex flex-col gap-y-4 lg:gap-y-14 mb-12 xl:mb-24 text-base lg:text-lg">
            {/* Mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>lihainuo0502@gmail.com</div>
            </div>
            {/* Mail */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>xx xx xx xx</div>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-x-8">
              <PhoneIcon size={18} className="text-primary" />
              <div>+86 173 3888 9216</div>
            </div>            
          </div>
          <Form />
        </div>
      </div>
    </section>
  )
}

export default Contact