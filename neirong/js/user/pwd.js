$(function () {
    layui.form.verify({
        len: [/^\s{6,12}$/, '长度必须6到12位，不能有空位'],
        diff: function (value) {
            var oldPwd = $('[name="oldPwd"]').val()
            if (value === oldPwd) {
                return '新密码不能和原密码一样'
            }
        },
        same: function (value) {
            var newPwd = $('[name="newPwd"]').val()
            if (value !== newPwd) {
                return '第二三必须一样'
            }
        },
    })
    $('#changePwd').click(function (e) {
        e.preventDefault()
        $.post('/my/updatepwd', $('#formInfo').serialize(), function (res) {
            if (res.status === 0) {
                $('button[type="reset"]').click()
            } else {

            }
        })
    })
})