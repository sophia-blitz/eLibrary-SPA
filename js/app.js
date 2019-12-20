window.addEventListener('load', onload);

// page name constants
const INDEX = "index";              // reference in index.html navbar
const ABOUT = "about";              // reference in index.html navbar
const VIRTUALTOUR = "virtualTour";  // reference in index.html navbar
const BOOKS = "books";              // reference in index.html navbar
const ADDBOOK = "addBook";
const EDITBOOK = "editBook";

const about = {
  content: null,
  title: "eLibrary | About Us",
  getContent: function () {
    if (!about.content) {
      let div = document.createElement('div');
      div.className = "container";

      // page header
      let h1 = document.createElement('h1');
      h1.innerHTML = "About the eLibrary&reg";
      div.append(h1);

      // horizontal divider
      let hr = document.createElement('hr');
      hr.className = "my 4";
      div.append(hr);


      //  virtual tour link
      let vtLink = document.createElement('a');
      vtLink.innerHTML = "take a virtual tour";
      vtLink.href = `#${VIRTUALTOUR}`;

      // paragraph 1 of text
      let p1 = document.createElement('p');
      p1.append(document.createTextNode(`Lorem ipsum dolor sit amet, `));
      p1.append(vtLink);
      p1.append(document.createTextNode(` consectetur adipiscing elit. Sed non odio sodales, porta ex eget, tempus felis. Sed dui
      ligula, porta et justo non, semper malesuada neque. Morbi non congue nunc. Mauris et egestas diam. Aliquam a urna elit.
      Praesent interdum tincidunt urna ac pharetra. Quisque fermentum lacus nec nunc sagittis fermentum. Sed dolor quam,
      rutrum in nulla ac, consequat malesuada justo. Nullam sed eros sit amet libero dapibus efficitur. Praesent vehicula
      massa sit amet purus molestie auctor. Suspendisse euismod quam vitae egestas fermentum. Praesent congue neque maximus
      risus posuere, at vestibulum nulla gravida. Pellentesque consequat sem in congue pellentesque.`));
      div.append(p1);

      let p2 = document.createElement('p');
      p2.append(document.createTextNode(`Phasellus ipsum lorem, fermentum non dolor eget, vehicula sagittis justo. Duis mollis, diam at scelerisque condimentum,
      orci eros egestas dolor, vitae luctus nisi mauris vel urna. Suspendisse commodo purus id lorem vehicula, in tristique
      lectus suscipit. Pellentesque ut porta ligula, eget convallis nisi. Praesent ut elit quis massa egestas sollicitudin.
      Nulla pretium massa quis turpis aliquet dictum. Sed euismod facilisis eleifend. Curabitur quis eros id nisi rhoncus
      lobortis nec nec quam. Ut ac tincidunt ex, vitae malesuada mi. Praesent consectetur condimentum lacus, non suscipit eros
      faucibus et. Quisque sed dui mattis, interdum libero non, facilisis lectus. Nunc fermentum, sapien facilisis maximus
      elementum, arcu ipsum mollis augue, at ullamcorper est velit quis nisl.`));
      div.append(p2);

      about.content = div;
    }
    return about.content;
  },
  load() {

  }
}
const index = {
  content: null,
  title: "eLibrary | Home",
  getContent: function () {
    if (!index.content) {
      let div = document.createElement('div');
      div.className = "container";

      // page header
      let h1 = document.createElement('h1');
      h1.innerHTML = "Welcome to the eLibrary&reg";
      div.append(h1);

      // horizontal divider
      let hr = document.createElement('hr');
      hr.className = "my 4";
      div.append(hr);

      // image banner
      let img = document.createElement('img');
      img.src = "images/banner1.png";
      img.style.width = "100%";
      div.append(img);

      //  about link
      let aboutLink = document.createElement('a');
      aboutLink.innerHTML = "about us";
      aboutLink.href = `#${ABOUT}`;

      //  virtual tour link
      let vtLink = document.createElement('a');
      vtLink.innerHTML = "take a virtual tour";
      vtLink.href = `#${VIRTUALTOUR}`;

      // paragraph of text
      let p = document.createElement('p');
      p.append(document.createTextNode(`We are a top-flight fully-digitized library. Find out more `));
      p.append(aboutLink);
      p.append(document.createTextNode(` and learn how we can serve you with a widest variety of books and lots of digital content, all for your education and your entertainment. You can also `));
      p.append(vtLink);
      p.append(document.createTextNode(`, of our world-class facilities and be amazed at all we have in stock for you, your family and friends.`));

      div.append(p);
      index.content = div;
    }
    return index.content;
  },
  load() {

  }
}
const virtualTour = {
  content: null,
  title: "eLibrary | Virtual Tour",
  getContent: function () {
    if (!virtualTour.content) {
      let div = document.createElement('div');
      div.className = "container";

      // page header
      let h1 = document.createElement('h1');
      h1.innerHTML = "Virtual Tour of the eLibrary&reg";
      div.append(h1);

      // horizontal divider
      let hr = document.createElement('hr');
      hr.className = "my 4";
      div.append(hr);

      // paragraph 1 of text
      let p1 = document.createElement('p');
      p1.append(document.createTextNode(`Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed non odio sodales, porta ex eget, tempus felis. Sed dui ligula, porta et justo non, semper malesuada neque. Morbi non congue nunc. Mauris et egestas diam. Aliquam a urna elit.`));
      div.append(p1);

      // image banner
      let img = document.createElement('img');
      img.src = "images/panoramic.png";
      img.style.width = "100%";

      // paragraph 2 of text
      let p2 = document.createElement('p');
      p2.append(img);
      div.append(p2);

      // paragraph 3 of text
      let p3 = document.createElement('p');
      p3.append(document.createTextNode(`Praesent interdum tincidunt urna ac pharetra. Quisque fermentum lacus nec nunc sagittis fermentum. Sed dolor quam, rutrum in nulla ac, consequat malesuada justo. Nullam sed eros sit amet libero dapibus efficitur. Praesent vehicula massa sit amet purus molestie auctor. Suspendisse euismod quam vitae egestas fermentum. Praesent congue neque maximus risus posuere, at vestibulum nulla gravida. Pellentesque consequat sem in congue pellentesque.`));
      div.append(p3);

      // paragraph 4 of text
      let p4 = document.createElement('p');
      p4.append(document.createTextNode(`Phasellus ipsum lorem, fermentum non dolor eget, vehicula sagittis justo. Duis mollis, diam at scelerisque condimentum, orci eros egestas dolor, vitae luctus nisi mauris vel urna. Suspendisse commodo purus id lorem vehicula, in tristique lectus suscipit. Pellentesque ut porta ligula, eget convallis nisi. Praesent ut elit quis massa egestas sollicitudin. Nulla pretium massa quis turpis aliquet dictum. Sed euismod facilisis eleifend. Curabitur quis eros id nisi rhoncus lobortis nec nec quam. Ut ac tincidunt ex, vitae malesuada mi. Praesent consectetur condimentum lacus, non suscipit eros faucibus et. Quisque sed dui mattis, interdum libero non, facilisis lectus. Nunc fermentum, sapien facilisis maximus elementum, arcu ipsum mollis augue, at ullamcorper est velit quis nisl.`));
      div.append(p4);

      virtualTour.content = div;
    }
    return virtualTour.content;
  },
  load() {

  }
}

