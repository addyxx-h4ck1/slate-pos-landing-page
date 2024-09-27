import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav text-fontPrimary navbar bg-transparent flex justify-around items-center p-4">
      <article className="">
        <h1 className="text-3xl">
          Slate<span className="text-primary font-black">POS</span>
        </h1>
      </article>
      <article className="navlinks flex gap-6 items-center">
        <Link
          href={''}
          className="duration-300 hover:text-primary font-semibold"
        >
          Home
        </Link>
        <Link
          href={''}
          className="duration-300 hover:text-primary font-semibold"
        >
          About
        </Link>
        <Link
          href={''}
          className="duration-300 hover:text-primary font-semibold"
        >
          Features
        </Link>
        <Link
          href={''}
          className="duration-300 hover:text-primary font-semibold"
        >
          Contact
        </Link>
        <Link href={''}>
          <button className="bg-primary py-2 px-6 rounded-lg duration-500 text-white font-semibold hover:translate-y-[-5px]">
            Sign Up
          </button>
        </Link>
      </article>
      <article className="nav-toogle">
        <button className="text-lg">
          <FontAwesomeIcon icon={faBars} />{' '}
        </button>
      </article>
    </nav>
  );
};

export default Navbar;
