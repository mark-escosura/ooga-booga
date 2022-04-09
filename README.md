# Ooga Booga - Monster Search

As the user types input into a field, cards of matching values are displayed.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

[Desktop View](src/designs/desktop-view.png)<br>
[Tablet View](src/designs/tablet-view.png)<br>
[Mobile View](src/designs/mobile-view.png)

### Links

- Solution URL: [https://github.com/mark-escosura/ooga-booga](https://your-solution-url.com)
- Live Site URL: [https://ooga-booga.vercel.app/](https://your-live-site-url.com)

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Here are the major learnings while working through this project.

```js
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
    response.json().then((users) => setMonsters(users))
  );
}, []);
```

**What the code snippet above is doing: We're fetching the data from the api and using the useState hook to set the new state of the monsters array.**

```js
useEffect(() => {
  const newFilteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });
  setFilteredMonsters(newFilteredMonsters);
}, [monsters, searchField]);
```

**What the code snippet above is doing: We're setting the 'FilteredMonsters' with the 'newFilteredMonsters' which are the characters that the user types into the searchField. We passed in 'monsters' and 'searchField' state in the dependency array because we only want it to re-render whenever those states changes.**

```js
const onSearchChange = (event) => {
  const searchFieldString = event.target.value.toLocaleLowerCase();
  setSearchField(searchFieldString);
};
```

**What the code snippet above is doing: We have an onSearchChange function that with on every keystroke to update the React state, the displayed value will update as the user types**

### Continued development

I plan on furthering my understanding useEffect and fetch and I plan on using them on future projects when working with APIs.

### Useful resources

- [React Docs](<https://reactjs.org/docs/hooks-overview.html#:~:text=useState%20is%20a%20Hook%20(we%E2%80%99ll%20talk%20about%20what%20this%20means%20in%20a%20moment).%20We%20call%20it%20inside%20a%20function%20component%20to%20add%20some%20local%20state%20to%20it>) - This helped me understand hooks and how it lets you add React state to function components. I really liked this hook and will use it going forward.

## Author

- Website - [Mark Escosura](https://mark-escosura-portfolio.vercel.app/)
- Github - [Mark Escosura](https://github.com/mark-escosura)
