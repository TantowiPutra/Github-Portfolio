import { useRef, useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import NavbarData from '_data/Navbar';
import { Link } from 'react-router-dom';

import classNames from 'utils/classNames';

import Modal from 'components/common/reusable/Modal';
import Brand from 'components/common/reusable/Brand';

export default function Navbar({ currHref }) {
  const actNavbarData = NavbarData.filter((item) => item.isActive);

  const disclosureButtonRef = useRef(null);
  const [navList, setNavList] = useState(actNavbarData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const downloadFile = (href) => {
    window.open(href, '_blank') 
  };

  const mobileNavbarEntry = navList.map(({ isRoute, name, href, current, title, warning, btnText }) => (
    <DisclosureButton
      key={name}
      className={classNames(
        href === currHref ? 'bg-slate-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
        'w-full rounded-md text-base font-medium'
      )}
      aria-current={current ? 'page' : undefined}
    >
      <span className='flex flex-row items-center w-content h-content'>
        <Link
          className='w-full py-2 md:text-base text-sm'
          onClick={(e) => {
            isRoute ? checkNavigation(e) : 
                      openModal({ title: title, warning: warning, btnText: btnText, href: href })

            console.log(disclosureButtonRef)

            if (disclosureButtonRef.current) {
              disclosureButtonRef.current.click();
            }
          }}
          to={isRoute ? href : '#'}
        >
          {name}
        </Link>
      </span>
    </DisclosureButton>
  ));

  const navbarEntry = navList.map(({ isRoute, name, href, current, icon, title, warning, btnText }) => (
    <Link
      onClick={(e) => {
        isRoute ? checkNavigation(e) : 
                  openModal({ title: title, warning: warning, btnText: btnText, href: href })
      }}

      key={name}
      to={isRoute ? href : '#'}
      className={classNames(
        href === currHref ? 'bg-slate-700 text-white' : 'text-gray-300 hover:bg-slate-800 hover:text-white', 'p-2 rounded-md px-3 sm:text-xs lg:text-base font-medium'
      )}
      aria-current={current ? 'page' : undefined}
    >
      {icon} {name}
    </Link>
  ));

  function checkNavigation(event) {
    const currentHref = event.currentTarget.getAttribute('href');

    const newNavList = navList.map((item) => ({
      ...item,
      current: item.href === currentHref,
    }));

    setNavList(newNavList);
  }

  return (
    <Disclosure as="nav" className="w-content">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden block">
                {/* Mobile menu button */}
                <DisclosureButton
                  ref={disclosureButtonRef}
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                <Link to={'/about-me'}>
                  <div id="heading" name="heading" className="w-full justify-center">
                    <Brand />
                  </div>
                </Link>
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch">
                <div className="hidden sm:ml-6 lg:block">
                  <div className="flex space-x-4">
                    {navbarEntry}
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
                {mobileNavbarEntry}
              </div>
            </DisclosurePanel>
          </Transition>

          <Modal
            isOpen={isModalOpen}
            closeModal={closeModal}
            callBack={() => (downloadFile(modalContent.href))}
            title={modalContent.title}
            warning={modalContent.warning}
            btnText={modalContent.btnText}
          />
        </>
      )}
    </Disclosure>
  );
}
