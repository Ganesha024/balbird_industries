const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

async function parseBlogs() {
  const blogsDir = path.join(__dirname, 'blogs');
  const files = fs.readdirSync(blogsDir).filter(f => f.endsWith('.docx'));

  const blogs = [];

  for (const file of files) {
    const filePath = path.join(blogsDir, file);
    const slug = file.replace('.docx', '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    console.log(`Parsing ${file}...`);
    const result = await mammoth.convertToHtml({path: filePath});
    const html = result.value; // The generated HTML

    // Extract title (assume first strong/paragraph or filename)
    // The mammoth output often wraps title in <p><strong>Title</strong></p>
    let title = file.replace('.docx', '').replace(/^\d+_/,'').replace(/_/g, ' ');
    const titleMatch = html.match(/<p><strong>([^<]+)<\/strong><\/p>/);
    if (titleMatch && titleMatch[1] && titleMatch[1].length > 5 && !titleMatch[1].includes('━━━━━━━━')) {
        title = titleMatch[1];
    } else {
        const pMatch = html.match(/<p>([^<]+)<\/p>/);
        if (pMatch && pMatch[1] && pMatch[1].length > 5) {
            title = pMatch[1];
        }
    }

    // Extract an excerpt
    let excerpt = "Read the full article to learn more about our structured ecosystem.";
    // Find the first paragraph that isn't the title or lines
    const textOnly = html.replace(/<[^>]+>/g, ' ').replace(/━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━/g, '').replace(/\s+/g, ' ').trim();
    const sentences = textOnly.split('.');
    
    // skip the title part in the text if present
    for (let i = 0; i < sentences.length; i++) {
        if (sentences[i].length > 50) {
            excerpt = sentences[i].trim() + '.';
            break;
        }
    }

    blogs.push({
      id: file,
      slug: slug,
      title: title,
      excerpt: excerpt,
      content: html
    });
  }

  // Generate the TypeScript file
  const fileContent = `// Automatically generated from word documents
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
}

export const blogs: BlogPost[] = ${JSON.stringify(blogs, null, 2)};

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find(blog => blog.slug === slug);
}
`;

  const outputDir = path.join(__dirname, 'lib', 'data');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(path.join(outputDir, 'blogs.ts'), fileContent, 'utf-8');
  console.log('Successfully parsed and generated lib/data/blogs.ts');
}

parseBlogs().catch(console.error);
