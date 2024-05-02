import React, { FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  const router = useRouter();
  // function Submit(e) {
  //   e.preventDefault();
  //   const formEle = document.querySelector("form");
  //   const formDatab = new FormData(formEle);
  //   fetch(
  //     "https://script.google.com/macros/s/AKfycbwCqr14-uF37zfsq4yUYuVwrwxPuqpjJgqJhhQxzrI85KQCpuDmOAt9hfT3elJ4CsAH/exec",
  //     {
  //       method: "POST",
  //       body: formDatab,
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);

  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Set loading to true when the request starts

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzZ1JaHqnAylXOCKT1oDD0j5EWvIBjh-1tmDF4mvLnznvvtO65FNboPEGlyhZ49Dm7R/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      // Handle response if necessary
      const data = await response.json();
    } catch (error) {
      // Handle error if necessary
      console.error(error);
    } finally {
      toast.success("Envoyé avec succès !");
      setTimeout(() => {
        router.refresh();
      }, 3000);
    }
  }
  return (
    <>
      <div className="">
        <div className="flex justify-center items-center h-20 bg-black">
          <Image
            alt="logo"
            src="/logo-jeep.png"
            height={1500}
            width={1500}
            className="w-20"
          />
        </div>
        <div className="h-[calc(100vh_-_80px)] sm:h-screen md:h-full ">
          <Image
            alt="jeep"
            src="/jeep-yellow.jpg"
            height={2500}
            width={2500}
            className="h-full hidden md:block bg-fixed bg-cover bg-no-repeat"
          />
          <Image
            alt="jeep"
            src="/jeep-renegade.jpg"
            height={2500}
            width={2500}
            className="h-full md:hidden bg-fixed bg-cover bg-no-repeat"
          />
          <div className="flex justify-center items-center">
            <h1 className="absolute text-slate-50 sm:text-black text-center px-4 md:px-0  md:text-start text-5xl lg:text-7xl z-40 top-64 md:top-48 lg:top-[230px] xl:top-[300px]  lg:left-10 ">
              Réservez votre <br /> Test Drive
            </h1>
            <p className="absolute text-slate-50 sm:text-black text-center px-4 md:px-0 text-3xl lg:text-4xl z-40 top-[362px] md:top-72 lg:top-[370px] xl:top-[450px] lg:left-10 ">
              dès maintenant.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute">
        <Image
          className="bg-cover h-screen z-0 "
          alt="jeep"
          src="/jeep-black.jpg"
          height={2500}
          width={2500}
        />
      </div>
      <div className="relative grid grid-cols-2 lg:pl-5 h-screen justify-center items-center z-40 ">
        <div className="lg:col-span-1"></div>

        <div className="lg:col-span-1 col-span-2">
          <section className="p-6 text-slate-50">
            <form
              onSubmit={(e) => onSubmit(e)}
              className="form container w-full max-w-lg p-8 mx-auto space-y-6 rounded-xl  shadow-2xl shadow-gray-900 backdrop-blur-md bg-slate-50/30"
            >
              <h2 className="w-full text-center text-black text-3xl font-bold">
                INSCRIPTION
              </h2>
              <div>
                <label className="block text-lg mb-1 ml-1">Nom:</label>
                <input
                  name="Nom"
                  id="Nom"
                  type="text"
                  placeholder=""
                  className="block w-full p-1 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-amber-400 dark:bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-lg mb-1 ml-1">Prénom:</label>
                <input
                  name="Prenom"
                  id="Prenom"
                  type="text"
                  placeholder=""
                  className="block w-full p-1 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-amber-400 dark:bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-lg mb-1 ml-1">Téléphone:</label>
                <input
                  name="Telephone"
                  id="Telephone"
                  type="tel"
                  placeholder=""
                  className="block w-full p-1 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-amber-400 dark:bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-lg mb-1 ml-1">E-mail:</label>
                <input
                  name="Email"
                  id="Email"
                  type="email"
                  placeholder=""
                  className="block w-full p-1 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-amber-400 dark:bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-lg mb-1 ml-1">
                  Intéressé par le modèle:
                </label>
                <input
                  name="Modele"
                  id="Modele"
                  type="text"
                  placeholder=""
                  className="block w-full p-1 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-amber-400 dark:bg-gray-100"
                />
              </div>

              <div>
                <button
                  name="Name"
                  type="submit"
                  className="w-full px-4 py-2 hover:text-black font-bold rounded shadow focus:outline-none  bg-amber-400 hover:bg-amber-300 text-gray-50"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </section>
        </div>
        <ToastContainer
          position="bottom-right"
          hideProgressBar={true}
          theme="light"
          autoClose={2000}
        />
      </div>
    </>
  );
};

export default Home;
