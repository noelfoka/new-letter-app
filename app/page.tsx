// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Toas */}
      <div className="flex items-center mb-6 md:w-[600px]">
        <div className="flex flex-col items-center w-full">
          <div className="h-[200px] bg-[url('/banner.png')] w-full bg-cover bg-center rounded-3xl mb-6"></div>
          <div className="w-fullp-10 pt-0">
            <h1 className="text-2xl md:text-4xl font-bold text-white">
              Bienvenue à ma new letter
            </h1>
            <p className="my-4 text-sm">
              Recevez des nouvelles et des conseils pour améliorer votre projet
            </p>
            <form className="flex items-center w-full">
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="email@example.com"
              />
              <button className="btn btn-primary ml-3">S&apos;abonner</button>
            </form>
            <p>Pas de spam, pas de publicité, pas de newsletters inutiles</p>
          </div>
        </div>
      </div>
    </div>
  );
}
