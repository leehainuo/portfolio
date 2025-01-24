import { Button } from "./ui/button"
import Link from "next/link"

const Cta = () => {
  return (
    <section className="py-24 bg-[#f7f7f7] dark:bg-[#1a1a1e]">
        <div className="container">
            <div className="flex flex-col items-center">
                <h1 className="section-title text-center max-w-xl mb-8">
                    Prepared to turn your ideas reality? I'm here to help</h1>
                <Link href="/contact">
                    <Button>Contact me</Button>                
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Cta