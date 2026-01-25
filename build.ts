const PROJECT_ROOT = import.meta.dir;
const OUT_DIR = `${PROJECT_ROOT}/dist`;

await Bun.$`rm -rf ${OUT_DIR}`

console.log("Bunning ts!");

const buildResult = await Bun.build({
    entrypoints: [
        "src/content/content.ts"
    ],
    outdir: OUT_DIR,
    root: "src",
    minify: false,
    naming: "[dir]/[name].[ext]",
})

if (!buildResult.success) {
    console.error(buildResult.logs)
    process.exit(1)
}

await Bun.$`cp ./src/manifest.json ${OUT_DIR}/manifest.json`

console.log("Build complete! Load the 'dist' folder in Chrome.");