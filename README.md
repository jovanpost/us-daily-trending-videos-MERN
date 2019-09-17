# us-daily-trending-videos-MERN

Full-stack (MERN Stack) project made with Node.js, Express and MongoDB for the back-end and React for the front-end of the app.

The back-end gets the top 10 trending videos in the United States using cron everyday at midnight, and it puts them as a separate document in the MongoDB database. The data for each day can be acsessed directly by url (_id in the format - yyyymmdd), and then can be used in a front-end app.

The front-end is made with React and it uses the data from the database. It starts with the top 10 trending videos in the US for the current date in the New York timezone (GMT-4), but the user can select another date (starting September 10th 2019, when the app started working), and the app will give the top trending videos for that date.

The app is live at - https://us-daily-trending-videos.netlify.com/
