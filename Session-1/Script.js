const heading1 = React.createElement(
  "h1",
  { className: "heading1", key: "heading1" },
  "Namaste React"
);
const heading2 = React.createElement(
  "h2",
  { className: "heading2", key: "heading2" },
  "Session 01 "
);

/* Second parameter is null means we are not assigning 
   any attribute/event/style/etc on element as it will still work  */

const heading3 = React.createElement("h3", null, "Heading - 03");

const container = React.createElement("div", { className: "container" }, [
  heading1,
  heading2,
  heading3,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
