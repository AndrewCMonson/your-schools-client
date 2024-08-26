import { ReactElement } from "react";
import { Link } from "react-router-dom";

export const FourOhFourScreen = (): ReactElement => {
  return (
    <>
      <section
        id="fourOhFourScreen"
        className="flex flex-col items-center justify-center overflow-auto w-100 pt-5 bg-base-200 h-full"
      >
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-2xl text-center">
          We&apos;re sorry, but the page you&apos;re trying to access
          doesn&apos;t exist.
        </h2>
        <Link to="/" className="underline">
          Return Home
        </Link>
      </section>
    </>
  );
};
