/* 
 * Application : Demo TAG4
 * ClassName   : sys_script_include
 * Created On  : 2019-12-06 15:23:19
 * Created By  : admin
 * Updated On  : 2019-12-06 15:31:08
 * Updated By  : admin
 * URL         : /sys_script_include.do?sys_id=3c9b783ddbad0010343f58b3ca961906
 */
/**
 * Class Description
 * 
 * @class 
 * @author System Administrator [admin]
 * @memberof x_308211_demo_tag4.module:sys_script_include
 */
var DemoTag13 = Class.create();
DemoTag13.prototype = /** @lends x_308211_demo_tag4.module:sys_script_include.DemoTag13.prototype */ {
    /**
     * Description
     * 
     * @returns {undefined}
     */
    initialize: function() {
		testCodeError();
    },
		dummy: function(){
		gs.addInfoMessage("Testing devops");
		return true;
	},

    type: 'DemoTag13'
};
