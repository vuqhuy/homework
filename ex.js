// ex1
const getSum = (first, second) => {
  let sum = 0
  first = document.getElementById('num1')
  second = document.getElementById('second')
  sum = parseInt(first.value) + parseInt(second.value)
  document.getElementById('result').innerHTML = 'Tổng = ' + sum
}

// ex2
const handleOnMouseClick = event => {
  const currentEle = event.target
  if (currentEle.style.background == 'red') {
    currentEle.style.background = 'green'
  } else {
    currentEle.style.background = 'red'
  }
}

// ex3
const changeOption = () => {
  const option = document.getElementById("listOption").value
  const laptop = document.getElementById("showOptionLaptop")
  const phone = document.getElementById("showOptionPhone")
  const tivi = document.getElementById("showOptionTV")

  if (option == "laptop") {
    laptop.removeAttribute("class")
    phone.setAttribute("class", "general")
    tivi.setAttribute("class", "general")
  } else if (option == "phone") {
    phone.removeAttribute("class")
    laptop.setAttribute("class", "general")
    tivi.setAttribute("class", "general")
  } else {
    tivi.removeAttribute("class")
    laptop.setAttribute("class", "general")
    phone.setAttribute("class", "general")
  }
}

// ex4
const menu = [{
    name: 'Home',
    children: [{
        name: 'Home 1',
        children: [{
            name: 'Home 1.1',
            children: [{
              name: 'Home 1.1.1'
            }]
          },
          {
            name: 'Home 1.2',
            children: [{
              name: 'Home 1.2.1'
            }]
          }
        ]
      },
      {
        name: 'Home 2',
        children: [{
          name: 'Home 2.1'
        }]
      },
      {
        name: 'Home 3',
        children: [{
          name: 'Home 3.1'
        }]
      }
    ]
  },
  {
    name: 'About',
    children: [{
        name: 'About 1',
        children: [{
            name: 'About 1.1',
            children: [{
              name: 'About 1.1.1'
            }]
          },
          {
            name: 'About 1.2',
            children: [{
              name: 'About 1.2.1',
              children: [{
                  name: 'About 1.2.1.1'
                },
                {
                  name: 'About 1.2.1.2'
                },
                {
                  name: 'About 1.2.1.3'
                }
              ]
            }]
          }
        ]
      },
      {
        name: 'Home 2',
        children: [{
          name: 'Home 2.1'
        }]
      }
    ]
  }
]

const showMenu = () => {
  const toggler = document.getElementsByClassName("father")
  for (let i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
      this.parentElement.querySelector(".child").classList.toggle("active")
    })
  }
}