export interface ProjetosProps {
  id: number;
  image: any;
  title: string;
  tecnologies: any[];
  linkProject?: string;
  linkGitHub: string;
  description: string;
  challenge?: string[] | undefined;
  video?: string;
}
