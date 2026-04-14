
import fs from "node:fs/promises";
import { glob } from "glob";
import path from "node:path";
import sharp from "sharp";

const postsDir = path.resolve(process.cwd(), "src/content/posts");
const publicDir = path.resolve(process.cwd(), "public");

async function run() {
    const files = await glob("**/*.md", { cwd: postsDir, absolute: true });
    
    for (const file of files) {
        let content = await fs.readFile(file, "utf8");
        let modified = false;

        // Pattern for Markdown images ![](...)
        const mdRegex = /!\[.*?\]\(([^)]+)\)/g;
        // Pattern for HTML images <img src="...">
        const htmlRegex = /<img[^>]+src=["']([^"']+)["']/gi;
        
        let match;
        const matches = [];

        while ((match = mdRegex.exec(content)) !== null) matches.push(match[1]);
        while ((match = htmlRegex.exec(content)) !== null) matches.push(match[1]);

        for (const imgUrl of matches) {
            if (imgUrl.startsWith("http") || imgUrl.startsWith("data:") || imgUrl.endsWith(".webp") || imgUrl.endsWith(".svg") || imgUrl.endsWith(".gif")) {
                continue;
            }

            const isAbsolute = imgUrl.startsWith("/");
            let imagePath = isAbsolute 
                ? path.join(publicDir, decodeURIComponent(imgUrl))
                : path.resolve(path.dirname(file), decodeURIComponent(imgUrl));

            try {
                const stat = await fs.stat(imagePath);
                if (stat.isFile()) {
                    const ext = path.extname(imagePath);
                    if (![".png", ".jpg", ".jpeg"].includes(ext.toLowerCase())) continue;

                    const webpPath = imagePath.slice(0, -ext.length) + ".webp";
                    const newUrl = imgUrl.slice(0, -ext.length) + ".webp";
                    
                    try {
                        const webpStat = await fs.stat(webpPath);
                    } catch {
                        console.log(`Converting ${imagePath} -> ${webpPath}`);
                        await sharp(imagePath).webp({ quality: 85 }).toFile(webpPath);
                    }

                    // Replace all occurrences in content string
                    // Escape original text for regex
                    const escapedUrl = imgUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                    content = content.replace(new RegExp(escapedUrl, "g"), newUrl);
                    modified = true;
                }
            } catch (err) {
                console.warn(`File not found or error processing: ${imagePath}`, err.message);
            }
        }

        if (modified) {
            await fs.writeFile(file, content, "utf8");
            console.log(`Updated markdown file: ${file}`);
        }
    }
    console.log("Image conversion and format replacement is complete!");
}

run().catch(console.error);
