export interface Project {
  title: string;
  type: "video" | "post" | "link";
  imgUrl?: string;
  href: string;
}

export const getProjectActionText = (project: Project): string => {
  if (project.type == "video") return "View video";
  else if (project.type == "post") return "Read details";
  else if (project.href.includes("github.com")) return "Visit GitHub page";
  return "Visit external site";
};
