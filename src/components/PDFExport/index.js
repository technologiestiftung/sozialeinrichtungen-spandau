/** @jsx jsx */
import { jsx } from 'theme-ui';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useEffect, useState } from 'react';

import c from "config";

export default p => {
  const { data } = p;
  const [filtered, setFiltered] = useState(null);
  const { pdfExport } = c;
  const { columns, pdfName } = pdfExport;

  const createTableBody = (filteredData) => {
    return filteredData.map(feature => {
      const obj = {};
      columns.forEach(column => {
        obj[column.dataKey] = feature[column.dataKey];
      })
      return obj;
    })
  }

  const handleClick = () => {
    const filterFavs = data.features.filter((d) => d.properties.isFaved).map(feat => ({...feat.properties}))
    const tableBody = createTableBody(filterFavs);
    createTable(columns, tableBody);
  }

  useEffect(() => {
    console.log('filtered', filtered)
  }, [filtered])

  const createTable = (cols, body) => {
    const doc = new jsPDF();
    doc.autoTable({
      body: body,
      columns: cols,
    })
    doc.save(`${pdfName}.pdf`);
  }

  return (
    <span sx={{ cursor: 'pointer' }} onClick={handleClick}>Gespeicherte Einrichtungen als PDF herunterladen.</span>
  )
}