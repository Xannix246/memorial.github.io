import clsx from "clsx";
import Container from "../shared/Container";

const MemoCard = ({ data }: { data: BannedCard }) => {
  return (
    <Container className="flex p-4 gap-4 w-full sm:w-107">
      <img src={data.avatar} className="aspect-square rounded-full w-48" />
      <div className="flex flex-col place-items-center w-full gap-2">
        <a
          href={data.url}
          className={clsx(
            "text-2xl sm:text-4xl font-bold",
            data.url && "hover:underline cursor-pointer",
          )}
        >
          {data.username}
        </a>
        <h4 className="text-lg sm:text-xl">{data.description}</h4>
      </div>
    </Container>
  );
};

export default MemoCard;
