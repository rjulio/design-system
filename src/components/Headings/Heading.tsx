import '@styles/components/Headings/headings.css';
import React from 'react';
import { HeadingProps } from './type';

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
            heading--${level}
            ${classes}
         `}
      >
         {children}
      </Tag>
   );
}