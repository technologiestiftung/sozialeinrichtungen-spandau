/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState, useEffect } from "react";

import c from "config";

import SidebarTitle from "../SidebarTitle";
import CardCompact from "components/Card/CardCompact";
import PDFExport from 'components/PDFExport';

const SidebarFav = (p) => {
  const { data } = p;
  const [filtered, setFiltered] = useState([]);
  const fav = c.fav;
  const { title } = fav;

  useEffect(() => {
    if (data) {
      const f = data.features.filter((d) => d.properties.isFaved)
      setFiltered(f);
    }
  }, [data])

  return (
    <>
      <SidebarTitle>{title}</SidebarTitle>
      <PDFExport data={filtered} />
      {data &&
        data.features
          .filter((d) => d.properties.isFaved)
          .map((d, i) => {
            return <CardCompact key={`item-${i}`} data={d} />;
          })}
    </>
  );
};

export default SidebarFav;
