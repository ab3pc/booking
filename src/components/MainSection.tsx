import React from "react";

interface MainSectionProps {
  className: string;
  h1?: string;
  children: React.ReactNode;
}

const MainSection: React.FC<MainSectionProps> = ({ className, h1 = "Travel App", children }) => {
  return (
    <main className={className}>
      <h1 className="visually-hidden">{h1}</h1>
      {children}
    </main>
  );
};

export default MainSection;
