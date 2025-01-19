import {
    RiYoutubeFill,
    RiGithubFill,
    RiFacebookFill,
    RiWechatFill,
} from "react-icons/ri"

import Link from "next/link";

const icons = [
    {path: "/", name: <RiYoutubeFill />},
    {path: "/", name: <RiGithubFill />},
    {path: "/", name: <RiFacebookFill />},
    {path: "/", name: <RiWechatFill />},
]


const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
        {icons.map((item, index) => {
            return (
                <Link href={item.path} key={index}>
                    <div className={`${iconStyles}`}>{item.name}</div>
                </Link>
            )
        })}
    </div>
  )
}

export default Socials