// #region books page
const books = {
  content: null,
  title: "eLibrary | Books",
  booksTable: null,
  getContent: function () {
    if (!books.content) {
      let div = document.createElement('div');
      div.className = "container";

      // create row for page header content and add to page div
      let rowDiv = document.createElement('div');
      rowDiv.className = "row";
      div.append(rowDiv);

      // create title div and add to row div
      let titleDiv = document.createElement('div');
      titleDiv.className = "col-md-5";
      rowDiv.append(titleDiv);

      // create alert div and add to row div
      books.alertDiv = document.createElement('div');
      books.alertDiv.className = "col-md-4";
      rowDiv.append(books.alertDiv);

      // create button div and add to row div 
      let btnDiv = document.createElement('div');
      btnDiv.className = "col-md-3";
      rowDiv.append(btnDiv);

      // create page title and add to title div
      let h1 = document.createElement('h1');
      h1.innerHTML = "Books in our Collection";
      titleDiv.append(h1);

      // create 'add book' btn and add to button div
      let addBtn = document.createElement('a');
      addBtn.href = `#${ADDBOOK}`;
      addBtn.className = "btn btn-outline-success float-right";
      addBtn.append(document.createTextNode('Add New Book'));
      addBtn.preventDefault = true;
      addBtn.href = `#${ADDBOOK}`;
      btnDiv.append(addBtn);

      // table
      books.booksTable = document.createElement('table');
      books.booksTable.className = "table table-hover";
      books.booksTable.id = "booksTable";
      let header = books.booksTable.createTHead();
      let row = header.insertRow(0);

      // header cells
      let cell = document.createElement('th');
      cell.innerHTML = "#";
      cell.scope = "col";
      row.append(cell);

      cell = document.createElement('th');
      cell.innerHTML = "ISBN";
      cell.scope = "col";
      row.append(cell);

      cell = document.createElement('th');
      cell.innerHTML = "Title";
      cell.scope = "col";
      row.append(cell);

      cell = document.createElement('th');
      cell.innerHTML = "Overdue Fee";
      cell.scope = "col";
      row.append(cell);

      cell = document.createElement('th');
      cell.innerHTML = "Publisher";
      cell.scope = "col";
      row.append(cell);

      cell = document.createElement('th');
      cell.innerHTML = "Date Published";
      cell.scope = "col";
      row.append(cell);

      // edit button column
      cell = document.createElement('th');
      cell.scope = "col";
      row.append(cell);

      // delete button column
      cell = document.createElement('th');
      cell.scope = "col";
      row.append(cell);

      books.booksTable.createTBody();
      div.append(books.booksTable);

      books.content = div;
    }
    return books.content;
  },
  load(data) {
    if (data && data.hasOwnProperty('alert')) {
      books.displayAlert(data.alert);
    }
    books.fetchBookList(books.displayBookData, books.displayBookListError);
    $('#deleteModal').on('show.bs.modal', function (event) {
      let button = $(event.relatedTarget) // Button that triggered the modal
      let bookId = button.data('bookid');
      let bookTitle = button.data('title');
      let modal = $(this);
      modal.find('#titleSpan').text(bookTitle);

      let delBtn = document.getElementById("deleteButton");
      delBtn.onclick = function () {
        books.onClickDelete(bookId, bookTitle);
        $('#deleteModal').modal('hide');
      }
    });
  },
  displayAlert(alert) {
    books.alertDiv.innerHTML = `
      <div id="alertDiv" class="alert alert-dismissible alert-${alert.type}">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        ${alert.message}
      </div>`;
  },
  displayBookData(booksData) {
    // remove any existing rows
    while (books.booksTable.rows.length > 1) {
      books.booksTable.deleteRow(1);
    }

    // add new row for each book
    let rowCount = 1;
    booksData.forEach(element => {
      // create new row
      const row = books.booksTable.insertRow(rowCount++);
      row.className = rowCount % 2 == 0 ? "table-active" : "table-default";

      // fill each cell
      let cellCount = 0;
      const idCell = row.insertCell(cellCount++);
      idCell.scope = "row";
      idCell.innerHTML = rowCount - 1 + "."; // element.bookId

      const isbnCell = row.insertCell(cellCount++);
      isbnCell.innerHTML = element.isbn;

      const titleCell = row.insertCell(cellCount++);
      titleCell.innerHTML = element.title;

      const overdueFeeCell = row.insertCell(cellCount++);
      overdueFeeCell.style = "text-align:right";
      overdueFeeCell.innerHTML = `$${parseFloat(element.overdueFee + 0).toFixed(2)}`;

      const publisherCell = row.insertCell(cellCount++);
      publisherCell.innerHTML = element.publisher;

      const dateCell = row.insertCell(cellCount++);
      dateCell.innerHTML = element.datePublished;

      const editCell = row.insertCell(cellCount++);
      const editLink = document.createElement('a');
      editLink.href = `#${EDITBOOK}?bookId=${element.bookId}`;

      editLink.innerHTML = "Edit";
      editLink.className = "btn btn-outline-primary";

      editCell.append(editLink);

      const deleteCell = row.insertCell(cellCount++);
      const deleteBtn = document.createElement('button');
      const self = books;
      deleteBtn.setAttribute('data-toggle', "modal");
      deleteBtn.setAttribute('data-target', "#deleteModal");
      deleteBtn.setAttribute('data-bookid', element.bookId);
      deleteBtn.setAttribute('data-title', element.title);
      deleteBtn.innerHTML = "Delete";
      deleteBtn.className = "btn btn-outline-danger";
      deleteCell.append(deleteBtn);
    });

  },
  displayBookListError() {
    const row = books.booksTable.insertRow(1);
    const errorCell = row.insertCell(0);
    errorCell.colSpan = 8;
    errorCell.className = "btn-outline-danger";
    errorCell.innerHTML = "Error loading book titles. Please try again later.";
  },
  reloadBookList() {
    books.fetchBookList(books.displayBookData, books.displayBookListError);
  },
  fetchBookList: async function (success, fail) {

    try {
      const response = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list");
      const books = await response.json();
      success(books);
    } catch (e) {
      console.error(e);
      fail();
    }
  },
  onClickDelete(bookId, title) {
    books.deleteBook(
      bookId,
      function (){
        books.reloadBookList();
        books.displayAlert({type: "success", message: `${title} has been deleted.`});
      },
      books.displayAlert
    );
  },
  deleteBook: async function (id, success, fail) {
    let done = false;
    try {
      const response = await fetch(`https://elibraryrestapi.herokuapp.com/elibrary/api/book/delete/${id}`,
        { method: "DELETE" });
      // const books = await response.json();
      done = true;
    } catch (e) {
      console.error(e.message);
      fail({type: "danger", message: e.message});
    }
    if (done) success();
  }
}
// #endregion

