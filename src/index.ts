import { runSingleton } from '@/singleton';
import { runFactory } from '@/factory';
import { runAbstractFactory } from '@/abstract-factory';
import { runBuilder } from '@/builder';
import { runPrototype } from '@/prototype';
import { runChainOfResponsibility } from '@/chain-of-responsibility';

function run() {
	// runSingleton();
	// runFactory();
	// runAbstractFactory();
	// runBuilder();
	// runPrototype();
	runChainOfResponsibility();
}

run();