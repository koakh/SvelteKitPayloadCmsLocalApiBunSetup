// import {Payload} from 'payload';
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			payloadClient;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};