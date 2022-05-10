import React from 'react'
import { motion } from "framer-motion"
import { theme }  from "@tailwind-config"

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={theme.extend.colors.primary["400"]}
    strokeLinecap="round"
    {...props}
  />
)

type Props = {
  toggle: () => void
}

const MenuToggle = ({ toggle }: Props) => {
  return (
    <button onClick={toggle} className="w-full h-full flex justify-center items-center relative z-20">
      <svg width="35" height="35" viewBox="0 0 23 20">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </button>
  )
}

export default MenuToggle