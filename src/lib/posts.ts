import path from "path";
import fs from "fs";
import matter from "gray-matter"
import { ProjectNotes } from "@/src/types"

export function getSortedPostsData(type:string): ProjectNotes[] {
    const postsDirectory = path.join(process.cwd(), 'content/', type)

    const fileNames:string[] = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id:string = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf-8");

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...(matterResult.data as Omit<ProjectNotes, 'id'>),
        } as ProjectNotes
    });

    // Sort posts by date
    return allPostsData.sort((a: ProjectNotes, b: ProjectNotes) => {
        return a.date < b.date ? 1: -1
    });
}