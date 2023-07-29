## PC Builder

[Live Link](https://pc-builder-one.vercel.app)

## Technology Used In Builder Website
- Next.js
- Next Auth
- Redux 
- Tailwind CSS
- daisy Ui
- React toastify


## About PC Builder Website
Pc builder website is build for  all those user who want to buy there pc component.In this website all necessary pc component are available from which user can choose there necessary pc component and build their dream pc. In this website we have a home page where we have a navbar a banner a hero section 6 random pc component and 7 different category. Navbar has a button called PC BUILDER by clicking on the button user can go to the pc builder page and can select all necessary component to build there PC. But Pc builder page is a protected route so user must need to login to go to that page. Here I used github based authentication system by using next-auth package. Coming to that home page again  by clicking on the feature card view details button we can go to the description page of that individual component. Here we can see all necessary information about that product. If we click any of the category which is placed below the featured products we will move to that particular category page where we can see all products of that category. we can go to the individual category page from the navbar as well. In navbar we have a dropdown where each category are clickable and takes us to that category page. In category page by clicking on the view details button we can also go to the product details page. After login we can build our pc from builder page . In builder page we have 6 category and we need to select one product from each category to complete our building process. After select 6 product we can see the button below (button will remain disable until we select 6 product.) and if we click on that button we will get a success alert.


## How To Run
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). To run this project on your computer first clone the repo or manually download the repo. Create a .env file on the root of the project. where your should provide 4 variables as below:

```
NEXTAUTH_SECRET=
NEXTAUTH_URL=
GITHUB_ID=
GITHUB_SECRET=
```
After that run this command 'npm install' to install necessary dependency and then run the command 'npm run dev' to run the project in development mood. To see the the project on production mood click on the Live link and it will show you the project.

