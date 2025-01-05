import { cn } from '@/lib/utils';
import React from 'react';

type SectionProps = {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}

const Section = (props: SectionProps) => {
  return (
    <section className={cn(`py-8`, props.containerClassName)}>
        <div className={cn("xl:container mx-auto", props.className)}>
            {props.children}
        </div>
    </section>
  )
}

export default Section