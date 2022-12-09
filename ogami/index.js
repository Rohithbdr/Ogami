



fetch("https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=30&language=en&search=type.slug:grocery%3Bstatus:publish")
.then((response) => response.json()
)
.then((jsonData) => {
    console.log(jsonData)
})

console.log(window.scrollY)