// #region addbook page
const addBook = {
  content: null,
  title: "eLibrary | Add a Book",
  form: null,
  resetBtn: null,
  addBookBtn: null,
  getContent: function () {
    if (!addBook.content) {
      // addBook.form = new BookForm();
      addBook.form = bookForm;
      let div = document.createElement('div');
      div.className = "container";

      // page header
      let h1 = document.createElement('h1');
      h1.innerHTML = "Add a new book";
      div.append(h1);

      // horizontal divider
      let hr = document.createElement('hr');
      hr.className = "my 4";
      div.append(hr);

      div.append(addBook.form.getContent());

      // form buttons
      let btnDiv = document.createElement('div');
      btnDiv.className = "float-right";

      addBook.resetBtn = document.createElement('button');
      addBook.resetBtn.className = "btn btn-outline-danger";
      addBook.resetBtn.innerHTML = "Reset";
      addBook.resetBtn.id = "resetBtn";
      btnDiv.append(addBook.resetBtn);

      addBook.addBookBtn = document.createElement('button');
      addBook.addBookBtn.className = "btn btn-outline-success";
      addBook.addBookBtn.innerHTML = "Add Book";
      addBook.addBookBtn.id = "addBookBtn";
      btnDiv.append(addBook.addBookBtn);

      div.append(btnDiv);

      addBook.content = div;
    }
    return addBook.content;
  },
  load() {
    addBook.form.load()
    addBook.resetBtn.addEventListener('click', addBook.onClickResetBtn);
    addBook.addBookBtn.addEventListener('click', addBook.onClickAddBookBtn);
  },
  /**
   * clear form of data and errors
   */
  onClickResetBtn: function () {
    console.log("onClickResetBtn Called");
    // clear form
    addBook.form.hideErrorMessage();
    addBook.form.resetFields();
  },
  /**
  * Validate and respond to form contents. 
  *  with valid data: send POST HTTP request
  *    on success: navigate to books.html
  *    on failure: display error
  *  with NONvalid data: display error message on form
  */
  onClickAddBookBtn: function () {
    //validate form
    let validation = addBook.form.isDataValid();
    if (validation.isValid) {
      addBook.form.hideErrorMessage();
      addBook.postNewBook(validation.book, _ => {
        goToPage(BOOKS, {
          alert: {
            type: 'success',
            message: `${validation.book.title} has been added.`
          }
        })
      }, addBook.form.displayErrorMessage);

    } else {
      addBook.form.displayErrorMessage(validation.errorMessage);
    }
  },
  /**
   * Send new book details to server.
   * -- On successful post call `success()`
   * -- On error call `fail()` with HTML formatted error message.
   *
   * @param {Object} book New book to add to server list including properties 
   *  bookId, title, isbn, publisher, overdueFee, datePublished
   * @param {function} success zero-parameter callback function to call upon successful post
   * @param {function} fail single parameter callback function accepting HTML formatted error message
   */
  postNewBook: async function (book, success, fail) {
    let done = true;
    try {
      // console.log("Stringify of book: " + JSON.stringify(book));
      const response = await fetch(`https://elibraryrestapi.herokuapp.com/elibrary/api/book/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book)
      });
      const confirmBook = await response.json();
      for (let key in book) {
        // console.log(`${key}: reply: ${confirmBook[key]} sent: ${book[key]}`); // DEBUG
        if (key != "bookId" && confirmBook[key] != book[key]) {
          done = false;
        }
      }
    } catch (e) {
      console.error(e);
      fail("ERROR-- " + e.message + ". Try again later.");
    }
    if (done) {
      success();
    }
  }
}
// #endregion

// #region editBook page
const editBook = {
  content: null,
  title: "eLibrary | Edit a Book",
  form: null,
  bookId: null,
  cancelBtn: null,
  saveBtn: null,
  getContent() {
    // if (!editBook.content) {

    // editBook.form = new BookForm();
    editBook.form = bookForm;
    let div = document.createElement('div');
    div.className = "container";

    // page header
    let h1 = document.createElement('h1');
    h1.innerHTML = "Edit book";
    div.append(h1);

    // horizontal divider
    let hr = document.createElement('hr');
    hr.className = "my 4";
    div.append(hr);

    div.append(editBook.form.getContent());

    // form buttons
    let btnDiv = document.createElement('div');
    btnDiv.className = "float-right";

    editBook.cancelBtn = document.createElement('button');
    editBook.cancelBtn.className = "btn btn-outline-danger";
    editBook.cancelBtn.innerHTML = "Cancel";
    editBook.cancelBtn.id = "cancelBtn";
    btnDiv.append(editBook.cancelBtn);

    editBook.saveBtn = document.createElement('button');
    editBook.saveBtn.className = "btn btn-outline-success";
    editBook.saveBtn.innerHTML = "Save Book";
    editBook.saveBtn.id = "SaveBtn";
    btnDiv.append(editBook.saveBtn);

    div.append(btnDiv);

    editBook.content = div;
    // }
    return editBook.content;
  },
  load(data) {
    // console.log(data);
    editBook.bookId = parseInt(data.bookId);
    editBook.title = `eLibrary | Edit Book ID: ${editBook.bookId}`;
    editBook.fetchBook(editBook.bookId, editBook.form.displayBookData, editBook.form.displayErrorMessage);
    editBook.form.load()
    editBook.cancelBtn.addEventListener('click', editBook.onClickCancelBtn);
    editBook.saveBtn.addEventListener('click', editBook.onClickSaveBtn);
  },
  /**
   * clear form of data and errors
   */
  onClickCancelBtn() {
    // window.location.href = "books.html";  // TODO: change redirect
    goToPage(BOOKS);
  },
  /**
   * Validate and respond to form contents. 
   *  with valid data: send POST HTTP request
   *    on success: navigate to books.html
   *    on failure: display error
   *  with NONvalid data: display error message on form
   */
  onClickSaveBtn() {
    //validate form
    let validation = editBook.form.isDataValid();
    if (validation.isValid) {
      editBook.form.hideErrorMessage();
      validation.book.bookId = editBook.bookId;
      editBook.postEditBook(
        validation.book,
        _ => {
          goToPage(BOOKS, {
            alert: {
              type: 'success',
              message: `${validation.book.title} has been saved.`
            }
          })
        },
        editBook.form.displayErrorMessage
      );

    } else {
      editBook.form.displayErrorMessage(validation.errorMessage);
    }
  },
  /**
   * Send new book details to server.
   * -- On successful post call `success()`
   * -- On error call `fail()` with HTML formatted error message.
   *
   * @param {Object} book New book to add to server list including properties 
   *  bookId, title, isbn, publisher, overdueFee, datePublished
   * @param {function} success zero-parameter callback function to call upon successful post
   * @param {function} fail single parameter callback function accepting HTML formatted error message
   */
  postEditBook: async function (book, success, fail) {
    let done = true;
    try {
      const response = await fetch(`https://elibraryrestapi.herokuapp.com/elibrary/api/book/update/${book.bookId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book)
      });
      const confirmBook = await response.json();
      for (let key in book) {
        // console.log(`${key}: reply: ${confirmBook[key]} sent: ${book[key]}`); // DEBUG
        if (confirmBook[key] != book[key]) {
          done = false;
        }
      }
    } catch (e) {
      console.error(e);
      fail("ERROR-- " + e.message + ". Try again later.");
    }
    if (done) {
      success();
    }
  },

  fetchBook: async function (id, success, fail) {

    try {
      const response = await fetch(`https://elibraryrestapi.herokuapp.com/elibrary/api/book/get/${id}`);
      const book = await response.json();
      // console.log(book);
      success(book);
    } catch (e) {

      fail("Error-- Could not load book to edit. " + e.message);
      console.error(e);
    }
  }
}
// #endregion

