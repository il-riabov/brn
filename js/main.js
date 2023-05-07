const TOKEN = "6024799129:AAGBt130uIfOp5ood3Svx6oSRrLI9W7LbPI";
        const CHAT_ID = "-1001630755510";
        const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

        document.getElementById('form').addEventListener('submit', function(e) {
            e.preventDefault();
            


            let message = `**Заявка с сайта**\n\n`;
            message += `Отправитель: ${ this.name.value }\n`;
            message += `Телефон: ${ this.phone.value }\n`;
            message += `Вопрос: ${ this.question.value }\n`;

            axios.post(URI_API, {
                chat_id: CHAT_ID,
                parse_mod: 'html',
                text: message
            })

            .then((res) => {
                this.name.value = "";
                this.phone.value = "";
                this.question.value = "";
                $('.thanks').css('display', 'flex')
                $('body').css('overflow', 'hidden')
            })
            .catch((err) => {
                console.warn(err);
            })
            .finally(() =>{
                console.log('Конец')
            })

            // onclick=form.reset()
        })

        $('.btn_check_close').click(function () { 
            $('.thanks').css('display', 'none')
            $('body').css('overflow', 'visible')
          })

var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');

for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
}


window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) { showSlides(slideIndex += n); }
function currentSlide(n) { showSlides(slideIndex = n); }

function showSlides(n) {
    let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

