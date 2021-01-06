var axios = require('axios');
module.exports = async topic => {
var inp = topic.replace(' ','_').toLowerCase(),
data = await axios.get('https://en.wikipedia.org/api/rest_v1/page/summary/'+inp);
return { 
    title:data.data.title,
    desc:data.data.extract,
    lang:data.data.lang,
    timestamp:data.data.timestamp
}
}
