// Import dotenv to load environment variables
import 'dotenv/config';

// Get the access key from environment variables
const accessKey = process.env.ACCESS_KEY;

// Set the value of the access_key input field
document.getElementById('access_key').value = accessKey;
