import clsx from "clsx";
import { JSX } from "react";

type Container = {
  children?: React.ReactNode;
  className?: string;
  image?: JSX.Element;
  background?: JSX.Element;
  disableAnimations?: boolean;
  rowSpan?: string;
  colSpan?: string;
};

const Container = ({
  children,
  className,
  image,
  background,
  rowSpan,
  colSpan,
}: Container) => {
  return (
    <div
      className={clsx(
        "relative overflow-hidden w-full",
        "border border-zinc-800",
        "bg-black/60",
        rowSpan,
        colSpan
      )}
    >
      <div
        className={clsx(
          className,
          "relative h-full z-10",
          "backdrop-blur-sm"
        )}
      >
        {children}

        <div className="absolute left-0 bottom-0 blur-xl opacity-40 size-24 -z-10">
          {image}
        </div>

        <div className="absolute inset-0 -z-20 opacity-40 mix-blend-screen">
          {background}
        </div>
      </div>
    </div>
  );
};

export default Container;