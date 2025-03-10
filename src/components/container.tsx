import React, { PropsWithChildren } from "react";
import { cn } from "../utils/utils";

interface Props {
  className?: string;
}

export const Container: React.FC<PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("mx-auto max-w-[1280px] px-4", className)}>{children}</div>
  );
};
