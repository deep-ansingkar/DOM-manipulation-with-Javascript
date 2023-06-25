// 1  Done
document.querySelector(".side-bar .crayons-subtitle-2").innerHTML = "iNeuron"
document.querySelector(".side-bar p").innerHTML = "i write code"

// 2  Done
const lists = document.querySelectorAll(".as-imagegrid-item")
const resultArray = []
lists.forEach((listItem)=>{
    const result = listItem.innerText.replace("Support", "")

    console.log(result)
})

// 3  Done
const faq = document.querySelector(".accordion-homepage")

const section = document.createElement("section")
section.classList.add("parent")

const h3 = document.createElement("h3")
h3.innerText = "My New FAQ"

faq.appendChild(section)
section.appendChild(h3)

// 4  Done
document.querySelector(".customer-support").firstElementChild.innerText = "+91 6565656565"

// 5  Done
document.querySelector('.feature-column-carousel__item .feature-column-carousel__content a').innerText = "Checkout"

// 6  Done
const search = document.querySelector(".searchinput___zXLAR")
search.addEventListener( "mouseover" ,()=> search.style.backgroundColor = "Red"  )

// 7  Done 
document.querySelector('#hp-search-input').value = "CSS selector"
document.querySelector('.button.action.has-icon.search-button').click()

// 8  Done
const languages = document.querySelectorAll('#SIvCob a')
languages.forEach( (a, i)=> i%2==0 && a.remove())

// 9  Done
document.querySelector(".display-heading-1").style.fontFamily = "monospace"
document.querySelector(".display-heading-1").style.backgroundColor = "orange"
document.querySelector(".display-heading-1").style.color = "red"

// 10  
const btn = document.querySelector(".btn-cta-big .login-btn-text")
btn.addEventListener("mouseover", () => btn.style.backgroundColor = "red" )

// 11 Web-site has been Changed Cannot be done

// 12  Done
document.querySelector('.js-repos-container .btn').style.backgroundColor = "blue"

// 13  Done
document.querySelector('.fl-heading-text').innerHTML = "JS BOOTCAMP"

// 14  Done
document.querySelector('.HotDealsAll__Heading__2fIbe').style.fontSize = "80px"

// 15  Done
document.querySelector('.ps-title').style.textAlign = "right"

// 16  Done
document.querySelector('.section-title_title__VEDfK').innerHTML = "Start With Scratch"

// 17  Done
document.querySelector('.buy').innerHTML = new Date()

// 18  Done (Web-site has been Changed)
document.querySelector('.p-f03v2__footer').style.backgroundColor = "Orange"

// 19  Done
document.querySelector('.logo').src

// 20  Done
document.querySelector('.desc').style.color = "Orange"



