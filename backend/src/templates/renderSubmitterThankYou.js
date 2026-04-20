const fs = require('fs');
const path = require('path');

const TEMPLATE_PATH = path.join(__dirname, 'submitterThankYou.html');

let cachedTemplate = null;

function loadTemplate() {
  if (!cachedTemplate) {
    cachedTemplate = fs.readFileSync(TEMPLATE_PATH, 'utf8');
  }
  return cachedTemplate;
}

/**
 * Renders the auto-reply email to the form submitter (thank-you / acknowledgement).
 *
 * @param {object} opts
 * @param {string} opts.greetingName — Escaped first name or “there”
 * @param {string} opts.messageBody — Full message, HTML-escaped (shown in summary box)
 * @param {string} [opts.logoBlock] — Logo HTML (`<img src="cid:utkarsh-logo" ...>`) or empty string
 */
function renderSubmitterThankYou({ greetingName, messageBody, logoBlock = '' }) {
  return loadTemplate()
    .replace(/\{\{logoBlock\}\}/g, logoBlock)
    .replace(/\{\{greetingName\}\}/g, greetingName)
    .replace(/\{\{messageBody\}\}/g, messageBody);
}

module.exports = { renderSubmitterThankYou, TEMPLATE_PATH };
