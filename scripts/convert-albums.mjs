
import fs from "fs/promises";
import path from "path";
import { glob } from "glob";
import sharp from "sharp";

async function run() {
    const targetDir = path.resolve(process.cwd(), "public/images/albums");
    const files = await glob("**/*.{png,jpg,jpeg,JPG,PNG,JPEG}", { cwd: targetDir, absolute: true });
    console.log(`Found ${files.length} images to check in albums folder.`);
    
    let count = 0;
    for (const file of files) {
        const filename = path.basename(file);
        
        // 跳过名为 cover.jpg 的文件
        if (filename.toLowerCase() === "cover.jpg") {
            continue;
        }

        const ext = path.extname(file);
        const webpPath = file.slice(0, -ext.length) + ".webp";
        
        try {
            await fs.stat(webpPath);
        } catch {
            console.log(`Converting ${filename} -> .webp...`);
            await sharp(file).webp({ quality: 85 }).toFile(webpPath);
            count++;
        }
    }
    console.log(`Done! Converted ${count} new album images.`);
}
run().catch(console.error);
