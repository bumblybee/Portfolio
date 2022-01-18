const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")
const menuNav = document.querySelector(".menu-nav")
const menuBg = document.querySelector(".menu-bg")
const menuItems = document.querySelectorAll(".menu-item")
const phone = document.querySelector(".phone")

let showMenu = false

window.addEventListener("load", setImageWidth)
hamburger.addEventListener("click", toggleMenu)
phone.addEventListener("click", copyPhoneNumber)

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("close")
    menu.classList.add("show")
    menuNav.classList.add("show")
    menuBg.classList.add("show")

    menuItems.forEach((item) => item.classList.add("show"))

    showMenu = true
  } else {
    hamburger.classList.remove("close")
    menu.classList.remove("show")
    menuNav.classList.remove("show")
    menuBg.classList.remove("show")

    menuItems.forEach((item) => item.classList.remove("show"))

    showMenu = false
  }
}

function copyPhoneNumber() {
  const phoneNum = phone.textContent.split(":")[1].trim()
  navigator.permissions.query({ name: "clipboard-write" }).then((res) => {
    if (res.state == "granted" || res.state == "prompt") {
      updateClipboard(phoneNum)
    }
  })
}

function updateClipboard(clip) {
  navigator.clipboard.writeText(clip).then(() => {
    showCopiedMessage("success")
  }),
    () => {
      showCopiedMessage("fail")
    }
}

function showCopiedMessage(state) {
  let msg

  if (state === "success") {
    msg = "Phone number copied"
  } else {
    msg = "Unable to copy phone number"
  }

  phone.textContent = msg

  setTimeout(() => {
    const span = document.createElement("span")
    span.textContent = "Phone: "
    span.className = "text-tertiary"
    phone.textContent = "(319) 239-3607"
    phone.prepend(span)
  }, 2000)
}

function setImageWidth() {
  const bg = document.querySelector("body#bg")
  bg.style.backgroundImage =
    "-webkit-image-set(url('https://ik.imagekit.io/dzs7huqkhng/codebkgrd_ODy65dcT9.webp?tr=w-2000') 1x, url('https://ik.imagekit.io/dzs7huqkhng/codebkgrd_ODy65dcT9.webp?tr=w-1024') 2x, url('https://ik.imagekit.io/dzs7huqkhng/codebkgrd_ODy65dcT9.webp?tr=w-600') 3x)"
}
