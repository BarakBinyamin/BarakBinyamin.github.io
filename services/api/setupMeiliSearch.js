const { MeiliSearch } = require('meilisearch');

// Fetch the MeiliSearch URL and master key from environment variables
const MEILI_URL        = process.env.MEILI_URL || 'http://meilisearch:7700'; // Default to local URL if not set
const MEILI_MASTER_KEY = process.env.MEILI_MASTER_KEY; // This should be set in the .env file

if (!MEILI_MASTER_KEY) {
  console.error('Error: MEILI_MASTER_KEY is missing. Please set it in the .env file.');
  process.exit(1); // Exit the process if the master key is missing
}

// Initialize MeiliSearch client
const client = new MeiliSearch({
  host  : MEILI_URL,
  apiKey: MEILI_MASTER_KEY, // Use the master key from the environment
});

// Define the desired settings for the 'blogs' index
const desiredSettings = {
  searchableAttributes: ['name', 'tags', 'content'],
  filterableAttributes: ['tags', 'id'],
  sortableAttributes  : ['date'],
};

// Create or check the 'blogs' index and apply settings only if necessary
async function checkAndSetupMeiliSearch() {
  try {
    // Check if the 'blogs' index already exists
    const indexList = await client.getIndexes();
    let blogIndex = false //indexList.find(index => index.uid === 'blogs');

    if (blogIndex) {
      console.log('Index "blogs" already exists.');

      // Retrieve the current settings of the "blogs" index
      const currentSettings = await blogIndex.getSettings();
      console.log('Current index settings:', currentSettings);

      // Compare current settings with desired settings
      const settingsNeedUpdate =
        JSON.stringify(currentSettings.searchableAttributes) !== JSON.stringify(desiredSettings.searchableAttributes) ||
        JSON.stringify(currentSettings.filterableAttributes) !== JSON.stringify(desiredSettings.filterableAttributes) ||
        JSON.stringify(currentSettings.sortableAttributes) !== JSON.stringify(desiredSettings.sortableAttributes);

      if (settingsNeedUpdate) {
        console.log('Updating index settings...');
        // If the settings don't match, update the settings
        await blogIndex.updateSettings(desiredSettings);
        console.log('Settings updated successfully.');
      } else {
        console.log('Index settings are already correct. No update needed.');
      }

    } else {
      console.log('Index "blogs" does not exist. Creating it...');

      // Create the 'blogs' index with primary key 'id'
      let res   = await client.createIndex('blogs', { primaryKey: 'id' })
      blogIndex = 
      console.log('Index created successfully.');

      // Apply the desired settings to the new index
      client.index('blogs').updateSettings(desiredSettings);
      console.log('Settings applied successfully.');
    }
  } catch (error) {
    console.error('Error during setup or check:', error);
  }
}

// Run the check and setup function
checkAndSetupMeiliSearch();
