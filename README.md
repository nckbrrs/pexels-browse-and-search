A simple, responsive, single-page NextJS frontend and server to let users browse photos from [Pexels](https://www.pexels.com) with search and pagination.

![Screenshot 2023-03-04 at 4 36 29 PM](https://user-images.githubusercontent.com/22487838/222929685-8e6adfb8-ba35-4d19-89ee-9843f519ab01.png)

You can view this web app on Vercel at https://pexels-project.vercel.app.

It's a NextJS application, so it also uses some serverless functions that wrap the [Pexels API](https://www.pexels.com/api/).


# File Structure

A summary of the file/folder structure for this app is as follows.<br/>
_Note: if you are familiar with React/Next applications, this will be trivial_
* `components` - individual components / building blocks that are used throughtout the app
* `pages` - React components that are associated with a specific route
  * `api/` - files in this folder are treated as API endpoints instead of a `page`
  * `index.tsx` - the "home screen" of the app that can be found at the path `/`
  * `404.tsx` - users will see this screen if/when they try to navigate to any route not specific by a `page`
  * `_app.tsx` - A special file used by NextJS to initialize pages. You can read more about it [here](https://nextjs.org/docs/advanced-features/custom-app)
  * `_document.tsx` - A special file used by NextJS to update the `html` and `body` tags used to render a `page`. You can read more about it [here](https://nextjs.org/docs/advanced-features/custom-document)
* `public` - static files, like images and other assets
* `styles` - global styling
* `types` - folder used to hold custom `type`s and declare modules used throughout the app
* other files are for miscellaneous project configuration

# Usage

Download the repository, navigate to the folder's root directory, and run `npm run blastoff` to install dependencies and run the app locally.

Visit `localhost:3000` in your browser to view the app.

Note: Both the frontend and the api endpoints will be running locally, but the frontend will actually be pointed to the deployed version of this app's API. Otherwise, I would have to share my Pexels API token with you (and I don't want to do that).

If you'd like to use your own Pexels API token and run against the local code in `api/`, simply:
* change the value of `runAgainstLocalApi` in `index.tsx` to `true`
* create a new file in the root directory of the app called `.env`, and populate it with one line that looks like `PEXELS_API_KEY=[YOUR_API_KEY_HERE]`
