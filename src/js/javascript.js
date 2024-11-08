const mountains = document.getElementsByClassName('mountain')
const mountainScene2 = document.getElementsByClassName('mountainScene2')
const clouds = document.getElementsByClassName('clouds')
const main = document.querySelector('main')
const bats = document.getElementsByClassName('bats')[0]
const batmove = document.querySelectorAll('.bats>div>svg')
const scrolldown = document.getElementsByClassName('scroll')[0]
const scrollup = document.getElementsByClassName('scrollup')[0]
const scrollback = document.getElementsByClassName('scrollback')[0]
const crow = document.getElementsByClassName('crow')[0]
const sun = document.getElementsByClassName('sun')[0]
const background = document.getElementsByClassName('background')[0]
const backgroundgrad = document.getElementsByClassName('backgroundgrad')[0]
const backgroundgrad2 = document.getElementsByClassName('backgroundgrad2')[0]
const mountainScene3 = document.getElementsByClassName('mountainScene3')
const stars = document.getElementsByClassName('stars')[0]
const credit = document.getElementsByClassName('credit')[0]
console.log(mountains[0]);



let count = 0
window.addEventListener('wheel', (e)=>{
    let delta = e.deltaY
    if(delta > 0 && count < 4800){
        count = count += 100
    }
    else if(delta < 0 && count > 0){
        count = count -= 100
    }
    console.log(count);
    if(count == 0){
        mountains[0].style.transform= 'translateY(0)'
        mountains[1].style.transform= 'translateY(0)'
        mountains[2].style.transform= 'translateY(0)translateX(0)'
        mountains[3].style.transform= 'translateY(0)translateX(0)'
        mountains[7].style.transform= 'translateY(0)translateX(0)'
        clouds[0].style.left= '0'
        clouds[2].style.right= '0'
        scrolldown.style.top = '50%'
        main.style.backgroundColor = '#FFBCA9'
        sun.style.top= '-40%'
    }
    if(count == 100){
        mountains[0].style.transform= 'translateY(30%)'
        mountains[1].style.transform= 'translateY(30%)'
        mountains[2].style.transform= 'translateY(40%)translateX(5%)'
        mountains[3].style.transform= 'translateY(15%)translateX(-5%)'
        mountains[4].style.transform= 'translateY(0%)translateX(0%)'
        mountains[5].style.transform= 'translateY(0%)translateX(0%)'
        mountains[6].style.transform= 'translateY(0%)translateX(0%)'
        mountains[7].style.transform= 'translateY(5%)translateX(5%)'
        clouds[0].style.left= '10%'
        clouds[2].style.right= '10%'
        scrolldown.style.top = '100%'
        main.style.backgroundColor = '#FFBAA6'
        sun.style.top= '-30%'
    }
    if(count == 200){
        scrolldown.style.top = '110%'
        mountains[0].style.transform= 'translateY(50%)'
        mountains[1].style.transform= 'translateY(50%)'
        mountains[2].style.transform= 'translateY(60%)translateX(10%)'
        mountains[3].style.transform= 'translateY(30%)translateX(-15%)'
        mountains[4].style.transform= 'translateY(20%)translateX(-20%)'
        mountains[5].style.transform= 'translateY(20%)translateX(4%)'
        mountains[6].style.transform= 'translateY(20%)translateX(15%)'
        mountains[7].style.transform= 'translateY(6%)translateX(4%)'
        clouds[0].style.left= '20%'
        clouds[2].style.right= '20%'
        main.style.backgroundColor = '#FFB8A3'
        sun.style.top= '-20%'
    }
    if(count == 300){
        mountains[0].style.transform= 'translateY(100%)'
        mountains[1].style.transform= 'translateY(100%)'
        mountains[2].style.transform= 'translateY(100%)translateX(100%)'
        mountains[3].style.transform= 'translateY(50%)translateX(-25%)'
        mountains[4].style.transform= 'translateY(50%)translateX(-30%)'
        mountains[5].style.transform= 'translateY(70%)translateX(8%)'
        mountains[6].style.transform= 'translateY(30%)translateX(30%)'
        mountains[7].style.transform= 'translateY(12%)translateX(8%)'
        clouds[0].style.left= '30%'
        clouds[2].style.right= '30%'
        main.style.backgroundColor = '#FFB5A0'
        sun.style.top= '-10%'
        
    }
    if(count == 400){
        mountains[3].style.transform= 'translateY(100%)translateX(-25%)'
        mountains[4].style.transform= 'translateY(70%)translateX(-35%)'
        mountains[5].style.transform= 'translateY(100%)translateX(12%)'
        mountains[6].style.transform= 'translateY(80%)translateX(35%)'
        mountains[7].style.transform= 'translateY(18%)translateX(12%)'
        clouds[0].style.left= '40%'
        clouds[1].style.left= '0%'
        clouds[2].style.right= '40%'
        clouds[3].style.right= '0%'
        main.style.backgroundColor = '#FFB39D'
        sun.style.top= '0%'
        sun.style.boxShadow= '0px 0px 150px 100px #f78473'
        sun.children[0].style.boxShadow= '0px 0px 100px 50px #F5B386'
        sun.children[0].children[0].style.boxShadow= '0px 0px 50px 0px #ffffff'
    }
    if(count == 500){
        mountains[4].style.transform= 'translateY(90%)translateX(-40%)'
        mountains[6].style.transform= 'translateY(100%)translateX(35%)'
        mountains[7].style.transform= 'translateY(24%)translateX(16%)'
        clouds[0].style.left= '50%'
        clouds[1].style.left= '8%'
        clouds[2].style.right= '50%'
        clouds[3].style.right= '8%'
        main.style.backgroundColor = '#FFB19A'
        sun.style.top= '6%'
        sun.style.boxShadow= '0px 0px 150px 150px #f78473'
        sun.children[0].style.boxShadow= '0px 0px 100px 100px #F5B386'
        sun.children[0].children[0].style.boxShadow= '0px 0px 50px 10px #ffffff'
        sun.children[0].children[0].children[0].style.boxShadow='0px 0px 30px 0px #fffab7'
    }
    if(count == 600){
        mountains[4].style.transform= 'translateY(100%)translateX(-45%)'
        mountains[7].style.transform= 'translateY(30%)translateX(20%)'
        clouds[0].style.left= '60%'
        clouds[1].style.left= '16%'
        clouds[2].style.right= '60%'
        clouds[3].style.right= '16%'
        main.style.backgroundColor = '#FFAF97'
        sun.style.top= '12%'
        sun.style.boxShadow= '0px 0px 150px 200px #f78473'
        sun.children[0].style.boxShadow= '0px 0px 100px 150px #F5B386'
        sun.children[0].children[0].style.boxShadow= '0px 0px 70px 20px #ffffff'
        sun.children[0].children[0].children[0].style.boxShadow='0px 0px 30px 5px #fffab7'
    }
    if(count == 700){
        mountains[7].style.transform= 'translateY(36%)translateX(24%)'
        clouds[0].style.left= '70%'
        clouds[1].style.left= '24%'
        clouds[2].style.right= '70%'
        clouds[3].style.right= '24%'
        main.style.backgroundColor = '#FFAC94'
        sun.style.top= '18%'
        sun.children[0].children[0].style.boxShadow= '0px 0px 90px 30px #ffffff'
        sun.children[0].children[0].children[0].style.boxShadow='0px 0px 30px 10px #fffab7'
    }
    if(count == 800){
        mountains[7].style.transform= 'translateY(42%)translateX(28%)'
        clouds[0].style.left= '80%'
        clouds[1].style.left= '32%'
        clouds[2].style.right= '80%'
        clouds[3].style.right= '32%'
        main.style.backgroundColor = '#FFAA91'
        sun.style.top= '24%'
    }
    if(count == 900){
        mountains[7].style.transform= 'translateY(48%)translateX(32%)'
        clouds[0].style.left= '90%'
        clouds[1].style.left= '40%'
        clouds[2].style.right= '90%'
        clouds[3].style.right= '40%'
        main.style.backgroundColor = '#FFA88E'
        crow.style.left = '8%'
        crow.style.bottom = '10%'
        sun.style.top= '30%'
    }
    if(count == 1000){
        mountains[7].style.transform= 'translateY(60%)translateX(45%)'
        mountainScene2[5].style.bottom = '-100%'
        mountainScene2[5].style.opacity = '0'
        clouds[0].style.left= '100%'
        clouds[1].style.left= '48%'
        clouds[2].style.right= '100%'
        clouds[3].style.right= '48%'
        crow.style.left = '18%'
        crow.style.bottom = '18%'
        sun.style.top= '35%'
    }
    if(count == 1100){
        mountainScene2[2].style.bottom = '-100%'
        mountainScene2[3].style.bottom = '-100%'
        mountainScene2[4].style.bottom = '-100%'
        mountainScene2[5].style.bottom = '-50%'
        mountainScene2[5].style.opacity = '0.5'
        clouds[0].style.left= '115%'
        clouds[1].style.left= '56%'
        clouds[2].style.right= '110%'
        clouds[3].style.right= '56%'
        crow.style.left = '28%'
        crow.style.bottom = '26%'
        sun.style.top= '40%'
    }
    if(count == 1200){
        mountainScene2[0].style.bottom = '-100%'
        mountainScene2[2].style.bottom = '-40%'
        mountainScene2[3].style.bottom = '-25%'
        mountainScene2[4].style.bottom = '-25%'
        mountainScene2[5].style.bottom = '-30%'
        mountainScene2[5].style.opacity = '0.8'
        clouds[2].style.right= '120%'
        clouds[1].style.left= '64%'
        clouds[3].style.right= '64%'
        crow.style.left = '38%'
        crow.style.bottom = '34%'
        sun.style.top= '45%'
    }
    if(count == 1300){
        mountainScene2[1].style.bottom = '-100%'
        mountainScene2[0].style.bottom = '-30%'
        mountainScene2[2].style.bottom = '-10%'
        mountainScene2[3].style.bottom = '-5%'
        mountainScene2[4].style.bottom = '-5%'
        mountainScene2[5].style.bottom = '-15%'
        mountainScene2[5].style.opacity = '1'
        clouds[2].style.right= '130%'
        clouds[1].style.left= '72%'
        clouds[3].style.right= '72%'
        crow.style.left = '48%'
        crow.style.bottom = '42%'
        sun.style.top= '50%'
    }
    if(count == 1400){
        mountainScene2[0].style.bottom = '-10%'
        mountainScene2[1].style.bottom = '-30%'
        mountainScene2[2].style.bottom = '0%'
        mountainScene2[3].style.bottom = '0%'
        mountainScene2[4].style.bottom = '0%'
        clouds[2].style.right= '140%'
        clouds[1].style.left= '80%'
        clouds[3].style.right= '80%'
        crow.style.left = '58%'
        crow.style.bottom = '50%'
    }
    if(count == 1500){
        mountainScene2[0].style.bottom = '0%'
        mountainScene2[1].style.bottom = '-10%'
        clouds[2].style.right= '150%'
        clouds[1].style.left= '88%'
        clouds[3].style.right= '88%'
        crow.style.left = '68%'
        crow.style.bottom = '58%'
    }
    if(count == 1600){
        mountainScene2[1].style.bottom = '0%'
        clouds[2].style.right= '160%'
        clouds[1].style.left= '96%'
        clouds[3].style.right= '96%'
        crow.style.left = '78%'
        crow.style.bottom = '66%'
    }
    if(count == 1700){
        clouds[1].style.left= '103%'
        clouds[3].style.right= '103%'
        crow.style.left = '88%'
        crow.style.bottom = '74%'
    }
    if(count == 1800){
        clouds[1].style.left= '109%'
        clouds[3].style.right= '109%'
        crow.style.left = '98%'
        crow.style.bottom = '82%'
    }
    if(count == 1900){
        clouds[1].style.left= '114%'
        clouds[3].style.right= '114%'
        crow.style.left = '108%'
        crow.style.bottom = '90%'
    }
    if(count == 2000){
        clouds[1].style.left= '118%'
        clouds[3].style.right= '118%'
    }
    if(count == 2100){
        clouds[1].style.left= '121%'
        clouds[3].style.right= '121%'
    }
    if(count == 2200){
        clouds[3].style.right= '123%'
        sun.style.width = '10%'
        mountainScene2[0].style.fill = '#434375'
        mountainScene2[1].style.fill = '#434375'
        mountainScene2[2].style.fill = '#434375'
        mountainScene2[4].style.opacity = '1'
        main.style.backgroundColor = '#FFA88E'
        credit.style.color = '#000000'
        sun.children[0].children[0].children[0].style.boxShadow='inner 0px 0px 0px 0px #FFE2B6'
        sun.children[0].children[0].style.boxShadow= '0px 0px 90px 30px #ffffff'
        sun.children[0].style.boxShadow= '0px 0px 100px 150px #F5B386'
        sun.style.boxShadow= '0px 0px 150px 200px #f78473'
        sun.children[0].children[0].children[0].style.backgroundColor = '#F7D171'
    }
    if(count == 2300){
        clouds[3].style.right= '127%'
        sun.style.width = '14%'
        mountainScene2[0].style.fill = '#414071'
        mountainScene2[1].style.fill = '#414071'
        mountainScene2[2].style.fill = '#414071'
        mountainScene2[4].style.opacity = '0.93'
        main.style.backgroundColor = '#F4A28C'
        credit.style.color = '#121212'
        sun.children[0].children[0].children[0].style.boxShadow='inset 0px 0px 4px 1px #ffffff'
        sun.children[0].children[0].style.boxShadow= '0px 0px 75px 25px #ffffff'
        sun.children[0].style.boxShadow= '0px 0px 90px 135px #F5B386'
        sun.style.boxShadow= '0px 0px 144px 190px #f78473'
        sun.children[0].children[0].children[0].style.backgroundColor = '#F8D46D'
    }
    if(count == 2400){
        clouds[3].style.right= '129%'
        sun.style.width = '18%'
        bats.style.bottom = '-25%'
        mountainScene2[0].style.fill = '#3F3E6C'
        mountainScene2[1].style.fill = '#3F3E6C'
        mountainScene2[2].style.fill = '#3F3E6C'
        mountainScene2[4].style.opacity = '0.86'
        main.style.backgroundColor = '#EA9B8A'
        credit.style.color = '#242424'
        sun.children[0].children[0].children[0].style.backgroundColor = '#F8D768'
        sun.style.boxShadow= '0px 0px 138px 180px #f78473'
        sun.children[0].style.boxShadow= '0px 0px 80px 120px #F5B386'
        sun.children[0].children[0].style.boxShadow= '0px 0px 60px 20px #ffffff'
        sun.children[0].children[0].children[0].style.boxShadow='inset 0px 0px 8px 2px #ffffff'
    }
    if(count == 2500){
        clouds[3].style.right= '131%'
        sun.style.width = '22%'
        bats.style.bottom = '15%'
        mountainScene2[0].style.fill = '#3D3B68'
        mountainScene2[1].style.fill = '#3D3B68'
        mountainScene2[2].style.fill = '#3D3B68'
        mountainScene2[4].style.opacity = '0.79'
        main.style.backgroundColor = '#DF9587'
        credit.style.color = '#373737'
        sun.children[0].children[0].children[0].style.backgroundColor = '#F9DB64'
        sun.style.boxShadow= '0px 0px 132px 170px #f78473'
        sun.children[0].style.boxShadow= '0px 0px 70px 105px #F5B386'
        sun.children[0].children[0].style.boxShadow= '0px 0px 45px 15px #ffffff'
        sun.children[0].children[0].children[0].style.boxShadow='inset 0px 0px 12px 3px #ffffff'
    }
    if(count == 2600){
        clouds[3].style.right= '133%'
        sun.style.width = '26%'
        mountainScene2[0].style.fill = '#3B3963'
        mountainScene2[1].style.fill = '#3B3963'
        mountainScene2[2].style.fill = '#3B3963'
        mountainScene2[4].style.opacity = '0.72'
        main.style.backgroundColor = '#D58F85'
        credit.style.color = '#494949'
        sun.children[0].children[0].children[0].style.backgroundColor = '#F9DE60'
        sun.style.boxShadow= '0px 0px 126px 160px #f78473'
        sun.children[0].style.boxShadow= '0px 0px 60px 90px #F5B386'
        sun.children[0].children[0].style.boxShadow= '0px 0px 30px 10px #ffffff'
        sun.children[0].children[0].children[0].style.boxShadow='inset 0px 0px 16px 4px #ffffff'
    }
    if(count == 2700){
        clouds[3].style.right= '135%'
        sun.style.width = '30%'
        bats.style.bottom = '30%'
        bats.style.width = '12%'
        batmove[0].style.animation = 'batmove 3s linear'
        batmove[1].style.animation = 'batmove 2.5s 1s linear'
        batmove[2].style.animation = 'batmove 2.5s 1 linear'
        batmove[3].style.animation = 'batmove 2s 1.5s ease-in-out'
        batmove[4].style.animation = 'batmove 3s .5s ease-in'
        mountainScene2[0].style.fill = '#39365F'
        mountainScene2[1].style.fill = '#39365F'
        mountainScene2[2].style.fill = '#39365F'
        mountainScene2[4].style.opacity = '0.65'
        main.style.backgroundColor = '#CA8883'
        credit.style.color = '#5B5B5B'
        sun.children[0].children[0].children[0].style.backgroundColor = '#FAE15B'
        sun.style.boxShadow= '0px 0px 120px 150px #f78473'
        sun.children[0].style.boxShadow= '0px 0px 50px 75px #F5B386'
        sun.children[0].children[0].style.boxShadow= '0px 0px 15px 5px #ffffff'
        sun.children[0].children[0].children[0].style.boxShadow='inset 0px 0px 20px 5px #ffffff'
    }
    if(count == 2800){
        clouds[3].style.right= '137%'
        sun.style.width = '34%'
        bats.style.bottom = '40%'
        bats.style.width = '14%'
        mountainScene2[0].style.fill = '#37345A'
        mountainScene2[1].style.fill = '#37345A'
        mountainScene2[2].style.fill = '#37345A'
        mountainScene2[4].style.opacity = '0.58'
        main.style.backgroundColor = '#C08281'
        credit.style.color = '#6D6D6D'
        sun.children[0].children[0].children[0].style.backgroundColor = '#FAE457'
        sun.style.boxShadow= '0px 0px 114px 140px #f78473'
        sun.children[0].style.boxShadow= '0px 0px 40px 60px #F5B386'
        sun.children[0].children[0].style.boxShadow= '0px 0px 0px 0px #ffffff'
        sun.children[0].children[0].children[0].style.boxShadow='inset 0px 0px 24px 6px #ffffff'
    }
    if(count == 2900){
        clouds[3].style.right= '139%'
        sun.style.width = '38%'
        bats.style.bottom = '50%'
        bats.style.width = '16%'
        mountainScene2[0].style.fill = '#353156'
        mountainScene2[1].style.fill = '#353156'
        mountainScene2[2].style.fill = '#353156'
        mountainScene2[4].style.opacity = '0.51'
        main.style.backgroundColor = '#B57C7F'
        credit.style.color = '#808080'
        sun.children[0].children[0].children[0].style.backgroundColor = '#FBE853'
        sun.style.boxShadow= '0px 0px 108px 130px #f78473'
        sun.children[0].style.boxShadow= '0px 0px 30px 45px #F5B386'
        sun.children[0].children[0].children[0].style.boxShadow='inset 0px 0px 28px 7px #ffffff'
    }
    if(count == 3000){
        clouds[3].style.right= '141%'
        sun.style.width = '42%'
        bats.style.width = '18%'
        mountainScene2[0].style.fill = '#322E51'
        mountainScene2[1].style.fill = '#322E51'
        mountainScene2[2].style.fill = '#322E51'
        mountainScene2[4].style.opacity = '0.44'
        main.style.backgroundColor = '#AA757C'
        credit.style.color = '#929292'
        sun.children[0].children[0].children[0].style.backgroundColor = '#FCEB4E'
        sun.style.boxShadow= '0px 0px 102px 120px #f78473'
        sun.children[0].style.boxShadow= '0px 0px 20px 30px #F5B386'
        sun.children[0].children[0].children[0].style.boxShadow='inset 0px 0px 32px 8px #ffffff'
    }
    if(count == 3100){
        sun.style.width = '46%'
        mountainScene2[0].style.fill = '#302C4D'
        mountainScene2[1].style.fill = '#302C4D'
        mountainScene2[2].style.fill = '#302C4D'
        mountainScene2[4].style.opacity = '0.37'
        main.style.backgroundColor = '#A06F7A'
        credit.style.color = '#A4A4A4'
        sun.children[0].children[0].children[0].style.backgroundColor = '#FCEE4A'
        sun.style.boxShadow= '0px 0px 96px 110px #f78473'
        sun.children[0].style.boxShadow= '0px 0px 10px 15px #F5B386'
        sun.children[0].children[0].children[0].style.boxShadow='inset 0px 0px 32px 9px #ffffff'
    }
    if(count == 3300){
        sun.style.width = '50%'
        mountainScene2[0].style.fill = '#2E2948'
        mountainScene2[1].style.fill = '#2E2948'
        mountainScene2[2].style.fill = '#2E2948'
        mountainScene2[4].style.opacity = '0.30'
        main.style.backgroundColor = '#956878'
        credit.style.color = '#B6B6B6'
        sun.children[0].children[0].children[0].style.backgroundColor = '#FDF145'
        sun.style.boxShadow= '0px 0px 90px 100px #f78473'
        sun.children[0].style.boxShadow= '0px 0px 0px 0px #F5B386'
        sun.children[0].children[0].children[0].style.boxShadow='inset 0px 0px 32px 10px #ffffff'
    }
    if(count == 3400){
        sun.style.width = '52%'
        mountainScene2[0].style.fill = '#2C2744'
        mountainScene2[1].style.fill = '#2C2744'
        mountainScene2[2].style.fill = '#2C2744'
        mountainScene2[4].style.opacity = '0.23'
        main.style.backgroundColor = '#8B6276'
        credit.style.color = '#C8C8C8'
        sun.children[0].children[0].children[0].style.backgroundColor = '#FDF441'
        sun.style.boxShadow= '0px 0px 84px 90px #f78473'
        sun.children[0].style.boxShadow= '0px 0px 23px 40px #F5B386'
        sun.children[0].children[0].children[0].style.boxShadow='inset 0px 0px 32px 11px #ffffff'
    }
    if(count == 3500){
        sun.style.width = '54%'
        mountainScene2[0].style.fill = '#2A243F'
        mountainScene2[1].style.fill = '#2A243F'
        mountainScene2[2].style.fill = '#2A243F'
        mountainScene2[4].style.opacity = '0.16'
        main.style.backgroundColor = '#805C73'
        credit.style.color = '#DBDBDB'
        sun.children[0].children[0].children[0].style.backgroundColor = '#FEF83D'
        sun.style.boxShadow= '0px 0px 78px 80px #f78473'
        sun.children[0].style.boxShadow= '0px 0px 16px 30px #F5B386'
        sun.children[0].children[0].children[0].style.boxShadow='inset 0px 0px 32px 12px #ffffff'
    }
    if(count == 3600){
        sun.style.width = '56%'
        mountainScene2[0].style.fill = '#28223B'
        mountainScene2[1].style.fill = '#28223B'
        mountainScene2[2].style.fill = '#28223B'
        mountainScene2[4].style.opacity = '0.09'
        main.style.backgroundColor = '#765571'
        credit.style.color = '#EDEDED'
        sun.children[0].children[0].children[0].style.backgroundColor = '#FEFB38'
        sun.style.boxShadow= '0px 0px 72px 70px #f78473'
        sun.children[0].style.boxShadow= '0px 0px 9px 20px #F5B386'
        sun.children[0].children[0].children[0].style.boxShadow='inset 0px 0px 32px 13px #ffffff'
    }
    if(count == 3700){
        sun.style.width = '58%'
        mountainScene2[0].style.fill = '#261F36'
        mountainScene2[1].style.fill = '#261F36'
        mountainScene2[2].style.fill = '#261F36'
        mountainScene2[4].style.opacity = '0'
        main.style.backgroundColor = '#6B4F6F'
        sun.children[0].children[0].children[0].style.backgroundColor = '#FFFE34'
        sun.style.boxShadow= '0px 0px 66px 60px #f78473'
        sun.children[0].style.boxShadow= '0px 0px 0px 00px #F5B386'
        sun.children[0].children[0].children[0].style.boxShadow='inset 0px 0px 32px 14px #ffffff'
    }
    if(count == 3800){
        sun.style.width = '60%'
        sun.style.boxShadow= '0px 0px 60px 60px #f78473'
        mountainScene2[5].style.bottom = '-15%'
        background.style.bottom = '-100%'
        backgroundgrad.style.bottom = '-85%'
        stars.style.transform = 'translateY(100%)'
        stars.style.opacity = '0'
    }
    if(count == 3900){
        mountainScene2[5].style.bottom = '40%'
        background.style.bottom = '-50%'
        backgroundgrad.style.bottom = '-75%'
    }
    if(count == 4000){
        mountainScene2[5].style.bottom = '70%'
        background.style.bottom = '-20%'
        backgroundgrad.style.bottom = '-65%'
        stars.style.transform = 'translateY(70%)'
        stars.style.opacity = '0.4'
    }
    if(count == 4100){
        mountainScene2[5].style.bottom = '100%'
        background.style.bottom = '0%'
        backgroundgrad.style.bottom = '-55%'
        stars.style.transform = 'translateY(40%)'
        stars.style.opacity = '0.4'
        mountainScene3[4].style.transform = 'translateY(100%)'
    }
    if(count == 4200){
        stars.style.transform = 'translateY(10%)'
        stars.style.opacity = '0.5'
        backgroundgrad.style.bottom = '-45%'
        backgroundgrad2.style.bottom = '-45%'
        mountainScene3[4].style.transform = 'translateY(60%)'
        mountainScene3[0].style.transform = 'translateY(100%)'
        mountainScene3[1].style.transform = 'translateY(100%)'
    }
    if(count == 4300){
        stars.style.transform = 'translateY(-20%)'
        stars.style.opacity = '0.6'
        backgroundgrad.style.bottom = '-35%'
        backgroundgrad2.style.bottom = '-35%'
        mountainScene3[4].style.transform = 'translateY(10%)'
        mountainScene3[0].style.transform = 'translateY(40%)'
        mountainScene3[1].style.transform = 'translateY(80%)'
        mountainScene3[2].style.transform = 'translateY(100%)'
    }
    if(count == 4400){
        backgroundgrad.style.bottom = '-30%'
        backgroundgrad2.style.bottom = '-25%'
        mountainScene3[4].style.transform = 'translateY(0%)'
        mountainScene3[0].style.transform = 'translateY(0%)'
        mountainScene3[1].style.transform = 'translateY(0%)'
        mountainScene3[2].style.transform = 'translateY(20%)'
        mountainScene3[3].style.transform = 'translateY(100%)'
    }
    if(count == 4600){
        backgroundgrad.style.bottom = '-25%'
        backgroundgrad2.style.bottom = '-15%'
        mountainScene3[2].style.transform = 'translateY(0%)'
        mountainScene3[3].style.transform = 'translateY(20%)'
        scrollup.style.bottom = '0%'
        scrollback.style.bottom = '0%'
    }
    if(count == 4700){
        backgroundgrad.style.bottom = '-20%'
        backgroundgrad2.style.bottom = '0%'
        mountainScene3[3].style.transform = 'translateY(0%)'
        scrollup.style.bottom = '35%'
        scrollback.style.bottom = '7%'
    }
    if(count == 4800){
        scrollup.style.bottom = '50%'
        scrollback.style.bottom = '40%'
    }

    
})


