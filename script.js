document.addEventListener("DOMContentLoaded", () => {
  // Menu item hover effect
  const menuItems = document.querySelectorAll(".menu-item")
  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)"
    })

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  // Smooth scrolling for navigation
  const navLinks = document.querySelectorAll("nav a")
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href")

      if (targetId.startsWith("#")) {
        e.preventDefault()
        const targetElement = document.querySelector(targetId)

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: "smooth",
          })
        }
      }
    })
  })

  // CTA buttons
  const ctaButtons = document.querySelectorAll(".cta-button")
  if (ctaButtons.length > 0) {
    ctaButtons[0].addEventListener("click", () => {
      alert("Table booking feature coming soon!")
    })

    if (ctaButtons.length > 1) {
      ctaButtons[1].addEventListener("click", () => {
        const menuSection = document.getElementById("menu")
        if (menuSection) {
          window.scrollTo({
            top: menuSection.offsetTop - 100,
            behavior: "smooth",
          })
        }
      })
    }
  }
})
