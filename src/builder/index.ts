class Car {
	id: number;
	brand: string;
	modal: string;
	color: string;
	isAutomatic: boolean;

	constructor(
		id: number,
		brand: string,
		modal: string,
		color: string,
		isAutomatic: boolean,
	) {
		this.id = id;
		this.brand = brand;
		this.modal = modal;
		this.color = color;
		this.isAutomatic = isAutomatic;
	}
}

class CarBuilder {
	private _id?: number;
	private _brand?: string;
	private _modal?: string;
	private _color?: string;
	private _isAutomatic: boolean = true;

	setId(id: number) {
		this._id = id;
		return this;
	}

	setBrand(brand: string) {
		this._brand = brand;
		return this;
	}

	setModal(modal: string) {
		this._modal = modal;
		return this;
	}

	setColor(color: string) {
		this._color = color;
		return this;
	}

	setIsAutomatic(isAutomatic: boolean) {
		this._isAutomatic = isAutomatic;
		return this;
	}

	build(): Car {
		if (!this._id || !this._brand || !this._modal || !this._color) {
			throw new Error('required parameters are missing');
		}

		return new Car(
			this._id,
			this._brand,
			this._modal,
			this._color,
			this._isAutomatic,
		);
	}
}

class CarDirector {
	createSportsCar(builder: CarBuilder): void {
		builder
			.setId(1)
			.setBrand('Bugatti')
			.setModal('Sport')
			.setColor('Black');
	}

	createManualTransmissionCar(builder: CarBuilder): void {
		builder
			.setId(1)
			.setBrand('Bugatti')
			.setModal('Manual')
			.setColor('Black')
			.setIsAutomatic(false);
	}
}

export function runBuilder() {
	const carDirector = new CarDirector();
	
	const sportsCarBuilder = new CarBuilder();
	carDirector.createSportsCar(sportsCarBuilder);
	console.log(sportsCarBuilder.build());

	const manualTransmissionCarBuilder = new CarBuilder();
	carDirector.createManualTransmissionCar(manualTransmissionCarBuilder);
	console.log(manualTransmissionCarBuilder.build())
	
}