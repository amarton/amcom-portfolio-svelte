export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/about.svelte"),
	() => import("../../src/routes/components.svelte"),
	() => import("../../src/routes/contact.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/portfolio/[id].svelte"),
	() => import("../../src/routes/portfolio/select-id.svelte"),
	() => import("../../src/routes/portfolio/temp.svelte"),
	() => import("../../src/routes/projects.svelte")
];

export const dictionary = {
	"": [[0, 5], [1]],
	"about": [[0, 2], [1]],
	"components": [[0, 3], [1]],
	"contact": [[0, 4], [1]],
	"projects": [[0, 9], [1]],
	"portfolio/select-id": [[0, 7], [1]],
	"portfolio/temp": [[0, 8], [1]],
	"portfolio/[id]": [[0, 6], [1]]
};