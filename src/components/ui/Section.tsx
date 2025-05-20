import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  id?: string;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  id,
  className = '',
  dark = false,
}) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${dark ? 'bg-gray-900 text-white' : 'bg-white dark:bg-gray-900 dark:text-white'} ${className}`}
    >
      <Container>
        {(title || subtitle) && (
          <div className="mx-auto max-w-3xl text-center mb-12">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section;