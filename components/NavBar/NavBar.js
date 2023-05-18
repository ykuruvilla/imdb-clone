import NavBarItem from "../NavBarItem/NavBarItem";

const NavBar = () => {
  return (
    <nav className="flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
      <NavBarItem title="Trending" param="trending" />
      <NavBarItem title="Top Rated" param="topRated" />
    </nav>
  );
};

export default NavBar;
