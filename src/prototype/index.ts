import crypto from 'crypto';

class Document {
	private _id: string;
	private _createdAt: string;
	content?: string;

	constructor() {
		this._id = crypto.randomUUID();
		this._createdAt = new Date().toISOString();
	}

	clone(): Document {
		const copiedDocument = Object.create(this);
		copiedDocument._id = crypto.randomUUID();
		copiedDocument._createdAt = new Date().toISOString();

		return copiedDocument;
	}

	setContent(content: string) {
		if (!this.content) {
			this.content = content;
			return;
		}

		this.content = this.content.concat(`\n ${content}`);
	}

	getContent(): string {
		return this.content || '';
	}

	getId() {
		return this._id;
	}

	getCreatedAt() {
		return this._createdAt;
	}
}

export function runPrototype() {
	const document = new Document();
	document.setContent('This is my document.');
	document.setContent('This is second sentence.');

	const clonedDocument = document.clone();
	clonedDocument.setContent('This is updating cloned document.');

	console.log(`original document \nid: ${document.getId()}, \ncreatedAt: ${document.getCreatedAt()} \n`, document.getContent());
	console.log('--------------------------------');
	console.log(`cloned document \nid: ${clonedDocument.getId()}, \ncreatedAt: ${clonedDocument.getCreatedAt()} \n`, clonedDocument.getContent());
}