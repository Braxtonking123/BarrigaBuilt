document.querySelectorAll('.FAQ-boxes-top').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;

        // Toggle the display of the answer
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'flex';
        } else {
            answer.style.display = 'none';
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    fetch("content.json")
      .then(response => response.json())
      .then(data => populatePage(data))
      .catch(error => console.error("Error loading content:", error));
  });
  
  function populatePage(data) {
    populateNavbar(data.navbar);
    populateHeroSection(data.heroSection);
    populateServicesSection(data.servicesSection);
    populateContactSection(data.contactSection);
    populateFooter(data.footer);
  }
  
  function populateNavbar(navbar) {
    document.getElementById("nav-logo").src = navbar.logo.src;
    document.getElementById("nav-logo").alt = navbar.logo.alt;
  
    const navButtons = document.getElementById("buttons");
    navbar.buttons.forEach(button => {
      const div = document.createElement("div");
      div.className = "nav-buttons";
      div.innerHTML = `<a class="black-text-anchors" href="${button.href}">${button.name}</a>`;
      navButtons.appendChild(div);
    });
  }
  
  function populateHeroSection(heroSection) {
    document.getElementById("hero-title").innerText = heroSection.title;
    document.getElementById("hero-subtitle").innerText = heroSection.subtitle;
    document.getElementById("hero-bg").style.backgroundImage = `url(${heroSection.backgroundImage})`;
    document.getElementById("hero-description").innerText = heroSection.description;
  }
  
  function populateServicesSection(servicesSection) {
    document.getElementById("services-header").innerText = servicesSection.header;
    const servicesContainer = document.getElementById("services-main-container");
    servicesSection.services.forEach(service => {
      const serviceDiv = document.createElement("div");
      serviceDiv.className = "service-containers";
      serviceDiv.innerHTML = `
        <div class="service-img-containers"><img class="service-imgs" src="${service.image}" alt="${service.title}"></div>
        <div class="service-header-containers"><h1>${service.title}</h1></div>
        <div class="service-paragraph-containers"><p>${service.description}</p></div>
      `;
      servicesContainer.appendChild(serviceDiv);
    });
  }
  
  function populateContactSection(contactSection) {
    document.getElementById("contact-header").innerText = contactSection.header;
    document.getElementById("contact-phone").innerText = contactSection.phone;
    document.getElementById("contact-email").innerText = contactSection.email;
    document.getElementById("contact-address").innerText = contactSection.address;
  }
  
  function populateFooter(footer) {
    document.getElementById("trademark").innerText = footer.trademark;
  
    const socialLinks = document.getElementById("footer-social-links");
    footer.socialLinks.forEach(link => {
      const anchor = document.createElement("a");
      anchor.href = link.href;
      anchor.innerText = link.platform;
      socialLinks.appendChild(anchor);
    });
  
    document.getElementById("footer-hours-weekdays").innerText = footer.hours.weekdays;
    document.getElementById("footer-hours-weekend").innerText = footer.hours.weekend;
    document.getElementById("map-location").src = footer.mapEmbedUrl;
  }
  