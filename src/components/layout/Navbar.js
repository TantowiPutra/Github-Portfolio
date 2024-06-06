import { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import NavbarData from '_data/NavbarData'
import { Link } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const actNavbarData = NavbarData.filter((item) => (
  item.isActive ? item : ''
))

export default function Navbar() {
  const [navList, setList] = useState(actNavbarData);

  function checkNavigation(event) {
    const currentHref = event.currentTarget.getAttribute('href');
    
    const newNavList = navList.map((item) => {
      return {
        ...item,
        current: item.href === currentHref
      };
    });

    setList(newNavList)
  } 


  return (
    <Disclosure as="nav" className="w-3/4">
      {({ open }) => (
        <span>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden block">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>

              <div className="absolute inset-y-0 right-3 flex items-center lg:hidden block">
                <span>
                  <i className='text-3xl font-extraboldtext-3xl font-extrabold'>
                    <span className='text-red-700'>T</span>
                    <span className='text-gray-50'>P</span>
                  </i>
                </span>
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch">
                <div className="hidden sm:ml-6 lg:block">
                  <div className="flex space-x-4">
                    {navList.map((item) => (
                      <Link
                        onClick={checkNavigation}
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-slate-700 text-white' : 'text-gray-300 hover:bg-slate-800 hover:text-white', 'p-2 rounded-md px-3 sm:text-xs lg:text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.icon} {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Menu When List < Small Size */}
          <Transition
            enter="duration-200 fade-in"
            enterFrom="opacity-0 -translate-y-0"
            enterTo="opacity-100 translate-y-0"
            leave="duration-300 fade-out"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-0"
          >
              <DisclosurePanel className="lg:hidden block">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navList.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      className={classNames(
                        item.current ? 'bg-slate-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'w-full rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <span className='flex flex-row items-center w-content h-content'>
                        <Link
                          className='w-full py-2'
                          onClick={checkNavigation}
                          to={item.href}
                        >
                          {item.name}
                        </Link>
                      </span>
                    </DisclosureButton>
                  ))}
                </div>
            </DisclosurePanel>
          </Transition>
        </span>
      )}
    </Disclosure>
  )
}
