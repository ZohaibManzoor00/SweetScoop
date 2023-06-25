import { StarIcon } from "@heroicons/react/20/solid";
import { classNames, nameFormatter } from "../utils/formatters";
import { useState } from "react";
import QuickViewModal from "./QuickViewModal";

export default function Listing({ name, image_src, rating, reviewCount, price, details, ingredients }) {
  const [open, setOpen] = useState(false);
  return (
    <button onClick={() => setOpen(true)}>
      {open && (
        <QuickViewModal
          open={open}
          setOpen={setOpen}
          image_src={image_src}
          name={name}
          rating={rating}
          reviewCount={reviewCount}
          price={price}
          details={details}
          ingredients={ingredients}
        />
      )}
      <div className="group relative p-4 sm:p-6">
        <div className="aspect-h-1 aspect-w-1 h-72 overflow-hidden rounded bg-gray-200 group-hover:opacity-75">
          <img
            src={image_src}
            alt="Ice cream Image"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="pb-4 pt-10 text-center">
          <h3 className="text-md font-medium text-gray-900">
            {/* <a href={post.href}> */}
            <span aria-hidden="true" className="absolute inset-0" />
            {nameFormatter(name)}
            {/* </a> */}
          </h3>
          <div className="mt-3 flex flex-col items-center">
            <p className="sr-only">{rating} out of 5 stars</p>
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((num) => (
                <StarIcon
                  key={num}
                  className={classNames(
                    rating > num ? "text-yellow-400" : "text-gray-200",
                    "h-5 w-5 flex-shrink-0"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="mt-1 text-sm text-gray-500">{reviewCount} reviews</p>
          </div>
          <p className="mt-4 text-base font-medium text-gray-900">${price}</p>
        </div>
      </div>
    </button>
  );
}
