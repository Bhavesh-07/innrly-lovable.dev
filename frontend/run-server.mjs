import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { default as appServer } from './dist/server/server.js';

const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CLIENT_DIR = path.join(__dirname, 'dist', 'client');

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.eot': 'application/vnd.ms-fontobject'
};

const REDIRECTS = {
  '/features.html': '/features',
  '/services.html': '/services/accountability-pack',
  '/services': '/services/accountability-pack',
  '/pricing.html': '/pricing',
  '/contact.html': '/contact',
  '/blogs.html': '/blog',
  '/blogs': '/blog',
  '/integration.html': '/integrations',
  '/integration': '/integrations',
  '/compare/innrly-vs-inn-flow': '/integrations/inn-flow',
  '/compare/innrly-vs-inn-flow.html': '/integrations/inn-flow',
  '/compare/innrly-vs-m3': '/integrations/m3',
  '/compare/innrly-vs-m3.html': '/integrations/m3',
  '/solutions/labor-workforce': '/solutions/innrly-shift',
  '/solutions/labor-workforce.html': '/solutions/innrly-shift',
  '/ninety-day-free-trial.html': '/onboarding',
  '/ninety-day-free-trial': '/onboarding',
  '/privacy-policy.html': '/legal/privacy',
  '/privacy-policy': '/legal/privacy',
  '/terms-of-service.html': '/legal/terms',
  '/terms-of-service': '/legal/terms',
  '/cookie-policy.html': '/legal/cookies',
  '/cookie-policy': '/legal/cookies',
  '/expertlink.html': '/services/accountability-pack',
  '/expertlink': '/services/accountability-pack',
  '/about.html': '/about',
};

