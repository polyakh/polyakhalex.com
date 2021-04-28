//region Global Imports
const { compile } = require("path-to-regexp");
//endregion

export const PATH_INDEX = "/";
export const TO_INDEX = compile(PATH_INDEX);

export const PATH_LESSONS = "/lessons";
export const TO_LESSONS = compile(PATH_LESSONS);

export const PATH_ABOUT_ME = "/about-me";
export const TO_ABOUT_ME = compile(PATH_ABOUT_ME);

export const PATH_TAG = "/tag/:slug([a-zA-Z0-9-]+)/";
export const TO_TAG = compile(PATH_TAG);
