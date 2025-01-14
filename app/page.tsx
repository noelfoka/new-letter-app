"use client";

import { useState } from "react";

export default function Home() {

  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
  };

  // useEffect(() => {
  //   setEmail("");
  // })

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Toas */}
      <div className="flex items-center m-6 md:w-[600px] bg-base-200 rounded-3xl">
        <div className="flex flex-col items-center w-full p-2 pb-5">
          <div className="h-[200px] bg-[url('/banner.png')] w-full bg-cover bg-center rounded-3xl mb-6"></div>
          <div className="w-fullp-10 pt-0">
            <h1 className="text-2xl md:text-4xl font-bold text-white">
              Bienvenue à ma new letter
            </h1>
            <p className="my-4 text-sm">
              Recevez des nouvelles et des conseils pour améliorer votre projet
            </p>
            <form className="flex items-center w-full" onSubmit={handleSubmit}>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn btn-primary ml-3" type="submit">S&apos;abonner</button>
            </form>
            <p className="text-xs mt-2">Pas de spam, pas de publicité, pas de newsletters inutiles</p>
          </div>
        </div>
      </div>
    </div>
  );
}
