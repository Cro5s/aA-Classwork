class DOMNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
  }

  
  addClass() {

  }

  append() {

  }

  attr() {

  }

  empty() {
    this.html("");
  }

  remove() {

  }

  removeClass() {

  }

  html(str) {
    if (str !== "undefined") {
      this.each((node) => {
        node.innerHTML = str
      });

    } else {

      return this.nodes[0].innerHTML;
    };
  }

  find() {

  }

  children() {

  }

  parent() {

  }
}

module.exports = DOMNodeCollection;