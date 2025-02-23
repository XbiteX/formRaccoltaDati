(ongoing)

# create-svelte

Everything you need to build a Svelte library, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

Read more about creating a library [in the docs](https://svelte.dev/docs/kit/packaging).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase or preview app.

## Building

To build your library:

```bash
npm run package
```

To create a production version of your showcase app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Publishing

Go into the `package.json` and give your package the desired name through the `"name"` option. Also consider adding a `"license"` field and point it to a `LICENSE` file which you can create from a template (one popular option is the [MIT license](https://opensource.org/license/mit/)).

To publish your library to [npm](https://www.npmjs.com):

```bash
npm publish
```
















# Front-end Style Guide

## Colors

### Primary

- Marine blue: hsl(213, 96%, 18%)
- Purplish blue: hsl(243, 100%, 62%)
- Pastel blue: hsl(228, 100%, 84%)
- Light blue: hsl(206, 94%, 87%)
- Strawberry red: hsl(354, 84%, 57%)

### Neutral

- Cool gray: hsl(231, 11%, 63%)
- Light gray: hsl(229, 24%, 87%)
- Magnolia: hsl(217, 100%, 97%)
- Alabaster: hsl(231, 100%, 99%)
- White: hsl(0, 0%, 100%)

## Typography

### Body Copy

- Font size (paragraph): 16px

### Font

- Family: [Ubuntu](https://fonts.google.com/specimen/Ubuntu)
- Weights: 400, 500, 700






# Frontend Mentor - Multi-step form solution / school project

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). 
And a school project to practice using svelte its bindings

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with svelte](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

![](![image](https://github.com/user-attachments/assets/e4f2b36c-ca00-489a-ae48-743b7f723525)
)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- GitHub repository: [github](https://github.com/XbiteX/formRaccoltaDati)
- Live Site URL: [vercel](https://form-raccolta-dati.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Tailwind
- Mobile-first workflow
- [Svelte](https://svelte.dev/) - Svelte framework
- [Flowbite](https://flowbite-svelte.com/) - Flowbite with svelte
- [Font awsome icons](https://fontawesome.com/) - For styles

### What I learned

I've learned to install dependencies such as tailwind or flowbite on a svelte project.
I've refined my knowledge learning more aboout tailwind classes, flowbite components, how the _+layout.svelte+ works, the "svelte logic", svelte props, how to import a font, how to install dependencies and also about SVG format (and its fields).

To see how you can add code snippets, see below:

```html
<h1>Some code I'm proud of</h1>
```
```css
    @font-face {
        font-family: "Ubuntu-Regular";
        src: url("assets/fonts/Ubuntu-Regular.ttf") format("truetype");
        weight: 400;
    }
```

```svelte
   <div id="steps" class="steps flex flex-col gap-4 w-5/6 items-center">
        {#each arrayOggetti as oggetto, index}
            <div class="flex gap-4 w-5/6" onclick={() => changeStep(index)}>
                <i class="fa-{formState.step == index ? 'solid' : 'thin'} fa-circle-{index + 1} stepNumber" id="number{index + 1}" style="color: hsl(0, 0%, 100%);"></i>
                <!-- if the object has the same index of the step number than the icon will be thick (solid) -->
                <div>
                    <div style="font-family: Ubuntu-Medium; color: hsl(0, 0%, 100%);">STEP {index + 1}</div>
                    <div style="font-family: Ubuntu-Bold; color: hsl(0, 0%, 100%);">{oggetto.stepDescription}</div>
                </div>
            </div>
        {/each}
    </div>
```


### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
















#problemi incontrati

```svelte
<script>
    import colors from "$lib/utils.json";
</script>
<style>
    p{
        font-family: "Ubuntu-Regular";
        color: {colors.eutral.Cool_gray};
        font-size:  1.2rem;
    }
</style>
```
i colori importati dal file json non erano applicabili al tag style, quindi ho dovuto scrivere manualmente i codici dei colori
