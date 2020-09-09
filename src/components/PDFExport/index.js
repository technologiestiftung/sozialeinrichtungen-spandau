/** @jsx jsx */
import { jsx } from "theme-ui";
import jsPDF from "jspdf";
import "jspdf-autotable";
import React, { useEffect, useState } from "react";

import c from "config";

const Paragraph = (p) => {
  const { children } = p;
  return (
    <span
      sx={{
        pb: ["3", "4"],
        fontSize: ["1", "1"],
      }}
    >
      {children}
    </span>
  );
};

export default (p) => {
  const { data } = p;
  const { pdfExport } = c;
  const { columns, pdfName } = pdfExport;

  const createTableBody = (filteredData) => {
    return filteredData.map((feature) => {
      const { properties } = feature;
      const obj = {};
      columns.forEach((column) => {
        obj[column.dataKey] = properties[column.dataKey];
      });
      return obj;
    });
  };

  const handleClick = () => {
    const tableBody = createTableBody(data);
    createTable(columns, tableBody);
  };

  useEffect(() => {
    console.log("filtered", data);
  }, [data]);

  const createTable = (cols, body) => {
    const doc = new jsPDF('l');
    doc.autoTable({
      body: body,
      columns: cols,
    });
    doc.save(`${pdfName}.pdf`);
  };

  return (
    <div sx={{ display: "flex", flexDirection: "column" }}>
      {data.length === 0 && (
        <Paragraph>
          Es sind noch keine Einrichtungen zu den Favoriten hinzugefügt.
        </Paragraph>
      )}
      <Paragraph>
        Füge eine Einrichtung durch klick auf das Herz Symbol hinzu und
        exportiere diese als PDF.
      </Paragraph>
      {data.length > 0 && (
        <span sx={{
          width: 'fit-content',
          backgroundColor: 'text',
          padding: '.35em .5em .25em .5em',
          color: 'background',
          cursor: 'pointer',
          mb: '4',
          fontSize: '1',
          transition: t => t.transitions[1],
          '&:hover': {
            opacity: .5
          }
        }} 
        onClick={() => handleClick()}>Exportiere PDF</span>
      )}
    </div>
  );
};
