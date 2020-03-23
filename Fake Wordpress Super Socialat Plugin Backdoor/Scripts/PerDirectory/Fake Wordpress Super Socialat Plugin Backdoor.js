/* 
*  This script was generated by Netsparker 5.6.2.27219, at 25/02/2020 10:48:24 
*  For more information about Custom Script Checks and samples, please refer to documentation: 
*  https://www.netsparker.com/support/custom-security-checks-scripting/ 
*/ 

var attacks = [
    {
        id: '747f5e8b-3de4-4850-a687-2ddb6fbcbc8f',
        name: 'Fake Wordpress Super Socialat Plugin Backdoor',																		 
        attack: 'wp-content/plugins/super-socialat/super_socialat.php?d1=ZXhpdCgiTjN0NXA0cmszciIpOw==',
    }
];

function analyze(context, response) {
	// The aim of this script is to discover Fake Wordpress Super Socialat Plugin Backdoor the Wordpress web applicatons.
	// Research: https://www.getastra.com/blog/911/fake-super-socializer-plugins/
	// Exploit: https://twitter.com/chybeta/status/1196250816476139520
	if(response.Body.indexOf("N3t5p4rk3r") > -1) {
		 return new Vulnerability("eb230084-3afa-4bf0-ad05-b6a2cbb331b0");		 
		 
	 }    
}