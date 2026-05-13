import clsx from "clsx";
import Container from "../shared/Container";
import { useMemo } from "react";

const gradients = [
  "from-red-500 to-orange-400",
  "from-orange-500 to-yellow-400",
  "from-red-600 to-yellow-500",
  "from-amber-500 to-red-500",
  "from-yellow-400 to-orange-600",
  "from-[#ff512f] to-[#dd2476]",
  "from-[#ff6a00] to-[#ee0979]",
  "from-[#f12711] to-[#f5af19]",
  "from-[#fc4a1a] to-[#f7b733]",
  "from-[#ff9966] to-[#ff5e62]",
];

const MemoCard = ({ data }: { data: BannedCard }) => {
  const gradient = useMemo(() => {
    const hash = data.username
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);

    return gradients[hash % gradients.length];
  }, [data.username]);

  return (
    <Container className="flex p-4 gap-4 w-full sm:w-107">
      <img src={data.avatar} className="aspect-square rounded-full w-48" />
      <div className="flex flex-col place-items-center w-full gap-2">
        <a
          href={data.url}
          className={clsx(
            "text-2xl sm:text-4xl font-bold break-all text-center",
            "bg-linear-to-r bg-clip-text text-transparent",
            gradient,
            "drop-shadow-[0_0_12px_rgba(255,120,0,0.25)]",
            data.url && "hover:underline cursor-pointer",
          )}
        >
          {data.username}
        </a>

        <h4 className="text-lg sm:text-xl text-center">
          {data.description}
        </h4>
      </div>
    </Container>
  );
};

export default MemoCard;