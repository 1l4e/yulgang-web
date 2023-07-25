

import HomeSideBar from "@/components/sections/sidebars";
import MainContent from "@/components/sections/contents";
import NhanVat from "@/components/sections/characters";
import { findManyCharacterSideBar } from "@/models/character.server";





export default async function Home() {
  const tops = await findManyCharacterSideBar(10,0)
 
  return (

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-1 p-4">
            {/* Sidebar */}
            <HomeSideBar tops={tops} />
          </div>
          <div className="md:col-span-2 p-4">
            {/* Main Content */}
           <MainContent />
          </div>
          <div className="md:col-span-3 p-4">
              <NhanVat />
          </div>
        </div>
       
      

 
  );
}
