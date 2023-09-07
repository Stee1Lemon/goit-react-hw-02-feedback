import { SectionField } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionField>
      <h2>{title}</h2>
      {children}
    </SectionField>
  );
};
