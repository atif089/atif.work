/* global URLSearchParams, window */

import { useRouter } from "next/router";

import React from "react";

const PDFOnly = (props) => {
  const router = useRouter();
  if (router.query && router.query.pdf !== undefined) return props.children;
  return null;
};

export default PDFOnly;
