import Image from "next/image";
import { Gallery } from "@/components/gallery";
import TodoList from "@/components/todolist";
import MyGallery from "@/components/mygallery"; // Perbaikan nama komponen

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14 bg-gradient-to-b from-gray-200">
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="text-lg font-semibold mb-2 text-black">Ilmuan yang luar biasa</p>
        <div className="flex flex-row space-x-10">
          <Gallery /> 
        </div>
        <div>
          <TodoList/>
        </div>
        <MyGallery />
      </div>
    </main>
  );
}

