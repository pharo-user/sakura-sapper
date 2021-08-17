export async function doImportArticles(base_url, shop, company) {

  //console.log('doImportArticles start');
  let data =   { 'shop_url' : shop, 'company_id' : company };
  let url = base_url + "/api/shopify/import";
  
  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => { //console.log('doImportArticles completed');
  return data });
}