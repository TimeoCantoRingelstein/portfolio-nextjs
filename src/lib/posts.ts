import path from "path";
import fs from "fs";
import matter from "gray-matter"
import { Notes } from "@/src/types"

const postsDirectory = path.join(process.cwd(), 'content/');

export function getSortedPostsData(type:string): Notes[] {
    const postsDirectoryType = path.join(postsDirectory, type);
    const fileNames:string[] = fs.readdirSync(postsDirectoryType);

    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id:string = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectoryType, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf-8");

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...(matterResult.data as Omit<Notes, 'id'>),
        } as Notes
    });

    // Sort posts by date
    return allPostsData.sort((a: Notes, b: Notes) => {
        return a.date < b.date ? 1: -1
    });
}

export function getPostedData(type: string, id: string): Notes {
    const fullPath = path.join(postsDirectory, type, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);


    return {
        id,
        title: data.title,
        date: data.date,
        description: data.description || "",
        tags: data.tags || [],
        github: data.github || null,
        link: data.link || null,
        image: data.image || null,
        content: content,
    } as Notes;
}