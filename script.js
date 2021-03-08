'use strict'

const user = [
    {
        email: "1@",
        password: '1'
    }
]
const Login1 = document.getElementById('login_input')
const Pass1 = document.getElementById('password_input')

const Login2 = document.getElementById('login_input2')
const Pass2 = document.getElementById('password_input2')
const Pasw = document.getElementById('passtheword')

Login1.addEventListener('change', function () {
    if (!(Login1.value === '' || Pass1.value === '')) {
        butL.removeAttribute('disabled')

    } else {
        butL.setAttribute('disabled', true)
    }
})
Pass1.addEventListener('change', function () {
    if (!(Login1.value === '' || Pass1.value === '')) {
        butL.removeAttribute('disabled')
    } else {

        butL.setAttribute('disabled', true)
    }
})


Login2.addEventListener('change', function () {
    if (!(Login2.value === '' || Pass2.value === '' || Pasw.value === '')) {
        butR.removeAttribute('disabled')

    } else {
        butR.setAttribute('disabled', true)
    }
})
Pass2.addEventListener('change', function () {
    if (!(Login2.value === '' || Pass2.value === '' || Pasw.value === '')) {
        butR.removeAttribute('disabled')
    } else {

        butR.setAttribute('disabled', true)
    }
})
Pasw.addEventListener('change', function () {
    if (!(Login2.value === '' || Pass2.value === '' || Pasw.value === '')) {
        butR.removeAttribute('disabled')
    } else {

        butR.setAttribute('disabled', true)
    }
})


buttLog.onclick = function () {
    let login = document.getElementById('login_input').value
    let password = document.getElementById('password_input').value
    let trueLogin = 0;
    let truePas = 0;
    let schet = 0;
    for (let i = 0; i < user.length; i++) {
        if (login.indexOf('@') == -1) {
            alert('забыли собачку')
            schet += 1
            break
        } else if (user[i].email !== login) {
            continue
        }
        if (user[i].password !== password) {
            truePas += 1
            alert('неверный пароль')
            break
        } else {
            alert('добро пожаловать')
            trueLogin += 1
            const main = document.getElementsByClassName('menu')
            const main1 = document.getElementsByClassName('main')
            main[0].style.display = "flex"
            main1[0].style.display = "flex"
            let log = document.getElementsByClassName('login')
            log[0].style.display = 'none'
            break
        }

    }
    if (schet == 0) {
        if (truePas !== 0) {
        } else if (trueLogin == 0) {
            alert('неверный логин')
        }
    }
}
function registration() {
    let log = document.getElementsByClassName('login')
    let reg = document.getElementsByClassName('registration')
    reg[0].style.display = 'flex'
    log[0].style.display = 'none'
}
 function Log() {
    let log = document.getElementsByClassName('login')
    let reg = document.getElementsByClassName('registration')
    reg[0].style.display = 'none'
    log[0].style.display = 'flex'
}
butR.onclick = function () {
    let login = document.getElementById('login_input2').value
    let passw = document.getElementById('password_input2').value
    let passtheword = document.getElementById('passtheword').value
    let trueLogin = 0
    for (let i = 0; i < user.length; i++) {
        if (login.indexOf('@') == -1) {
            alert('Ошибка в логине')
            trueLogin += 1
            break
        }
        if (user[i].email == login) {
            trueLogin += 1
            alert('такой логин уже есть')
            break
        }
    }
    if (trueLogin == 0) {
        if (passw == passtheword) {
            user.push({
                email: login,
                password: passw
            })
            alert('registered')
            const main = document.getElementsByClassName('menu')
            const main1 = document.getElementsByClassName('main')
            main[0].style.display = "flex"
            main1[0].style.display = "flex"
            let reg = document.getElementsByClassName('registration')
            reg[0].style.display = 'none'
        } else {
            alert('password error')
        }
    }
}

function back() {
    const mune = document.getElementsByClassName('menu')
    mune[0].style.display = "none"
    let log = document.getElementsByClassName('login')
    log[0].style.display = 'flex'
    const contacts = document.getElementsByClassName('contacts')
    const main = document.getElementsByClassName('main')
    main[0].style.display = 'none'
    contacts[0].style.display = 'none'
    map.style.display = 'none'
}


const GMap = document.getElementById('map')
const contacts = document.getElementsByClassName('contacts')
const main = document.getElementsByClassName('main')
let head = document.createElement('h1')
let text = document.createElement('p')
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    head.innerHTML = "зачем  я это пишу если мы будем на пк смотреть"
    text = "connected not from pc"
} else {
    head.innerHTML = "ПК-боярь здарова"
    text = "connected from pc"
}
main[0].append(head)
main[0].append(text)
main[0].style.display = 'none'
let NavMain = document.getElementById('nav_main')

