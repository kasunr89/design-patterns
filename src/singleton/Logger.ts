enum LogLevel {
	INFO = 'INFO',
	WARN = 'WARN',
	ERROR = 'ERROR',
	DEBUG = 'DEBUG',
};

export default class Logger {
	private static logger: Logger;
	private appName: string;

	private constructor(appName: string) {
		this.appName = appName;
	}

	public static getLogger(appName: string) {
		if (!this.logger) {
			this.logger = new Logger(appName);
		}

		return this.logger;
	}

	private getTime() {
		return new Date().toISOString();
	}

	private getMetadata() {
		return {
			facility: this.appName,
		};
	}

	private getColorCode(level: LogLevel): number {
		switch (level) {
			case LogLevel.INFO:
				return 32;

			case LogLevel.WARN:
				return 33;

			case LogLevel.DEBUG:
				return 35;

			case LogLevel.ERROR:
				return 31;

			default:
				return 0;
		}
	}
	
	private log(level: LogLevel, message: string) {
		console.log(`\x1b[${this.getColorCode(level)}m${this.getTime()} ${message}\x1b[0m`, this.getMetadata())
	}

	public info(message: string) {
		this.log(LogLevel.INFO, message);
	}

	public warn(message: string) {
		this.log(LogLevel.WARN, message);
	}

	public debug(message: string) {
		this.log(LogLevel.DEBUG, message);
	}

	public error(message: string) {
		this.log(LogLevel.ERROR, message);
	}
}