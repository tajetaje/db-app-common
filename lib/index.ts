export * from "./firestore/index.js";
export * from "./util/index.js";

/*
Note:
If the .js is missing in a bunch of places, use this regex to replace:

Replace:   import (.*)from "(((\.|(\.\.))/(\w|/)*?)+)"
With:      import $1from "$2.js"

*/