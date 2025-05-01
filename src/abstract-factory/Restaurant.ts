interface IBurger {
	productId: number;
	addons: string[];

	prepare(): void;
}

class ChickenBurger implements IBurger {
	productId = 1;
	addons = ['meat', 'bun', 'ketchup'];

	prepare() {
		console.log(`preparing chicken Burger #${this.productId} with ${this.addons.join(',')}`);
	}
}

class VegetableBurger implements IBurger {
	productId = 2;
	addons = ['mushrooms', 'vegetable patty', 'bun', 'ketchup'];

	prepare() {
		console.log(`preparing vegetable Burger #${this.productId} with ${this.addons.join(',')}`);
	}
}

interface ISandwich {
	productId: number;
	addons: string[];

	assemble(): void;
}

class TunaSandwich implements ISandwich {
	productId = 3;
	addons = ['tuna', 'bread'];

	assemble() {
		console.log(`assemble tuna sandwich #${this.productId} with ${this.addons.join(',')}`);
	}
}

class ChickenSandwich implements ISandwich {
	productId = 4;
	addons = ['chicken', 'bread'];

	assemble() {
		console.log(`assemble chicken sandwich #${this.productId} with ${this.addons.join(',')}`);
	}
}

abstract class BurgerRestaurant {
	orderBurger() {
		const burger = this.createBurger();
		burger.prepare();
	}

	abstract createBurger(): IBurger;
}

abstract class SandwichRestaurant {
	orderSandwich() {
		const sandwich = this.createSandwich();
		sandwich.assemble();
	}

	abstract createSandwich(): ISandwich;
}

class ChickenBurgerRestaurant extends BurgerRestaurant {
	createBurger(): IBurger {
		return new ChickenBurger();
	}
}

class VegetableBurgerRestaurant extends BurgerRestaurant {
	createBurger(): IBurger {
		return new VegetableBurger();
	}
}

class TunaSandwichRestaurant extends SandwichRestaurant {
	createSandwich(): ISandwich {
		return new TunaSandwich();
	}
}

class ChickenSandwichRestaurant extends SandwichRestaurant {
	createSandwich(): ISandwich {
		return new ChickenSandwich();
	}
}

export function runRestaurant() {
	const restaurant = new ChickenBurgerRestaurant();
	restaurant.orderBurger();

	const restaurant2 = new VegetableBurgerRestaurant();
	restaurant2.orderBurger();

	const restaurant3 = new TunaSandwichRestaurant();
	restaurant3.orderSandwich();

	const restaurant4 = new ChickenSandwichRestaurant();
	restaurant4.orderSandwich();
}