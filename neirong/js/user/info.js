$(function () {
    layui.form.verify({
        nickname: function (value) {
            if (value.length > 6) {
                return '昵称长度必须在1~6个字符之间'
            }
        },
    })
    initUserInfo()
    function initUserInfo() {
        $.get('/my/userinfo', function (res) {
            console.log(res);
            if (res.status === 0) {
                layui.form.val('formInfo', res.data)
            } else {

            }
        })
    }
    $('#btn-reset').click(function (e) {
        e.preventDefault()
        initUserInfo()
    })
    $('#formupdata').submit(function (e) {
        e.preventDefault()
        $.post('/my/userinfo', $(this).serialize(), function (res) {
            if (res.status === 0) {
                window.parent.getUserInfo()
            }
        })
    })
})