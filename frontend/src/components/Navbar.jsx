import { Fragment, useState, useContext } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  XMarkIcon,
  ShareIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid";
import { classNames } from "../utils/formatters";
import CurrentUserContext from "../contexts/current-user-context";
import { NavLink, useNavigate } from "react-router-dom";
import { logUserOut } from "../adapters/auth-adapter";

const callsToAction = [
  { name: "Watch a demo", href: "/demo", icon: PlayCircleIcon },
  { name: "Contact us", href: "/contact", icon: PhoneIcon },
  { name: "View all creations", href: "/market", icon: RectangleGroupIcon },
];

export default function Navbar() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const products = [
    {
      name: "Share",
      description: "Share your wildest creations with others",
      href: "/create",
      icon: ShareIcon,
    },
    {
      name: "Saved",
      description: "Access your favorites at any time",
      href: "/saved",
      icon: CursorArrowRaysIcon,
    },
    {
      name: "Profile",
      description: "Any changes you'd like to make to your profile?",
      href: currentUser ? `/profile/${currentUser.id}` : "/login",
      icon: FingerPrintIcon,
    },
    {
      name: "Random",
      description:
        "Input your favorite flavors and ingredients to generate a unique and personalized ice cream flavor",
      href: "/random",
      icon: QuestionMarkCircleIcon,
    },
  ];

  const handleLogout = async () => {
    logUserOut();
    setCurrentUser(null);
    if (mobileMenuOpen) setMobileMenuOpen(false);
    navigate("/");
  };

  return (
    <header className="relative isolate z-10 bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <span className="sr-only">SweetScoop!</span>

          <NavLink to="/">
            <p className="text-lg font-semibold text-amber-900">SweetScoop</p>
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover>
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Features
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5">
                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-amber-900"
                          aria-hidden="true"
                        />
                      </div>
                      <NavLink to={item.href}>
                        <p className="mt-6 block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </p>
                      </NavLink>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                      {callsToAction.map((item) => (
                        <NavLink to={item.href} key={item.name}>
                          <p className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                            <item.icon
                              className="h-5 w-5 flex-none text-gray-400"
                              aria-hidden="true"
                            />
                            {item.name}
                          </p>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <NavLink to="/reviews">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              Reviews
            </p>
          </NavLink>
          <NavLink to={callsToAction[2].href}>
            <p className="text-sm font-semibold leading-6 text-gray-900">
              Marketplace
            </p>
          </NavLink>
          <NavLink to="/aboutus">
            <div className="text-sm font-semibold leading-6 text-gray-900">
              About us
            </div>
          </NavLink>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {currentUser ? (
            <button
              onClick={handleLogout}
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-amber-900 hover:bg-gray-50"
            >
              Log out<span aria-hidden="true">&rarr;</span>
            </button>
          ) : (
            <NavLink to="/login">
              <div className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-amber-900 hover:bg-gray-50">
                Log in<span aria-hidden="true">&rarr;</span>
              </div>
            </NavLink>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">SweetScoop</span>
              <p className="text-lg font-semibold text-amber-900">SweetScoop</p>
            </NavLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <NavLink to={item.href} key={item.name}>
                            <Disclosure.Button
                              as="button"
                              to={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          </NavLink>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <NavLink to={callsToAction[2].href}>
                  <p className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Marketplace
                  </p>
                </NavLink>
                <NavLink to={products[0].href}>
                  <p className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Share
                  </p>
                </NavLink>
                <NavLink to={products[1].href}>
                  <p className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Saved
                  </p>
                </NavLink>
                <NavLink to={products[2].href}>
                  <p className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Profile
                  </p>
                </NavLink>
                <NavLink to={products[3].href}>
                  <p className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Random
                  </p>
                </NavLink>
                <NavLink to="/aboutus">
                  <p className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    About us
                  </p>
                </NavLink>
              </div>
              <div className="py-6">
                {currentUser ? (
                  <button
                    onClick={handleLogout}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-amber-900 hover:bg-gray-50"
                  >
                    Log out<span aria-hidden="true">&rarr;</span>
                  </button>
                ) : (
                  <NavLink to="/login">
                    <div className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-amber-900 hover:bg-gray-50">
                      Log in<span aria-hidden="true">&rarr;</span>
                    </div>
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
