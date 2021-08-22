// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

import { MDCBanner } from '@material/banner';
const banner = new MDCBanner(document.querySelector('#banner'));
banner.open();

const banner2 = new MDCBanner(document.querySelector('#banner2'));
banner2.open();

const banner3 = new MDCBanner(document.querySelector('#banner3'));
banner3.open();
const banner4 = new MDCBanner(document.querySelector('#banner4'));
banner4.open();
