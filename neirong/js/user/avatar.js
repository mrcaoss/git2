$(function () {
    var $image = $('#image')
    var options = {
        //纵横比
        aspectRatio: 1,
        //指定预览区域
        preview: '.img-preview'
    }
    // 创建裁剪区域
    $image.cropper(options)
    $('#btn-upload').click(function () {
        $('#file').click()
    })
    $('#file').on('change', function (e) {
        console.log(e.target.files);
        // 获取图片对象
        var file = e.target.files[0]
        //URL：统一资源定位符-》资源路径
        // 根据选择的文件，创建一个对应的URL地址
        var newImgURL = URL.createObjectURL(file)
        $image
            .cropper('destroy')
            .attr('src', newImgURL)
            .cropper(options)
    })
})