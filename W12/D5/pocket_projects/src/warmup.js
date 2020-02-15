
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  if (htmlElement.children) {
    let childArr = Array.from(htmlElement.children);

    childArr.forEach((child) => {
      htmlElement.removeChild(child);
    });
  };

  const node = document.createElement("p");
  node.innerHTML = string;
  htmlElement.appendChild(node);
};

htmlGenerator('Party Time.', partyHeader);