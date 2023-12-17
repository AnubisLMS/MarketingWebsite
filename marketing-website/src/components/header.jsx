import Link from 'next/link';

const NavItem = ({ path, children }) => (
  <div className="hover:text-primary">
    <Link href={path}>{children}</Link>
  </div>
);

const Header = () => (
  <div className="w-full flex flex-row justify-center items-center pt-lg pb-lg border-b-2 border-gray-3 fixed top-0 bg-black z-30">
    <div className="lg:w-max md:w-fit sm:w-min flex flex-row justify-between items-center text-white">
      <div className="flex flex-row items-center space-x-10 justify-center">
        <nav>
          <NavItem path="/#educators">For Educators</NavItem>
          <NavItem path="/#students">For Students</NavItem>
          <NavItem path="https://anubis-lms.io/blog">Blog</NavItem>
          <NavItem path="/community">Community</NavItem>
        </nav>
      </div>
      <div>
        <a href="https://anubis.osiris.services/api/public/auth/login" target="_blank">
          <button className="pb-sm pt-sm pl-md pr-md bg-primary rounded-sm hover:opacity-90">
            Sign In
          </button>
        </a>
      </div>
    </div>
  </div>
);

export default Header;
