interface IBugger {
	productId: number;
	addons: string[];

	prepare(): void;
}

class ChickenBugger implements IBugger {
	productId = 1;
	addons = ['meat', 'bun', 'ketchup'];

	prepare() {
		console.log(`preparing chicken bugger #${this.productId} with ${this.addons.join(',')}`);
	}
}

class VegetableBugger implements IBugger {
	productId = 2;
	addons = ['mushrooms', 'vegi patty', 'bun', 'ketchup'];

	prepare() {
		console.log(`preparing vegetable bugger #${this.productId} with ${this.addons.join(',')}`);
	}
}

abstract class Restaurant {
	public orderBugger(): IBugger {
		const bugger = this.createBugger();
		bugger.prepare();
		return bugger;

	}

	abstract createBugger(): IBugger;
}

class ChickenBuggerRestaurant extends Restaurant {
	createBugger(): IBugger {
		return new ChickenBugger();
	}
}

class VegetableBuggerRestaurant extends Restaurant {
	createBugger(): IBugger {
		return new VegetableBugger();
	}
}

export function runFactory() {
	const restaurant = new ChickenBuggerRestaurant();
	restaurant.orderBugger();

	const restaurant2 = new VegetableBuggerRestaurant();
	restaurant2.orderBugger();
}