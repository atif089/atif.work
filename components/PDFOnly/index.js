import { useRouter } from "next/router";

const PDFOnly = (props) => {
  const router = useRouter();
  if (router.query && router.query.pdf !== undefined) {
    return props.children;
  }
  return null;
};

export default PDFOnly;
