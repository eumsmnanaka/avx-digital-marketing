import React from 'react';
import { Theme } from './styles/Theme';
import { motion } from 'framer-motion';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      h1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h2: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h3: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
      span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
      button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
      input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
      textarea: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
    }

    interface ElementChildrenAttribute {
      children: {};
    }
  }

  namespace React {
    interface FC<P = {}> {
      (props: React.PropsWithChildren<P>, context?: any): React.ReactElement<any, any> | null;
    }
  }
}

declare module 'framer-motion' {
  export interface MotionProps {
    children?: React.ReactNode;
  }
}

export {};
