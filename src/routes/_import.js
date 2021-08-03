export async function doImportArticles(shop) {

    let url = "https://sakura.eco/api/widget/import_articles/"+shop;
  
    return await fetch( url , {
        mode: 'cors' })
      .then((r) => r.json())
        .then((d) => {
            return d;
          })
  }