const DOMNodeCollection = require("./dom_node_collection");

window.$l = function(arg) {
  switch (typeof(arg)) {
    case "string":
      return getDomNodes(arg);

    case "object":
      if (arg instanceof HTMLElement) {
        return new DOMNodeCollection([arg]);
      };

  };
}

const getDomNodes = (selector) => {
  const nodes = document.querySelectorAll(selector);
  const nodesArray = Array.from(nodes);
  return new DOMNodeCollection(nodesArray);
}