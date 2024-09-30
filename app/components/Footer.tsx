import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-[7rem] w-full bg-secondary text-fontSecondary py-12 px-8 flex justify-center items-center flex-col">
      <section className="footer-wrapper w-full max-w-[1100px] flex justify-center pb-6 border-b-[1px] border-gray-300">
        <article>
          <h2 className="text-fontPrimary font-semibold mb-5">Quick Links</h2>
          <div className="flex flex-col gap-3">
            <Link
              href={''}
              className="duration-300 hover:text-primary w-[fit-content]"
            >
              Home
            </Link>
            <Link
              href={''}
              className="duration-300 hover:text-primary w-[fit-content]"
            >
              Services
            </Link>
            <Link
              href={''}
              className="duration-300 hover:text-primary w-[fit-content]"
            >
              Testimonials
            </Link>
          </div>
        </article>
        <article>
          <h2 className="text-fontPrimary font-semibold mb-5">Get In Touch</h2>
          <div className="flex flex-col gap-3">
            <p>PO Box 16122 Collins Street Victoria</p>
            <p>8007 Australia</p>
            <p className="mb-3">888-123-4567</p>
            <Link
              href={''}
              className="text-primary duration-300 hover:underline w-fit"
            >
              info@slatepos.com
            </Link>
          </div>
        </article>
        <article>
          <h2 className="text-fontPrimary font-semibold mb-5">Pages</h2>
          <div className="flex flex-col gap-3">
            <Link
              href={''}
              className="duration-300 hover:text-primary w-[fit-content]"
            >
              About
            </Link>
            <Link
              href={''}
              className="duration-300 hover:text-primary w-[fit-content]"
            >
              Pricing
            </Link>
            <Link
              href={''}
              className="duration-300 hover:text-primary w-[fit-content]"
            >
              Sign Up
            </Link>
            <Link
              href={''}
              className="duration-300 hover:text-primary w-[fit-content]"
            >
              Sign In
            </Link>
          </div>
        </article>
        <article>
          <h2 className="text-fontPrimary font-semibold mb-5">
            Subscribe Newsletter
          </h2>
          <div className="flex flex-col gap-3 text-sm">
            <p className="mb-3">Feel free to get in touch with us vai email.</p>
            <form className="w-full">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email"
                className="py-3 px-5 bg-white outline-0 rounded-lg border-0 w-full"
              />
              <br />
              <button
                type="button"
                className="py-2 px-5 mt-3 font-semibold text-white duration-300 rounded-lg w-fit bg-primary hover:translate-y-[-5px]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </article>
      </section>
      <section className="w-full max-w-[1100px] px-2 mt-6 flex justify-between items-center text-center gap-7">
        <div className="text-xs text-fontSecondary text-left">
          Copyright &copy; {new Date().getFullYear()}. <br /> Designed by{' '}
          <Link href={'https://solo.to/briann_bn'} className="text-primary">
            briann_bn
          </Link>
        </div>
        <div className="text-xs text-fontSecondary text-left">
          <Link href={'https://github.com/addyxx-h4ck1/'} target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-black text-xl duration-300 hover:text-primary"
            />
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
