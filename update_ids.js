import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appJsxPath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(appJsxPath, 'utf8');

const startIdx = content.indexOf('const KNANANUK_DATA = [');
const endIdx = content.indexOf('const KNANANUK_CATEGORIES = [');

if (startIdx !== -1 && endIdx !== -1) {
    let before = content.substring(0, startIdx);
    let knananukDataStr = content.substring(startIdx, endIdx);
    let after = content.substring(endIdx);

    let currentId = 1;
    let updatedKnananukDataStr = knananukDataStr.replace(/id:\s*\d+,/g, (match) => {
        return `id: ${currentId++},`;
    });

    let newContent = before + updatedKnananukDataStr + after;
    fs.writeFileSync(appJsxPath, newContent, 'utf8');
    console.log("Updated KNANANUK_DATA IDs successfully. Total IDs processed:", currentId - 1);
} else {
    console.log("Error: Could not find KNANANUK_DATA block.");
}
