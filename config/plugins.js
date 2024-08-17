module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME',"die4hrpal"),
        api_key: env('CLOUDINARY_KEY','521246172727837'),
        api_secret: env('CLOUDINARY_SECRET','wGhwpngy0vADoBFXlBJ8EygszyE'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});
