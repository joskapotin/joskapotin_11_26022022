import Logo from "./Logo";
import PagesNav from "./PagesNav";

function Header(props) {
  return (
    <header className="header">
      <Logo />
      <PagesNav />
    </header>
  );
}

export default Header;