const server = http.createServer(async (req, res) => {
  try {
    const method = req.method;
    const forwardedProto = req.headers['x-forwarded-proto'];
    const forwardedHost = req.headers['x-forwarded-host'];
    const hostHeader = req.headers.host || `localhost:${PORT}`;

    const protocol = (
      typeof forwardedProto === 'string' && forwardedProto.trim()
        ? forwardedProto.split(',')[0].trim()
        : (req.connection && req.connection.encrypted ? 'https' : 'http')
    ).toLowerCase();

    const hostNameOnly = (
      typeof forwardedHost === 'string' && forwardedHost.trim()
        ? forwardedHost.split(',')[0].trim()
        : hostHeader
    ).split(':')[0].toLowerCase();

    const effectiveHost = hostNameOnly;

    const url = new URL(req.url, `${protocol}://${effectiveHost}`);
    const pathname = url.pathname;
    console.log(`[SSR] ${method} ${pathname} (Host: ${effectiveHost}, Proto: ${protocol})`);

    // Only these hosts are production hosts
    const isProductionHost =
      effectiveHost === 'innrly.com' ||
      effectiveHost === 'www.innrly.com';

    // ALLOW_INDEXING can explicitly enable indexing when required,
    // but production host detection remains the primary mechanism.
    const allowIndexing =
      isProductionHost ||
      process.env.ALLOW_INDEXING === 'true';

    if (!allowIndexing) {
      res.setHeader('X-Robots-Tag', 'noindex, nofollow');
    }

    // HSTS should only be sent for HTTPS production traffic
    if (isProductionHost && protocol === 'https') {
      res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains');
    }

    // 1. Force HTTPS for all production hosts
    if (isProductionHost && protocol !== 'https') {
      const canonicalUrl = `https://www.innrly.com${pathname}${url.search}`;
      res.writeHead(301, { 'Location': canonicalUrl, 'Content-Type': 'text/plain' });
      res.end(`Redirecting to ${canonicalUrl}`);
      return;
    }

    // 2. Force apex domain to www
    if (effectiveHost === 'innrly.com') {
      const canonicalUrl = `https://www.innrly.com${pathname}${url.search}`;
      res.writeHead(301, { 'Location': canonicalUrl, 'Content-Type': 'text/plain' });
      res.end(`Redirecting to ${canonicalUrl}`);
      return;
    }

    // Handle /robots.txt dynamically from database
    if (pathname === '/robots.txt') {
      try {
        const BACKEND_URL = process.env.BACKEND_URL || 'http://127.0.0.1:8000';
        const response = await fetch(`${BACKEND_URL}/api/robots-txt`);
        if (response.ok) {
          const data = await response.json();
          res.writeHead(200, {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=3600'
          });
          res.end(data.content || `User-agent: *\nAllow: /\n\nSitemap: https://www.innrly.com/sitemap.xml\n`);
          return;
        }
      } catch (e) {}
      const fallbackRobots = `User-agent: *\nAllow: /\n\nSitemap: https://www.innrly.com/sitemap.xml\n`;
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' });
      res.end(fallbackRobots);
      return;
    }

    // Handle /llms.txt and /llms-full.txt dynamically from database
    if (pathname === '/llms.txt' || pathname === '/llms-full.txt') {
      try {
        const BACKEND_URL = process.env.BACKEND_URL || 'http://127.0.0.1:8000';
        const response = await fetch(`${BACKEND_URL}/api/llms-txt`);
        if (response.ok) {
          const data = await response.json();
          const content = pathname === '/llms.txt' ? data.llms_txt : (data.llms_full_txt || data.llms_txt);
          if (content) {
            res.writeHead(200, {
              'Content-Type': 'text/plain; charset=utf-8',
              'Cache-Control': 'public, max-age=3600'
            });
            res.end(content);
            return;
          }
        }
      } catch (e) {}
    }

    // Handle 301 Redirects for Legacy URLs
    if (REDIRECTS[pathname]) {
      res.writeHead(301, { 'Location': REDIRECTS[pathname], 'Content-Type': 'text/plain' });
      res.end(`Redirecting to ${REDIRECTS[pathname]}`);
      return;
    }

    // Proxy API requests to backend
    // Note: /integrations, /blog, /seo etc. are frontend SSR pages. Admin API requests use /api/* prefix.
    const isApiPath = pathname.startsWith('/api/') || 
                      pathname.startsWith('/admin/') ||
                      pathname === '/leads' || pathname.startsWith('/leads/') ||
                      pathname === '/users' || pathname.startsWith('/users/') ||
                      pathname === '/upload' || pathname.startsWith('/upload/') ||
                      pathname === '/uploads' || pathname.startsWith('/uploads/') ||
                      pathname === '/telemetry' || pathname.startsWith('/telemetry/');

    if (isApiPath) {
      const BACKEND_URL = process.env.BACKEND_URL || 'http://127.0.0.1:8000';
      const targetPath = pathname.startsWith('/api/') ? pathname.replace(/^\/api/, '') : pathname;
      const backendUrl = `${BACKEND_URL}${targetPath}${url.search}`;
      
      const proxyReq = http.request(backendUrl, {
        method: req.method,
        headers: {
          ...req.headers,
          host: '127.0.0.1:8000'
        },
        timeout: 10000
      }, (proxyRes) => {
        res.writeHead(proxyRes.statusCode, proxyRes.headers);
        proxyRes.pipe(res, { end: true });
      });
      
      proxyReq.on('timeout', () => {
        proxyReq.destroy();
        if (!res.headersSent) {
          res.writeHead(504, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Backend connection timeout' }));
        }
      });
      
      if (req.method === 'GET' || req.method === 'HEAD') {
        proxyReq.end();
      } else {
        req.pipe(proxyReq, { end: true });
      }
      
      proxyReq.on('error', (err) => {
        console.error('Proxy error:', err);
        if (!res.headersSent) {
          res.writeHead(502, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Bad Gateway - backend not responding' }));
        }
      });
      return;
    }

    // Redirect legacy /admin page visits to /control-hub
    if (pathname === '/admin' || pathname === '/admin/') {
      res.writeHead(301, { 'Location': `/control-hub${url.search}`, 'Content-Type': 'text/plain' });
      res.end('Redirecting to /control-hub');
      return;
    }

    // Check if the requested file exists in the client/ folder
    // Exclude dynamic routes from static file serving so SSR/DB handlers process them
    const isDynamicRoute = pathname === '/' ||
                           pathname === '/sitemap.xml' ||
                           pathname === '/robots.txt' ||
                           pathname === '/llms.txt' ||
                           pathname === '/llms-full.txt';

    if (!isDynamicRoute) {
      const localPath = path.join(CLIENT_DIR, pathname);
      const relative = path.relative(CLIENT_DIR, localPath);
      const isSafe = relative && !relative.startsWith('..') && !path.isAbsolute(relative);

      if (isSafe && fs.existsSync(localPath) && fs.statSync(localPath).isFile()) {
        const ext = path.extname(localPath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': contentType });
        fs.createReadStream(localPath).pipe(res);
        return;
      }
    }

    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (value === undefined) continue;
      if (Array.isArray(value)) {
        for (const v of value) {
          headers.append(key, v);
        }
      } else {
        headers.append(key, value);
      }
    }

    let body = null;
    if (method !== 'GET' && method !== 'HEAD') {
      const chunks = [];
      for await (const chunk of req) {
        chunks.push(chunk);
      }
      body = Buffer.concat(chunks);
    }

    const webRequest = new Request(url, {
      method,
      headers,
      body,
      duplex: 'half'
    });

    const webResponse = await appServer.fetch(webRequest);

    res.statusCode = webResponse.status;
    res.statusMessage = webResponse.statusText;

    const contentType = webResponse.headers.get('content-type') || '';
    const GA_ID = process.env.VITE_GA_MEASUREMENT_ID || 'G-TJZT02L07P';

    if (contentType.includes('text/html')) {
      const text = await webResponse.text();
      const gaSnippet = `<!-- Google tag (gtag.js) -->\n<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n  gtag('config', '${GA_ID}');\n</script>\n</head>`;
      
      let modifiedText = text;
      if (!text.includes(GA_ID)) {
        modifiedText = text.replace('</head>', gaSnippet);
      }

      webResponse.headers.forEach((value, key) => {
        if (key.toLowerCase() !== 'content-length') {
          res.appendHeader(key, value);
        }
      });
      res.setHeader('Content-Length', Buffer.byteLength(modifiedText));
      res.end(modifiedText);
      return;
    }

    webResponse.headers.forEach((value, key) => {
      res.appendHeader(key, value);
    });

    if (webResponse.body) {
      const reader = webResponse.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
    }
    res.end();
  } catch (err) {
    console.error('Server error handling request:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`Frontend SSR server listening on http://localhost:${PORT}`);
});
