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

const qrData1 = {
    bank: '970422',
    stk: '1111190207',
    ctk: 'PHAM TIEN DUNG',
};

const qrData2 = {
    bank: '970422',
    stk: '11111190207',
    ctk: 'PHAM TIEN DUNG',
};

const qrData3 = {
    bank: '970454',
    stk: '10000956500',
    ctk: 'PHAM TIEN DUNG',
};

const qrUrl1 = https://api.vietqr.io/image/${qrData1.bank}-${qrData1.stk}-Jd8xx3X.jpg?accountName=${encodeURIComponent(qrData1.ctk)};
const qrUrl2 = https://api.vietqr.io/image/${qrData2.bank}-${qrData2.stk}-Jd8xx3X.jpg?accountName=${encodeURIComponent(qrData2.ctk)};
const qrUrl3 = https://api.vietqr.io/image/${qrData3.bank}-${qrData3.stk}-Jd8xx3X.jpg?accountName=${encodeURIComponent(qrData3.ctk)};

const modals = [
    document.getElementById('qrModal1'),
    document.getElementById('qrModal2'),
    document.getElementById('qrModal3')
];
const qrImages = [
    document.getElementById('qrImage1'),
    document.getElementById('qrImage2'),
    document.getElementById('qrImage3')
];
const downloadQrBtns = [
    document.getElementById('downloadQrBtn1'),
    document.getElementById('downloadQrBtn2'),
    document.getElementById('downloadQrBtn3')
];
const copyAccountBtns = [
    document.getElementById('copyAccountBtn1'),
    document.getElementById('copyAccountBtn2'),
    document.getElementById('copyAccountBtn3')
];
const closeSpans = [
    modals[0].getElementsByClassName('close')[0],
    modals[1].getElementsByClassName('close')[0],
    modals[2].getElementsByClassName('close')[0]
];

function showModal(index) {
    if (index === 0) qrImages[index].src = qrUrl1; 
    else if (index === 1) qrImages[index].src = qrUrl2;
    else if (index === 2) qrImages[index].src = qrUrl3;
    
    modals[index].style.display = 'block';
}

document.getElementById('showQrSpanBtn1').onclick = function() {
    showModal(0);
}
document.getElementById('showQrDivBtn1').onclick = function() {
    showModal(0);
}
document.getElementById('showQrSpanBtn2').onclick = function() {
    showModal(1);
}
document.getElementById('showQrDivBtn2').onclick = function() {
    showModal(1);
}
document.getElementById('showQrSpanBtn3').onclick = function() {
    showModal(2);
}
document.getElementById('showQrDivBtn3').onclick = function() {
    showModal(2);
}

closeSpans.forEach((span, index) => {
    span.onclick = function() {
        modals[index].style.display = 'none';
    }
});

window.onclick = function(event) {
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};

downloadQrBtns.forEach((btn, index) => {
    btn.onclick = function() {
        let qrUrl = '';
        let fileName = '';

        if (index === 0) {
            qrUrl = qrUrl1;
            fileName = ${qrData1.stk};
        } else if (index === 1) {
            qrUrl = qrUrl2;
            fileName = ${qrData2.stk};
        } else if (index === 2) {
            qrUrl = qrUrl3;
            fileName = ${qrData3.stk};
        }

        fetch(qrUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Lỗi Khi Tải Ảnh');
                }
                return response.blob();
            })
            .then(blob => {
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = fileName;
                link.click();
                Toast.fire({
                    icon: "success",
                    iconColor: '#008080',
                    title: "Tải Ảnh Thành Công\n",
                    text: "Tên File: " + fileName +".png",
                    width: '350px',
                    height: '50px'
                });
            })
            .catch(err => {
                console.error('Lỗi Tải Ảnh:', err);
                Toast.fire({
                    icon: "error",
                    iconColor: '#FF0000',
                    title: "Lỗi Khi Tải Ảnh",
                    width: '350px',
                    height: '50px'
                });
            });
    }
});

copyAccountBtns.forEach((btn, index) => {
    btn.onclick = function() {
        let stk = '';
        if (index === 0) stk = qrData1.stk;
        else if (index === 1) stk = qrData2.stk;
        else if (index === 2) stk = qrData3.stk;

        const tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
        tempInput.value = stk;
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

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
            title: 'Copy Thành Công!\n',
            text: 'STK: '+stk,
            width: '350px',
            height: '20px'
        });
    }
});
