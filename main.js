window.onload = () => {
    const menuButton = document.getElementById("menuButton"),
      nav        = document.getElementById("nav");

      menuButton.addEventListener('click', () => {
          console.log('Clicked!');
          if (!nav.className.includes('show')) {
            nav.className = ' show'
          } else {
            nav.className = ''
          }
      })
    }

