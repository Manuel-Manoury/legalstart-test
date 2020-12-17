export const APP_DOM_CONTAINER = "form-app";

// see: https://cs.chromium.org/chromium/src/third_party/blink/web_tests/fast/forms/resources/ValidityState-typeMismatch-email.js?q=ValidityState-typeMismatch-email.js&sq=package:chromium&dr
// eslint-disable-next-line no-useless-escape
export const EMAIL_REGEX = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const FRENCH_PASSPORT_REGEX = /^[CFGHJKLMNPRTVWXYZ0-9]{9}$/gim;
export const BRAZILIAN_PASSPORT_REGEX = /^[CFGHJKLMNPRTVWXYZ]{2}[0-9]{6}$/gim;
