// https://github.com/grouparoo/www.grouparoo.com/blob/f93ce04b26900dd7473e0ac9584d5f46a3031efb/scripts/write_lighthouse_comment.ts
// https://blog.logrocket.com/lighthouse-meets-github-actions-use-lighthouse-ci/

const formatScore = (score) => Math.round(score * 100);
const emojiScore = (score) =>
  score >= 0.9 ? '🟢' : score >= 0.5 ? '🟠' : '🔴';

const scoreRow = (label, score) =>
  `| ${emojiScore(score)} ${label} | ${formatScore(score)} |`;

function makeComment({ manifest = [], links = {} }) {
  const { summary = {} } = manifest[0] || {};
  const [key] = Object.keys(links);
  const reportUrl = links[key];

  const comment = `## ⚡️🏠 Lighthouse report
 
 We ran Lighthouse against the changes and produced this [report](${reportUrl}). Here's the summary:
 
 | Category | Score |
 | -------- | ----- |
 ${scoreRow('Performance', summary.performance)}
 ${scoreRow('Accessibility', summary.accessibility)}
 ${scoreRow('Best practices', summary['best-practices'])}
 ${scoreRow('SEO', summary.seo)}
 ${scoreRow('PWA', summary.pwa)}
 
 `;

  console.log(comment);
  return comment;
}

module.exports = (args) => makeComment(args);
