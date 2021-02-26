const axios = require('axios');

const site = 'ML';
const category = 'Geladeira';

switch (site) {
    case 'ML':
        url = 'https://api.mercadolibre.com/sites/MLB/search?q=' + category;
        break;
    case 'Buscape':
        // TODO: Add buscape endpoint
        url =
            'http://sandbox.buscape.com/service/findProductList/564771466d477a4458664d3d/?keyword=' +
            category;
        console.error('Buscape endpoint not found');
        break;
    default:
        console.error('Category not found');
        break;
}

// GET request for remote image in node.js
axios({
    method: 'get',
    url: url,

    // responseType: 'stream',
    // headers: { 'X-Requested-With': 'XMLHttpRequest' },
})
    .then(function (response) {
        console.log(response);
        // console.log(response.data);
        // console.log(response.data['paging']);
        // console.log(response.data['results']);
        // console.log(response.data.results);
        // console.log(Object.keys(response.data.results).length);
        // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'));
    })
    .catch(function (error) {
        console.log(error);
    });
