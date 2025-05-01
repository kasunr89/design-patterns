import { runRestaurant } from '@/abstract-factory/Restaurant';
import { runCompany } from '@/abstract-factory/Company';

export function runAbstractFactory() {
	runRestaurant();
	runCompany();
}