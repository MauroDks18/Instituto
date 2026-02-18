import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
// Pterodactyl usually provides the port in SERVER_PORT, but we fallback to PORT or 3000
const port = process.env.SERVER_PORT || process.env.PORT || 3000;

// Path to the distributed assets
const distPath = join(__dirname, 'dist');
const indexPath = join(distPath, 'index.html');

// Check if the build directory exists. If not, run strict build.
if (!existsSync(indexPath)) {
    console.log("No build found (dist/index.html missing). Running 'npm run build'...");
    try {
        // Run vite build synchronously so the server doesn't start until it's ready
        execSync('npm run build', { stdio: 'inherit', cwd: __dirname });
        console.log("Build completed successfully.");
    } catch (error) {
        console.error("Failed to build the application.");
        console.error(error);
        process.exit(1);
    }
}

// Serve static files from the dist directory
app.use(express.static(distPath));

// Handle all other routes by serving index.html (SPA support)
app.get('*', (req, res) => {
    if (existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.status(500).send("Application build not found.");
    }
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running.`);
    console.log(`Listening on port: ${port}`);
});
