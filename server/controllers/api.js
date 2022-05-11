// const axios = require('axios');
const axios = require('axios').default;
// import fetch from 'node-fetch';

// Link to Recreation.gov API: https://ridb.recreation.gov/docs
// You will need register an account to enable the apikey
// create an account and go to your profile to enable the apikey
// use apikey in header fro fetch requests


// QUERY CHAIN
// Rec Area Addresses by City -> Rec Area by ID -> Facilities/Activities/Events/ Etc.

// get request structure: https://ridb.recreation.gov/api/v1/recareaaddresses?query=los%20angeles&limit=50&offset=0
    // Headers:
        // accept: application/json
        // apikey: d7093dcf-3639-48da-93b7-24ba26963235
// const apiKey = 'a83c6bff-4a84-4a8e-8d57-2bbfdf432598';

const apiController = {};


apiController.getCityName = async (req, res, next) => {
  const { latitude, longitude } = req.body;

  const result = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=785a1070f1454d9abdb957127825aac6`);
    try {
      res.locals.city = result.data.features[0].properties.city;
      return next();
    }
    catch {
      return next({err});
    }
};

apiController.getInput = (req, res, next) => {
  res.locals.city = req.body.location;
  return next();
}

apiController.getByLocation = (req, res, next) => {
  console.log("in getByLocation:", res.locals.city);
  const place = res.locals.city // EX -> Los Angeles -> los%20angeles
  //function to manipulate place into a url readable string

  const encodedPlace = encodeURIComponent((place).toLowerCase())

  axios.get(`https://ridb.recreation.gov/api/v1/recareaaddresses?query=${encodedPlace}&limit=30`, {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      "apikey" : 'a83c6bff-4a84-4a8e-8d57-2bbfdf432598'
    }
  })
  .then (result => {
  //declare newArray
    const newArray = []
    //iterate over array res.data.RECDATA for each object in array 
    //console.log(res.data.RECDATA)
    result.data.RECDATA.forEach( obj => {
       //push to object.RecAreaId to newArray
      newArray.push(obj.RecAreaID)
      //console.log(obj.RecAreaID)
    })
    //console.log(newArray)
    //set res.locals.idArray to newArray  
    res.locals.idArray = newArray
    return next()
  })
  .catch (err => {
    return next({err})
  })
}

// GET MIDDLEWARE TO GRAB REC AREA BY ID

apiController.getRecAreaByID = async (req, res, next) => {
  const trim = (string) => string.split('.').slice(0, 2).join('.') + '.';

  const idArray = res.locals.idArray;
  console.log("idArray:", idArray);

  const recArray = await Promise.all(idArray.map( async id => {
    const result = await axios.get(`https://ridb.recreation.gov/api/v1/recareas/${id}`, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        "apikey" : 'a83c6bff-4a84-4a8e-8d57-2bbfdf432598'
      }
    })
    // console.log(result.data)
    return {
      recAreaName: result.data.RecAreaName,
      recAreaDescription: trim(result.data.RecAreaDescription),
      recAreaFee: result.data.RecAreaFeeDescription,
      recAreaDirections: result.data.RecAreaDirections, 
      recAreaPhone : result.data.RecAreaPhone, 
      recAreaEmail : result.data.RecAreaEmail,
      keywords : result.data.Keywords
    }
  }))
  res.locals.recAreas = recArray
  // next();
  // console.log("recArray:", recArray);
  return next()
}


module.exports = apiController;