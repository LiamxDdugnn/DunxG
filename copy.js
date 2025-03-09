function geturl(giatri) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(giatri).select();
    document.execCommand("copy");
    $temp.remove();
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        iconColor: '#008080',
        title: "Copy Thành Công:\n" + giatri,
        width: '350px',
        height: '50px'
    });
}