// #region bookForm page
const bookForm = {
  content: null,
  errorDiv: null,
  inputs: null,
  getContent() {
    // if (!bookForm.content) {
    let div = document.createElement('div');
    div.innerHTML = `
<form>
      <fieldset>
        <legend>*required fields</legend>
        <div id="errorMsg" class="alert-danger alert hidden"> </div>
        <div class="form-group">
          <label class="col-form-label" for="title">*Title</label>
          <input required type="text" class="form-control" placeholder="Title" id="title">
        </div>
        <div class="row">
          <div class="form-group col">
            <label class="col-form-label" for="isbn">*ISBN</label>
            <input required type="text" class="form-control" placeholder="###-##########" id="isbn">
          </div>

          <div class="form-group col">
            <label class="col-form-label" for="overdueFee">*Overdue Fee per day</label>
            <input required type="number" class="form-control" placeholder="0.00" id="overdueFee">
          </div>
        </div>
        <div class="row">
          <div class="form-group col">
            <label class="col-form-label" for="publisher">*Publisher</label>
            <input required type="text" class="form-control" placeholder="Publisher" id="publisher">
          </div>

          <div class="form-group col">
            <label class="col-form-label" for="datePublished">*Date</label>
            <input required type="date" class="form-control" placeholder="" id="datePublished">
          </div>
        </div>
      </fieldset>
    </form>`;
    bookForm.content = div;
    // }
    return bookForm.content;

  },
  load() {
    bookForm.errorDiv = bookForm.errorDiv || document.getElementById("errorMsg");
    bookForm.errorDiv.classList.add("hidden");
    bookForm.inputs = bookForm.inputs || document.getElementsByTagName("input");
    for (let input of bookForm.inputs) {
      input.value = "";

    }
  },
  /**
   * Display book info on form
   * 
   * @param {object} book book object including properties 
   *   bookId, title, isbn, publisher, overdueFee, datePublished
   */
  displayBookData(book) {
    // populate book form
    for (let input of bookForm.inputs) {
      input.value = book[input.id];
    }
  },
  hideErrorMessage() {
    bookForm.errorDiv.innerHTML = "";
    bookForm.errorDiv.classList.add("hidden");
  },
  /**
  * Display and populate a formatted HTML error message on the form.
  *
  * @param {string} errorMsg HTML message to be displayed on form.
  * Strong elements will be formatted according to theme.
  */
  displayErrorMessage(errorDivContents) {
    bookForm.errorDiv.innerHTML = "";
    bookForm.errorDiv.append(errorDivContents);
    bookForm.errorDiv.classList.remove("hidden");
  },
  resetFields() {
    // console.log("resetFields called.")
    for (const input of bookForm.inputs) {
      input.value = "";
    }
  },
  isDataValid() {
    // create validation result object
    let results = {
      isValid: false,
      errorMessage: "",
      book: {
        bookId: null,
        isbn: null,
        title: null,
        publisher: null,
        datePublished: null,
        overdueFee: null
      }
    };

    // populate book object
    for (let input of bookForm.inputs) {
      results.book[input.id] = (input.value + "").trim();
    }
    // create error list to show in error div
    const errorList = document.createElement('ul');

    // validate title
    if (results.book.title.length == 0) {
      const errorItem = document.createElement('li');
      errorItem.innerHTML = "Title is a required field.";
      errorList.append(errorItem);
    }
    // validate isbn
    if (results.book.isbn.length == 0) {
      const errorItem = document.createElement('li');
      errorItem.innerHTML = "ISBN is a required field.";
      errorList.append(errorItem);
    }
    // validate overdue fee
    results.book.overdueFee = parseFloat(results.book.overdueFee);
    if (isNaN(results.book.overdueFee)) {
      const errorItem = document.createElement('li');
      errorItem.innerHTML = "Overdue Fee is a required field.";
      errorList.append(errorItem);
    } else if (results.book.overdueFee < 0) {
      const errorItem = document.createElement('li');
      errorItem.innerHTML = "Overdue Fee cannot be less than $0.00.";
      errorList.append(errorItem);
    }
    // validate publisher
    if (results.book.publisher.length == 0) {
      const errorItem = document.createElement('li');
      errorItem.innerHTML = "Publisher is a required field.";
      errorList.append(errorItem);
    }
    // validate date published
    if (results.book.datePublished.length == 0) {
      const errorItem = document.createElement('li');
      errorItem.innerHTML = "Date Published is a required field.";
      errorList.append(errorItem);
    }

    // set valid if no errors
    if (errorList.childElementCount == 0) {
      results.isValid = true;
    } else {
      results.errorMessage = errorList;
    }

    return results;
  }
}
// #endregion

