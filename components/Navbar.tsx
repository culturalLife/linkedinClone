// import React from "react";
// import NavItems from "./NavItems";
// import SearchInput from "./SearchInput";
// import Image from "next/image";
// import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
// import { Button } from "./ui/button";

// const Navbar = () => {
//   return (
//     <div className="fixed w-full h-14 z-50  bg-white shadow-md">
//       <div className="flex items-center max-6-xl justify-between h-14 mx-auto px-10">
//         <div className="flex items-center gap-5">
//           <Image
//             src="/linkedin.svg"
//             alt="linkedin logo"
//             width={35}
//             height={35}
//             priority
//           />
//           <div className="md:block hidden">
//             <SearchInput />
//           </div>
//         </div>
//         <div className="flex items-center gap-3">
//           <div className="md:block hidden">
//             <NavItems />
//           </div>
//           <div>
//             <SignedIn>
//               <UserButton />
//             </SignedIn>
//             <SignedOut>
//               <Button className="rounded-full" variant={"secondary"}>
//                 <SignInButton />
//               </Button>
//             </SignedOut>
//           </div>
//         </div>
//       </div>
//       {/* Add more elements here if needed */}
//     </div>
//   );
// };

// export default Navbar;
//updated ChatGPT code:
import React from "react";
import NavItems from "./NavItems";
import SearchInput from "./SearchInput";
import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="fixed w-full h-14 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between h-14 mx-auto px-6 max-w-7xl">
        <div className="flex items-center gap-5">
          <Link href="/" className="hover:animate-pop-rotate">
              <Image
                src="/linkedin.svg"
                alt="linkedin logo"
                width={35}
                height={35}
                priority
                className="transition-transform"
              />
          </Link>
          <div className="hidden md:block">
            <SearchInput />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <NavItems />
          </div>
          <div>
            <SignedOut>
              <Button className="rounded-full" variant={"secondary"}>
                <SignInButton />
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
