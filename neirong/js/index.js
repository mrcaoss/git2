$(function () {
    //获取用户信息中的token
    $.ajax({
        url: '/my/userinfo',
        success: function (res) {
            var resname = res.data.nickname || res.data.username
            $('#welcome').html(resname)
            if (res.data.user_pic) {
                $('.layui-nav-img').attr('src', res.data.user_pic).show()
                $('.text-avatar').hide()
            } else {
                $('.layui-nav-img').hide()
                $('text-avatar').html(resname[0], toUpperCase())
            }
        },
    })
    $('#btn-logout').click(function (e) {
        e.preventDefault()
        layui.layer.confirm('is not?', { icon: 3, title: '提示' }, function (index) {
            window.localStorage.removeItem('token')
            window.location.href = '/index.html'
            layer.close(index)
        })
    })
})