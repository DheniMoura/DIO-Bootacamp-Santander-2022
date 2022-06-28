const BASE_URL = 'https://thatcopy.pw/catapi/rest/'

// CARREGAR OS GATINHOS; arrow function
const getCats = async () => {
  try {
    const data = await fetch(BASE_URL)
    const json = await data.json() //converte para .json
    return json.webpurl
  } catch (e) {
    console.log(e.message)
  }
}

const loadImg = async () => {
  const img = document.getElementsByTagName('img')[0]
  img.src = await getCats()
}

loadImg()

const btn = document.getElementById('change-cat')
btn.addEventListener('clik', loadImg)
