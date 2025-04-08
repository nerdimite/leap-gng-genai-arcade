import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Extract the Wikipedia page name from the URL
    const url = new URL(req.url);
    const pageParam = url.searchParams.get("page");

    if (!pageParam) {
      return NextResponse.json(
        { error: "No page parameter provided" },
        { status: 400 }
      );
    }

    // Fetch the Wikipedia content with proper headers for desktop version
    const wikiUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(
      pageParam
    )}`;
    const response = await fetch(wikiUrl, {
      headers: {
        // Request desktop version
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
      },
    });
    const htmlContent = await response.text();

    // Process the HTML to rewrite links and resources
    const processedHtml = processHtml(htmlContent, pageParam);

    // Return the modified HTML
    return new NextResponse(processedHtml, {
      headers: {
        "Content-Type": "text/html",
        // Allow iframe embedding
        "X-Frame-Options": "SAMEORIGIN",
      },
    });
  } catch (error) {
    console.error("Error in wiki-proxy:", error);
    return NextResponse.json(
      { error: "Failed to fetch Wikipedia content" },
      { status: 500 }
    );
  }
}

function processHtml(html: string, currentPage: string): string {
  // Add JavaScript to track navigation
  const trackingScript = `
    <script>
      // Track page visits
      window.parent.postMessage({ 
        type: 'WIKI_NAVIGATION', 
        page: '${currentPage}'
      }, '*');
      
      // Intercept all link clicks 
      document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (link && link.href) {
          // Extract the wiki page from the href
          const href = link.href;
          if (href.includes('/wiki/')) {
            e.preventDefault();
            const wikiPage = href.split('/wiki/')[1];
            
            // Navigate via our proxy
            window.location.href = '/api/wikipedia?page=' + wikiPage;
            
            // Notify parent about the navigation
            window.parent.postMessage({ 
              type: 'WIKI_NAVIGATION', 
              page: wikiPage 
            }, '*');
          }
        }
      });

      // Helper function to adjust Wikipedia's layout for our iframe
      window.addEventListener('DOMContentLoaded', function() {
        // Remove any fixed elements that might interfere with scrolling
        const fixedElements = document.querySelectorAll('.vector-sticky-header, .vector-header-container');
        fixedElements.forEach(el => el.style.position = 'relative');
        
        // Make content area wider
        const content = document.querySelector('#content');
        if (content) content.style.maxWidth = '100%';
        
        // Hide some UI elements we don't need
        const hideElements = document.querySelectorAll('.mw-indicators, #siteNotice, .noprint');
        hideElements.forEach(el => {
          if (el) el.style.display = 'none';
        });
      });
    </script>
  `;

  // Extract the base URL for correctly resolving relative URLs
  const baseUrl = "https://en.wikipedia.org";

  // Inject our tracking script and modify links/resources
  return (
    html
      .replace("</head>", `${trackingScript}</head>`)
      // Wiki links
      .replace(/href="\/wiki\//g, `href="/api/wikipedia?page=`)
      // CSS links
      .replace(/href="\/w\/load\.php/g, `href="${baseUrl}/w/load.php`)
      .replace(/href="\/w\/index\.php/g, `href="${baseUrl}/w/index.php`)
      // JavaScript sources
      .replace(/src="\/w\//g, `src="${baseUrl}/w/`)
      // Images and media
      .replace(
        /src="\/\/upload\.wikimedia\.org\//g,
        `src="https://upload.wikimedia.org/`
      )
      .replace(
        /srcset="\/\/upload\.wikimedia\.org\//g,
        `srcset="https://upload.wikimedia.org/`
      )
      .replace(/src="\/static\//g, `src="${baseUrl}/static/`)
      // Add responsive viewport meta tag
      .replace(
        /<head>/,
        '<head><meta name="viewport" content="width=device-width, initial-scale=1.0">'
      )
  );
}
