  const delay = 500;
  const header = document.getElementsByClassName("header")[0];
  const footer = document.getElementsByClassName("footer")[0];
  const mainContent = document.getElementsByClassName("main-content")[0];
  const sideContent = document.getElementsByClassName("side-content")[0];
  const circle0 = document.getElementsByClassName("circle")[0];
  const circle1 = document.getElementsByClassName("circle")[1];
  const circle2 = document.getElementsByClassName("circle")[2];
  const circle3 = document.getElementsByClassName("circle")[3];
  const button = document.getElementsByClassName("button")[0];

  const createPromise = (process, delay) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        process;
        resolve();
      }, delay);
    });
  };

  createPromise(header.classList.add("header-animation"), delay)
    .then(() => {
      return createPromise(footer.classList.add("footer-animation"), delay);
    })
    .then(() => {
      return createPromise(
        mainContent.classList.add("main-content-animation"),
        delay
      );
    })
    .then(() => {
      return createPromise(
        sideContent.classList.add("side-content-animation"),
        delay
      );
    })
    .then(() => {
      return createPromise(
        circle0.classList.add("circle-animation"),
        delay
      );
    })
    .then(() => {
      return createPromise(
        circle1.classList.add("circle-animation"),
        delay
      );
    })
    .then(() => {
      return createPromise(
        circle2.classList.add("circle-animation"),
        delay
      );
    })
    .then(() => {
      return createPromise(
        circle3.classList.add("circle-animation"),
        delay
      );
    })
    .then(() => {
      return createPromise(button.classList.add("button-animation"), delay);
    })
    .catch(err => {
      console.log({ err });
    });
