
// import React from "react";
// import { Bell, BriefcaseBusiness, Home, MessageCircleMore, Users } from 'lucide-react'
// import Link from 'next/link';
// // method-1 to create type
// // type NAVITEMS = {
// //     src:string,
// //     icon:JSX.Element,
// //     text:string
// // }

// // m-2 to create type
// interface NAVITEMS {
//     src:string,
//     icon:JSX.Element,
//     text:string
// }

// const navItems:NAVITEMS[] = [
//     {
//         src: "/home",
//         icon: <Home />,
//         text: "Home",
//     },
//     {
//         src: "/networks",
//         icon: <Users />,
//         text: "My Network",
//     },
//     {
//         src: "/job",
//         icon: <BriefcaseBusiness />,
//         text: "Jobs",
//     },
//     {
//         src: "/message",
//         icon: <MessageCircleMore />,
//         text: "Messaging",
//     },
//     {
//         src: "/notification",
//         icon: <Bell />,
//         text: "Notification",
//     },
// ]
// const NavItems= () =>{
//     return(
//         <div className='flex  gap-8'>
//         {
//             navItems.map((navItem, index)=>{
//                 return (
//                     <div key={index} className='flex flex-col items-center cursor-pointer text-[#666666] hover:text-black '>
//                         <Link className="text-xs" href={navItem.src}>
//                             {navItem.icon}
//                             <span>{navItem.text}</span>
//                         </Link>
//                     </div>
//                      )
//                 })
//         }
//         </div>
//     );
// }
// export default NavItems;
//updated code in GPT 4-o

import React from "react";
import { Bell, Briefcase, Home, MessageCircle, Users } from "lucide-react";
import Link from "next/link";

interface NAVITEMS {
  src: string;
  icon: JSX.Element;
  text: string;
}

const navItems: NAVITEMS[] = [
  {
    src: "/home",
    icon: <Home />,
    text: "Home",
  },
  {
    src: "/networks",
    icon: <Users />,
    text: "My Network",
  },
  {
    src: "/jobs",
    icon: <Briefcase />,
    text: "Jobs",
  },
  {
    src: "/messages",
    icon: <MessageCircle />,
    text: "Messaging",
  },
  {
    src: "/notifications",
    icon: <Bell />,
    text: "Notifications",
  },
];

const NavItems = () => {
  return (
    <div className="flex gap-6">
      {navItems.map((navItem, index) => (
        <Link key={index} href={navItem.src} className="flex flex-col items-center text-gray-600 hover:text-black transition">
          {navItem.icon}
          <span className="text-xs">{navItem.text}</span>
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
/***
 * // components/NavItems.tsx
import React from "react";
import { Bell, BriefcaseBusiness, Home, MessageCircleMore, Users } from "lucide-react";
import Link from "next/link";

interface NavItem {
  src: string;
  icon: JSX.Element;
  text: string;
}

const navItems: NavItem[] = [
  // ... your navigation items definition
];

const NavItems = () => {
  return (
    <div className="flex gap-8">
      {navItems.map((navItem, index) => (
        <div key={index} className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-black">
          <Link className="text-xs" href={navItem.src}>
            {navItem.icon}
            <span>{navItem.text}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavItems;

 */