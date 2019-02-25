exports.config = {
	
	directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('serenity-js'),

	specs: ['features/**/*.feature'],

	cucumberOpts: {
		require: ['features/**/*.ts'],
		format: 'pretty',
		compiler: 'ts:ts-node/register',
		tags: ['@regression']
	},

	onPrepare: () => {
		browser.manage().window().maximize();
		browser.manage().timeouts().implicitlyWait(15000);
		browser.waitForAngularEnabled(false);
	},

	capabilities: {
		browserName: 'chrome',
		chromeOptions: {
			args: [
				'--disable-infobars',
				'--disable-extensions',
				'verbose',
				'log-path=/tmp/chromedriver.log'
			],
			prefs: {
				'profile.password_manager_enabled': false,
				'credentials_enable_service': false,
				'password_manager_enabled': false
			}
		}
	}
}