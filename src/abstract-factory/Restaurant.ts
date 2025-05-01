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

abstract class AbstractBurger {
	orderBurger(): IBurger {
		const burger = this.createBurger();
		burger.prepare();

		return burger;
	}

	abstract createBurger(): IBurger;
}

abstract class AbstractSandwich {
	orderSandwich(): ISandwich {
		const sandwich = this.createSandwich();
		sandwich.assemble();

		return sandwich;
	}

	abstract createSandwich(): ISandwich;
}

class ChickenBurgerMaker extends AbstractBurger {
	createBurger(): IBurger {
		return new ChickenBurger();
	}
}

class VegetableBurgerMaker extends AbstractBurger {
	createBurger(): IBurger {
		return new VegetableBurger();
	}
}

class TunaSandwichMaker extends AbstractSandwich {
	createSandwich(): ISandwich {
		return new TunaSandwich();
	}
}

class ChickenSandwichMaker extends AbstractSandwich {
	createSandwich(): ISandwich {
		return new ChickenSandwich();
	}
}

export function runRestaurant() {
	const chickenBurger = new ChickenBurgerMaker();
	chickenBurger.orderBurger();

	new VegetableBurgerMaker().orderBurger();
	new TunaSandwichMaker().orderSandwich();
	new ChickenSandwichMaker().orderSandwich();
}