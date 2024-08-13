/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = { 
    output: 'export',  // <=== enables static exports
    images: { unoptimized: true },
    distDir: 'dist',
    reactStrictMode: true,
    basePath: isProd ? '/car-rental-nextjs' : '',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
};

export default nextConfig;
