import SignOut from "@/components/sign-out";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default  async function Home() {
  const a = await getServerSession(authOptions);
 
  return (
    <div className="flex h-screen">
      <div className="container mx-auto">
      <h1 className="text-3xl text-center">Quản lý tài khoản</h1>
      <br></br>
      <div className="flex flex-col space-y-5 justify-center items-center">
        <SignOut />
      </div>
      </div>
      
    </div>
  );
}
