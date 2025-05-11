class Database {
	private users = new Map();

	constructor() {
		this.users.set('kasunr', 'kasun123');
		this.users.set('yashob', 'yasho123');
	}

	public isValidUser(username: string) {
		return this.users.has(username);
	}

	public isValidPassword(username: string, password: string) {
		return this.users.get(username) === password;
	}

	public isAdmin(username: string) {
		return this.users.get(username) === 'kasunr';
	}
}

abstract class BaseHandler {
	public next?: BaseHandler;

	public setNextHandler(next: BaseHandler): BaseHandler {
		this.next = next;

		return next;
	}

	public handleNext(username: string, password: string): boolean {
		// console.log('handle next')
		if (!this.next) {
			return true;
		}

		return this.next.handle(username, password);
	}
	
	abstract handle(username: string, password: string): boolean;
}

class UserExistHandler extends BaseHandler {
	constructor(
		private database: Database
	) {
		super();
	}

	handle(username: string, password: string): boolean {
		console.log('Checking is valid user');

		if (!this.database.isValidUser(username)) {
			return false;
		}

		return this.handleNext(username, password);
	}
}

class UserPasswordHandler extends BaseHandler {
	constructor(
		private database: Database
	) {
		super();
	}

	handle(username: string, password: string): boolean {
		console.log('Checking is valid password');

		if (!this.database.isValidPassword(username, password)) {
			return false;
		}

		return this.handleNext(username, password);
	}
}

class UserRoleHandler extends BaseHandler {
	constructor(
		private database: Database
	) {
		super();
	}

	handle(username: string, password: string): boolean {
		console.log('Checking is admin user');

		if (this.database.isAdmin(username)) {
			return true;
		}

		return this.handleNext(username, password);
	}
}


export function runChainOfResponsibility() {
	const database = new Database();

	const handler = new UserExistHandler(database);

	handler.setNextHandler(new UserPasswordHandler(database))
			.setNextHandler(new UserRoleHandler(database));

	// console.log(handler);	
	const isLoggedIn = handler.handle('kasunr', 'kasun123');
	console.log(isLoggedIn);

	const isLoggedIn2 = handler.handle('yashob', 'yasho12');
	console.log(isLoggedIn2);
	
}