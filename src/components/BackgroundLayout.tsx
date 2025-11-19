import React, { ReactNode } from "react";
import clsx from "clsx";

interface BackgroundLayoutProps {
  children: ReactNode;
  className?: string;
}

const BackgroundLayout: React.FC<BackgroundLayoutProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "relative w-full min-h-screen flex items-start justify-center",
        className
      )}
    >
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage: "url('/background.png')",
        }}
      />
      <div className="absolute inset-0 bg-blue-950/100 opacity-60 transition-opacity duration-500" />
      <div className="relative z-10 w-full px-4 pt-5">
        {children}
      </div>
    </div>
  );
};

export default BackgroundLayout;
