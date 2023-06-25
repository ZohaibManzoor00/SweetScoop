import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <div className="relative isolate min-h-screen">
        <img
          // src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
          src="https://images.unsplash.com/photo-1555861496-0666c8981751?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b29wfGVufDB8fDB8fHww&w=1000&q=80"
          // src="https://media.istockphoto.com/id/1162456409/photo/side-view-lilac-ice-cream-cone-in-a-melting-process-on-blue-background.jpg?s=612x612&w=0&k=20&c=kwaMxGAmqmZgYuc0pDJ5FO-wihKk_F2E6V-SWd3I3PU="
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 text-center  lg:px-8">
          <p className="text-base font-semibold leading-8 text-white">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
          <p className="mt-4 text-base text-white/70 sm:mt-6">Sorry, we couldn't find the page you're looking for.</p>
          <div className="mt-10 flex justify-center">
            <Link to="/" className="text-sm font-semibold leading-7 text-white">
              <span aria-hidden="true">&larr;</span> Back to home
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
