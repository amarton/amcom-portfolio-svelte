export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/about.svelte"),
	() => import("../../src/routes/blog/[id].svelte"),
	() => import("../../src/routes/blog.svelte"),
	() => import("../../src/routes/components.svelte"),
	() => import("../../src/routes/contact.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/portfolio/[id].svelte"),
	() => import("../../src/routes/portfolio/temp.svelte"),
	() => import("../../src/routes/projects.svelte")
];

export const dictionary = {
	"": [[0, 7], [1]],
	"about": [[0, 2], [1]],
	"blog": [[0, 4], [1]],
	"components": [[0, 5], [1]],
	"contact": [[0, 6], [1]],
	"projects": [[0, 10], [1]],
	"portfolio/temp": [[0, 9], [1]],
	"blog/[id]": [[0, 3], [1]],
	"portfolio/[id]": [[0, 8], [1]]
};