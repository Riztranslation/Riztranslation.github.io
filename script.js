// list
function btn(params){
    let serial = document.getElementById('serialmanga');
    let web = document.getElementById('webmanga');
    if(params == 'serial'){
        web.style.display = 'none';
        serial.style.display = 'block';
    }
    else{
        web.style.display = 'block';
        serial.style.display = 'none';
    }
    
}

// mode
const toggle = document.getElementById('mode');
const mode = document.getElementById('mode');
const header = document.getElementById('header');
const headera = document.getElementById('headera');
const headerb = document.getElementById('headerb');
const headerc = document.getElementById('headerc');
const bglogo = document.getElementById('logo');
let tema = localStorage.getItem('tema');

const modeGelap = () => {
    document.body.classList.add('body2');
    header.classList.add('header2');
    mode.classList.add('mode2');
    headera.classList.add('header2');
    headerb.classList.add('header2');
    headerc.classList.add('headerinfo2');
    bglogo.classList.add('logo2');
    logo.style.filter = 'invert(85%)';
    localStorage.setItem('tema', 'gelap');
};

const modeCerah = () => {
    document.body.classList.remove('body2')
    header.classList.remove('header2');
    mode.classList.remove('mode2');
    headera.classList.remove('header2');
    headerb.classList.remove('header2');
    headerc.classList.remove('headerinfo2');
    logo.style.filter = 'invert(0%)';
    localStorage.setItem('tema', 'cerah')
};

if(tema === 'gelap'){
    modeGelap();
}

toggle.addEventListener("click", (e) =>{
    tema = localStorage.getItem('tema');
    if (tema === 'cerah'){
        modeGelap();
    } else{
        modeCerah();
    }
});
//time upload
function timeAgo(date) {
    let seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor (interval) + " tahun lalu";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor (interval) + " bulan lalu";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor (interval) + " hari lalu";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor (interval) + " jam lalu";
    interval = seconds / 60;
    if (interval > 1) return Math.floor (interval) + " menit lalu";
    return Math.floor(seconds) + " detik lalu";
}

document.getElementById('tagahumika').innerHTML = timeAgo('2022-09-1 1:44:00');
document.getElementById('nozokimi').innerHTML = timeAgo('2022-08-31 18:44:00');
document.getElementById('cuprum').innerHTML = timeAgo('2022-08-31 18:44:00');
document.getElementById('toaru').innerHTML = timeAgo('2022-08-31 18:44:00');
document.getElementById('ichika').innerHTML = timeAgo('2022-08-31 18:44:00');