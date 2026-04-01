# cv-application

--

Visit the site at [https://cv-application-beta-nine.vercel.app/](https://cv-application-beta-nine.vercel.app/)

This project has been sent in as a submission for [Project: CV Application](https://www.theodinproject.com/lessons/node-path-react-new-cv-application).

## Introduction

This is a basic React app that takes input from a user and generates a CV once the user clicks "Print CV."
Upon clicking the button, the information entered by the user will be stylized and a printing dialog will open which will allow the user to save their CV as a PDF file.

## Implementation Details

There are 5 React components in this application: `App`, `Education`, `Experience`, `GeneralInfo`, and `Summary`.

`App` controls the state and data used by the application, this information is passed to the remaining components as props.

The remaining components correspond to each CV section that can be seen on the page.

## Caveats

The "Print CV" button works as expected on desktops and laptops, but on mobile the behavior is erratic:

- Chrome for android prints the page as is, failing to hide the form and show the stylized `<dialog>` element where the CV has been formatted nicely.
- Mi Browser fails to open a print dialog, and instead bumps you all the way up the page.
