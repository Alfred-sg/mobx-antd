const  context = require.context('../stores', true, /\.js$/);

function gen(){
  let stores = {};

  context.keys().forEach(path => {
    let key = '';
    let pathItems = path.split('/').slice(1);
    const len = pathItems.length;

    pathItems.forEach((item, index) => {
      if ( index === len - 1 ) {
        item = item.slice(0, item.length - 3);
      };

      if ( !index ){
        key += item;
      } else {
        key += item[0].toLocaleUpperCase() + item.slice(1);
      }
    });

    stores[key] = context(path);
  })

  return stores;
}

export default gen();