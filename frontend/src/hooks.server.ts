import { payloadClient } from '$lib/server/payload';

export const handle = async ({ event, resolve }) => {
  event.locals.payloadClient = payloadClient;
  const response = await resolve(event);
  return response;
};
