export async function articlesCount(shop) {

    let url = "https://sakura.eco/api/shopify/widget/"+shop;
  
    return await fetch( url , {
        mode: 'cors' })
      .then((r) => r.json())
        .then((d) => {
            return d;
          })
}

export async function articlesGet(first, limit) {

    let url = "https://sakura.eco/api/shopify/widget/"+shop;
  
    return await fetch( url , {
        mode: 'cors' })
      .then((r) => r.json())
        .then((d) => {
            return d;
          })
}