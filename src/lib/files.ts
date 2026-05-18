import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { HtmlFile, FileMetadata } from '@/types';
import { generateId } from './utils';

const FILES_DIRECTORY = path.join(process.cwd(), 'public', 'files');

export async function getAllHtmlFiles(): Promise<HtmlFile[]> {
  try {
    const files = await fs.readdir(FILES_DIRECTORY, { recursive: true });
    const htmlFiles = files.filter(f => String(f).endsWith('.html'));

    const parsedFiles = await Promise.all(
      htmlFiles.map(async (file) => {
        const filePath = path.join(FILES_DIRECTORY, String(file));
        const content = await fs.readFile(filePath, 'utf-8');
        const stats = await fs.stat(filePath);

        const { data } = matter(content);
        const metadata = data as Partial<FileMetadata>;

        const sourceFromPath = extractSourceFromPath(String(file));

        return {
          id: generateId(String(file)),
          filename: path.basename(String(file)),
          path: String(file),
          title: metadata.title || path.basename(String(file), '.html'),
          description: metadata.description,
          source: metadata.source || sourceFromPath,
          tags: metadata.tags || [],
          created: metadata.created || stats.birthtime.toISOString().split('T')[0],
          updated: metadata.updated || stats.mtime.toISOString().split('T')[0],
          size: stats.size,
          url: `/files/${String(file)}`,
        };
      })
    );

    return parsedFiles.sort((a, b) =>
      new Date(b.created).getTime() - new Date(a.created).getTime()
    );
  } catch (error) {
    console.error('Error reading files:', error);
    return [];
  }
}

export async function getHtmlFileById(id: string): Promise<HtmlFile | null> {
  const files = await getAllHtmlFiles();
  return files.find(file => file.id === id) || null;
}

export async function getAllTags(): Promise<string[]> {
  const files = await getAllHtmlFiles();
  const allTags = files.flatMap(file => file.tags);
  return Array.from(new Set(allTags)).sort();
}

export async function getAllSources(): Promise<string[]> {
  const files = await getAllHtmlFiles();
  const allSources = files.map(file => file.source);
  return Array.from(new Set(allSources));
}

export async function getFileContent(filePath: string): Promise<string | null> {
  try {
    const fullPath = path.join(FILES_DIRECTORY, filePath);
    const content = await fs.readFile(fullPath, 'utf-8');
    return content;
  } catch (error) {
    console.error('Error reading file content:', error);
    return null;
  }
}

function extractSourceFromPath(filePath: string): string {
  const parts = filePath.split('/');
  if (parts.length >= 2) {
    const source = parts[0];
    const validSources = ['openclaw', 'workbuddy', 'codex', 'qoderwork', 'trae-solo'];
    if (validSources.includes(source)) {
      return source;
    }
  }
  return 'other';
}

export async function searchFiles(query: string): Promise<HtmlFile[]> {
  const files = await getAllHtmlFiles();
  const lowerQuery = query.toLowerCase();

  return files.filter(file =>
    file.title.toLowerCase().includes(lowerQuery) ||
    file.description?.toLowerCase().includes(lowerQuery) ||
    file.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    file.filename.toLowerCase().includes(lowerQuery)
  );
}

export async function filterFiles(
  files: HtmlFile[],
  sources?: string[],
  tags?: string[]
): Promise<HtmlFile[]> {
  return files.filter(file => {
    if (sources && sources.length > 0 && !sources.includes(file.source)) {
      return false;
    }
    if (tags && tags.length > 0 && !tags.some(tag => file.tags.includes(tag))) {
      return false;
    }
    return true;
  });
}
