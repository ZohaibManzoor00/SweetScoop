import { Fragment, useState } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { classNames, nameFormatter } from "../utils/formatters";

const product = {
  name: "Women's Basic Tee",
  price: "$32",
  rating: 3.9,
  reviewCount: 512,
  href: "#",
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
  imageAlt: "Back of women's Basic Tee in black.",
  colors: [
    { name: "Black", bgColor: "bg-gray-900", selectedColor: "ring-gray-900" },
    {
      name: "Heather Grey",
      bgColor: "bg-gray-400",
      selectedColor: "ring-gray-400",
    },
  ],
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "XXL", inStock: false },
  ],
};

let category = "Vanilla-Red-Ben_and_Jerry's-Cold_Stone"
const filters = [
    {
      id: "flavor",
      name: "Flavor",
      options: [
        { value: "Vanilla", label: "Vanilla" },
        { value: "Chocolate", label: "Chocolate" },
        { value: "Strawberry", label: "Strawberry" },
        { value: "Oreo", label: "Oreo" },
        { value: "Coffee", label: "Coffee" },
        { value: "Pistachio", label: "Pistachio" },
      ],
    },
    {
      id: "brand",
      name: "Brand",
      options: [
        { value: "Carvel", label: "Carvel" },
        { value: "Cold Stone", label: "Cold Stone" },
        { value: "Ice Cream Truck", label: "Ice Cream Truck" },
        { value: "Ben and Jerry's", label: "Ben and Jerry's" },
        { value: "Blue Bell", label: "Blue Bell" },
      ],
    },
    {
      id: "color",
      name: "Color",
      options: [
        { value: "White", label: "White" },
        { value: "Red", label: "Red" },
        { value: "Pink", label: "Pink" },
        { value: "Green", label: "Green" },
        { value: "Black", label: "Black" },
        { value: "Blue", label: "Blue" },
        { value: "Orange", label: "Orange" },
        { value: "Yellow", label: "Yellow" },
        { value: "Purple", label: "Purple" },
      ],
    },
];

const categoryFinder = (value) => {
    for (const filterCategory of filters) {
        for (const option of filterCategory.options) {
            if (option.value === value) return filterCategory.id
        } 
    }
}

