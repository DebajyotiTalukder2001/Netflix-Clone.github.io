  // Get modal element
  const modal = document.getElementById('default-modal');
  // Get accept button
  const acceptBtn = document.getElementById('accept-btn');
  // Get decline button
  const declineBtn = document.getElementById('decline-btn');

  const dismissBtn = document.getElementById('dismiss-btn');

  // Get body element
  const body = document.body;

  // Function to show modal
  function showModal() {
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    // Add event listeners to buttons
    acceptBtn.addEventListener('click', closeModal);
    declineBtn.addEventListener('click', closeModal);
    dismissBtn.addEventListener('click', closeModal);

   // Make body unscrollable
   body.style.overflow = 'hidden';
  }

  // Function to close modal
  function closeModal() {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    // Remove event listeners from buttons
    acceptBtn.removeEventListener('click', closeModal);
    declineBtn.removeEventListener('click', closeModal);
    dismissBtn.addEventListener('click', closeModal);

    // Make body scrollable
    body.style.overflow = 'auto';
  }

  // Show modal on page load
  window.addEventListener('load', showModal);






  let accordian = document.getElementsByClassName("FAQ__title");

  for (let i = 0; i < accordian.length; i++) {
    accordian[i].addEventListener("click", function () {
      // Close all FAQ items except the clicked one
      closeAllFAQExcept(this);
  
      // Toggle icon
      let icon = this.querySelector('.fal');
      icon.classList.toggle("fa-plus");
      icon.classList.toggle("fa-times");
  
      // Toggle visibility of clicked FAQ item
      let content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
  
  function closeAllFAQExcept(clickedItem) {
    let accordianItems = document.getElementsByClassName("FAQ__accordian");
    for (let i = 0; i < accordianItems.length; i++) {
      let content = accordianItems[i].getElementsByClassName("FAQ__visible")[0];
      let icon = accordianItems[i].getElementsByClassName("fal")[0];
      if (accordianItems[i] !== clickedItem.parentNode) {
        content.style.maxHeight = null;
        icon.classList.remove("fa-times");
        icon.classList.add("fa-plus");
      }
    }
  }

  
  // Get all the <p> elements inside the footer
const paragraphs = document.querySelectorAll('footer p');

// Function to handle click on <p> elements
const handleClick = (event) => {
  // Get the text content of the clicked <p> element
  const linkText = event.target.textContent.trim().toLowerCase();
  
  // Define the mapping of link text to URLs
  const linkMap = {
    'faq': 'https://help.netflix.com/en/node/412',
    'investor relations': 'https://ir.netflix.net/ir-overview/profile/default.aspx',
    'privacy': 'https://help.netflix.com/legal/privacy',
    'speed test': 'https://fast.com/',
    'help centre': 'https://help.netflix.com/en/',
    'jobs': 'https://jobs.netflix.com/',
    'cookie preferences': 'https://www.netflix.com/in/',
    'legal notices': 'https://help.netflix.com/legal/notices',
    'account': 'https://www.netflix.com/in/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount',
    'ways to watch': 'https://devices.netflix.com/en/',
    'corporate information': 'https://help.netflix.com/legal/corpinfo',
    'only on netflix': 'https://www.netflix.com/in/browse/genre/839338',
    'media centre': 'https://media.netflix.com/en/',
    'terms of use': 'https://help.netflix.com/legal/termsofuse',
    'contact us': 'https://help.netflix.com/en/contactus'
  };
  
  // Check if the clicked <p> text corresponds to a link in the mapping
  if (linkMap.hasOwnProperty(linkText)) {
    // Open the corresponding URL in a new tab
    window.open(linkMap[linkText], '_blank');
  }
};

// Attach click event listeners to all <p> elements
paragraphs.forEach(paragraph => {
  paragraph.addEventListener('click', handleClick);
});



