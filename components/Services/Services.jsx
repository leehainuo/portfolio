import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const servicesData = [
  {
    title: "Web Development",
    description: "Create beautiful and practical websites that are built with React or Vue.",
  },
  {
    title: "Mini Program Development",
    description: "Create your own WeChat Mini Program that are built with WeChat Developer Tools.",
  },
  {
    title: "UI/UX Design",
    description: "Painstakingly designed to appeal to your emotions and meet your every expectation.",
  },
]

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h1 className="section-title text-center mb-8 xl:mb-16">Services</h1>
        {/* Grid items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-y-4 md:gap-x-4">
          {servicesData.map((item, index) => {
            return (
              <Card key={index} className="w-full max-w-[424px] h-[380px] hover:border-[#999]
               flex flex-col overflow-hidden">
                <CardHeader className="flex-1 p-0 bg-[#f7f7f7] dark:bg-[#1a1a1e]">
                  {/* Image */}
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-left">{item.title}</CardTitle>
                  <CardDescription>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services