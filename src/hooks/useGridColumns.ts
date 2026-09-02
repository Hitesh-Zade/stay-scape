"use client";
import { useEffect, useState } from "react";

interface GridColumnsConfig {
  base?: number;
  sm?: number;
  md?: number;
  lg?: number;
}

export const useGridColumns = ({
   base = 1,
  sm = 2,
  md = 3,
  lg = 4,
}: GridColumnsConfig = {}) => {
  const [columns, setColumns] = useState(base);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) {
        setColumns(lg);
      } else if (window.innerWidth >= 768) {
        setColumns(md);
      } else if (window.innerWidth >= 640) {
        setColumns(sm);
      } else {
        setColumns(base);
      }
    };

    updateColumns();

    window.addEventListener("resize", updateColumns);

    return () => {
      window.removeEventListener("resize", updateColumns);
    };
   }, [base, sm, md, lg]);


  return columns;
};