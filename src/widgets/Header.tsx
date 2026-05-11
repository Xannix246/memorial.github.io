import { useCallback, useEffect, useState } from "react";

const Header = () => {
  const [width, setWidth] = useState(0);

  const handleWindowResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  return (
    <div className="flex w-full h-16 z-20">
      <header className="w-full fixed top-0 h-16 px-8 text-white bg-linear-0 from-0% to-black flex justify-between place-items-center z-10">
        <div className="flex gap-16 place-items-center">
          <h1 className="text-xl">Цифровой Мемориал 🕯️</h1>
          {width > 600 && (
            <div className="flex gap-8">
              <a href="#main" className="link">
                Главная
              </a>
              <a href="#banned" className="link">
                Павшие
              </a>
              <a href="#last-words" className="link">
                Финальные слова
              </a>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
