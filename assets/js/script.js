const article = document.getElementById("blog-text");
const readmoreBtn = document.getElementById("readmore");

readmoreBtn.onclick = () => {
  readmoreBtn.innerText == "Readmore"
    ? ((article.innerHTML = `JavaScript is a powerful programming language that is commonly
      used for developing web applications. One of the key features
      of JavaScript is its ability to handle asynchronous
      operations. Asynchronous JavaScript allows developers to
      execute multiple tasks simultaneously without blocking the
      main thread. This feature is critical for building modern web
      applications that rely on real-time data and user
      interactions.<br />
      Asynchronous JavaScript is often implemented using callbacks,
      promises, and async/await. Callbacks were the traditional way
      to handle asynchronous operations in JavaScript. They allow
      developers to define a function that is executed once a
      particular operation is complete. However, callbacks can
      quickly become complex and difficult to manage, especially
      when dealing with multiple asynchronous operations.
      <br />Promises were introduced as a way to simplify
      asynchronous JavaScript. Promises represent a value that may
      not be available yet but will be resolved at some point in the
      future. Promises can be used to handle asynchronous operations
      in a more readable and manageable way.<br />
      Async/await is a newer feature that builds on top of promises
      to simplify asynchronous JavaScript even further. Async/await
      allows developers to write asynchronous code in a synchronous
      style, making it easier to understand and manage. Async/await
      is essentially syntactic sugar over promises and provides a
      cleaner way to handle asynchronous operations. <br />One of
      the benefits of asynchronous JavaScript is improved
      performance. By executing multiple tasks simultaneously,
      asynchronous code can make web applications faster and more
      responsive. Asynchronous JavaScript is also essential for
      building real-time web applications such as chat applications,
      stock market tickers, and online games. <br />
      However, it's important to use asynchronous JavaScript
      appropriately. Asynchronous code can quickly become complex
      and difficult to manage, especially when dealing with large
      applications. Developers need to carefully consider the use of
      asynchronous code and ensure that it's used in a way that
      improves performance without sacrificing code quality and
      maintainability.<br />
      In conclusion, asynchronous JavaScript is an essential feature
      of modern web development. It allows developers to execute
      multiple tasks simultaneously without blocking the main
      thread, resulting in faster and more responsive web
      applications. Asynchronous JavaScript is typically implemented
      using callbacks, promises, and async/await. Developers need to
      use asynchronous code appropriately and carefully to ensure
      that it improves performance without sacrificing code quality
      and maintainability.`),
      (readmoreBtn.innerText = "Showless"))
    : readmoreBtn.innerText == "Showless" &&
      ((article.innerHTML = `JavaScript is a powerful programming language that is commonly
      used for developing web applications. One of the key ...`),
      (readmoreBtn.innerText = "Readmore"));
};
