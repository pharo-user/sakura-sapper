export async function doImportArticles(shop) {

    let url = "https://sakura.eco/api/shopify/import/"+shop;
  
    return await fetch( url , {
        mode: 'cors' })
      .then((r) => r.json())
        .then((d) => {
            return d;
          })
  }