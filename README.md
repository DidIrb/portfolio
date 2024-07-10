## Minimalistic Portfolio 

You do not need to use react to build an overly complicated portfolio, using Angular, React, Next or other frameworks, a simple html css portfolio is all you need.
This portfolio is built using JavaScript HTML, and CSS.
Data is rendered dynamically, but in this case the data is available inside a JSON file.

### What is Available

**html** - `index.html `
Render the data availed, like the users skills, and projects

**db folder** `app.json, data.json `
This files contain the data we are going to render in our markup

**css folder** 
This houses all of our custom css

**javascript** `script.js`
This is where we get the data and render it the html file.
**search engine optimization** `robots.txt` `sitemap.xml`
### How to use

Clone this repository

```
git clone https://github.com/DidIrb/portfolio.git
```

### Skills

Open `db/data.json` and edit the file.

```
"skills": [
    // other skills
    { "name": "CSS" },
]
```

### Updating the Projects

Take a screen shot of the project

- Compress the image as sometimes the image can be large -

  - Search for an image compressor and compress it - for example use -https://imagecompressor.com/ it does an amazing job

- Copy the compressed image into `public/images` folder.

You can create a gif of you project if you want to show an animated view
open `db/data.json` and edit the file like this

```
"projects": [
    // Other Projects
    {
      "name": "your-projects-name",
      "timeline": "Jan 2024 - Dec 2024",
      "description": "A simple explanation of the project",
      "image": "/public/images/your-image.jpg",
      "light": ["HTML", "CSS"],
      "links": [
        {
          "badgeIcon": "/public/icons/web.svg",
          "badgeText": "Website",
          "link": "https://your-project.com"
        },
        {
          "badgeIcon": "/public/icons/github.svg",
          "badgeText": "Open-Source",
          "link": "https://github.com/profile/your-project"
        }
      ]
    }
  ],
```

add as many projects as you want

### Adding more sections

Open `db/app.json` and edit the file to add an additional menu for navigation

```
[
    // other menu items
    {
        "link": "#experience",
        "tooltip": "Experience",
        "icon": "/public/icons/experience.svg",
        "alt": "About me"
    }
],
```

Open the html file and add a new section like this in our case we are adding experience

We are going to add experience section in this example 

```
<section id="skills"></section>
<!-- Your code goes here  --> 
<section id="experience"></section>
<section id="projects"></section>
```

You are going to design the markup and use css to style it than once you are done

open `db/app.json`

add a new object based on the design you have

open `script.js`

Here now you are going to get the json data and append the data into the section you just created

And like that you have added another section, 
<!-- I kind of got tired writing this so you can update it if you want -->

## License

This code is free to use under the MIT license

## Contributions

Contributions are welcome! If you'd like to improve this project, follow these steps:

1. **Fork the repository**: Click the "Fork" button on GitHub to create your own copy.
2. **Clone the forked repository**: Use `git clone` to download it locally.
3. **Make changes**: Edit the code, fix bugs, or add features.
4. **Push changes**: Commit your changes and push them to your fork.
5. **Create a pull request**: Go to the original repository and create a pull request.

Thank you for contributing! 🙌
