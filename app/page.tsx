import Banner from "@/Components/Banner/Banner";
import TrendingApps from "@/Components/TrendingApps/TrendingApps";
import { notFound } from "next/navigation";

export interface HomeProps{
  searchParams: Promise<{ [key: string] : string | string[] | undefined }>
}


export default async function Home({searchParams}: HomeProps) {
  const params = await searchParams;

  if(params.invalid){
    notFound()
  }
  
  return (
    <div>
      <Banner />
      <TrendingApps />
    </div>
  );
}
