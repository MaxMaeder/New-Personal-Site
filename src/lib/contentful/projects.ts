import { parseContentImage } from "./contentImage";
import { contentfulClient, type ContentImage } from "./service";
import type { TypeProjectSkeleton, TypeProject } from "./types";

export interface Project {
  title: string;
  image: ContentImage;
  action: "Open link" | "Show embed";
  url: string;
  date: Date;
}

type ProjectEntry = TypeProject<undefined>;

const parseProjectEntry = (entry: ProjectEntry): Project => {
  return {
    title: entry.fields.title,
    image: parseContentImage(entry.fields.image)!,
    action: entry.fields.action,
    url: entry.fields.url,
    date: new Date(entry.fields.date),
  };
};

export const getProjects = async () => {
  const projectResults = await contentfulClient.getEntries<TypeProjectSkeleton>(
    {
      content_type: "project",
      order: ["-fields.date"],
    }
  );

  return projectResults.items.map((e) => parseProjectEntry(e));
};

export const getProjectActionText = (project: Project): string => {
  if (project.url.includes("youtube.com")) return "View video";
  else if (project.url.includes("post")) return "Read details";
  else if (project.url.includes("github.com")) return "Visit GitHub page";
  return "Visit external site";
};
