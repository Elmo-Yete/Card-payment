import { useState } from "react";
import background from "/bg-main-desktop.png";
import mobilebg from "/bg-main-mobile.png";
import back from "/bg-card-back.png";
import front from "/bg-card-front.png";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const [cardData, setCardData] = useState({
    number: "0000-0000-0000-0000",
    name: "Agustin Fer",
    MM: "00",
    YY: "00",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value.replace(/\D/g, "").substring(0, 16);
    formattedValue = formattedValue.replace(/(.{4})/g, "$1-");
    formattedValue = formattedValue.substring(0, 19);
    setCardData((prevData) => ({
      ...prevData,
      [name]: formattedValue,
    }));
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main className="flex max-sm:flex-wrap  relative w-screen h-screen">
      <img
        src={mobilebg}
        alt="bg-gradient"
        className="bg-local h-screen hidden lg:flex w-1/2"
      />
      <img
        src={background}
        alt="bg-gradient"
        className="bg-local h-1/2 lg:hidden w-screen"
      />

      <section className="absolute flex flex-col gap-16 top-28 left-28 max-sm:top-20 max-sm:left-0 max-sm:gap-0 ">
        <article className="relative flex flex-col items-center">
          <div className="absolute flex flex-col justify-center items-center h-full text-white font-semibold text-3xl gap-4 w-full max-sm:text-xl max-sm:w-fit">
            <p className="text-left">{cardData.number}</p>
            <p>{cardData.name}</p>
            <p>
              {cardData.MM} / {cardData.YY}
            </p>
          </div>
          <img
            src={front}
            alt="tarjeta-front"
            className="w-full max-sm:w-3/4"
          />
        </article>
        <img
          src={back}
          alt="tarjeta-back"
          className="z-20 ms-24 max-sm:ms-12 w-full max-sm:w-3/4 "
        />
      </section>
      <section className="flex flex-col justify-center items-center w-screen h-screen max-sm:h-fit  ">
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <section className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-semibold">
                Nombre en la tarjeta
              </label>
              <input
                id="name"
                className="border border-solid border-gray-500 rounded-md p-2 px-3"
                placeholder="ej. Agustin Fer"
                {...register("name")}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="card_number" className="font-semibold">
                Numero de tarjeta
              </label>
              <input
                placeholder="Numero de tarjeta"
                type="text"
                id="card_number"
                className="border border-solid border-gray-500 rounded-md p-2 px-3"
                {...register("number")}
                onChange={handleChange}
                maxLength={16}
              />
            </div>
          </section>
          <h5 className="mt-3 font-semibold">Fecha de expiracion</h5>
          <div className="flex justify-around gap-5">
            <input
              placeholder="MM"
              type="number"
              id="MM"
              className="border border-solid border-gray-500 rounded-md w-1/4 py-1 px-3"
              {...register("MM")}
              onChange={handleChange}
              maxLength={2}
            />
            <input
              placeholder="YY"
              type="number"
              className="border border-solid border-gray-500 rounded-md w-1/4 py-1 px-3"
              {...register("YY")}
              onChange={handleChange}
              maxLength={2}
            />
            <input
              placeholder="CVC"
              type="number"
              className="border border-solid border-gray-500 rounded-md w-2/4 py-1 px-3"
              maxLength={3}
            />
          </div>
          <button className="bg-purple-900 px-1 py-3 rounded-lg text-white my-3">
            Confirmar
          </button>
        </form>
      </section>
    </main>
  );
}
