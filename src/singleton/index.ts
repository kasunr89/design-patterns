import Logger from '@/singleton/Logger';

export function runSingleton() {
	const logger = Logger.getLogger('simple-app');
	const logger2 = Logger.getLogger('simple-app');

	console.log(logger === logger2);

	logger.info('info log');
	logger.warn('warn log');
	logger.debug('debug log');
	logger.error('error log');
}