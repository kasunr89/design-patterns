import { runSingleton } from '@/singleton';
import { runFactory } from '@/factory';
import { runAbstractFactory } from '@/abstract-factory';
import { runBuilder } from '@/builder';

function run() {
	// runSingleton();
	// runFactory();
	// runAbstractFactory();
	runBuilder();
}

run();