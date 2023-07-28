
console.log('rrrrr')

let passwordV = document.getElementById('password')
let emailV = document.getElementById('email')
let googleV = document.getElementById('googleR')
let facebookV = document.getElementById('facebookR')

const sign = document.querySelector('.pop-up__sign-in')

sign.addEventListener('click', function () {
   alert('Yor e-mail is ' + emailV.value + '\n' + 'Your password is ' + passwordV.value)
})
var signInS = document.getElementById('signIn')
signInS.addEventListener('click', signF)
var registerS = document.getElementById('register')
registerS.addEventListener('click', signF)

function signF(e) {
   var signUp = document.querySelector('.pop-up__sign-up')
   var signIn = document.querySelector('.pop-up__sign-in')
   var stringRegisterS = document.getElementById('stringRegister')
   let signBlock=document.querySelector('._active-pop')
   signBlock.style.height="660px"
   console.log(signBlock.style.height)
   signInS.style.opacity = signInS.style.opacity === '1' ? '0': '1'
   registerS.style.opacity = registerS.style.opacity === '0' ? '1' : '0'
 signInS.style.opacity = signInS.style.opacity === '1' ? registerS.style.marginLeft='60px':registerS.style.marginLeft='0px'
   registerS.style.opacity = registerS.style.opacity === '0' ? registerS.style.marginLeft='40px':registerS.style.marginLeft='0px'
   stringRegisterS.style.opacity = stringRegisterS.style.opacity === '0' ? '1' : '0'
   stringRegisterS.style.opacity = stringRegisterS.style.opacity === '0' ? stringRegisterS.style.fontSize='0px' : stringRegisterS.style.fontSize='15px'
   googleV.style.display = googleV.style.display === 'none' ? 'block' : 'none'
   facebookV.style.display = facebookV.style.display === 'none' ? 'block' : 'none'
   signUp.style.display = signUp.style.display === 'none' ? 'block' : 'none'
   signIn.style.display = signIn.style.display === 'none' ? 'block' : 'none'
 if(signIn.style.display = signIn.style.display === 'block'){
    signIn.style. margin='5px 0px 15px';
    signBlock.style.height="482px"
    signBlock.style.height="660px"
    console.log(signBlock.style.height)
 }else{signIn.style. margin='5px 0px 5px';
 signBlock.style.height="480px"
 console.log(signBlock.style.height)
 }


   if (signInS.style.opacity = signInS.style.opacity !== '0') {
      emailV.value = 'Enter your e-mail'
      emailV.style.color = 'grey'
      emailV.style.paddingLeft = '5px'
      passwordV.value = 'Come up with your password'
      passwordV.style.color = 'grey'
      passwordV.style.paddingLeft = '5px'

   } else {
      emailV.value = ''
      passwordV.value = ''
   }
}
