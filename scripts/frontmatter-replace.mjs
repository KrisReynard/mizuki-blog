
import fs from "fs/promises";
import { glob } from "glob";

async function run() {
    const files = await glob("src/content/posts/**/*.md");
    let count = 0;
    for (const f of files) {
        let content = await fs.readFile(f, "utf8");
        const lines = content.split("\n");
        let mod = false;
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line.startsWith("image:") || line.startsWith("cover:")) {
                if (lines[i].includes(".png")) {
                    lines[i] = lines[i].replace(".png", ".webp");
                    mod = true;
                } else if (lines[i].includes(".jpg")) {
                    lines[i] = lines[i].replace(".jpg", ".webp");
                    mod = true;
                } else if (lines[i].includes(".jpeg")) {
                    lines[i] = lines[i].replace(".jpeg", ".webp");
                    mod = true;
                }
            }
        }
        
        if (mod) {
            await fs.writeFile(f, lines.join("\n"), "utf8");
            console.log("Updated frontmatter in:", f);
            count++;
        }
    }
    console.log(`Updated frontmatter images in ${count} files.`);
}
run();
