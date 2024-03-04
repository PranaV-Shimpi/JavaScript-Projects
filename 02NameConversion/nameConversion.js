let btn = document.querySelector("#convert-btn");

const toCamelCase = (str) => {
  // return str
  //   .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
  //     return index === 0 ? word.toLowerCase() : word.toUpperCase();
  //   })
  //   .replace(/\s+/g, "");

  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};

const toPascalCase = (str) => {
  return str.replace(
    /\w\S*/g,
    (m) => m.charAt(0).toUpperCase() + m.substr(1).toLowerCase()
  );
};

const toSnakeCase = (str) => {
  return (
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((s) => s.toLowerCase())
      .join("_")
  );
};

const toScreamingSnakeCase = (str) => {
  return (
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((s) => s.toUpperCase())
      .join("_")
  );
};

const toKebabCase = (str) => {
  return (
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((s) => s.toLowerCase())
      .join("-")
  );
};

const toScreamingKebabCase = (str) => {
  return (
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((s) => s.toUpperCase())
      .join("-")
  );
};

function variableNameStyles() {
  let case1 = document.getElementById("text").value;

  let camelCase = toCamelCase(case1);
  let pascalCase = toPascalCase(case1);
  let snakeCase = toSnakeCase(case1);
  let screamingSnakeCase = toScreamingSnakeCase(case1);
  let kebabCase = toKebabCase(case1);
  let screamingKebabCase = toScreamingKebabCase(case1);

  document.querySelector("#camel-case").innerText = camelCase;
  document.querySelector("#pascal-case").innerText = pascalCase;
  document.querySelector("#snake-case").innerText = snakeCase;
  document.querySelector("#screaming-snake-case").innerText =
    screamingSnakeCase;
  document.querySelector("#kebab-case").innerText = kebabCase;
  document.querySelector("#screaming-kebab-case").innerText =
    screamingKebabCase;
}

btn.addEventListener("click", variableNameStyles);
