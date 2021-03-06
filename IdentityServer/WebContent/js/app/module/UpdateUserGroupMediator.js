function UpdateUserGroupMediator() {

	this.init = function(view) {

		$("#updateUserGroup").on("click", this.onClick);
		$("#deleteUserGroup").on("click", this.onDeleteUserGroup);
	}
	// 注销方法
	this.dispose = function() {

		$("#updateUserGroup").remove("click", this.onClick);
	}
	// 关心消息数组
	this.listNotificationInterests = [];
	// 关心的消息处理
	this.handleNotification = function(data) {

	}
	this.onClick = function(event) {
		var userGroupId = $("#userGroupId").val();
		var userGroupName = $("#userGroupName").val();
		var isUpdateUserGroupParent = $("#isUpdateUserGroupParent").val();
		var userGroupParentId = $("#userGroupParentId").val();
		var userGroupState = $("#userGroupState").val();
		$T.userGroupProxy.updateUserGroup(userGroupId, userGroupName, isUpdateUserGroupParent, userGroupParentId, userGroupState);
	}
	this.onDeleteUserGroup = function(event) {
		var userGroupId = $("#userGroupIdDelete").val();
		$T.userGroupProxy.deleteUserGroup(userGroupId);
	}
}
$T.updateUserGroupMediator = new UpdateUserGroupMediator();