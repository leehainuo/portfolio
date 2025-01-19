'use client'
import CountUp from "react-countup"

const Badge = ({containerStyles, icon, endCountNum, endContText, badgeText}) => {
  return (
    <div className={`${containerStyles} flex items-center gap-x-4 z-20 w-[200px] h-[68px] p-4
     rounded-lg border shadow-md bg-[#fafafa] dark:bg-[#18181b] dark:backdrop-blur-[44px]`}>
        <div className="text-3xl text-primary">{icon}</div>
        <div className="flex items-center gap-x-2">
            <div className="text-primary text-3xl leading-none font-bold">
                <CountUp end={endCountNum} delay={1} duration={3} />
                {endContText}
            </div>
            <div className="max-w-[70px] ">
                {badgeText}
            </div>
        </div>
    </div>
  )
}

export default Badge