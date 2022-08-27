import { useRouter } from "next/router";

const PDFOnly = (props) => {
  const router = useRouter();
  console.log(router);
  if (router.query && router.query.pdf !== undefined || router.route == '/pdf') {
    return props.children;
  }
  return null;
};

export default PDFOnly;
