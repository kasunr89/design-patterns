interface IGpu {
	assemble(): void;
}


class AsusGpu implements IGpu {
	assemble(): void {
		console.log('assemble asus gpu');
	}
}

class MsiGpu implements IGpu {
	assemble(): void {
		console.log('assemble msi gpu');
	}
}

interface IMonitor {
	assemble(): void;
}

class AsusMonitor implements IMonitor {
	assemble(): void {
		console.log('assemble asus monitor');
	}
}

class MsiMonitor implements IMonitor {
	assemble(): void {
		console.log('assemble msi monitor');
	}
}

abstract class Company {
	orderGpu() {
		const gpu = this.createGpu();
		gpu.assemble();
	}

	orderMonitor() {
		const monitor = this.createMonitor();
		monitor.assemble();
	}

	abstract createGpu(): IGpu;

	abstract createMonitor(): IMonitor;
}

class AsusManufacturer  extends Company {
	createGpu() {
		return new AsusGpu();
	}

	createMonitor(): IMonitor {
		return new AsusMonitor();
	}
}

class MsiManufacturer extends Company {
	createGpu() {
		return new MsiGpu();
	}

	createMonitor(): IMonitor {
		return new MsiMonitor();
	}
}

export function runCompany() {
	const asusCompany = new AsusManufacturer();
	asusCompany.createGpu().assemble();
	asusCompany.createMonitor().assemble();

	const msiCompany = new MsiManufacturer();
	msiCompany.orderGpu();
	msiCompany.orderMonitor();
}