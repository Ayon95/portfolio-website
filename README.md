# Portfolio Website

My personal portfolio website built with Gatsby, styled components, and Framer Motion.

Link to the website: https://mushfiq-rahman.netlify.app/

## Lessons learned

- How to use Gatsby to create a static website
- How to make GraphQL queries through Gatsby for images and files
- How to use styled components with Gatsby
- How to use Framer Motion to add animations
- How to use react-intersection-observer and Framer Motion together to trigger animations when an element comes into view or goes out of view
- How to create an accessible, keyboard-friendly hamburger navigation menu
- How to highlight a navigation link when the user scrolls to the associated section
- How to use EmailJS to set up an email-receiving service

## Tools and technologies used

- Gatsby
- styled components
- EmailJS
- Framer Motion
- Formik + Yup

## Deployment

Deployed with [netlify](https://netlify.com/).

## Get started

Open up your command line and clone this repo:

```bash
# Clone this repository
$ git clone https://github.com/Ayon95/portfolio-website

# Go into the repository
$ cd portfolio-website

# Remove current origin repository
$ git remote remove origin

# If you want, you can add a new remote repository
$ git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git
```

Go to [EmailJS website](https://www.emailjs.com/) and create an account. Then, create an email template. In the project root directory, create a `.env.development` file, and a `.env.production` file. Add the following environment variables with your own values:

```dosini
GATSBY_EMAILJS_SERVICE_ID='your-emailjs-service-id'
GATSBY_EMAILJS_TEMPLATE_ID='your-emailks-template-id'
GATSBY_EMAILJS_USER_ID='your-emailjs-user-id'
```

Then you can install the project dependencies using npm:

```bash
# Install dependencies
$ npm install

# Start development server
$ npm start
```

This will start a development server and open the app in your default browser.

## Creating a production build

In your command line, run the following command:

```bash
# create a production build
$ npm run build
```

This will generate the final build and all the build files will be placed inside the `public` folder. You can use this folder to deploy the app to [netlify](https://netlify.com/).
