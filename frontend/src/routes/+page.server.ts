import type { PageServerLoad } from './$types';
// other way : works import payloadClient
// import { payloadClient } from '$lib/server/payload';

export const load = (async (event) => {
	// get payloadClient from locals 
	const payloadClient = event.locals.payloadClient;
	// const pageData = await payloadClient.find({
	const pageData = await payloadClient.find({
		collection: 'users',
		depth: 2,
		page: 1,
		limit: 10,
		// pass a `where` query here
		where: {},
		sort: '-title',
		locale: 'en',
		overrideAccess: false,
		showHiddenFields: true,
	});
	return pageData;
}) satisfies PageServerLoad;