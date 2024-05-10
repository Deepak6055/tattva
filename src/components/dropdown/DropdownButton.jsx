import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState); // Toggle dropdown visibility
  };

  return (
    <div className="">
      <button
        onClick={toggleDropdown} // Toggle visibility on button click
        className="select-none flex flex-row text-center align-middle font-sans font-bold text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-85 active:opacity-85 disabled:opacity-50"
      >
        Open Menu
        <ChevronDownIcon className="ml-2 h-5 w-5 text-white" aria-hidden="true" />
      </button>

      <Transition
        show={isOpen} // Control visibility with state
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <ul
          role="menu"
          className="absolute z-10 mt-2 min-w-[180px] rounded-md border border-blue-gray-50 bg-white p-3 text-sm font-normal text-blue-gray-500 shadow-lg"
        >
          <li
            role="menuitem"
            className="block w-full cursor-pointer rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 text-[#020202]"
          >
            Menu Item 1
          </li>
          {/* Add more menu items here */}
        </ul>
      </Transition>
    </div>
  );
}

export default DropdownButton;
