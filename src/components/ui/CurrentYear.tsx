"use client";

import { useEffect, useState } from "react";

/** Copyright year from the visitor's runtime clock (the page itself is statically generated). */
export function CurrentYear() {
  const [year, setYear] = useState(() => new Date().getFullYear());
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <span suppressHydrationWarning>{year}</span>;
}
