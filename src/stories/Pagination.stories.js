import Pagination from "../../lib/styled/Pagination";
import { useState } from "react";
import { Link, BrowserRouter } from "react-router-dom";

export default {
  title: "Pagination",
  component: Pagination,
};

export const primary = () => {
  const [page, setPage] = useState(1);

  return <Pagination page={page} pageSize={10} total={128} setPage={setPage} />;
};
export const large = () => {
  const [page, setPage] = useState(1);

  return (
    <Pagination page={page} pageSize={10} total={50} setPage={setPage} large />
  );
};
export const itemRender = () => {
  const [page, setPage] = useState(1);

  const itemRender = (page, type, originalElement) => {
    if (type === "page") {
      return <a>{page}</a>;
    }

    return originalElement;
  };

  return (
    <Pagination
      page={page}
      pageSize={10}
      total={128}
      setPage={setPage}
      itemRender={itemRender}
    />
  );
};
export const routerLink = () => {
  const [page, setPage] = useState(1);

  const itemRender = (page, type, originalElement) => {
    if (type === "page") {
      return <Link to={page}>{originalElement}</Link>;
    }

    if (type === "prev" || type === "next") {
      return <Link to={page}>{originalElement}</Link>;
    }

    return originalElement;
  };

  return (
    <BrowserRouter>
      <Pagination
        page={page}
        pageSize={10}
        total={128}
        setPage={setPage}
        itemRender={itemRender}
      />
    </BrowserRouter>
  );
};
export const onChange = () => {
  const [page, setPage] = useState(1);
  const onChange = (page) => {
    alert(`page: ${page}`);
  };

  return (
    <Pagination
      page={page}
      pageSize={10}
      total={128}
      setPage={setPage}
      onChange={onChange}
    />
  );
};
