import { h } from "preact";
import { Link } from "preact-router/match";

const Header = () => (
  <header class="w-screen pt-5 pb-5 fixed">
    <div className="w-11/12 mx-auto flex justify-between">
      <div class="flex">
        <img
          onClick={() => (root.location = "/")}
          class="h-8 w-auto"
          src="https://assets.nflxext.com/en_us/layout/ecweb/common/logo-shadow2x.png"
        />
        <Link class="text-red font-bold pt-1 ml-10" href="/">
          Browse
        </Link>
      </div>
      <div className="flex">
        <input
          type="search"
          className="pl-1"
          placeholder="Search"
          style={{
            background:
              "transparent url(https://assets.nflxext.com/ffe/siteui/akira/fallback/secondary_button_hover_background.png) repeat",
          }}
        />
      </div>
    </div>
  </header>
);

export default Header;
