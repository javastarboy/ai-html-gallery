import { getHtmlFileById } from "@/lib/files";
import PreviewClient from "./PreviewClient";
import { HtmlFile } from "@/types";

interface PageProps {
  params: { id: string };
}

export default async function PreviewPage({ params }: PageProps) {
  const file: HtmlFile | null = await getHtmlFileById(params.id);

  return <PreviewClient file={file} loading={false} />;
}
