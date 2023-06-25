import { Link } from "react-router-dom";

export default function ErrorCallToAction({ retry }) {
  return (
    <section className="bg-gray-100 py-6 text-gray-900">
      <div className="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
        <div className="flex flex-col justify-center lg:text-left">
          <p className="mb-1 text-sm font-medium uppercase text-amber-900">
            Error
          </p>
          <h1 className="title-font py-2 text-3xl font-medium">
            An error has occurred
          </h1>
        </div>
        <div className="flex flex-shrink-0 flex-col items-center justify-center space-y-4 pt-6 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
          <button
            className="inline-flex items-center rounded-lg bg-amber-900 px-6 py-3 text-gray-50 hover:bg-amber-800"
            onClick={retry}
          >
            <span className="flex flex-col items-start">
              <span className="title-font font-semibold">Retry</span>
            </span>
          </button>
          <Link
            to="/"
            className="inline-flex items-center rounded-lg bg-amber-900 px-5 py-3 text-gray-50 hover:bg-amber-800"
          >
            <span className="flex flex-col items-start">
              <span className="title-font font-semibold">Contact Support</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
