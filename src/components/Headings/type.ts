export type HeadingLevel = 1 | 2 | 3 | 4;

export type HeadingProps = {
   children: React.ReactNode;
   level?: HeadingLevel;
   classes?: string;
   [key: string]: any;
} & React.HTMLAttributes<HTMLElement>;
