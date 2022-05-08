

// APIkey = d7093dcf-3639-48da-93b7-24ba26963235
// Link to Recreation.gov API: https://ridb.recreation.gov/docs


// QUERY CHAIN
// Rec Area Addresses by City -> Rec Area by ID -> Facilities/Activities/Events/ Etc.

const apiController = {};

// get request structure: https://ridb.recreation.gov/api/v1/recareaaddresses?query=slos%20angele&limit=50&offset=0
    // Headers:
        // accept: application/json
        // apikey: d7093dcf-3639-48da-93b7-24ba26963235

apiController.getByCity = (req, res, next) => {
  const place = req.body.location
  //function to manipulate place into a url readable string

  fetch()
}