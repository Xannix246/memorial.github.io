import clsx from "clsx";
import Header from "../../widgets/Header";
import Footer from "../../widgets/Footer";
import { banned } from "../../banned";
import MemoCard from "../../entities/MemoCard";

const Main = () => {
  return (
    <div
      className={clsx(
        "flex flex-col place-items-center w-full text-white min-h-screen relative",
        "transition duration-300",
      )}
      id="top"
    >
      <Header />

      <section
        className="flex flex-col p-4 gap-4 max-w-6xl mt-32 mb-100"
        id="main"
      >
        <h1 className="text-4xl md:text-7xl uppercase font-extrabold text-shadow-lg">
          Мемориал в честь пострадавших 11 Мая 2026.
        </h1>
        <div>
          <h2 className="text-xl text-shadow-lg">Помним. Любим. Скорбим.</h2>

          <p className="text-md text-wrap text-shadow-lg">
            Если вы тоже были забанены в этот день, напишите issue{" "}
            <a
              href="https://github.com/Xannix246/memorial.github.io"
              className="text-blue transition hover:underline whitespace-nowrap"
            >
              здесь
            </a>
          </p>
        </div>
      </section>

      <section className="max-w-8xl mb-100" id="banned">
        <h2 className="uppercase text-6xl font-extrabold text-shadow-lg px-4">
          Павшие герои
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 gap-4 mx-auto">
          {banned.map((banned, i) => (
            <MemoCard data={banned} key={i} />
          ))}
        </div>
        <h4 className="text-center text-xl text-shadow-lg px-2">
          И многие, многие другие, чьи имена не были найдены, но они навсегда останутся в истории 🕯️
        </h4>
      </section>

      <section
        id="last-words"
        className="flex flex-col gap-6 max-w-4xl px-4 mb-40"
      >
        <h2 className="uppercase text-6xl font-extrabold text-shadow-lg">
          Последние слова
        </h2>

        <div className="border border-zinc-800 bg-black/70 p-6 w-full md:min-w-200 flex flex-col place-items-center">
          <p className="text-zinc-300 text-lg leading-relaxed">
            Чат держался до последнего.
            <br />
            Кто-то спамил F-ками.
            <br />
            Кто-то пытался спастись.
            <br />
            Кто-то писал: "Фух, пронесло".
            <br />
            <br />
            А потом прозвучала сирена.
            <br />И в ту же секунду - тишина.
          </p>

          <div className="mt-8 text-sm uppercase tracking-[0.3em] text-red-500/70">
            Signal lost
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Main;
