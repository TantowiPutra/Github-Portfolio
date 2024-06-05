import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser, faMobile } from '@fortawesome/free-solid-svg-icons';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [navList, setState] = useState([
    { name: 'About Me',   icon:<FontAwesomeIcon icon={faUser}/>  , href: 'about-me', current: true },
    { name: 'Projects',   icon:<FontAwesomeIcon icon={faCoffee}/>  , href: 'projects', current: false },
    { name: 'Contact Me', icon:<FontAwesomeIcon icon={faMobile}/>  , href: 'contact-me', current: false },
  ]);

  function checkNavigation(event) {
    event.preventDefault()
    const currentHref = event.currentTarget.getAttribute('href');
    
    const newNavList = navList.map((item) => {
      return {
        ...item,
        current: item.href === currentHref
      };
    });

    setState(newNavList)
  } 


  return (
    <Disclosure as="nav">
      {({ open }) => (
        <span>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navList.map((item) => (
                      <a
                        onClick={checkNavigation}
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-slate-700 text-white' : 'text-gray-300 hover:bg-slate-800 hover:text-white',
                          'rounded-md px-3 py-2 text-md font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.icon} {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Menu When List < Small Size */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navList.map((item) => (
                <Disclosure.Button
                  onClick={checkNavigation}
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.icon} &nbsp; {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </span>
      )}
    </Disclosure>
  )
}
