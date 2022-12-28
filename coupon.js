function loadCoupon(){
    document.getElementsByClassName('coupon')[0].style.display='block';
    document.getElementById('cc').style.opacity='0.1';
}

const closeCoupon = () => {
    document.getElementsByClassName('coupon')[0].style.display='none';
    document.getElementById('cc').style.opacity='1';
}