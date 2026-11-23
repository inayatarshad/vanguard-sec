export const appName = 'Vanguard';
export const appDescription =
  'AI-powered penetration testing automation, orchestrated by LLM agents.';

// Must match `basePath` in next.config.mjs. Next.js adds it to links and
// imported assets, but not to plain fetch() URLs such as the search index.
export const basePath = '/vanguard-sec';

// Pages live at the site root: content/tools.mdx is served at /vanguard/tools/.
export const docsRoute = '/';

export const gitConfig = {
  user: 'inayatarshad',
  repo: 'vanguard-sec',
  branch: 'main',
  // Path of the content folder inside the repository, for "Edit on GitHub" links.
  contentDir: 'docs/content',
};

export const repoUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}`;

export function editUrl(path: string) {
  return `${repoUrl}/edit/${gitConfig.branch}/${gitConfig.contentDir}/${encodeURI(path)}`;
}
