module.exports = {
    projectRepo: 'nadvolod/js-code',
    storybookConfigDir: '.storybook',
    storybookStaticDir: 'public',
    apiKey: process.env.SCREENER_API_KEY,
    //allows for automatic acceptance of components from this branch when merged to/from
    baseBranch: 'main',
    //This will run the components cross platform
    resolutions: [
      {
        deviceName: 'iPhone X'
      },
      {
        deviceName: 'iPhone X',
        deviceOrientation: 'landscape'
      },
      {
        deviceName: 'Galaxy S8',
        deviceOrientation: 'landscape'
      },
    ]
  };