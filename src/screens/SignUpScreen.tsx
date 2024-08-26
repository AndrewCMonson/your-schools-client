import { useEffect } from "react";
import { ReactElement, useRef } from "react";
import { useSessionStore } from "../stores/";
import { useNavigate } from "react-router-dom";
import { SignUpForm } from "../components";

export const SignupScreen = (): ReactElement => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLDivElement>(null);
  const { user } = useSessionStore();

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/schools");
    }
  }, [user, navigate]);

  return (
    <>
      <section
        id="signupScreen"
        className="min-h-full w-full pt-5 flex flex-col lg:flex-row justify-center items-center bg-base-200"
      >
        <div className="hero bg-base-200 min-h-screen lg:flex lg:justify-end lg:w-1/2 lg:mr-40 lg:min-h-0 lg:mt-0">
          <div className="hero-content text-center mb-24 lg:mb-0">
            <div className="max-w-md md:max-w-xl">
              <h1 className="font-bold text-5xl  md:text-6xl xl:text-7xl ">
                Your child&apos;s education at your fingertips.
              </h1>
              <p className="py-6">
                No one knows your child better than you. Our goal at YourSchools
                is to enable parents to find the best environment for their kids
                to learn. Search by area, find verified parent reviews, and
                manage your student&apos;s enrollment all in one place.
              </p>
              <button
                className="btn btn-primary lg:hidden"
                onClick={scrollToForm}
              >
                Sign Up Now
              </button>
            </div>
          </div>
        </div>
        <div
          className="hero flex justify-center lg:flex-row lg:justify-start lg:w-1/2 w-3/4 bg-base-200 min-h-screen lg:min-h-0"
          ref={formRef}
        >
          <SignUpForm />
        </div>
      </section>
    </>
  );
};