export default function QuickViewModal({
  open,
  setOpen,
  name,
  image_src,
  rating,
  reviewCount,
  price,
  details,
  ingredients,
}) {
  //   const [open, setOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [categories, setCategories] = useState([])

  category = category.split('_').join(" ").split('-')

//   for (const type of category) {
//     console.log(type, )
//     categories.push(categoryFinder(type))
//   }
  
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
              <span
                className="hidden md:inline-block md:h-screen md:align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                enterTo="opacity-100 translate-y-0 md:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              >
                <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                  <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                    <button
                      type="button"
                      className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:items-center lg:gap-x-8">
                      {/* <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                      <img src={image_src} alt="Ice Cream Image" className="object-cover object-center" />
                    </div> */}
                      <div className="h-full max-h-fit overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                        <img
                          src={image_src}
                          alt="Ice Cream Image"
                          className="h-full object-cover object-center"
                        />
                      </div>
                      <div className="sm:col-span-8 lg:col-span-7">
                        <h2 className="text-xl font-medium text-gray-900 sm:pr-12">
                          {nameFormatter(name)}
                        </h2>
                        <p className="font-medium text-gray-900">
                          {""}${price}
                        </p>
                        <section
                          aria-labelledby="information-heading"
                          className="mt-1"
                        >
                          <h3 id="information-heading" className="sr-only">
                            Product information
                          </h3>
                          <p>{details}</p>

                          {/* Reviews */}
                          <div className="mt-4">
                            <h4 className="sr-only">Reviews</h4>
                            <div className="flex items-center">
                              <p className="text-sm text-gray-700">
                                {rating}
                                <span className="sr-only"> out of 5 stars</span>
                              </p>
                              <div className="ml-1 flex items-center">
                                {[0, 1, 2, 3, 4].map((ratings) => (
                                  <StarIcon
                                    key={ratings}
                                    className={classNames(
                                      rating > ratings
                                        ? "text-yellow-400"
                                        : "text-gray-200",
                                      "h-5 w-5 flex-shrink-0"
                                    )}
                                    aria-hidden="true"
                                  />
                                ))}
                              </div>
                              <div className="ml-4 hidden lg:flex lg:items-center">
                                <span
                                  className="text-gray-300"
                                  aria-hidden="true"
                                >
                                  &middot;
                                </span>
                                <a
                                  href="#"
                                  className="ml-4 text-sm font-medium text-amber-600 hover:text-amber-500"
                                >
                                  See all {reviewCount} reviews
                                </a>
                              </div>
                            </div>
                          </div>
                        </section>

                        <section
                          aria-labelledby="options-heading"
                          className="mt-8"
                        >
                          <h3 id="options-heading" className="sr-only">
                            Product options
                          </h3>

                          <form>
                            {/* Color picker */}
                            <div>
                              <h4 className="text-sm font-medium text-gray-900">
                                Color
                              </h4>

                              <RadioGroup
                                value={selectedColor}
                                onChange={setSelectedColor}
                                className="mt-2"
                              >
                                <RadioGroup.Label className="sr-only">
                                  Choose a color
                                </RadioGroup.Label>
                                <div className="flex items-center space-x-3">
                                  {product.colors.map((color) => (
                                    <RadioGroup.Option
                                      key={color.name}
                                      value={color}
                                      className={({ active, checked }) =>
                                        classNames(
                                          color.selectedColor,
                                          active && checked
                                            ? "ring ring-offset-1"
                                            : "",
                                          !active && checked ? "ring-2" : "",
                                          "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                                        )
                                      }
                                    >
                                      <RadioGroup.Label
                                        as="span"
                                        className="sr-only"
                                      >
                                        {color.name}
                                      </RadioGroup.Label>
                                      <span
                                        aria-hidden="true"
                                        className={classNames(
                                          color.bgColor,
                                          "h-8 w-8 rounded-full border border-black border-opacity-10"
                                        )}
                                      />
                                    </RadioGroup.Option>
                                  ))}
                                </div>
                              </RadioGroup>
                            </div>

                            {/* Size picker */}
                            <div className="mt-8">
                              <div className="flex items-center justify-between">
                                <h4 className="text-sm font-medium text-gray-900">
                                  Categories
                                </h4>
                                <a
                                  href="#"
                                  className="text-sm font-medium text-amber-600 hover:text-amber-500"
                                >
                                  View more
                                </a>
                              </div>

                              <RadioGroup
                                value={selectedSize}
                                onChange={setSelectedSize}
                                className="mt-2"
                              >
                                <RadioGroup.Label className="sr-only">
                                  Choose a size
                                </RadioGroup.Label>
                                <div className="grid grid-cols-7 gap-2">
                                <div className="mt-2 sm:ml-4 sm:mt-0">
              <div className="-m-1 flex flex-wrap items-center">
                                {categories.map((activeFilter, idx) => (
                  <span
                    key={idx}
                    className="m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pl-3 pr-2 text-sm font-medium text-gray-900"
                  >
                    <span>{activeFilter}</span>
                    <button
                      type="button"
                      className="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                    >
                      <span className="sr-only">
                        Remove filter for {activeFilter}
                      </span>

                      <svg
                        className="h-2 w-2"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 8 8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeWidth="1.5"
                          d="M1 1l6 6m0-6L1 7"
                        />
                      </svg>
                    </button>
                  </span>
                ))}
                                  {/* {ingredients} */}
                                  {/* {product.sizes.map((size) => (
                                  <RadioGroup.Option
                                    key={size.name}
                                    value={size}
                                    className={({ active, checked }) =>
                                      classNames(
                                        size.inStock
                                          ? 'cursor-pointer focus:outline-none'
                                          : 'cursor-not-allowed opacity-25',
                                        active ? 'ring-2 ring-amber-500 ring-offset-2' : '',
                                        checked
                                          ? 'border-transparent bg-amber-600 text-white hover:bg-amber-700'
                                          : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50',
                                        'flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1'
                                      )
                                    }
                                    disabled={!size.inStock}
                                  >
                                    <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                  </RadioGroup.Option>
                                ))} */}
                                </div>
                                </div>
                                </div>
                              </RadioGroup>
                            </div>

                            <button
                              type="submit"
                              className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-amber-900 px-8 py-3 text-base font-medium text-white hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                            >
                              Add to favorites
                            </button>

                            <p className="absolute left-4 top-4 text-center sm:static sm:mt-8">
                              <a
                                href={product.href}
                                className="font-medium text-amber-600 hover:text-amber-500"
                              >
                                View full details
                              </a>
                            </p>
                          </form>
                        </section>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
