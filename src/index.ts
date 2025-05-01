import { runSingleton } from '@/singleton';
import { runFactory } from '@/factory';
import { runAbstractFactory } from '@/abstract-factory';

function run() {
	// runSingleton();
	// runFactory();
	runAbstractFactory();
}

run();