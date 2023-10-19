const TOKEN = "nakzp5ez45x64zd4g9hseopk9picabjeonepyabf";
const URL = "https://sheetdb.io/api/v1/dqu2afl50gp3l";

fetch(URL, {
method: "GET",
headers: {Authorization: `Bearer ${TOKEN}`},
})
.then(res => res.json())
.then(data => {
    console.log(data[1]["name"])
})
// .then(data => sessionStorage.setItem("recipes", JSON.stringify(data)));
.catch((error) => {
    error;
})