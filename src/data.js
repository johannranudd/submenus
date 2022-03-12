import { FaCreditCard, FaBook, FaBriefcase, FaTerminal } from 'react-icons/fa';
import {
  RiContactsLine,
  RiBillLine,
  RiCustomerService2Line,
} from 'react-icons/ri';
import { BsPlugFill } from 'react-icons/bs';
import { BiHelpCircle } from 'react-icons/bi';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import React from 'react';
const sublinks = [
  {
    page: 'products',
    links: [
      { label: 'payment', icon: <FaCreditCard />, url: '/products' },
      { label: 'terminal', icon: <FaTerminal />, url: '/products' },
      { label: 'connect', icon: <RiContactsLine />, url: '/products' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'plugins', icon: <BsPlugFill />, url: '/products' },
      { label: 'libraries', icon: <FaBook />, url: '/products' },
      { label: 'help', icon: <BiHelpCircle />, url: '/products' },
      { label: 'billing', icon: <RiBillLine />, url: '/products' },
    ],
  },
  {
    page: 'company',
    links: [
      {
        label: 'about',
        icon: <HiOutlineInformationCircle />,
        url: '/products',
      },
      {
        label: 'customers',
        icon: <RiCustomerService2Line />,
        url: '/products',
      },
    ],
  },
];

export default sublinks;
