export async function doLogin(base_url, email, password) {

  let url = base_url + "/api/user/login";
  let data = { 'email' : email, 'password' : password };

  return await fetch( url , {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
       // 'Accept': 'application/json'

      },
      body: JSON.stringify(data)
    })
    .then((r) => r.json())
      .then((d) => {
          return d;
        })
}

export async function doGetArticles(id) {

  let url = "https://sakura.eco/api/widget/articles/"+id;

  return await fetch( url , {
      mode: 'cors' })
    .then((r) => r.json())
      .then((d) => {
          return d;
        })
}
