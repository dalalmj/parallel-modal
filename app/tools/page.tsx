import Image from "next/image";
import { Inter } from "next/font/google";
import data from "@/data/inventory.json";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

async function getData() {
  return data;
}

export default async function ListPage() {
  const data = await getData();
  return (
    <div className="flex flex-wrap w-full overflow-y-auto ">
      {data.map((item, i) => (
        <Link
          href={`/tools/${item.barcode}`}
          key={`${i}`}
          className="bg-slate-100 dark:bg-slate-900 flex flex-row flex-nowrap gap-2 m-4 p-4 rounded-md w-2/5"
          replace={true}
        >
          <div className="bg-slate-200 dark:bg-slate-800 text-2xl font-bold border-2 rounded-full w-12 h-12 flex justify-center items-center">
            {item.tool_name.substring(0, 1)}
          </div>
          <div>
            <h1 className="text-base ">{item.tool_name}</h1>
            <h2 className="text-sm ">{item.manufacturer}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
