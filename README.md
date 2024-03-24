# hennsoe's sideprojects
This is a gitfolder containing various things and is guaranteed to be unstable.

If it is not clear what a folder is used for it is likely for personal use and you are best of ignoring it.

# Navigating the folders
The sideproject folder is categorised by the projects main language; Meaning that Rust projects go in the Rust folder, and the cylinder goes in the square hole.

## javascript folder
#### JUDO TV Enhancer
The JUDOTV enhancer is for injecting into the browser page (I am using a JS extension for this).
The code adds a fullscreen button on the JudoTV page (which would otherwise be a premium feature) and it removes some of those pesky banner ads (when it works).
You may have to reinject this script whenever you load a new page on the Judotv domain.
#### F1 Penalty Generator
This is a generator to make penalties, but it must be served from the same domain - which means you must probably run it as a server. An easy way to do this is `python3 -m http.server -d [path/to/f1penalty]`. This project uses [html2canvas](https://github.com/niklasvh/html2canvas).

## Rust folder
#### rust-wasm-calc
This is just a bunch of messy code. 
It is made to be compiled to WebAssembly (wasm) using the command:
```
wasm-pack build --target web
```
This requires the wasm-pack which you can get by running `cargo install wasm-pack`.

If you wanna get started have a look at the Mozilla Dev [Rust to WASM guide](https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm).

Another great resource is the [Rust 🦀 and WebAssembly 🕸](https://rustwasm.github.io/docs/book/) book which also provides a feasable way of testing locally, because `python http.server` **will not work** without way too much tinkering.
