/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://wisniewski-hvac.pl', // TODO: Update with actual domain
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};