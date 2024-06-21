// import Feed from "@/components/Feed";
// import News from "@/components/News";
// import Sidebar from "@/components/Sidebar";
// import { currentUser } from "@clerk/nextjs/server";


// export default async function Home() {
//   const user= await currentUser();
//   console.log(user);
//   // alert(user);
//   return (
//     <main className="pt-20 w-full items-center mx-auto">
//       <div className=" mx-auto flex flex-grow justify-between gap-8">
//         <Sidebar/>
//         <Feed/>
//         <News/>
//       </div>
//     </main>
//   );
// }
//  ChatGPT improvments
import Feed from "@/components/Feed";
import News from "@/components/News";
import Sidebar from "@/components/Sidebar";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  // console.log(user);

  return (
    <main className="pt-20 w-full mx-auto flex flex-col items-center">
      <div className="flex w-full max-w-6xl justify-between gap-8">
        <Sidebar user = {user} />
        <Feed  user={user}/>
        <News />
      </div>
    </main>
  );
}