//#region app
let pages = {
  [INDEX]: index,
  [ABOUT]: about,
  [VIRTUALTOUR]: virtualTour,
  [BOOKS]: books,
  [ADDBOOK]: addBook,
  [EDITBOOK]: editBook
};

let currentPage = null;
let outlet = null;
function onload() {
  outlet = document.getElementById("main");
  window.addEventListener("popstate", onPopState);

  let { page, data } = getPageAndDataFromURL();
  page = page || INDEX;
  goToPage(page, data);
}
function goToPage(page, data) {
  if (page && page != currentPage) {

    currentPage = page;

    // clear outlet
    outlet.innerHTML = "";

    // load cached current page content 
    outlet.append(pages[currentPage].getContent());
    pages[currentPage].load(data);
    document.title = pages[currentPage].title;
  }
  else if (!page && currentPage != INDEX) {
    goToPage(INDEX);
  }
}

function onPopState(event) {
  // determine page by URL
  const { page, data } = getPageAndDataFromURL();
  // go to page with page data
  goToPage(page, data);

}
function getPageAndDataFromURL() {
  let results = {};

  let hash = location.hash;
  // if no page specified, return null;
  if (hash == "") {
    return { page: null, data: null }
  }

  // find page before '?'
  let paramStart = hash.indexOf("?");
  let endOfHash = paramStart == -1 ? hash.length : paramStart;
  results.page = hash.substring(1, endOfHash);

  // find params after '?'
  results.data = {};
  results.data.page = results.page;

  const paramString = hash.substring(endOfHash + 1); // from '?' to end of string with key=value&key=value&...
  const params = paramString.split("&"); // split params by separator '&'
  for (const param of params) {
    let [key, value] = param.split('=');
    if (key.length > 0) {
      results.data[key] = value;
      // console.log(`key: ${key}. value: ${value}`); // DEBUG
    }
  }
  return results;
}

//#endregion
