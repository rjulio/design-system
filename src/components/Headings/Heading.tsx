import '@styles/components/Headings/headings.css';
import React from 'react';

type HeadingProps = {
   children: React.ReactNode;
   level?: 1 | 2 | 3 | 4;
   classes?: string;
   [key: string]: any;
};

export function Heading({
   children,
   level = 1,
   classes = '',
   ...props
}: Readonly<HeadingProps>) {
   const Tag: React.ElementType = `h${level}`;

   return (
      <Tag
         {...props}
         className={`
            heading
            heading-${level}
            ${classes}
         `}
      >
         {children}
      </Tag>
   );
}