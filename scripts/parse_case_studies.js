const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

const caseStudiesDir = path.join(__dirname, '../Case_studies');
const outputFilePath = path.join(__dirname, '../lib/data/casestudies.ts');

async function processCaseStudies() {
  const files = fs.readdirSync(caseStudiesDir).filter(file => file.endsWith('.docx'));
  const caseStudies = [];

  for (const file of files) {
    const filePath = path.join(caseStudiesDir, file);
    
    // Convert to HTML
    const result = await mammoth.convertToHtml({ path: filePath });
    const htmlContent = result.value;

    // Extract title (assume it's the first strong tag or plain text)
    // A simple regex to strip HTML tags for excerpt
    const plainText = htmlContent.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    
    // Try to find the title - usually the first paragraph or strong tag
    let title = file.replace('.docx', '').replace(/^\d+_/, '').replace(/_/g, ' ');
    // Title case it
    title = title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    const excerpt = plainText.substring(0, 150) + '...';
    
    // Slug generation
    const slug = file.replace('.docx', '').toLowerCase().replace(/_/g, '-');

    caseStudies.push({
      id: file,
      slug: slug,
      title: title,
      excerpt: excerpt,
      content: htmlContent
    });
  }

  // Generate TypeScript file
  const tsContent = `// Automatically generated from word documents
export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
}

export const casestudies: CaseStudy[] = ${JSON.stringify(caseStudies, null, 2)};

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return casestudies.find(cs => cs.slug === slug);
}
`;

  fs.writeFileSync(outputFilePath, tsContent);
  console.log(`Successfully processed ${files.length} case studies to ${outputFilePath}`);
}

processCaseStudies().catch(console.error);
