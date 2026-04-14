
import fs from "fs/promises";
import path from "path";
import { glob } from "glob";
import sharp from "sharp";

async function run() {
    const coversDir = path.resolve(process.cwd(), "public/images/covers");
    const files = await glob("**/*.{png,jpg,jpeg,JPG,PNG,JPEG}", { cwd: coversDir, absolute: true });
    console.log(`Found ${files.length} cover images to convert in public/images/covers.`);
    
    let count = 0;
    for (const file of files) {
        const ext = path.extname(file);
        const webpPath = file.slice(0, -ext.length) + ".webp";
        
        try {
            await fs.stat(webpPath);
        } catch {
            console.log(`Converting ${path.basename(file)} -> .webp...`);
            await sharp(file).webp({ quality: 85 }).toFile(webpPath);
            count++;
        }
    }
    console.log(`Done! Converted ${count} new cover images.`);
}
run().catch(console.error);
