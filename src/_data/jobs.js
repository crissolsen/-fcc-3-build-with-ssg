const axios = require("axios")

module.exports = async function() {
  try {
    const response = await axios.get("http://api.dataatwork.org/v1/jobs?limit=50");
    return response.data
  } catch (error) {
    console.error(error);
  }
}