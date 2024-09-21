$(document).ready(function() {
    // 获取联系表单信息
    function get_contact_form_info() {
        var email = $("#email").val();
        var message = $("#message").val();
        alert("Your email is " + email + " and your message is " + message);
    }

    // 提交按钮点击事件
    $("#submit-button").click(function(event) {
        event.preventDefault(); // 阻止页面刷新
        get_contact_form_info();
        $("#submit-button").after('<p class="confirmation">Thank you for your message!</p>'); // 显示提交后的确认信息
    });
});
