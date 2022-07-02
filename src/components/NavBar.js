import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <nav className="navbar text-light mb-5">
      <div className="container-fluid">
        <h3 className="mx-auto">{t("navbar.Meteorological-service")}</h3>
      </div>
    </nav>
  );
};

export default NavBar;