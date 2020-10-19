# Note Taker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description

The scope of this project was to build an application that allows users to write, save, and delete notes. The application uses an express backend and save and retrieve note data from a JSON file.

## Table of Contents

* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [Deployment](#deployment)
* [Credits](#credits)
* [License](#license)
* [Questions](#questions)

## Technologies

- JavaScript
- NodeJs
- JQuery
- HTML
- CSS
- Express

## Installation

Install express by using `npm install` command.

The dependencies are, [express](https://expressjs.com/) for running the webserver.

## Usage

* Application has three API routes:
  * Route for user to add new note]
  * Route for user to delete note
  * Route for user to retrive all notes
* Application has two primary static routes:
  * A catchall address that forwards to the index
    * Is a landing page
    * Has option to navigate to notes application
  * Notes application route
    * View all notes
    * Delete individual notes
    * add new note
* Includes static routing for the two primary static routes

## Deployment

Application is deployed to heroku

```bash
  $ git commit -m "{UPDATED MESSAGE}"
  $ git push origin master
  $ git push heroku master
```

This will deploy to [heroku](https://morning-tor-10188.herokuapp.com/) 

## Credits

**[Anjali Pant](https://github.com/Anjali9293)**

## License 

```
Copyright 2020 <Anjali Pant>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

## Questions

For more questions about this project, click the link below to view my Github repo:

- [GitHub Profile](https://github.com/Anjali9293)

You can also reach me directly at: pantanjali7@gmail.com