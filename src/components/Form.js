import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Form = ({ newLocation }) => {
  const [city, setCity] = useState("");
  const [t, i18n] = useTranslation("global");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ city });
    if (city === "" || !city) return;

    newLocation(city);
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="input-group mb-3 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder={t("form.city")}
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="btn " type="submit">{t("form.search")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;