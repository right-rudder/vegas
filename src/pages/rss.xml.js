import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../data/consts';

/* TODO : Update? */

export async function GET(context) {
	const posts = await getCollection('blog');

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.id}/`,
		})),
		customData: `
      <language>en-us</language>
      <copyright>${new Date().getFullYear()} Vegas Aviation</copyright>
      <atom:link href="${
        context.site
      }rss.xml" rel="self" type="application/rss+xml" />
    `,
	});
}
