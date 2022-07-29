import Breadcrumb from "../../lib/Breadcrumb";

export default {
  title: "Breadcrumb",
  component: Breadcrumb,
  subcomponents: {
    BreadcrumbItem: Breadcrumb.Item,
  },
};

export const primary = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <a href="/">Home</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>Page</Breadcrumb.Item>
      <Breadcrumb.Item>Topic</Breadcrumb.Item>
    </Breadcrumb>
  );
};
export const backButtonRender = () => {
  const backButtonRender = (button) => {
    return <a href="/">{button}</a>;
  };

  return (
    <Breadcrumb backButtonRender={backButtonRender}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>Page</Breadcrumb.Item>
      <Breadcrumb.Item>Topic</Breadcrumb.Item>
    </Breadcrumb>
  );
};
export const separator = () => {
  return (
    <Breadcrumb separator=">">
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>Page</Breadcrumb.Item>
      <Breadcrumb.Item>Topic</Breadcrumb.Item>
    </Breadcrumb>
  );
};
export const onBack = () => {
  return (
    <Breadcrumb onBack={() => alert("on back")}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>Page</Breadcrumb.Item>
      <Breadcrumb.Item>Topic</Breadcrumb.Item>
    </Breadcrumb>
  );
};
export const itemOnClick = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item onClick={(e) => alert(e)}>Home</Breadcrumb.Item>
      <Breadcrumb.Item onClick={() => alert("Page clicked")}>
        Page
      </Breadcrumb.Item>
      <Breadcrumb.Item>Topic</Breadcrumb.Item>
    </Breadcrumb>
  );
};
export const routes = () => {
  const routes = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/page",
      name: "Page",
    },
    {
      link: "/topic",
      name: "Topic",
    },
  ];
  return <Breadcrumb routes={routes}></Breadcrumb>;
};
