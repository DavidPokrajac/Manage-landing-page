document.addEventListener("DOMContentLoaded", () => {

    let navigation = document.querySelector("nav");

    let inputText = document.querySelector("input[type='text']");
    let emailValueArray;
    let emailErrorWarning = document.createElement("span");
    let footerContainer = document.querySelector("footer section");
    footerContainer.append(emailErrorWarning);

    inputText.addEventListener("keyup", (e) => {
        console.log(e.target.value);
        emailValueArray = e.target.value;

        console.log(emailValueArray);
        for(let i = 0; i < emailValueArray.length; i += 1) {
            if(emailValueArray.startsWith("@") || emailValueArray[i] !== "@") {
                inputText.style.color = "hsl(12, 88%, 59%)";
                inputText.style.border = "2px solid hsl(12, 88%, 59%)";
                emailErrorWarning.textContent = "Please insert a valid email";
                emailErrorWarning.classList.add("email-error-warning");
            } else {
                emailErrorWarning.textContent = "";
                inputText.style.border = "";
                inputText.style.color = "";
            }
        }

        if(emailValueArray.length === 0) {
            emailErrorWarning.textContent = "";
            inputText.style.border = "";
            inputText.style.color = "";
        }
    })

    if(window.innerWidth <= 400) {
        let slideDots = document.createElement("div");
        slideDots.classList.add("slide-dots");
        const slider = document.querySelector(".slider-section");
        const sliderLength = Array.from(document.querySelectorAll(".slider div"));
        const sliderButton = document.querySelector(".slider-section button");

        for(let i = 0; i < sliderLength.length; i++) {
            let slideDotSpan = document.createElement("span");
            slideDotSpan.classList.add("slide-dot-span");
            slideDots.append(slideDotSpan);
        }

        slider.insertBefore(slideDots, sliderButton);

        for(let i = 0; i < slideDots.children.length; i++) {
            slideDots.children[i].addEventListener("click", (e) => changeSlide(e, i));
        }

        slideDots.children[0].classList.add("active")

        function changeSlide(a, b) {
            Array.from(slideDots.children).forEach(slideDot => slideDot.classList.remove("active"));
            switch(b) {
                case 1:
                    slider.children[1].style.left = "-100%";
                    slideDots.children[b].classList.add("active");
                    break;
                case 2:
                    slider.children[1].style.left = "-200%";
                    slideDots.children[b].classList.add("active");
                    break;
                case 3:
                    slider.children[1].style.left = "-300%";
                    slideDots.children[b].classList.add("active");
                    break;
                default:
                    slider.children[1].style.left="";
                    slideDots.children[b].classList.add("active");
            }
        }

        navigation.innerHTML = "<span class='hamburger'><img src='./images/icon-hamburger.svg' /></span>"
        let navigationModal = document.createElement("div");
        let navigationModalContainer = document.createElement("div");

        navigation.addEventListener("click", (event) => {

            if(event.target.tagName !== "IMG") {
                return;
            } else if(event.target.parentElement.className === "hamburger") {
                navigation.innerHTML = "<span class='close'><img src='./images/icon-close.svg' /></span>"

                navigationModal.classList.add("navigation-modal");
                navigationModalContainer.classList.add("navigation-modal-container");
                navigationModalContainer.innerHTML = "<ul className='nav-modal-list'><li>Pricing</li><li>Product</li><li>About Us</li><li>Careers</li><li>Community</li></ul>";
                navigationModal.append(navigationModalContainer);
                document.body.append(navigationModal);
            } else if(event.target.parentElement.className === "close") {
                navigation.innerHTML = "<span class='hamburger'><img src='./images/icon-hamburger.svg' /></span>"
                navigationModal.innerHTML = "";
                navigationModal.classList.remove("navigation-modal");
            }
        })
    }
})