import { getAllHtmlFiles, getAllTags } from "@/lib/files";
import HomeClient from "./HomeClient";

export default async function Home() {
  const [files, tags] = await Promise.all([
    getAllHtmlFiles(),
    getAllTags(),
  ]);

  return <HomeClient initialFiles={files} initialTags={tags} />;
}
