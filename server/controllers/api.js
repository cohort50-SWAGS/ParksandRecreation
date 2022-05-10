// const axios = require('axios');
const axios = require('axios').default;
// import fetch from 'node-fetch';

// Link to Recreation.gov API: https://ridb.recreation.gov/docs
// You will need register an account to enable the apikey
// create an account and go to your profile to enable the apikey
// use apikey in header fro fetch requests


// QUERY CHAIN
// Rec Area Addresses by City -> Rec Area by ID -> Facilities/Activities/Events/ Etc.

const apiController = {};

// get request structure: https://ridb.recreation.gov/api/v1/recareaaddresses?query=los%20angeles&limit=50&offset=0
    // Headers:
        // accept: application/json
        // apikey: d7093dcf-3639-48da-93b7-24ba26963235

apiController.getByLocation = (req, res, next) => {
  const place = req.body.location // EX -> Los Angeles -> los%20angeles
  //function to manipulate place into a url readable string
  const encodedPlace = encodeURIComponent((place).toLowerCase())

  axios.get(`https://ridb.recreation.gov/api/v1/recareaaddresses?query=${encodedPlace}&limit=30`, {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      "apikey" : 'apkikeyhere'
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

  const idArray = res.locals.idArray
  console.log("idArray:", idArray)
  //const recArray = []; 

  const recArray = await Promise.all(idArray.map( async id => {
    const result = await axios.get(`https://ridb.recreation.gov/api/v1/recareas/${id}`, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        "apikey" : 'apikeyhere'
      }
    })
    // .then (result => // console.log("result.data:", result.data)
      // const recArray = [];
      // result.data.forEach(obj => recArray.push(obj.data))
      // USED TO FILER REC AREA INFORMATION
      return {
        recAreaName: result.data.RecAreaName,
        recAreaDescription: result.data.RecAreaDescription,
        recAreaFee: result.data.RecAreaFeeDescription,
        recAreaDirections: result.data.RecAreaDirections
      }
      // console.log("recObject:", recObject)
    
  }))
  res.locals.recAreas = recArray
  // next();
  console.log("recArray:", recArray);
  next()
}

module.exports = apiController;