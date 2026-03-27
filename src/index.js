import "./styles.css";
import logo from "../asset/silverware.svg";

const img = document.createElement("img");
img.src = logo;

document.body.appendChild(img);

console.log("Hello from webpack");