function mainPage() {
    main[0].style.display = 'flex'
    contacts[0].style.display = 'none'
    GMap.style.display = 'none'
}
const cont = document.getElementsByClassName('contacts_table')
let qwe = 0;
async function Ssilka() {
    qwe += 1
    main[0].style.display = 'none'
    contacts[0].style.display = 'block'
    cont[0].style.display = 'block'
    GMap.style.display = 'none'
    NavMain.style.color = 'white'
    if (qwe == 1) { 
        contacts[0].style.display = 'block'
        main[0].style.display = 'none'
        const result = await fetch('https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json ')
        const data = await result.json();
        let info = document.createElement('div');
        info.setAttribute('class', 'info');
        let numOfMen = 0;
        let numOfWomen = 0;
        let max = 0;
        let cur = 0;
        let NumberOfMax = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i].gender == 'female') {
                numOfWomen += 1
            } else if (data[i].gender == 'male') {
                numOfMen += 1
            }
            cur = data[i].balance
            cur = cur.replace(/,/g, '')
            cur = cur.replace('$', '');
            cur = Number(cur)
            if (cur > max) {
                max = cur;
                NumberOfMax = i;
            }
        }

        let monx = document.createElement('div');
        let dezaga = document.createElement('div');
        let brake = document.createElement('div');
        monx.innerHTML = `Number of men:${numOfMen} `
        dezaga.innerHTML = `Number of woman:${numOfWomen} `
        brake.innerHTML = `Max balance:${data[NumberOfMax].balance} `
        info.append(monx)
        info.append(dezaga)
        info.append(brake)
        contacts[0].prepend(info)
        let table = document.createElement('table')
        let tr1 = document.createElement('tr')
        const name = document.createElement('td')
        name.innerHTML = `Name`
        const company = document.createElement('td')
        company.innerHTML = `Company`
        const email = document.createElement('td')
        email.innerHTML = `Email`
        const phone = document.createElement('td')
        phone.innerHTML = `Phone`
        const balance = document.createElement('td')
        balance.innerHTML = `Balance`
        const registered = document.createElement('td')
        registered.innerHTML = `Registered`
        const buttonTable = document.createElement('td')
        buttonTable.innerHTML = `Button`
        tr1.append(name)
        tr1.append(company)
        tr1.append(email)
        tr1.append(phone)
        tr1.append(balance)
        tr1.append(registered)
        tr1.append(buttonTable);
        table.append(tr1)
        tr1.style.border = '1px solid #000'
        name.style.border = '1px solid #000'
        company.style.border = '1px solid #000'
        email.style.border = '1px solid #000'
        phone.style.border = '1px solid #000'
        balance.style.border = '1px solid #000'
        registered.style.border = '1px solid #000'
        buttonTable.style.border = '1px solid #000'
        for (let i = 0; i < data.length; i++) {
            let tr = document.createElement('tr')
            table.append(tr);
            let td1 = document.createElement('td')
            td1.innerHTML = `${data[i].name}`
            tr.append(td1)
            let td2 = document.createElement('td')
            td2.innerHTML = `${data[i].company}`
            tr.append(td2)
            let td3 = document.createElement('td')
            td3.innerHTML = `${data[i].email}`
            tr.append(td3)
            let td4 = document.createElement('td')
            td4.innerHTML = `${data[i].phone}`
            tr.append(td4)
            let td5 = document.createElement('td')
            td5.innerHTML = `${data[i].balance}`
            tr.append(td5)
            let td6 = document.createElement('td')
            td6.innerHTML = `${data[i].registered}`
            tr.append(td6)
            let button = document.createElement('button')
            button.innerHTML = "Delete"
            button.onclick = function () {
                let del = confirm('delete this?');
                
                if (del == true) {
                    tr.remove()
                }

            }
            tr.append(button)

            if (data[i].isActive == false) {
                tr.style.backgroundColor = 'lightgray'
            }
            tr.style.border = '1px solid #000'
            td1.style.border = '1px solid #000'
            td2.style.border = '1px solid #000'
            td3.style.border = '1px solid #000'
            td4.style.border = '1px solid #000'
            td5.style.border = '1px solid #000'
            td6.style.border = '1px solid #000'
        }

        cont[0].append(table)
        const buttonRefreshe = document.createElement('button')
        buttonRefreshe.innerHTML = 'Refreshe'

        buttonRefreshe.onclick = function () {
            {
                table.remove()
                info.remove()
                buttonRefreshe.remove()
                n = 0
                Ssilka()
            }

        }
        contacts[0].append(buttonRefreshe)
        table.setAttribute('class', 'table')
    }

}



function initMap() {
    let maaaps = {
        center: { lat: 53.90209186617356,  lng:  27.555055011613323},
        zoom: 13
    }
    let Map = new google.maps.Map(GMap, maaaps)
    let Spich = new google.maps.Marker({
        position: { lat: 53.90415227897997, lng:  27.551856777193954 },
        map: Map,
    });
    let infoSpich = new google.maps.InfoWindow({
        content: '<h3>Spichki</h3>'
    });
    Spich.addListener('click', function () {
        infoSpich.open(Map, Spich);
    });
    let Butgeler = new google.maps.Marker({
        position: { lat: 53.90187674241631, lng: 27.554002544399545},
        map: Map,
    });
    let infoButgeler = new google.maps.InfoWindow({
        content: '<h3>Butgeler </h3>'
    });
    Butgeler.addListener('click', function () {
        infoButgeler .open(Map, Butgeler );
    });
    let Idbar = new google.maps.Marker({
        position: { lat: 53.90187674241631, lng: 27.554002544399545},
        map: Map,
    });
    let infoIdbar = new google.maps.InfoWindow({
        content: '<h3>Idbar </h3>'
    });
    Idbar.addListener('click', function () {
        infoIdbar.open(Map,Idbar);
    })
   
   
}

function forMap() {
  
    main[0].style.display = 'none'
    contacts[0].style.display = 'none'
    GMap.style.display = 'block'
    
}
