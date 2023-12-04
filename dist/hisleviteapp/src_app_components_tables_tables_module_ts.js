"use strict";
(self["webpackChunkspruha"] = self["webpackChunkspruha"] || []).push([["src_app_components_tables_tables_module_ts"],{

/***/ 7699:
/*!*******************************************************!*\
  !*** ./node_modules/simple-datatables/src/columns.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Columns: () => (/* binding */ Columns)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ 24003);


/**
 * Columns API
 * @param {Object} instance DataTable instance
 * @param {Mixed} columns  Column index or array of column indexes
 */
class Columns {
  constructor(dt) {
    this.dt = dt;
    return this;
  }

  /**
   * Swap two columns
   * @return {Void}
   */
  swap(columns) {
    if (columns.length && columns.length === 2) {
      const cols = [];

      // Get the current column indexes
      this.dt.headings.forEach((h, i) => {
        cols.push(i);
      });
      const x = columns[0];
      const y = columns[1];
      const b = cols[y];
      cols[y] = cols[x];
      cols[x] = b;
      this.order(cols);
    }
  }

  /**
   * Reorder the columns
   * @return {Array} columns  Array of ordered column indexes
   */
  order(columns) {
    let a;
    let b;
    let c;
    let d;
    let h;
    let s;
    let cell;
    const temp = [[], [], [], []];
    const dt = this.dt;

    // Order the headings
    columns.forEach((column, x) => {
      h = dt.headings[column];
      s = h.getAttribute("data-sortable") !== "false";
      a = h.cloneNode(true);
      a.originalCellIndex = x;
      a.sortable = s;
      temp[0].push(a);
      if (!dt.hiddenColumns.includes(column)) {
        b = h.cloneNode(true);
        b.originalCellIndex = x;
        b.sortable = s;
        temp[1].push(b);
      }
    });

    // Order the row cells
    dt.data.forEach((row, i) => {
      c = row.cloneNode(false);
      d = row.cloneNode(false);
      c.dataIndex = d.dataIndex = i;
      if (row.searchIndex !== null && row.searchIndex !== undefined) {
        c.searchIndex = d.searchIndex = row.searchIndex;
      }

      // Append the cell to the fragment in the correct order
      columns.forEach(column => {
        cell = row.cells[column].cloneNode(true);
        cell.data = row.cells[column].data;
        c.appendChild(cell);
        if (!dt.hiddenColumns.includes(column)) {
          cell = row.cells[column].cloneNode(true);
          cell.data = row.cells[column].data;
          d.appendChild(cell);
        }
      });
      temp[2].push(c);
      temp[3].push(d);
    });
    dt.headings = temp[0];
    dt.activeHeadings = temp[1];
    dt.data = temp[2];
    dt.activeRows = temp[3];

    // Update
    dt.update();
  }

  /**
   * Hide columns
   * @return {Void}
   */
  hide(columns) {
    if (columns.length) {
      const dt = this.dt;
      columns.forEach(column => {
        if (!dt.hiddenColumns.includes(column)) {
          dt.hiddenColumns.push(column);
        }
      });
      this.rebuild();
    }
  }

  /**
   * Show columns
   * @return {Void}
   */
  show(columns) {
    if (columns.length) {
      let index;
      const dt = this.dt;
      columns.forEach(column => {
        index = dt.hiddenColumns.indexOf(column);
        if (index > -1) {
          dt.hiddenColumns.splice(index, 1);
        }
      });
      this.rebuild();
    }
  }

  /**
   * Check column(s) visibility
   * @return {Boolean}
   */
  visible(columns) {
    let cols;
    const dt = this.dt;
    columns = columns || dt.headings.map(th => th.originalCellIndex);
    if (!isNaN(columns)) {
      cols = !dt.hiddenColumns.includes(columns);
    } else if (Array.isArray(columns)) {
      cols = [];
      columns.forEach(column => {
        cols.push(!dt.hiddenColumns.includes(column));
      });
    }
    return cols;
  }

  /**
   * Add a new column
   * @param {Object} data
   */
  add(data) {
    let td;
    const th = document.createElement("th");
    if (!this.dt.headings.length) {
      this.dt.insert({
        headings: [data.heading],
        data: data.data.map(i => [i])
      });
      this.rebuild();
      return;
    }
    if (!this.dt.hiddenHeader) {
      if (data.heading.nodeName) {
        th.appendChild(data.heading);
      } else {
        th.innerHTML = data.heading;
      }
    } else {
      th.innerHTML = "";
    }
    this.dt.headings.push(th);
    this.dt.data.forEach((row, i) => {
      if (data.data[i]) {
        td = document.createElement("td");
        if (data.data[i].nodeName) {
          td.appendChild(data.data[i]);
        } else {
          td.innerHTML = data.data[i];
        }
        td.data = td.innerHTML;
        if (data.render) {
          td.innerHTML = data.render.call(this, td.data, td, row);
        }
        row.appendChild(td);
      }
    });
    if (data.type) {
      th.setAttribute("data-type", data.type);
    }
    if (data.format) {
      th.setAttribute("data-format", data.format);
    }
    if (data.hasOwnProperty("sortable")) {
      th.sortable = data.sortable;
      th.setAttribute("data-sortable", data.sortable === true ? "true" : "false");
    }
    this.rebuild();
    this.dt.renderHeader();
  }

  /**
   * Remove column(s)
   * @param  {Array|Number} select
   * @return {Void}
   */
  remove(select) {
    if (Array.isArray(select)) {
      // Remove in reverse otherwise the indexes will be incorrect
      select.sort((a, b) => b - a);
      select.forEach(column => this.remove(column));
    } else {
      this.dt.headings.splice(select, 1);
      this.dt.data.forEach(row => {
        row.removeChild(row.cells[select]);
      });
    }
    this.rebuild();
  }

  /**
   * Filter by column
   * @param  {int} column - The column no.
   * @param  {string} dir - asc or desc
   * @filter {array} filter - optional parameter with a list of strings
   * @return {void}
   */
  filter(column, dir, init, terms) {
    const dt = this.dt;

    // Creates a internal state that manages filters if there are none
    if (!dt.filterState) {
      dt.filterState = {
        originalData: dt.data
      };
    }

    // If that column is was not filtered yet, we need to create its state
    if (!dt.filterState[column]) {
      // append a filter that selects all rows, 'resetting' the filter
      const filters = [...terms, () => true];
      dt.filterState[column] = function () {
        let i = 0;
        return () => filters[i++ % filters.length];
      }();
    }

    // Apply the filter and rebuild table
    const rowFilter = dt.filterState[column](); // fetches next filter
    const filteredRows = Array.from(dt.filterState.originalData).filter(tr => {
      const cell = tr.cells[column];
      const content = cell.hasAttribute('data-content') ? cell.getAttribute('data-content') : cell.innerText;

      // If the filter is a function, call it, if it is a string, compare it
      return typeof rowFilter === 'function' ? rowFilter(content) : content === rowFilter;
    });
    dt.data = filteredRows;
    this.rebuild();
    dt.update();
    if (!init) {
      dt.emit("datatable.sort", column, dir);
    }
  }

  /**
   * Sort by column
   * @param  {int} column - The column no.
   * @param  {string} dir - asc or desc
   * @return {void}
   */
  sort(column, dir, init) {
    const dt = this.dt;

    // Check column is present
    if (dt.hasHeadings && (column < 0 || column > dt.headings.length)) {
      return false;
    }

    //If there is a filter for this column, apply it instead of sorting
    const filterTerms = dt.options.filters && dt.options.filters[dt.headings[column].textContent];
    if (filterTerms && filterTerms.length !== 0) {
      this.filter(column, dir, init, filterTerms);
      return;
    }
    dt.sorting = true;
    if (!init) {
      dt.emit("datatable.sorting", column, dir);
    }
    let rows = dt.data;
    const alpha = [];
    const numeric = [];
    let a = 0;
    let n = 0;
    const th = dt.headings[column];
    const waitFor = [];

    // Check for date format
    if (th.getAttribute("data-type") === "date") {
      let format = false;
      const formatted = th.hasAttribute("data-format");
      if (formatted) {
        format = th.getAttribute("data-format");
      }
      waitFor.push(__webpack_require__.e(/*! import() */ "node_modules_simple-datatables_src_date_js").then(__webpack_require__.bind(__webpack_require__, /*! ./date */ 20397)).then(({
        parseDate
      }) => date => parseDate(date, format)));
    }
    Promise.all(waitFor).then(importedFunctions => {
      const parseFunction = importedFunctions[0]; // only defined if date
      Array.from(rows).forEach(tr => {
        const cell = tr.cells[column];
        const content = cell.hasAttribute('data-content') ? cell.getAttribute('data-content') : cell.innerText;
        let num;
        if (parseFunction) {
          num = parseFunction(content);
        } else if (typeof content === "string") {
          num = content.replace(/(\$|,|\s|%)/g, "");
        } else {
          num = content;
        }
        if (parseFloat(num) == num) {
          numeric[n++] = {
            value: Number(num),
            row: tr
          };
        } else {
          alpha[a++] = {
            value: typeof content === "string" ? content.toLowerCase() : content,
            row: tr
          };
        }
      });

      /* Sort according to direction (ascending or descending) */
      if (!dir) {
        if (th.classList.contains("asc")) {
          dir = "desc";
        } else {
          dir = "asc";
        }
      }
      let top;
      let btm;
      if (dir == "desc") {
        top = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.sortItems)(alpha, -1);
        btm = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.sortItems)(numeric, -1);
        th.classList.remove("asc");
        th.classList.add("desc");
      } else {
        top = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.sortItems)(numeric, 1);
        btm = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.sortItems)(alpha, 1);
        th.classList.remove("desc");
        th.classList.add("asc");
      }

      /* Clear asc/desc class names from the last sorted column's th if it isn't the same as the one that was just clicked */
      if (dt.lastTh && th != dt.lastTh) {
        dt.lastTh.classList.remove("desc");
        dt.lastTh.classList.remove("asc");
      }
      dt.lastTh = th;

      /* Reorder the table */
      rows = top.concat(btm);
      dt.data = [];
      const indexes = [];
      rows.forEach((v, i) => {
        dt.data.push(v.row);
        if (v.row.searchIndex !== null && v.row.searchIndex !== undefined) {
          indexes.push(i);
        }
      });
      dt.searchData = indexes;
      this.rebuild();
      dt.update();
      if (!init) {
        dt.emit("datatable.sort", column, dir);
      }
    });
  }

  /**
   * Rebuild the columns
   * @return {Void}
   */
  rebuild() {
    let a;
    let b;
    let c;
    let d;
    const dt = this.dt;
    const temp = [];
    dt.activeRows = [];
    dt.activeHeadings = [];
    dt.headings.forEach((th, i) => {
      th.originalCellIndex = i;
      th.sortable = th.getAttribute("data-sortable") !== "false";
      if (!dt.hiddenColumns.includes(i)) {
        dt.activeHeadings.push(th);
      }
    });

    // Loop over the rows and reorder the cells
    dt.data.forEach((row, i) => {
      a = row.cloneNode(false);
      b = row.cloneNode(false);
      a.dataIndex = b.dataIndex = i;
      if (row.searchIndex !== null && row.searchIndex !== undefined) {
        a.searchIndex = b.searchIndex = row.searchIndex;
      }

      // Append the cell to the fragment in the correct order
      Array.from(row.cells).forEach(cell => {
        c = cell.cloneNode(true);
        c.data = cell.data;
        a.appendChild(c);
        if (!dt.hiddenColumns.includes(c.cellIndex)) {
          d = c.cloneNode(true);
          d.data = c.data;
          b.appendChild(d);
        }
      });

      // Append the fragment with the ordered cells
      temp.push(a);
      dt.activeRows.push(b);
    });
    dt.data = temp;
    dt.update();
  }
}

/***/ }),

/***/ 31019:
/*!******************************************************!*\
  !*** ./node_modules/simple-datatables/src/config.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultConfig: () => (/* binding */ defaultConfig)
/* harmony export */ });
/**
 * Default configuration
 * @typ {Object}
 */
const defaultConfig = {
  sortable: true,
  searchable: true,
  // Pagination
  paging: true,
  perPage: 10,
  perPageSelect: [5, 10, 15, 20, 25],
  nextPrev: true,
  firstLast: false,
  prevText: "&lsaquo;",
  nextText: "&rsaquo;",
  firstText: "&laquo;",
  lastText: "&raquo;",
  ellipsisText: "&hellip;",
  ascText: "▴",
  descText: "▾",
  truncatePager: true,
  pagerDelta: 2,
  scrollY: "",
  fixedColumns: true,
  fixedHeight: false,
  header: true,
  footer: false,
  // Customise the display text
  labels: {
    placeholder: "Search...",
    // The search input placeholder
    perPage: "{select} entries per page",
    // per-page dropdown label
    noRows: "No entries found",
    // Message shown when there are no search results
    info: "Showing {start} to {end} of {rows} entries" //
  },

  // Customise the layout
  layout: {
    top: "{select}{search}",
    bottom: "{info}{pager}"
  }
};

/***/ }),

/***/ 49521:
/*!*********************************************************!*\
  !*** ./node_modules/simple-datatables/src/datatable.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataTable: () => (/* binding */ DataTable)
/* harmony export */ });
/* harmony import */ var _rows__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rows */ 62018);
/* harmony import */ var _columns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columns */ 7699);
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table */ 68193);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ 31019);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ 24003);





class DataTable {
  constructor(table, options = {}) {
    this.initialized = false;

    // user options
    this.options = {
      ..._config__WEBPACK_IMPORTED_MODULE_3__.defaultConfig,
      ...options,
      layout: {
        ..._config__WEBPACK_IMPORTED_MODULE_3__.defaultConfig.layout,
        ...options.layout
      },
      labels: {
        ..._config__WEBPACK_IMPORTED_MODULE_3__.defaultConfig.labels,
        ...options.labels
      }
    };
    if (typeof table === "string") {
      table = document.querySelector(table);
    }
    this.initialLayout = table.innerHTML;
    this.initialSortable = this.options.sortable;

    // Disable manual sorting if no header is present (#4)
    if (!this.options.header) {
      this.options.sortable = false;
    }
    if (table.tHead === null) {
      if (!this.options.data || this.options.data && !this.options.data.headings) {
        this.options.sortable = false;
      }
    }
    if (table.tBodies.length && !table.tBodies[0].rows.length) {
      if (this.options.data) {
        if (!this.options.data.data) {
          throw new Error("You seem to be using the data option, but you've not defined any rows.");
        }
      }
    }
    this.table = table;
    this.init();
  }

  /**
   * Add custom property or method to extend DataTable
   * @param  {String} prop    - Method name or property
   * @param  {Mixed} val      - Function or property value
   * @return {Void}
   */
  static extend(prop, val) {
    if (typeof val === "function") {
      DataTable.prototype[prop] = val;
    } else {
      DataTable[prop] = val;
    }
  }

  /**
   * Initialize the instance
   * @param  {Object} options
   * @return {Void}
   */
  init(options) {
    if (this.initialized || this.table.classList.contains("dataTable-table")) {
      return false;
    }
    Object.assign(this.options, options || {});
    this.currentPage = 1;
    this.onFirstPage = true;
    this.hiddenColumns = [];
    this.columnRenderers = [];
    this.selectedColumns = [];
    this.render();
    setTimeout(() => {
      this.emit("datatable.init");
      this.initialized = true;
      if (this.options.plugins) {
        Object.entries(this.options.plugins).forEach(([plugin, options]) => {
          if (this[plugin] && typeof this[plugin] === "function") {
            this[plugin] = this[plugin](options, {
              createElement: _helpers__WEBPACK_IMPORTED_MODULE_4__.createElement
            });

            // Init plugin
            if (options.enabled && this[plugin].init && typeof this[plugin].init === "function") {
              this[plugin].init();
            }
          }
        });
      }
    }, 10);
  }

  /**
   * Render the instance
   * @param  {String} type
   * @return {Void}
   */
  render(type) {
    if (type) {
      switch (type) {
        case "page":
          this.renderPage();
          break;
        case "pager":
          this.renderPager();
          break;
        case "header":
          this.renderHeader();
          break;
      }
      return false;
    }
    const options = this.options;
    let template = "";

    // Convert data to HTML
    if (options.data) {
      _table__WEBPACK_IMPORTED_MODULE_2__.dataToTable.call(this);
    }
    if (options.ajax) {
      const ajax = options.ajax;
      const xhr = new XMLHttpRequest();
      const xhrProgress = e => {
        this.emit("datatable.ajax.progress", e, xhr);
      };
      const xhrLoad = e => {
        if (xhr.readyState === 4) {
          this.emit("datatable.ajax.loaded", e, xhr);
          if (xhr.status === 200) {
            const obj = {};
            obj.data = ajax.load ? ajax.load.call(this, xhr) : xhr.responseText;
            obj.type = "json";
            if (ajax.content && ajax.content.type) {
              obj.type = ajax.content.type;
              Object.assign(obj, ajax.content);
            }
            this.import(obj);
            this.setColumns(true);
            this.emit("datatable.ajax.success", e, xhr);
          } else {
            this.emit("datatable.ajax.error", e, xhr);
          }
        }
      };
      const xhrFailed = e => {
        this.emit("datatable.ajax.error", e, xhr);
      };
      const xhrCancelled = e => {
        this.emit("datatable.ajax.abort", e, xhr);
      };
      xhr.addEventListener("progress", xhrProgress, false);
      xhr.addEventListener("load", xhrLoad, false);
      xhr.addEventListener("error", xhrFailed, false);
      xhr.addEventListener("abort", xhrCancelled, false);
      this.emit("datatable.ajax.loading", xhr);
      xhr.open("GET", typeof ajax === "string" ? options.ajax : options.ajax.url);
      xhr.send();
    }

    // Store references
    this.body = this.table.tBodies[0];
    this.head = this.table.tHead;
    this.foot = this.table.tFoot;
    if (!this.body) {
      this.body = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("tbody");
      this.table.appendChild(this.body);
    }
    this.hasRows = this.body.rows.length > 0;

    // Make a tHead if there isn't one (fixes #8)
    if (!this.head) {
      const h = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("thead");
      const t = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("tr");
      if (this.hasRows) {
        Array.from(this.body.rows[0].cells).forEach(() => {
          t.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("th"));
        });
        h.appendChild(t);
      }
      this.head = h;
      this.table.insertBefore(this.head, this.body);
      this.hiddenHeader = !options.ajax;
    }
    this.headings = [];
    this.hasHeadings = this.head.rows.length > 0;
    if (this.hasHeadings) {
      this.header = this.head.rows[0];
      this.headings = [].slice.call(this.header.cells);
    }

    // Header
    if (!options.header) {
      if (this.head) {
        this.table.removeChild(this.table.tHead);
      }
    }

    // Footer
    if (options.footer) {
      if (this.head && !this.foot) {
        this.foot = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("tfoot", {
          html: this.head.innerHTML
        });
        this.table.appendChild(this.foot);
      }
    } else {
      if (this.foot) {
        this.table.removeChild(this.table.tFoot);
      }
    }

    // Build
    this.wrapper = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("div", {
      class: "dataTable-wrapper dataTable-loading"
    });

    // Template for custom layouts
    template += "<div class='dataTable-top'>";
    template += options.layout.top;
    template += "</div>";
    if (options.scrollY.length) {
      template += `<div class='dataTable-container' style='height: ${options.scrollY}; overflow-Y: auto;'></div>`;
    } else {
      template += "<div class='dataTable-container'></div>";
    }
    template += "<div class='dataTable-bottom'>";
    template += options.layout.bottom;
    template += "</div>";

    // Info placement
    template = template.replace("{info}", options.paging ? "<div class='dataTable-info'></div>" : "");

    // Per Page Select
    if (options.paging && options.perPageSelect) {
      let wrap = "<div class='dataTable-dropdown'><label>";
      wrap += options.labels.perPage;
      wrap += "</label></div>";

      // Create the select
      const select = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("select", {
        class: "dataTable-selector"
      });

      // Create the options
      options.perPageSelect.forEach(val => {
        const selected = val === options.perPage;
        const option = new Option(val, val, selected, selected);
        select.add(option);
      });

      // Custom label
      wrap = wrap.replace("{select}", select.outerHTML);

      // Selector placement
      template = template.replace("{select}", wrap);
    } else {
      template = template.replace("{select}", "");
    }

    // Searchable
    if (options.searchable) {
      const form = `<div class='dataTable-search'><input class='dataTable-input' placeholder='${options.labels.placeholder}' type='text'></div>`;

      // Search input placement
      template = template.replace("{search}", form);
    } else {
      template = template.replace("{search}", "");
    }
    if (this.hasHeadings) {
      // Sortable
      this.render("header");
    }

    // Add table class
    this.table.classList.add("dataTable-table");

    // Paginator
    const w = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("div", {
      class: "dataTable-pagination"
    });
    const paginator = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("ul");
    w.appendChild(paginator);

    // Pager(s) placement
    template = template.replace(/\{pager\}/g, w.outerHTML);
    this.wrapper.innerHTML = template;
    this.container = this.wrapper.querySelector(".dataTable-container");
    this.pagers = this.wrapper.querySelectorAll(".dataTable-pagination");
    this.label = this.wrapper.querySelector(".dataTable-info");

    // Insert in to DOM tree
    this.table.parentNode.replaceChild(this.wrapper, this.table);
    this.container.appendChild(this.table);

    // Store the table dimensions
    this.rect = this.table.getBoundingClientRect();

    // Convert rows to array for processing
    this.data = Array.from(this.body.rows);
    this.activeRows = this.data.slice();
    this.activeHeadings = this.headings.slice();

    // Update
    this.update();
    if (!options.ajax) {
      this.setColumns();
    }

    // Fix height
    this.fixHeight();

    // Fix columns
    this.fixColumns();

    // Class names
    if (!options.header) {
      this.wrapper.classList.add("no-header");
    }
    if (!options.footer) {
      this.wrapper.classList.add("no-footer");
    }
    if (options.sortable) {
      this.wrapper.classList.add("sortable");
    }
    if (options.searchable) {
      this.wrapper.classList.add("searchable");
    }
    if (options.fixedHeight) {
      this.wrapper.classList.add("fixed-height");
    }
    if (options.fixedColumns) {
      this.wrapper.classList.add("fixed-columns");
    }
    this.bindEvents();
  }

  /**
   * Render the page
   * @return {Void}
   */
  renderPage() {
    if (this.hasHeadings) {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.flush)(this.header);
      this.activeHeadings.forEach(th => this.header.appendChild(th));
    }
    if (this.hasRows && this.totalPages) {
      if (this.currentPage > this.totalPages) {
        this.currentPage = 1;
      }

      // Use a fragment to limit touching the DOM
      const index = this.currentPage - 1;
      const frag = document.createDocumentFragment();
      this.pages[index].forEach(row => frag.appendChild(this.rows().render(row)));
      this.clear(frag);
      this.onFirstPage = this.currentPage === 1;
      this.onLastPage = this.currentPage === this.lastPage;
    } else {
      this.setMessage(this.options.labels.noRows);
    }

    // Update the info
    let current = 0;
    let f = 0;
    let t = 0;
    let items;
    if (this.totalPages) {
      current = this.currentPage - 1;
      f = current * this.options.perPage;
      t = f + this.pages[current].length;
      f = f + 1;
      items = this.searching ? this.searchData.length : this.data.length;
    }
    if (this.label && this.options.labels.info.length) {
      // CUSTOM LABELS
      const string = this.options.labels.info.replace("{start}", f).replace("{end}", t).replace("{page}", this.currentPage).replace("{pages}", this.totalPages).replace("{rows}", items);
      this.label.innerHTML = items ? string : "";
    }
    if (this.currentPage == 1) {
      this.fixHeight();
    }
  }

  /**
   * Render the pager(s)
   * @return {Void}
   */
  renderPager() {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.flush)(this.pagers);
    if (this.totalPages > 1) {
      const c = "pager";
      const frag = document.createDocumentFragment();
      const prev = this.onFirstPage ? 1 : this.currentPage - 1;
      const next = this.onLastPage ? this.totalPages : this.currentPage + 1;

      // first button
      if (this.options.firstLast) {
        frag.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_4__.button)(c, 1, this.options.firstText));
      }

      // prev button
      if (this.options.nextPrev) {
        frag.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_4__.button)(c, prev, this.options.prevText));
      }
      let pager = this.links;

      // truncate the links
      if (this.options.truncatePager) {
        pager = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.truncate)(this.links, this.currentPage, this.pages.length, this.options.pagerDelta, this.options.ellipsisText);
      }

      // active page link
      this.links[this.currentPage - 1].classList.add("active");

      // append the links
      pager.forEach(p => {
        p.classList.remove("active");
        frag.appendChild(p);
      });
      this.links[this.currentPage - 1].classList.add("active");

      // next button
      if (this.options.nextPrev) {
        frag.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_4__.button)(c, next, this.options.nextText));
      }

      // first button
      if (this.options.firstLast) {
        frag.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_4__.button)(c, this.totalPages, this.options.lastText));
      }

      // We may have more than one pager
      this.pagers.forEach(pager => {
        pager.appendChild(frag.cloneNode(true));
      });
    }
  }

  /**
   * Render the header
   * @return {Void}
   */
  renderHeader() {
    this.labels = [];
    if (this.headings && this.headings.length) {
      this.headings.forEach((th, i) => {
        this.labels[i] = th.textContent;
        if (th.firstElementChild && th.firstElementChild.classList.contains("dataTable-sorter")) {
          th.innerHTML = th.firstElementChild.innerHTML;
        }
        th.sortable = th.getAttribute("data-sortable") !== "false";
        th.originalCellIndex = i;
        if (this.options.sortable && th.sortable) {
          const link = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("a", {
            href: "#",
            class: "dataTable-sorter",
            html: th.innerHTML
          });
          th.innerHTML = "";
          th.setAttribute("data-sortable", "");
          th.appendChild(link);
        }
      });
    }
    this.fixColumns();
  }

  /**
   * Bind event listeners
   * @return {[type]} [description]
   */
  bindEvents() {
    const options = this.options;
    // Per page selector
    if (options.perPageSelect) {
      const selector = this.wrapper.querySelector(".dataTable-selector");
      if (selector) {
        // Change per page
        selector.addEventListener("change", () => {
          options.perPage = parseInt(selector.value, 10);
          this.update();
          this.fixHeight();
          this.emit("datatable.perpage", options.perPage);
        }, false);
      }
    }

    // Search input
    if (options.searchable) {
      this.input = this.wrapper.querySelector(".dataTable-input");
      if (this.input) {
        this.input.addEventListener("keyup", () => this.search(this.input.value), false);
      }
    }

    // Pager(s) / sorting
    this.wrapper.addEventListener("click", e => {
      const t = e.target;
      if (t.nodeName.toLowerCase() === "a") {
        if (t.hasAttribute("data-page")) {
          this.page(t.getAttribute("data-page"));
          e.preventDefault();
        } else if (options.sortable && t.classList.contains("dataTable-sorter") && t.parentNode.getAttribute("data-sortable") != "false") {
          this.columns().sort(this.headings.indexOf(t.parentNode));
          e.preventDefault();
        }
      }
    }, false);
    window.addEventListener("resize", () => {
      this.rect = this.container.getBoundingClientRect();
      this.fixColumns();
    });
  }

  /**
   * Set up columns
   * @return {[type]} [description]
   */
  setColumns(ajax) {
    if (!ajax) {
      this.data.forEach(row => {
        Array.from(row.cells).forEach(cell => {
          cell.data = cell.innerHTML;
        });
      });
    }

    // Check for the columns option
    if (this.options.columns && this.headings.length) {
      this.options.columns.forEach(data => {
        // convert single column selection to array
        if (!Array.isArray(data.select)) {
          data.select = [data.select];
        }
        if (data.hasOwnProperty("render") && typeof data.render === "function") {
          this.selectedColumns = this.selectedColumns.concat(data.select);
          this.columnRenderers.push({
            columns: data.select,
            renderer: data.render
          });
        }

        // Add the data attributes to the th elements
        data.select.forEach(column => {
          const th = this.headings[column];
          if (data.type) {
            th.setAttribute("data-type", data.type);
          }
          if (data.format) {
            th.setAttribute("data-format", data.format);
          }
          if (data.hasOwnProperty("sortable")) {
            th.setAttribute("data-sortable", data.sortable);
          }
          if (data.hasOwnProperty("hidden")) {
            if (data.hidden !== false) {
              this.columns().hide([column]);
            }
          }
          if (data.hasOwnProperty("sort") && data.select.length === 1) {
            this.columns().sort(data.select[0], data.sort, true);
          }
        });
      });
    }
    if (this.hasRows) {
      this.data.forEach((row, i) => {
        row.dataIndex = i;
        Array.from(row.cells).forEach(cell => {
          cell.data = cell.innerHTML;
        });
      });
      if (this.selectedColumns.length) {
        this.data.forEach(row => {
          Array.from(row.cells).forEach((cell, i) => {
            if (this.selectedColumns.includes(i)) {
              this.columnRenderers.forEach(options => {
                if (options.columns.includes(i)) {
                  cell.innerHTML = options.renderer.call(this, cell.data, cell, row);
                }
              });
            }
          });
        });
      }
      this.columns().rebuild();
    }
    this.render("header");
  }

  /**
   * Destroy the instance
   * @return {void}
   */
  destroy() {
    this.table.innerHTML = this.initialLayout;

    // Remove the className
    this.table.classList.remove("dataTable-table");

    // Remove the containers
    this.wrapper.parentNode.replaceChild(this.table, this.wrapper);
    this.initialized = false;
  }

  /**
   * Update the instance
   * @return {Void}
   */
  update() {
    this.wrapper.classList.remove("dataTable-empty");
    this.paginate(this);
    this.render("page");
    this.links = [];
    let i = this.pages.length;
    while (i--) {
      const num = i + 1;
      this.links[i] = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.button)(i === 0 ? "active" : "", num, num);
    }
    this.sorting = false;
    this.render("pager");
    this.rows().update();
    this.emit("datatable.update");
  }

  /**
   * Sort rows into pages
   * @return {Number}
   */
  paginate() {
    const perPage = this.options.perPage;
    let rows = this.activeRows;
    if (this.searching) {
      rows = [];
      this.searchData.forEach(index => rows.push(this.activeRows[index]));
    }
    if (this.options.paging) {
      // Check for hidden columns
      this.pages = rows.map((tr, i) => i % perPage === 0 ? rows.slice(i, i + perPage) : null).filter(page => page);
    } else {
      this.pages = [rows];
    }
    this.totalPages = this.lastPage = this.pages.length;
    return this.totalPages;
  }

  /**
   * Fix column widths
   * @return {Void}
   */
  fixColumns() {
    if ((this.options.scrollY.length || this.options.fixedColumns) && this.activeHeadings && this.activeHeadings.length) {
      let cells;
      let hd = false;
      this.columnWidths = [];

      // If we have headings we need only set the widths on them
      // otherwise we need a temp header and the widths need applying to all cells
      if (this.table.tHead) {
        if (this.options.scrollY.length) {
          hd = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("thead");
          hd.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("tr"));
          hd.style.height = '0px';
          if (this.headerTable) {
            // move real header back into place
            this.table.tHead = this.headerTable.tHead;
          }
        }

        // Reset widths
        this.activeHeadings.forEach(cell => {
          cell.style.width = "";
        });
        this.activeHeadings.forEach((cell, i) => {
          const ow = cell.offsetWidth;
          const w = ow / this.rect.width * 100;
          cell.style.width = `${w}%`;
          this.columnWidths[i] = ow;
          if (this.options.scrollY.length) {
            const th = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("th");
            hd.firstElementChild.appendChild(th);
            th.style.width = `${w}%`;
            th.style.paddingTop = "0";
            th.style.paddingBottom = "0";
            th.style.border = "0";
          }
        });
        if (this.options.scrollY.length) {
          const container = this.table.parentElement;
          if (!this.headerTable) {
            this.headerTable = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("table", {
              class: "dataTable-table"
            });
            const headercontainer = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("div", {
              class: "dataTable-headercontainer"
            });
            headercontainer.appendChild(this.headerTable);
            container.parentElement.insertBefore(headercontainer, container);
          }
          const thd = this.table.tHead;
          this.table.replaceChild(hd, thd);
          this.headerTable.tHead = thd;

          // Compensate for scrollbars.
          this.headerTable.parentElement.style.paddingRight = `${this.headerTable.clientWidth - this.table.clientWidth + parseInt(this.headerTable.parentElement.style.paddingRight || '0', 10)}px`;
          if (container.scrollHeight > container.clientHeight) {
            // scrollbars on one page means scrollbars on all pages.
            container.style.overflowY = 'scroll';
          }
        }
      } else {
        cells = [];

        // Make temperary headings
        hd = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("thead");
        const r = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("tr");
        Array.from(this.table.tBodies[0].rows[0].cells).forEach(() => {
          const th = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("th");
          r.appendChild(th);
          cells.push(th);
        });
        hd.appendChild(r);
        this.table.insertBefore(hd, this.body);
        const widths = [];
        cells.forEach((cell, i) => {
          const ow = cell.offsetWidth;
          const w = ow / this.rect.width * 100;
          widths.push(w);
          this.columnWidths[i] = ow;
        });
        this.data.forEach(row => {
          Array.from(row.cells).forEach((cell, i) => {
            if (this.columns(cell.cellIndex).visible()) cell.style.width = `${widths[i]}%`;
          });
        });

        // Discard the temp header
        this.table.removeChild(hd);
      }
    }
  }

  /**
   * Fix the container height
   * @return {Void}
   */
  fixHeight() {
    if (this.options.fixedHeight) {
      this.container.style.height = null;
      this.rect = this.container.getBoundingClientRect();
      this.container.style.height = `${this.rect.height}px`;
    }
  }

  /**
   * Perform a search of the data set
   * @param  {string} query
   * @return {void}
   */
  search(query) {
    if (!this.hasRows) return false;
    query = query.toLowerCase();
    this.currentPage = 1;
    this.searching = true;
    this.searchData = [];
    if (!query.length) {
      this.searching = false;
      this.update();
      this.emit("datatable.search", query, this.searchData);
      this.wrapper.classList.remove("search-results");
      return false;
    }
    this.clear();
    this.data.forEach((row, idx) => {
      const inArray = this.searchData.includes(row);

      // https://github.com/Mobius1/Vanilla-DataTables/issues/12
      const doesQueryMatch = query.split(" ").reduce((bool, word) => {
        let includes = false;
        let cell = null;
        let content = null;
        for (let x = 0; x < row.cells.length; x++) {
          cell = row.cells[x];
          content = cell.hasAttribute('data-content') ? cell.getAttribute('data-content') : cell.textContent;
          if (content.toLowerCase().includes(word) && this.columns(cell.cellIndex).visible()) {
            includes = true;
            break;
          }
        }
        return bool && includes;
      }, true);
      if (doesQueryMatch && !inArray) {
        row.searchIndex = idx;
        this.searchData.push(idx);
      } else {
        row.searchIndex = null;
      }
    });
    this.wrapper.classList.add("search-results");
    if (!this.searchData.length) {
      this.wrapper.classList.remove("search-results");
      this.setMessage(this.options.labels.noRows);
    } else {
      this.update();
    }
    this.emit("datatable.search", query, this.searchData);
  }

  /**
   * Change page
   * @param  {int} page
   * @return {void}
   */
  page(page) {
    // We don't want to load the current page again.
    if (page == this.currentPage) {
      return false;
    }
    if (!isNaN(page)) {
      this.currentPage = parseInt(page, 10);
    }
    if (page > this.pages.length || page < 0) {
      return false;
    }
    this.render("page");
    this.render("pager");
    this.emit("datatable.page", page);
  }

  /**
   * Sort by column
   * @param  {int} column - The column no.
   * @param  {string} direction - asc or desc
   * @return {void}
   */
  sortColumn(column, direction) {
    // Use columns API until sortColumn method is removed
    this.columns().sort(column, direction);
  }

  /**
   * Add new row data
   * @param {object} data
   */
  insert(data) {
    let rows = [];
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isObject)(data)) {
      if (data.headings) {
        if (!this.hasHeadings && !this.hasRows) {
          const tr = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("tr");
          data.headings.forEach(heading => {
            const th = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("th", {
              html: heading
            });
            tr.appendChild(th);
          });
          this.head.appendChild(tr);
          this.header = tr;
          this.headings = [].slice.call(tr.cells);
          this.hasHeadings = true;

          // Re-enable sorting if it was disabled due
          // to missing header
          this.options.sortable = this.initialSortable;

          // Allow sorting on new header
          this.render("header");

          // Activate newly added headings
          this.activeHeadings = this.headings.slice();
        }
      }
      if (data.data && Array.isArray(data.data)) {
        rows = data.data;
      }
    } else if (Array.isArray(data)) {
      data.forEach(row => {
        const r = [];
        Object.entries(row).forEach(([heading, cell]) => {
          const index = this.labels.indexOf(heading);
          if (index > -1) {
            r[index] = cell;
          }
        });
        rows.push(r);
      });
    }
    if (rows.length) {
      this.rows().add(rows);
      this.hasRows = true;
    }
    this.update();
    this.setColumns();
    this.fixColumns();
  }

  /**
   * Refresh the instance
   * @return {void}
   */
  refresh() {
    if (this.options.searchable) {
      this.input.value = "";
      this.searching = false;
    }
    this.currentPage = 1;
    this.onFirstPage = true;
    this.update();
    this.emit("datatable.refresh");
  }

  /**
   * Truncate the table
   * @param  {mixes} html - HTML string or HTMLElement
   * @return {void}
   */
  clear(html) {
    if (this.body) {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.flush)(this.body);
    }
    let parent = this.body;
    if (!this.body) {
      parent = this.table;
    }
    if (html) {
      if (typeof html === "string") {
        const frag = document.createDocumentFragment();
        frag.innerHTML = html;
      }
      parent.appendChild(html);
    }
  }

  /**
   * Export table to various formats (csv, txt or sql)
   * @param  {Object} userOptions User options
   * @return {Boolean}
   */
  export(userOptions) {
    if (!this.hasHeadings && !this.hasRows) return false;
    const headers = this.activeHeadings;
    let rows = [];
    const arr = [];
    let i;
    let x;
    let str;
    let link;
    const defaults = {
      download: true,
      skipColumn: [],
      // csv
      lineDelimiter: "\n",
      columnDelimiter: ",",
      // sql
      tableName: "myTable",
      // json
      replacer: null,
      space: 4
    };

    // Check for the options object
    if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isObject)(userOptions)) {
      return false;
    }
    const options = {
      ...defaults,
      ...userOptions
    };
    if (options.type) {
      if (options.type === "txt" || options.type === "csv") {
        // Include headings
        rows[0] = this.header;
      }

      // Selection or whole table
      if (options.selection) {
        // Page number
        if (!isNaN(options.selection)) {
          rows = rows.concat(this.pages[options.selection - 1]);
        } else if (Array.isArray(options.selection)) {
          // Array of page numbers
          for (i = 0; i < options.selection.length; i++) {
            rows = rows.concat(this.pages[options.selection[i] - 1]);
          }
        }
      } else {
        rows = rows.concat(this.activeRows);
      }

      // Only proceed if we have data
      if (rows.length) {
        if (options.type === "txt" || options.type === "csv") {
          str = "";
          for (i = 0; i < rows.length; i++) {
            for (x = 0; x < rows[i].cells.length; x++) {
              // Check for column skip and visibility
              if (!options.skipColumn.includes(headers[x].originalCellIndex) && this.columns(headers[x].originalCellIndex).visible()) {
                let text = rows[i].cells[x].textContent;
                text = text.trim();
                text = text.replace(/\s{2,}/g, ' ');
                text = text.replace(/\n/g, '  ');
                text = text.replace(/"/g, '""');
                //have to manually encode "#" as encodeURI leaves it as is.
                text = text.replace(/#/g, "%23");
                if (text.includes(",")) text = `"${text}"`;
                str += text + options.columnDelimiter;
              }
            }
            // Remove trailing column delimiter
            str = str.trim().substring(0, str.length - 1);

            // Apply line delimiter
            str += options.lineDelimiter;
          }

          // Remove trailing line delimiter
          str = str.trim().substring(0, str.length - 1);
          if (options.download) {
            str = `data:text/csv;charset=utf-8,${str}`;
          }
        } else if (options.type === "sql") {
          // Begin INSERT statement
          str = `INSERT INTO \`${options.tableName}\` (`;

          // Convert table headings to column names
          for (i = 0; i < headers.length; i++) {
            // Check for column skip and column visibility
            if (!options.skipColumn.includes(headers[i].originalCellIndex) && this.columns(headers[i].originalCellIndex).visible()) {
              str += `\`${headers[i].textContent}\`,`;
            }
          }

          // Remove trailing comma
          str = str.trim().substring(0, str.length - 1);

          // Begin VALUES
          str += ") VALUES ";

          // Iterate rows and convert cell data to column values
          for (i = 0; i < rows.length; i++) {
            str += "(";
            for (x = 0; x < rows[i].cells.length; x++) {
              // Check for column skip and column visibility
              if (!options.skipColumn.includes(headers[x].originalCellIndex) && this.columns(headers[x].originalCellIndex).visible()) {
                str += `"${rows[i].cells[x].textContent}",`;
              }
            }

            // Remove trailing comma
            str = str.trim().substring(0, str.length - 1);

            // end VALUES
            str += "),";
          }

          // Remove trailing comma
          str = str.trim().substring(0, str.length - 1);

          // Add trailing colon
          str += ";";
          if (options.download) {
            str = `data:application/sql;charset=utf-8,${str}`;
          }
        } else if (options.type === "json") {
          // Iterate rows
          for (x = 0; x < rows.length; x++) {
            arr[x] = arr[x] || {};
            // Iterate columns
            for (i = 0; i < headers.length; i++) {
              // Check for column skip and column visibility
              if (!options.skipColumn.includes(headers[i].originalCellIndex) && this.columns(headers[i].originalCellIndex).visible()) {
                arr[x][headers[i].textContent] = rows[x].cells[i].textContent;
              }
            }
          }

          // Convert the array of objects to JSON string
          str = JSON.stringify(arr, options.replacer, options.space);
          if (options.download) {
            str = `data:application/json;charset=utf-8,${str}`;
          }
        }

        // Download
        if (options.download) {
          // Filename
          options.filename = options.filename || "datatable_export";
          options.filename += `.${options.type}`;
          str = encodeURI(str);

          // Create a link to trigger the download
          link = document.createElement("a");
          link.href = str;
          link.download = options.filename;

          // Append the link
          document.body.appendChild(link);

          // Trigger the download
          link.click();

          // Remove the link
          document.body.removeChild(link);
        }
        return str;
      }
    }
    return false;
  }

  /**
   * Import data to the table
   * @param  {Object} userOptions User options
   * @return {Boolean}
   */
  import(userOptions) {
    let obj = false;
    const defaults = {
      // csv
      lineDelimiter: "\n",
      columnDelimiter: ","
    };

    // Check for the options object
    if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isObject)(userOptions)) {
      return false;
    }
    const options = {
      ...defaults,
      ...userOptions
    };
    if (options.data.length || (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isObject)(options.data)) {
      // Import CSV
      if (options.type === "csv") {
        obj = {
          data: []
        };

        // Split the string into rows
        const rows = options.data.split(options.lineDelimiter);
        if (rows.length) {
          if (options.headings) {
            obj.headings = rows[0].split(options.columnDelimiter);
            rows.shift();
          }
          rows.forEach((row, i) => {
            obj.data[i] = [];

            // Split the rows into values
            const values = row.split(options.columnDelimiter);
            if (values.length) {
              values.forEach(value => {
                obj.data[i].push(value);
              });
            }
          });
        }
      } else if (options.type === "json") {
        const json = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isJson)(options.data);

        // Valid JSON string
        if (json) {
          obj = {
            headings: [],
            data: []
          };
          json.forEach((data, i) => {
            obj.data[i] = [];
            Object.entries(data).forEach(([column, value]) => {
              if (!obj.headings.includes(column)) {
                obj.headings.push(column);
              }
              obj.data[i].push(value);
            });
          });
        } else {
          // console.warn("That's not valid JSON!")
        }
      }
      if ((0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isObject)(options.data)) {
        obj = options.data;
      }
      if (obj) {
        // Add the rows
        this.insert(obj);
      }
    }
    return false;
  }

  /**
   * Print the table
   * @return {void}
   */
  print() {
    const headings = this.activeHeadings;
    const rows = this.activeRows;
    const table = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("table");
    const thead = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("thead");
    const tbody = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("tbody");
    const tr = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("tr");
    headings.forEach(th => {
      tr.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("th", {
        html: th.textContent
      }));
    });
    thead.appendChild(tr);
    rows.forEach(row => {
      const tr = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("tr");
      Array.from(row.cells).forEach(cell => {
        tr.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("td", {
          html: cell.textContent
        }));
      });
      tbody.appendChild(tr);
    });
    table.appendChild(thead);
    table.appendChild(tbody);

    // Open new window
    const w = window.open();

    // Append the table to the body
    w.document.body.appendChild(table);

    // Print
    w.print();
  }

  /**
   * Show a message in the table
   * @param {string} message
   */
  setMessage(message) {
    let colspan = 1;
    if (this.hasRows) {
      colspan = this.data[0].cells.length;
    } else if (this.activeHeadings.length) {
      colspan = this.activeHeadings.length;
    }
    this.wrapper.classList.add("dataTable-empty");
    if (this.label) {
      this.label.innerHTML = "";
    }
    this.totalPages = 0;
    this.render("pager");
    this.clear((0,_helpers__WEBPACK_IMPORTED_MODULE_4__.createElement)("tr", {
      html: `<td class="dataTables-empty" colspan="${colspan}">${message}</td>`
    }));
  }

  /**
   * Columns API access
   * @return {Object} new Columns instance
   */
  columns(columns) {
    return new _columns__WEBPACK_IMPORTED_MODULE_1__.Columns(this, columns);
  }

  /**
   * Rows API access
   * @return {Object} new Rows instance
   */
  rows(rows) {
    return new _rows__WEBPACK_IMPORTED_MODULE_0__.Rows(this, rows);
  }

  /**
   * Add custom event listener
   * @param  {String} event
   * @param  {Function} callback
   * @return {Void}
   */
  on(event, callback) {
    this.events = this.events || {};
    this.events[event] = this.events[event] || [];
    this.events[event].push(callback);
  }

  /**
   * Remove custom event listener
   * @param  {String} event
   * @param  {Function} callback
   * @return {Void}
   */
  off(event, callback) {
    this.events = this.events || {};
    if (event in this.events === false) return;
    this.events[event].splice(this.events[event].indexOf(callback), 1);
  }

  /**
   * Fire custom event
   * @param  {String} event
   * @return {Void}
   */
  emit(event) {
    this.events = this.events || {};
    if (event in this.events === false) return;
    for (let i = 0; i < this.events[event].length; i++) {
      this.events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
    }
  }
}

/***/ }),

/***/ 24003:
/*!*******************************************************!*\
  !*** ./node_modules/simple-datatables/src/helpers.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   button: () => (/* binding */ button),
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   flush: () => (/* binding */ flush),
/* harmony export */   isJson: () => (/* binding */ isJson),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   sortItems: () => (/* binding */ sortItems),
/* harmony export */   truncate: () => (/* binding */ truncate)
/* harmony export */ });
/**
 * Check is item is object
 * @return {Boolean}
 */
const isObject = val => Object.prototype.toString.call(val) === "[object Object]";

/**
 * Check for valid JSON string
 * @param  {String}   str
 * @return {Boolean|Array|Object}
 */
const isJson = str => {
  let t = !1;
  try {
    t = JSON.parse(str);
  } catch (e) {
    return !1;
  }
  return !(null === t || !Array.isArray(t) && !isObject(t)) && t;
};

/**
 * Create DOM element node
 * @param  {String}   nodeName nodeName
 * @param  {Object}   attrs properties and attributes
 * @return {Object}
 */
const createElement = (nodeName, attrs) => {
  const dom = document.createElement(nodeName);
  if (attrs && "object" == typeof attrs) {
    for (const attr in attrs) {
      if ("html" === attr) {
        dom.innerHTML = attrs[attr];
      } else {
        dom.setAttribute(attr, attrs[attr]);
      }
    }
  }
  return dom;
};
const flush = el => {
  if (el instanceof NodeList) {
    el.forEach(e => flush(e));
  } else {
    el.innerHTML = "";
  }
};

/**
 * Create button helper
 * @param  {String}   class
 * @param  {Number}   page
 * @param  {String}   text
 * @return {Object}
 */
const button = (className, page, text) => createElement("li", {
  class: className,
  html: `<a href="#" data-page="${page}">${text}</a>`
});

/**
 * Bubble sort algorithm
 */
const sortItems = (a, b) => {
  let c;
  let d;
  if (1 === b) {
    c = 0;
    d = a.length;
  } else {
    if (b === -1) {
      c = a.length - 1;
      d = -1;
    }
  }
  for (let e = !0; e;) {
    e = !1;
    for (let f = c; f != d; f += b) {
      if (a[f + b] && a[f].value > a[f + b].value) {
        const g = a[f];
        const h = a[f + b];
        const i = g;
        a[f] = h;
        a[f + b] = i;
        e = !0;
      }
    }
  }
  return a;
};

/**
 * Pager truncation algorithm
 */
const truncate = (a, b, c, d, ellipsis) => {
  d = d || 2;
  let j;
  const e = 2 * d;
  let f = b - d;
  let g = b + d;
  const h = [];
  const i = [];
  if (b < 4 - d + e) {
    g = 3 + e;
  } else if (b > c - (3 - d + e)) {
    f = c - (2 + e);
  }
  for (let k = 1; k <= c; k++) {
    if (1 == k || k == c || k >= f && k <= g) {
      const l = a[k - 1];
      l.classList.remove("active");
      h.push(l);
    }
  }
  h.forEach(c => {
    const d = c.children[0].getAttribute("data-page");
    if (j) {
      const e = j.children[0].getAttribute("data-page");
      if (d - e == 2) i.push(a[e]);else if (d - e != 1) {
        const f = createElement("li", {
          class: "ellipsis",
          html: `<a href="#">${ellipsis}</a>`
        });
        i.push(f);
      }
    }
    i.push(c);
    j = c;
  });
  return i;
};

/***/ }),

/***/ 36618:
/*!*****************************************************!*\
  !*** ./node_modules/simple-datatables/src/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataTable: () => (/* reexport safe */ _datatable__WEBPACK_IMPORTED_MODULE_0__.DataTable)
/* harmony export */ });
/* harmony import */ var _datatable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datatable */ 49521);
/*!
 *
 * Vanilla-DataTables
 * Copyright (c) 2015-2017 Karl Saunders (http://mobius.ovh)
 * Licensed under MIT (http://www.opensource.org/licenses/mit-license.php)
 *
 * Version: 1.6.14
 *
 */



/***/ }),

/***/ 62018:
/*!****************************************************!*\
  !*** ./node_modules/simple-datatables/src/rows.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Rows: () => (/* binding */ Rows)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ 24003);

/**
 * Rows API
 * @param {Object} instance DataTable instance
 * @param {Array} rows
 */
class Rows {
  constructor(dt, rows) {
    this.dt = dt;
    this.rows = rows;
    return this;
  }

  /**
   * Build a new row
   * @param  {Array} row
   * @return {HTMLElement}
   */
  build(row) {
    const tr = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr");
    let headings = this.dt.headings;
    if (!headings.length) {
      headings = row.map(() => "");
    }
    headings.forEach((h, i) => {
      const td = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)("td");

      // Fixes #29
      if (!row[i] || !row[i].length) {
        row[i] = "";
      }
      td.innerHTML = row[i];
      td.data = row[i];
      tr.appendChild(td);
    });
    return tr;
  }
  render(row) {
    return row;
  }

  /**
   * Add new row
   * @param {Array} select
   */
  add(data) {
    if (Array.isArray(data)) {
      const dt = this.dt;
      // Check for multiple rows
      if (Array.isArray(data[0])) {
        data.forEach(row => {
          dt.data.push(this.build(row));
        });
      } else {
        dt.data.push(this.build(data));
      }

      // We may have added data to an empty table
      if (dt.data.length) {
        dt.hasRows = true;
      }
      this.update();
      dt.columns().rebuild();
    }
  }

  /**
   * Remove row(s)
   * @param  {Array|Number} select
   * @return {Void}
   */
  remove(select) {
    const dt = this.dt;
    if (Array.isArray(select)) {
      // Remove in reverse otherwise the indexes will be incorrect
      select.sort((a, b) => b - a);
      select.forEach(row => {
        dt.data.splice(row, 1);
      });
    } else if (select == 'all') {
      dt.data = [];
    } else {
      dt.data.splice(select, 1);
    }

    // We may have emptied the table
    if (!dt.data.length) {
      dt.hasRows = false;
    }
    this.update();
    dt.columns().rebuild();
  }

  /**
   * Update row indexes
   * @return {Void}
   */
  update() {
    this.dt.data.forEach((row, i) => {
      row.dataIndex = i;
    });
  }
}

/***/ }),

/***/ 68193:
/*!*****************************************************!*\
  !*** ./node_modules/simple-datatables/src/table.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataToTable: () => (/* binding */ dataToTable)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ 24003);


/**
 * Parse data to HTML table
 */
const dataToTable = function (data) {
  let thead = false;
  let tbody = false;
  data = data || this.options.data;
  if (data.headings) {
    thead = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead");
    const tr = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr");
    data.headings.forEach(col => {
      const td = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
        html: col
      });
      tr.appendChild(td);
    });
    thead.appendChild(tr);
  }
  if (data.data && data.data.length) {
    tbody = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody");
    data.data.forEach(rows => {
      if (data.headings) {
        if (data.headings.length !== rows.length) {
          throw new Error("The number of rows do not match the number of headings.");
        }
      }
      const tr = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr");
      rows.forEach(value => {
        const td = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
          html: value
        });
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
  }
  if (thead) {
    if (this.table.tHead !== null) {
      this.table.removeChild(this.table.tHead);
    }
    this.table.appendChild(thead);
  }
  if (tbody) {
    if (this.table.tBodies.length) {
      this.table.removeChild(this.table.tBodies[0]);
    }
    this.table.appendChild(tbody);
  }
};

/***/ }),

/***/ 31542:
/*!************************************************************!*\
  !*** ./src/app/components/tables/basic/basic.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BasicComponent: () => (/* binding */ BasicComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_data_tables_basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/tables/basic */ 4190);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 89650);



function BasicComponent_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](9, 4, data_r4.salary, "USD", "symbol", "3.0-0"));
  }
}
function BasicComponent_tr_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r5.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](9, 4, data_r5.salary, "USD", "symbol", "3.0-0"));
  }
}
function BasicComponent_tr_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r6.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](9, 4, data_r6.salary, "USD", "symbol", "3.0-0"));
  }
}
function BasicComponent_tr_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r7.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](9, 4, data_r7.salary, "USD", "symbol", "3.0-0"));
  }
}
class BasicComponent {
  constructor() {
    this.defaultData = src_app_shared_data_tables_basic__WEBPACK_IMPORTED_MODULE_0__.DefaultTableData;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function BasicComponent_Factory(t) {
    return new (t || BasicComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BasicComponent,
    selectors: [["app-basic"]],
    decls: 113,
    vars: 4,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "#"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-download", "mr-2"], [1, "fe", "fe-filter", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-lg-12"], [1, "card", "custom-card"], [1, "card-body"], [1, "main-content-label", "mb-1"], [1, "text-muted", "card-sub-title"], [1, "table-responsive", "border"], [1, "table", "text-nowrap", "text-md-nowrap", "mg-b-0"], [4, "ngFor", "ngForOf"], [1, "table", "text-nowrap", "text-md-nowrap", "table-striped", "mg-b-0"], [1, "table-responsive"], [1, "table", "text-nowrap", "text-md-nowrap", "table-bordered", "mg-b-0"], [1, "table", "text-nowrap", "text-md-nowrap", "table-hover", "mg-b-0"], ["scope", "row"]],
    template: function BasicComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Basic Tables");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Tables");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Basic Tables");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Import ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Download Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "div", 16)(25, "div")(26, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Simple Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Using the most basic table markup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 19)(31, "table", 20)(32, "thead")(33, "tr")(34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Salary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, BasicComponent_tr_43_Template, 10, 9, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 13)(45, "div", 14)(46, "div", 15)(47, "div", 16)(48, "div")(49, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Striped Rows");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Add zebra-striping to any table row.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 19)(54, "table", 22)(55, "thead")(56, "tr")(57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Salary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, BasicComponent_tr_66_Template, 10, 9, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 13)(68, "div", 14)(69, "div", 15)(70, "div", 16)(71, "div")(72, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Bordered Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Add borders on all sides of the table and cells.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 23)(77, "table", 24)(78, "thead")(79, "tr")(80, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Salary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, BasicComponent_tr_89_Template, 10, 9, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 13)(91, "div", 14)(92, "div", 15)(93, "div", 16)(94, "div")(95, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Hoverable Rows Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "To enable a hover state on table rows.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 19)(100, "table", 25)(101, "thead")(102, "tr")(103, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Salary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](112, BasicComponent_tr_112_Template, 10, 9, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.defaultData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.defaultData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.defaultData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.defaultData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 47832:
/*!**********************************************************!*\
  !*** ./src/app/components/tables/data/data.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataComponent: () => (/* binding */ DataComponent)
/* harmony export */ });
/* harmony import */ var simple_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-datatables */ 36618);
/* harmony import */ var src_app_shared_data_tables_data_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/data/tables/data-table */ 82033);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 9578);





function DataComponent_tr_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r1.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r1.office);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r1.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind4"](11, 5, data_r1.salary, "USD", "symbol", "3.0-0"));
  }
}
class DataComponent {
  constructor() {
    this.simpleData = src_app_shared_data_tables_data_table__WEBPACK_IMPORTED_MODULE_1__.SimpleDataTable;
    this.tableData = src_app_shared_data_tables_data_table__WEBPACK_IMPORTED_MODULE_1__.DataTable2;
  }
  ngOnInit() {}
  ngAfterViewInit() {
    let dataTable1 = new simple_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTable("#myTable1", {
      searchable: true,
      fixedHeight: true
    });
  }
  static #_ = this.ɵfac = function DataComponent_Factory(t) {
    return new (t || DataComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DataComponent,
    selectors: [["app-data"]],
    decls: 74,
    vars: 25,
    consts: [[1, "page-header"], [1, "main-content-title", "tx-24", "mg-b-5"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:;"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "d-flex"], [1, "justify-content-center"], ["type", "button", 1, "btn", "btn-white", "btn-icon-text", "my-2", "mr-2"], [1, "fe", "fe-download", "mr-2"], [1, "fe", "fe-filter", "mr-2"], ["type", "button", 1, "btn", "btn-primary", "my-2", "btn-icon-text"], [1, "fe", "fe-download-cloud", "mr-2"], [1, "row", "row-sm"], [1, "col-lg-12"], [1, "card", "custom-card", "overflow-hidden"], [1, "card-body"], [1, "main-content-label", "mb-1"], [1, "text-muted", "card-sub-title"], [1, "table-responsive"], ["id", "myTable1", 1, "table", "table-bordered"], [1, "wd-20p"], [1, "wd-25p"], [1, "wd-15p"], [4, "ngFor", "ngForOf"], [1, "card", "custom-card"], ["columnMode", "force", 1, "material", 3, "rows", "rowHeight", "headerHeight", "footerHeight", "scrollbarV", "scrollbarH", "summaryRow", "summaryPosition"], ["name", "Name", 3, "width"], ["name", "Position", 3, "width"], ["name", "Office", 3, "width"], ["name", "Age", 3, "width"], ["columnMode", "force", 1, "bootstrap", 3, "rows", "rowHeight", "headerHeight", "footerHeight", "scrollbarV", "scrollbarH", "summaryRow", "summaryPosition"]],
    template: function DataComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "DataTable");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ol", 2)(5, "li", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Tables");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "DataTable");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Import ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Download Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "div", 16)(25, "div")(26, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Simple DataTable");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Searching, ordering and paging goodness will be immediately added to the table, as shown in this example.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 19)(31, "table", 20)(32, "thead")(33, "tr")(34, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Salary");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, DataComponent_tr_45_Template, 12, 10, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 13)(47, "div", 14)(48, "div", 25)(49, "div", 16)(50, "div")(51, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Ngx DataTable");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Ngx-DataTable using material theme DataTables.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "ngx-datatable", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "ngx-datatable-column", 27)(57, "ngx-datatable-column", 28)(58, "ngx-datatable-column", 29)(59, "ngx-datatable-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 13)(61, "div", 14)(62, "div", 25)(63, "div", 16)(64, "div")(65, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Ngx DataTable");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Ngx-DataTable using bootstrap theme DataTables.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "ngx-datatable", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "ngx-datatable-column", 27)(71, "ngx-datatable-column", 28)(72, "ngx-datatable-column", 29)(73, "ngx-datatable-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.simpleData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", ctx.simpleData)("rowHeight", 50)("headerHeight", 50)("footerHeight", 50)("scrollbarV", true)("scrollbarH", false)("summaryRow", true)("summaryPosition", "bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", 300);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", ctx.simpleData)("rowHeight", 50)("headerHeight", 50)("footerHeight", 50)("scrollbarV", true)("scrollbarH", false)("summaryRow", true)("summaryPosition", "bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", 300);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", 100);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DataTableColumnDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe],
    styles: [".dataTable-top,   .dataTable-bottom {\n  padding: 9px 0px !important;\n}\n  .dataTable-wrapper.no-footer .dataTable-container {\n  border: none;\n}\n  .dataTable-input,   .dataTable-selector {\n  border: 1px solid #e8e8f7;\n  border-radius: 5px;\n  outline: 0;\n}\n  .dataTable-table > tbody > tr > td,   .dataTable-table > tbody > tr > th,   .dataTable-table > tfoot > tr > td,   .dataTable-table > tfoot > tr > th,   .dataTable-table > thead > tr > td,   .dataTable-table > thead > tr > th {\n  padding: 9px 15px !important;\n}\n  table.table-bordered.dataTable-table tbody th,   table.table-bordered.dataTable-table tbody td {\n  border-bottom-width: 0;\n}\n  .dataTable-table > thead > tr > th,   .dataTable-table > tbody > tr > td {\n  border-bottom: 1px solid #e8e8f7 !important;\n}\n  table.table-bordered.dataTable-table th,   table.table-bordered.dataTable-table td {\n  border-left-width: 0;\n}\n  .table-bordered thead th,   .table-bordered thead td {\n  background: transparent;\n}\n  .dataTable-pagination {\n  white-space: nowrap;\n  border: 1px solid #dee2e6;\n}\n  .dataTable-pagination li:first-child a {\n  border-left: 0;\n}\n  .dataTable-pagination li a {\n  color: #71719a;\n  cursor: pointer;\n  background-color: #fff;\n  border-left: 1px solid #dee2e6;\n}\n  .dataTable-pagination a:hover {\n  background-color: #f0f0ff;\n  color: #4A93FE;\n  border: 1px solid #f0f0ff;\n}\n  .dataTable-pagination a {\n  margin: 0;\n}\n  .dataTable-pagination li.active a {\n  background-color: #4A93FE;\n  border-color: #4A93FE;\n  color: #fff;\n  cursor: pointer;\n}\n  .dataTable-pagination .active a,   .dataTable-pagination .active a:focus,   .dataTable-pagination .active a:hover {\n  background-color: #4A93FE;\n}\n  .ngx-datatable.scroll-vertical {\n  height: 80vh;\n}\n  .dataTable-container {\n  height: 100% !important;\n  width: 100%;\n  overflow: scroll;\n}\n@media (max-width: 440px) {\n    .dataTable-top > div:last-child {\n    float: left;\n  }\n}\n@media (max-width: 365px) {\n    .dataTable-pagination li {\n    width: 32px;\n  }\n}\n@media (max-width: 365px) {\n    .dataTable-pagination li {\n    width: 26px;\n  }\n    .dataTable-bottom > div:last-child {\n    float: left;\n  }\n}\n  .ngx-datatable .datatable-footer .datatable-footer-inner {\n  flex-direction: column;\n}\n  .ngx-datatable.material .datatable-footer .page-count {\n  line-height: initial;\n}\n  .ngx-datatable.material .datatable-footer .datatable-pager {\n  \n\n  width: 98%;\n  margin: 0 10px;\n}\n  .ngx-datatable .datatable-footer .datatable-pager {\n  text-align: center !important;\n}\n  .ngx-datatable .datatable-footer .datatable-pager .pager li,   .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n  outline: none;\n  width: 24px;\n}\n  .datatable-body {\n  height: 400px;\n}\n  .datatable-footer-inner {\n  height: 70px;\n}\n  .ngx-datatable.bootstrap .datatable-footer .page-count {\n  line-height: initial;\n}\n  .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li {\n  margin: 6px 0px;\n}\n@media (max-width: 600px) {\n    .datatable-header-cell.resizeable.sortable {\n    width: auto !important;\n    overflow-x: hidden;\n  }\n    .datatable-body-cell.sort-active {\n    width: 100% !important;\n  }\n    .ngx-datatable.scroll-vertical .datatable-body {\n    overflow: hidden;\n  }\n}\n@media (max-width: 339px) {\n    .ngx-datatable .datatable-footer .datatable-pager .pager {\n    display: flex !important;\n  }\n}\n  .ngx-datatable.material .datatable-header .datatable-header-cell {\n  font-size: 13px;\n}\n  .datatable-header-cell-label.draggable {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90YWJsZXMvZGF0YS9kYXRhLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vTGV2aXRlRnJvbnRlbmQlMjAyL3NyYy9hcHAvY29tcG9uZW50cy90YWJsZXMvZGF0YS9kYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJOztFQUVJLDJCQUFBO0FDQVI7QURFSTtFQUNJLFlBQUE7QUNBUjtBREVJOztFQUVJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQVI7QURJSTs7Ozs7O0VBTUksNEJBQUE7QUNGUjtBREtJOztFQUVJLHNCQUFBO0FDSFI7QURLSTs7RUFFSSwyQ0FBQTtBQ0hSO0FETUk7O0VBRUksb0JBQUE7QUNKUjtBRE9JOztFQUVJLHVCQUFBO0FDTFI7QURPSTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7QUNMUjtBRE9JO0VBQ0ksY0FBQTtBQ0xSO0FET0k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNMUjtBRE9JO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNMUjtBRE9JO0VBQ0ksU0FBQTtBQ0xSO0FET0k7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNMUjtBRE9JOzs7RUFHSSx5QkFBQTtBQ0xSO0FEUUk7RUFDSSxZQUFBO0FDTlI7QURTSTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDUFI7QURVSTtFQUNJO0lBQ0ksV0FBQTtFQ1JWO0FBQ0Y7QURXSTtFQUNJO0lBQ0ksV0FBQTtFQ1RWO0FBQ0Y7QURhSTtFQUNJO0lBQ0ksV0FBQTtFQ1hWO0VEY007SUFDSSxXQUFBO0VDWlY7QUFDRjtBRGVJO0VBQ0ksc0JBQUE7QUNiUjtBRGdCUTtFQUNJLG9CQUFBO0FDZFo7QURpQlE7RUFDSSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDZlo7QURrQlE7RUFDSSw2QkFBQTtBQ2hCWjtBRG1CUTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDakJaO0FEb0JRO0VBQ0ksYUFBQTtBQ2xCWjtBRHFCUTtFQUNJLFlBQUE7QUNuQlo7QURzQlE7RUFDSSxvQkFBQTtBQ3BCWjtBRHVCUTtFQUNJLGVBQUE7QUNyQlo7QUR3Qkk7RUFDSTtJQUNJLHNCQUFBO0lBQ0Esa0JBQUE7RUN0QlY7RUR5Qk07SUFDSSxzQkFBQTtFQ3ZCVjtFRDBCTTtJQUNJLGdCQUFBO0VDeEJWO0FBQ0Y7QUQyQkk7RUFDSTtJQUNJLHdCQUFBO0VDekJWO0FBQ0Y7QUQ0Qkk7RUFDSSxlQUFBO0FDMUJSO0FENkJJO0VBQ0ksZUFBQTtBQzNCUiIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcbiAgICAuZGF0YVRhYmxlLXRvcCxcclxuICAgIC5kYXRhVGFibGUtYm90dG9tIHtcclxuICAgICAgICBwYWRkaW5nOiA5cHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZGF0YVRhYmxlLXdyYXBwZXIubm8tZm9vdGVyIC5kYXRhVGFibGUtY29udGFpbmVyIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuZGF0YVRhYmxlLWlucHV0LFxyXG4gICAgLmRhdGFUYWJsZS1zZWxlY3RvciB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThmNztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmRhdGFUYWJsZS10YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCxcclxuICAgIC5kYXRhVGFibGUtdGFibGUgPiB0Ym9keSA+IHRyID4gdGgsXHJcbiAgICAuZGF0YVRhYmxlLXRhYmxlID4gdGZvb3QgPiB0ciA+IHRkLFxyXG4gICAgLmRhdGFUYWJsZS10YWJsZSA+IHRmb290ID4gdHIgPiB0aCxcclxuICAgIC5kYXRhVGFibGUtdGFibGUgPiB0aGVhZCA+IHRyID4gdGQsXHJcbiAgICAuZGF0YVRhYmxlLXRhYmxlID4gdGhlYWQgPiB0ciA+IHRoIHtcclxuICAgICAgICBwYWRkaW5nOiA5cHggMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlLnRhYmxlLWJvcmRlcmVkLmRhdGFUYWJsZS10YWJsZSB0Ym9keSB0aCxcclxuICAgIHRhYmxlLnRhYmxlLWJvcmRlcmVkLmRhdGFUYWJsZS10YWJsZSB0Ym9keSB0ZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxuICAgIH1cclxuICAgIC5kYXRhVGFibGUtdGFibGUgPiB0aGVhZCA+IHRyID4gdGgsXHJcbiAgICAuZGF0YVRhYmxlLXRhYmxlID4gdGJvZHkgPiB0ciA+IHRkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZThmNyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlLnRhYmxlLWJvcmRlcmVkLmRhdGFUYWJsZS10YWJsZSB0aCxcclxuICAgIHRhYmxlLnRhYmxlLWJvcmRlcmVkLmRhdGFUYWJsZS10YWJsZSB0ZCB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYmxlLWJvcmRlcmVkIHRoZWFkIHRoLFxyXG4gICAgLnRhYmxlLWJvcmRlcmVkIHRoZWFkIHRkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgIC5kYXRhVGFibGUtcGFnaW5hdGlvbiB7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgfVxyXG4gICAgLmRhdGFUYWJsZS1wYWdpbmF0aW9uIGxpOmZpcnN0LWNoaWxkIGEge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgLmRhdGFUYWJsZS1wYWdpbmF0aW9uIGxpIGEge1xyXG4gICAgICAgIGNvbG9yOiAjNzE3MTlhO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgIH1cclxuICAgIC5kYXRhVGFibGUtcGFnaW5hdGlvbiBhOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGZmO1xyXG4gICAgICAgIGNvbG9yOiAjNEE5M0ZFO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICAjZjBmMGZmO1xyXG4gICAgfVxyXG4gICAgLmRhdGFUYWJsZS1wYWdpbmF0aW9uIGEge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIC5kYXRhVGFibGUtcGFnaW5hdGlvbiBsaS5hY3RpdmUgYSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRBOTNGRTtcclxuICAgICAgICBib3JkZXItY29sb3I6ICM0QTkzRkU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLmRhdGFUYWJsZS1wYWdpbmF0aW9uIC5hY3RpdmUgYSxcclxuICAgIC5kYXRhVGFibGUtcGFnaW5hdGlvbiAuYWN0aXZlIGE6Zm9jdXMsXHJcbiAgICAuZGF0YVRhYmxlLXBhZ2luYXRpb24gLmFjdGl2ZSBhOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEE5M0ZFO1xyXG4gICAgfVxyXG5cclxuICAgIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC12ZXJ0aWNhbCB7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgfVxyXG5cclxuICAgIC5kYXRhVGFibGUtY29udGFpbmVye1xyXG4gICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOjQ0MHB4KSB7XHJcbiAgICAgICAgLmRhdGFUYWJsZS10b3AgPiBkaXY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICBcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOjM2NXB4KSB7XHJcbiAgICAgICAgLmRhdGFUYWJsZS1wYWdpbmF0aW9uIGxpe1xyXG4gICAgICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDozNjVweCkge1xyXG4gICAgICAgIC5kYXRhVGFibGUtcGFnaW5hdGlvbiBsaXtcclxuICAgICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGF0YVRhYmxlLWJvdHRvbSA+IGRpdjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtZm9vdGVyLWlubmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbiA6IGNvbHVtbiA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5wYWdlLWNvdW50IHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQgOiBpbml0aWFsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIge1xyXG4gICAgICAgICAgICAvKiBtYXJnaW46IDAgMTBweDsgKi9cclxuICAgICAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGksIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpIGEge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kYXRhdGFibGUtYm9keXtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kYXRhdGFibGUtZm9vdGVyLWlubmVye1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLnBhZ2UtY291bnR7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgdWwgbGkge1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweCAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KSB7XHJcbiAgICAgICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5yZXNpemVhYmxlLnNvcnRhYmxle1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGF0YXRhYmxlLWJvZHktY2VsbC5zb3J0LWFjdGl2ZXtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC12ZXJ0aWNhbCAuZGF0YXRhYmxlLWJvZHkge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDozMzlweCkge1xyXG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2Vye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGx7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtbGFiZWwuZHJhZ2dhYmxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxufVxyXG4iLCI6Om5nLWRlZXAgLmRhdGFUYWJsZS10b3AsXG46Om5nLWRlZXAgLmRhdGFUYWJsZS1ib3R0b20ge1xuICBwYWRkaW5nOiA5cHggMHB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmRhdGFUYWJsZS13cmFwcGVyLm5vLWZvb3RlciAuZGF0YVRhYmxlLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbjo6bmctZGVlcCAuZGF0YVRhYmxlLWlucHV0LFxuOjpuZy1kZWVwIC5kYXRhVGFibGUtc2VsZWN0b3Ige1xuICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGY3O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG91dGxpbmU6IDA7XG59XG46Om5nLWRlZXAgLmRhdGFUYWJsZS10YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCxcbjo6bmctZGVlcCAuZGF0YVRhYmxlLXRhYmxlID4gdGJvZHkgPiB0ciA+IHRoLFxuOjpuZy1kZWVwIC5kYXRhVGFibGUtdGFibGUgPiB0Zm9vdCA+IHRyID4gdGQsXG46Om5nLWRlZXAgLmRhdGFUYWJsZS10YWJsZSA+IHRmb290ID4gdHIgPiB0aCxcbjo6bmctZGVlcCAuZGF0YVRhYmxlLXRhYmxlID4gdGhlYWQgPiB0ciA+IHRkLFxuOjpuZy1kZWVwIC5kYXRhVGFibGUtdGFibGUgPiB0aGVhZCA+IHRyID4gdGgge1xuICBwYWRkaW5nOiA5cHggMTVweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIHRhYmxlLnRhYmxlLWJvcmRlcmVkLmRhdGFUYWJsZS10YWJsZSB0Ym9keSB0aCxcbjo6bmctZGVlcCB0YWJsZS50YWJsZS1ib3JkZXJlZC5kYXRhVGFibGUtdGFibGUgdGJvZHkgdGQge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xufVxuOjpuZy1kZWVwIC5kYXRhVGFibGUtdGFibGUgPiB0aGVhZCA+IHRyID4gdGgsXG46Om5nLWRlZXAgLmRhdGFUYWJsZS10YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlOGY3ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgdGFibGUudGFibGUtYm9yZGVyZWQuZGF0YVRhYmxlLXRhYmxlIHRoLFxuOjpuZy1kZWVwIHRhYmxlLnRhYmxlLWJvcmRlcmVkLmRhdGFUYWJsZS10YWJsZSB0ZCB7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xufVxuOjpuZy1kZWVwIC50YWJsZS1ib3JkZXJlZCB0aGVhZCB0aCxcbjo6bmctZGVlcCAudGFibGUtYm9yZGVyZWQgdGhlYWQgdGQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbjo6bmctZGVlcCAuZGF0YVRhYmxlLXBhZ2luYXRpb24ge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuOjpuZy1kZWVwIC5kYXRhVGFibGUtcGFnaW5hdGlvbiBsaTpmaXJzdC1jaGlsZCBhIHtcbiAgYm9yZGVyLWxlZnQ6IDA7XG59XG46Om5nLWRlZXAgLmRhdGFUYWJsZS1wYWdpbmF0aW9uIGxpIGEge1xuICBjb2xvcjogIzcxNzE5YTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZWUyZTY7XG59XG46Om5nLWRlZXAgLmRhdGFUYWJsZS1wYWdpbmF0aW9uIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGZmO1xuICBjb2xvcjogIzRBOTNGRTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmZjtcbn1cbjo6bmctZGVlcCAuZGF0YVRhYmxlLXBhZ2luYXRpb24gYSB7XG4gIG1hcmdpbjogMDtcbn1cbjo6bmctZGVlcCAuZGF0YVRhYmxlLXBhZ2luYXRpb24gbGkuYWN0aXZlIGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEE5M0ZFO1xuICBib3JkZXItY29sb3I6ICM0QTkzRkU7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46Om5nLWRlZXAgLmRhdGFUYWJsZS1wYWdpbmF0aW9uIC5hY3RpdmUgYSxcbjo6bmctZGVlcCAuZGF0YVRhYmxlLXBhZ2luYXRpb24gLmFjdGl2ZSBhOmZvY3VzLFxuOjpuZy1kZWVwIC5kYXRhVGFibGUtcGFnaW5hdGlvbiAuYWN0aXZlIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEE5M0ZFO1xufVxuOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC12ZXJ0aWNhbCB7XG4gIGhlaWdodDogODB2aDtcbn1cbjo6bmctZGVlcCAuZGF0YVRhYmxlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NDBweCkge1xuICA6Om5nLWRlZXAgLmRhdGFUYWJsZS10b3AgPiBkaXY6bGFzdC1jaGlsZCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNjVweCkge1xuICA6Om5nLWRlZXAgLmRhdGFUYWJsZS1wYWdpbmF0aW9uIGxpIHtcbiAgICB3aWR0aDogMzJweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM2NXB4KSB7XG4gIDo6bmctZGVlcCAuZGF0YVRhYmxlLXBhZ2luYXRpb24gbGkge1xuICAgIHdpZHRoOiAyNnB4O1xuICB9XG4gIDo6bmctZGVlcCAuZGF0YVRhYmxlLWJvdHRvbSA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxufVxuOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtZm9vdGVyLWlubmVyIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAucGFnZS1jb3VudCB7XG4gIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xufVxuOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIge1xuICAvKiBtYXJnaW46IDAgMTBweDsgKi9cbiAgd2lkdGg6IDk4JTtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG46Om5nLWRlZXAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpLCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkgYSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiAyNHB4O1xufVxuOjpuZy1kZWVwIC5kYXRhdGFibGUtYm9keSB7XG4gIGhlaWdodDogNDAwcHg7XG59XG46Om5nLWRlZXAgLmRhdGF0YWJsZS1mb290ZXItaW5uZXIge1xuICBoZWlnaHQ6IDcwcHg7XG59XG46Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5wYWdlLWNvdW50IHtcbiAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XG59XG46Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgdWwgbGkge1xuICBtYXJnaW46IDZweCAwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgOjpuZy1kZWVwIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwucmVzaXplYWJsZS5zb3J0YWJsZSB7XG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cbiAgOjpuZy1kZWVwIC5kYXRhdGFibGUtYm9keS1jZWxsLnNvcnQtYWN0aXZlIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5zY3JvbGwtdmVydGljYWwgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzM5cHgpIHtcbiAgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbjo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuOjpuZy1kZWVwIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtbGFiZWwuZHJhZ2dhYmxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 25728:
/*!************************************************************!*\
  !*** ./src/app/components/tables/tables-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TablesRoutingModule: () => (/* binding */ TablesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic/basic.component */ 31542);
/* harmony import */ var _data_data_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/data.component */ 47832);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51197);





const routes = [{
  path: '',
  children: [{
    path: 'basic',
    component: _basic_basic_component__WEBPACK_IMPORTED_MODULE_0__.BasicComponent
  }, {
    path: 'data',
    component: _data_data_component__WEBPACK_IMPORTED_MODULE_1__.DataComponent
  }]
}];
class TablesRoutingModule {
  static #_ = this.ɵfac = function TablesRoutingModule_Factory(t) {
    return new (t || TablesRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: TablesRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TablesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 8160:
/*!****************************************************!*\
  !*** ./src/app/components/tables/tables.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TablesModule: () => (/* binding */ TablesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic/basic.component */ 31542);
/* harmony import */ var _data_data_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/data.component */ 47832);
/* harmony import */ var _tables_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tables-routing.module */ 25728);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 9578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51197);






class TablesModule {
  static #_ = this.ɵfac = function TablesModule_Factory(t) {
    return new (t || TablesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: TablesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _tables_routing_module__WEBPACK_IMPORTED_MODULE_2__.TablesRoutingModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.NgxDatatableModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TablesModule, {
    declarations: [_basic_basic_component__WEBPACK_IMPORTED_MODULE_0__.BasicComponent, _data_data_component__WEBPACK_IMPORTED_MODULE_1__.DataComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _tables_routing_module__WEBPACK_IMPORTED_MODULE_2__.TablesRoutingModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.NgxDatatableModule]
  });
})();

/***/ }),

/***/ 4190:
/*!*********************************************!*\
  !*** ./src/app/shared/data/tables/basic.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultTable: () => (/* binding */ DefaultTable),
/* harmony export */   DefaultTableData: () => (/* binding */ DefaultTableData)
/* harmony export */ });
class DefaultTable {}
const DefaultTableData = [{
  id: 1,
  name: 'Joan Powell',
  position: 'Associate Developer',
  salary: 450870
}, {
  id: 2,
  name: 'Gavin Gibson',
  position: 'Account Manager',
  salary: 230540
}, {
  id: 3,
  name: 'Julian Kerr',
  position: 'Senior Javascript Developer',
  salary: 55300
}, {
  id: 4,
  name: 'Cedric Kelly',
  position: 'Accountant',
  salary: 234100
}, {
  id: 5,
  name: 'Samantha May',
  position: 'Junior Technical Author',
  salary: 43198
}];

/***/ }),

/***/ 82033:
/*!**************************************************!*\
  !*** ./src/app/shared/data/tables/data-table.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataTable: () => (/* binding */ DataTable),
/* harmony export */   DataTable2: () => (/* binding */ DataTable2),
/* harmony export */   SimpleDataTable: () => (/* binding */ SimpleDataTable),
/* harmony export */   ngxDatatable: () => (/* binding */ ngxDatatable)
/* harmony export */ });
class DataTable {}
const SimpleDataTable = [{
  id: 1,
  name: 'Tiger Nixon',
  position: 'System Architect',
  office: 'Edinburgh',
  age: 61,
  salary: 320800
}, {
  id: 2,
  name: 'Garrett Winters',
  position: 'Accountant',
  office: 'Tokyo',
  age: 63,
  salary: 170750
}, {
  id: 3,
  name: 'Ashton Cox',
  position: 'Junior Technical Author',
  office: 'San Francisco',
  age: 66,
  salary: 86000
}, {
  id: 4,
  name: 'Cedric Kelly',
  position: 'Senior Javascript Developer',
  office: 'Edinburgh',
  age: 22,
  salary: 433060
}, {
  id: 5,
  name: 'Airi Satou',
  position: 'Accountant',
  office: 'Tokyo',
  age: 33,
  salary: 162700
}, {
  id: 6,
  name: 'Brielle Williamson',
  position: 'Integration Specialist',
  office: 'New York',
  age: 61,
  salary: 372000
}, {
  id: 7,
  name: 'Herrod Chandler',
  position: 'Sales Assistant',
  office: 'San Francisco',
  age: 59,
  salary: 137500
}, {
  id: 8,
  name: 'Rhona Davidson',
  position: 'Integration Specialist',
  office: 'Tokyo',
  age: 55,
  salary: 327900
}, {
  id: 9,
  name: 'Colleen Hurst',
  position: 'Javascript Developer',
  office: 'San Francisco',
  age: 39,
  salary: 205500
}, {
  id: 10,
  name: 'Sonya Frost',
  position: 'Software Engineer',
  office: 'Edinburgh',
  age: 23,
  salary: 103600
}, {
  id: 11,
  name: 'Jena Gaines',
  position: 'Office Manager',
  office: 'London',
  age: 30,
  salary: 90560
}, {
  id: 12,
  name: 'Quinn Flynn',
  position: 'Support Lead',
  office: 'Edinburgh',
  age: 22,
  salary: 342000
}, {
  id: 13,
  name: 'Paul Byrd',
  position: 'Chief Financial Officer (CFO)',
  office: 'New York',
  age: 64,
  salary: 725000
}, {
  id: 14,
  name: 'Gloria Little',
  position: 'Systems Administrator',
  office: 'New York',
  age: 59,
  salary: 237500
}, {
  id: 15,
  name: 'Bradley Greer',
  position: 'Software Engineer',
  office: 'London',
  age: 41,
  salary: 132000
}, {
  id: 16,
  name: 'Dai Rios',
  position: 'Personnel Lead',
  office: 'Edinburgh',
  age: 35,
  salary: 217500
}, {
  id: 17,
  name: 'Jenette Caldwell',
  position: 'Development Lead',
  office: 'New York',
  age: 30,
  salary: 345000
}, {
  id: 18,
  name: 'Yuri Berry',
  position: 'Chief Marketing Officer (CMO)',
  office: 'New York',
  age: 40,
  salary: 675000
}, {
  id: 19,
  name: 'Caesar Vance',
  position: 'Pre-Sales Support',
  office: 'New York',
  age: 21,
  salary: 106450
}, {
  id: 20,
  name: 'Doris Wilder',
  position: 'Sales Assistant',
  office: 'Sidney',
  age: 23,
  salary: 85600
}, {
  id: 21,
  name: 'Angelica Ramos',
  position: 'Chief Executive Officer (CEO)',
  office: 'London',
  age: 47,
  salary: 1200000
}, {
  id: 22,
  name: 'Gavin Joyce',
  position: 'Developer',
  office: 'Edinburgh',
  age: 42,
  salary: 92575
}, {
  id: 23,
  name: 'Jennifer Chang',
  position: 'Regional Director',
  office: 'Singapore',
  age: 28,
  salary: 357650
}, {
  id: 24,
  name: 'Brenden Wagner',
  position: 'Software Engineer',
  office: 'San Francisco',
  age: 28,
  salary: 206850
}, {
  id: 25,
  name: 'Fiona Green',
  position: 'Chief Operating Officer (COO)',
  office: 'San Francisco',
  age: 48,
  salary: 850000
}, {
  id: 26,
  name: 'Shou Itou',
  position: 'Regional Marketing',
  office: 'Tokyo',
  age: 20,
  salary: 163000
}, {
  id: 27,
  name: 'Michelle House',
  position: 'Integration Specialist',
  office: 'Sidney',
  age: 37,
  salary: 95400
}, {
  id: 28,
  name: 'Suki Burks',
  position: 'Developer',
  office: 'London',
  age: 53,
  salary: 114500
}, {
  id: 29,
  name: 'Prescott Bartlett',
  position: 'Technical Author',
  office: 'London',
  age: 27,
  salary: 145000
}, {
  id: 30,
  name: 'Gavin Cortez',
  position: 'Team Leader',
  office: 'San Francisco',
  age: 22,
  salary: 235500
}, {
  id: 31,
  name: 'Martena Mccray',
  position: 'Post-Sales support',
  office: 'Edinburgh',
  age: 46,
  salary: 324050
}, {
  id: 32,
  name: 'Unity Butler',
  position: 'Marketing Designer',
  office: 'San Francisco',
  age: 47,
  salary: 85675
}, {
  id: 33,
  name: 'Howard Hatfield',
  position: 'Office Manager',
  office: 'San Francisco',
  age: 51,
  salary: 164500
}, {
  id: 34,
  name: 'Hope Fuentes',
  position: 'Secretary',
  office: 'San Francisco',
  age: 41,
  salary: 109850
}, {
  id: 35,
  name: 'Vivian Harrell',
  position: 'Financial Controller',
  office: 'San Francisco',
  age: 62,
  salary: 452500
}, {
  id: 36,
  name: 'Timothy Mooney',
  position: 'Office Manager',
  office: 'London',
  age: 37,
  salary: 136200
}, {
  id: 37,
  name: 'Jackson Bradshaw',
  position: 'Director',
  office: 'New York',
  age: 65,
  salary: 645750
}, {
  id: 38,
  name: 'Olivia Liang',
  position: 'Support Engineer',
  office: 'Singapore',
  age: 64,
  salary: 234500
}, {
  id: 39,
  name: 'Bruno Nash',
  position: 'Software Engineer',
  office: 'London',
  age: 38,
  salary: 163500
}, {
  id: 40,
  name: 'Sakura Yamamoto',
  position: 'Support Engineer',
  office: 'Tokyo',
  age: 37,
  salary: 139575
}, {
  id: 41,
  name: 'Thor Walton',
  position: 'Developer',
  office: 'New York',
  age: 61,
  salary: 98540
}, {
  id: 42,
  name: 'Finn Camacho',
  position: 'Support Engineer',
  office: 'San Francisco',
  age: 47,
  salary: 87500
}, {
  id: 43,
  name: 'Serge Baldwin',
  position: 'Data Coordinator',
  office: 'Singapore',
  age: 64,
  salary: 138575
}, {
  id: 44,
  name: 'Zenaida Frank',
  position: 'Software Engineer',
  office: 'New York',
  age: 63,
  salary: 125250
}, {
  id: 45,
  name: 'Zorita Serrano',
  position: 'Software Engineer',
  office: 'San Francisco',
  age: 56,
  salary: 115000
}, {
  id: 46,
  name: 'Jennifer Acosta',
  position: 'Junior Javascript Developer',
  office: 'Edinburgh',
  age: 43,
  salary: 75650
}, {
  id: 47,
  name: 'Cara Stevens',
  position: 'Sales Assistant',
  office: 'New York',
  age: 46,
  salary: 145600
}, {
  id: 48,
  name: 'Hermione Butler',
  position: 'Regional Director',
  office: 'London',
  age: 47,
  salary: 356250
}, {
  id: 49,
  name: 'Lael Greer',
  position: 'Systems Administrator',
  office: 'London',
  age: 21,
  salary: 103500
}, {
  id: 50,
  name: 'Jonas Alexander',
  position: 'Developer',
  office: 'San Francisco',
  age: 30,
  salary: 86500
}, {
  id: 51,
  name: 'Shad Decker',
  position: 'Regional Director',
  office: 'Edinburgh',
  age: 51,
  salary: 183000
}, {
  id: 52,
  name: 'Michael Bruce',
  position: 'Javascript Developer',
  office: 'Singapore',
  age: 29,
  salary: 183000
}, {
  id: 53,
  name: 'Donna Snider',
  position: 'Customer Support',
  office: 'New York',
  age: 27,
  salary: 112000
}];
class ngxDatatable {}
const DataTable2 = [{
  name: "Ethel Price",
  gender: "female",
  company: "Johnson, Johnson and Partners, LLC CMP DDC"
}, {
  name: "Claudine Neal",
  gender: "female",
  company: "Sealoud"
}, {
  name: "Beryl Rice",
  gender: "female",
  company: "Velity"
}, {
  name: "Wilder Gonzales",
  gender: "male",
  company: "Geekko"
}, {
  name: "Georgina Schultz",
  gender: "female",
  company: "Suretech"
}, {
  name: "Carroll Buchanan",
  gender: "male",
  company: "Ecosys"
}, {
  name: "Valarie Atkinson",
  gender: "female",
  company: "Hopeli"
}, {
  name: "Schroeder Mathews",
  gender: "male",
  company: "Polarium"
}, {
  name: "Lynda Mendoza",
  gender: "female",
  company: "Dogspa"
}, {
  name: "Sarah Massey",
  gender: "female",
  company: "Bisba"
}, {
  name: "Robles Boyle",
  gender: "male",
  company: "Comtract"
}, {
  name: "Evans Hickman",
  gender: "male",
  company: "Parleynet"
}, {
  name: "Dawson Barber",
  gender: "male",
  company: "Dymi"
}, {
  name: "Bruce Strong",
  gender: "male",
  company: "Xyqag"
}, {
  name: "Nellie Whitfield",
  gender: "female",
  company: "Exospace"
}, {
  name: "Jackson Macias",
  gender: "male",
  company: "Aquamate"
}, {
  name: "Pena Pena",
  gender: "male",
  company: "Quarx"
}, {
  name: "Lelia Gates",
  gender: "female",
  company: "Proxsoft"
}, {
  name: "Letitia Vasquez",
  gender: "female",
  company: "Slumberia"
}, {
  name: "Trevino Moreno",
  gender: "male",
  company: "Conjurica"
}, {
  name: "Barr Page",
  gender: "male",
  company: "Apex"
}, {
  name: "Kirkland Merrill",
  gender: "male",
  company: "Utara"
}, {
  name: "Blanche Conley",
  gender: "female",
  company: "Imkan"
}];

/***/ }),

/***/ 9578:
/*!**********************************************************************************!*\
  !*** ./node_modules/@swimlane/ngx-datatable/fesm2020/swimlane-ngx-datatable.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClickType: () => (/* binding */ ClickType),
/* harmony export */   ColumnChangesService: () => (/* binding */ ColumnChangesService),
/* harmony export */   ColumnMode: () => (/* binding */ ColumnMode),
/* harmony export */   ContextmenuType: () => (/* binding */ ContextmenuType),
/* harmony export */   DataTableBodyCellComponent: () => (/* binding */ DataTableBodyCellComponent),
/* harmony export */   DataTableBodyComponent: () => (/* binding */ DataTableBodyComponent),
/* harmony export */   DataTableBodyRowComponent: () => (/* binding */ DataTableBodyRowComponent),
/* harmony export */   DataTableColumnCellDirective: () => (/* binding */ DataTableColumnCellDirective),
/* harmony export */   DataTableColumnCellTreeToggle: () => (/* binding */ DataTableColumnCellTreeToggle),
/* harmony export */   DataTableColumnDirective: () => (/* binding */ DataTableColumnDirective),
/* harmony export */   DataTableColumnHeaderDirective: () => (/* binding */ DataTableColumnHeaderDirective),
/* harmony export */   DataTableFooterComponent: () => (/* binding */ DataTableFooterComponent),
/* harmony export */   DataTableFooterTemplateDirective: () => (/* binding */ DataTableFooterTemplateDirective),
/* harmony export */   DataTableHeaderCellComponent: () => (/* binding */ DataTableHeaderCellComponent),
/* harmony export */   DataTableHeaderComponent: () => (/* binding */ DataTableHeaderComponent),
/* harmony export */   DataTablePagerComponent: () => (/* binding */ DataTablePagerComponent),
/* harmony export */   DataTableRowWrapperComponent: () => (/* binding */ DataTableRowWrapperComponent),
/* harmony export */   DataTableSelectionComponent: () => (/* binding */ DataTableSelectionComponent),
/* harmony export */   DataTableSummaryRowComponent: () => (/* binding */ DataTableSummaryRowComponent),
/* harmony export */   DatatableComponent: () => (/* binding */ DatatableComponent),
/* harmony export */   DatatableFooterDirective: () => (/* binding */ DatatableFooterDirective),
/* harmony export */   DatatableGroupHeaderDirective: () => (/* binding */ DatatableGroupHeaderDirective),
/* harmony export */   DatatableGroupHeaderTemplateDirective: () => (/* binding */ DatatableGroupHeaderTemplateDirective),
/* harmony export */   DatatableRowDetailDirective: () => (/* binding */ DatatableRowDetailDirective),
/* harmony export */   DatatableRowDetailTemplateDirective: () => (/* binding */ DatatableRowDetailTemplateDirective),
/* harmony export */   DimensionsHelper: () => (/* binding */ DimensionsHelper),
/* harmony export */   DraggableDirective: () => (/* binding */ DraggableDirective),
/* harmony export */   Keys: () => (/* binding */ Keys),
/* harmony export */   LongPressDirective: () => (/* binding */ LongPressDirective),
/* harmony export */   NgxDatatableModule: () => (/* binding */ NgxDatatableModule),
/* harmony export */   OrderableDirective: () => (/* binding */ OrderableDirective),
/* harmony export */   ProgressBarComponent: () => (/* binding */ ProgressBarComponent),
/* harmony export */   ResizeableDirective: () => (/* binding */ ResizeableDirective),
/* harmony export */   RowHeightCache: () => (/* binding */ RowHeightCache),
/* harmony export */   ScrollbarHelper: () => (/* binding */ ScrollbarHelper),
/* harmony export */   ScrollerComponent: () => (/* binding */ ScrollerComponent),
/* harmony export */   SelectionType: () => (/* binding */ SelectionType),
/* harmony export */   SortDirection: () => (/* binding */ SortDirection),
/* harmony export */   SortType: () => (/* binding */ SortType),
/* harmony export */   VisibilityDirective: () => (/* binding */ VisibilityDirective),
/* harmony export */   adjustColumnWidths: () => (/* binding */ adjustColumnWidths),
/* harmony export */   camelCase: () => (/* binding */ camelCase),
/* harmony export */   columnGroupWidths: () => (/* binding */ columnGroupWidths),
/* harmony export */   columnTotalWidth: () => (/* binding */ columnTotalWidth),
/* harmony export */   columnsByPin: () => (/* binding */ columnsByPin),
/* harmony export */   columnsByPinArr: () => (/* binding */ columnsByPinArr),
/* harmony export */   columnsTotalWidth: () => (/* binding */ columnsTotalWidth),
/* harmony export */   deCamelCase: () => (/* binding */ deCamelCase),
/* harmony export */   deepValueGetter: () => (/* binding */ deepValueGetter),
/* harmony export */   elementsFromPoint: () => (/* binding */ elementsFromPoint),
/* harmony export */   emptyStringGetter: () => (/* binding */ emptyStringGetter),
/* harmony export */   forceFillColumnWidths: () => (/* binding */ forceFillColumnWidths),
/* harmony export */   getTotalFlexGrow: () => (/* binding */ getTotalFlexGrow),
/* harmony export */   getVendorPrefixedName: () => (/* binding */ getVendorPrefixedName),
/* harmony export */   getterForProp: () => (/* binding */ getterForProp),
/* harmony export */   groupRowsByParents: () => (/* binding */ groupRowsByParents),
/* harmony export */   id: () => (/* binding */ id),
/* harmony export */   isNullOrUndefined: () => (/* binding */ isNullOrUndefined),
/* harmony export */   nextSortDir: () => (/* binding */ nextSortDir),
/* harmony export */   numericIndexGetter: () => (/* binding */ numericIndexGetter),
/* harmony export */   optionalGetterForProp: () => (/* binding */ optionalGetterForProp),
/* harmony export */   orderByComparator: () => (/* binding */ orderByComparator),
/* harmony export */   selectRows: () => (/* binding */ selectRows),
/* harmony export */   selectRowsBetween: () => (/* binding */ selectRowsBetween),
/* harmony export */   setColumnDefaults: () => (/* binding */ setColumnDefaults),
/* harmony export */   shallowValueGetter: () => (/* binding */ shallowValueGetter),
/* harmony export */   sortRows: () => (/* binding */ sortRows),
/* harmony export */   throttle: () => (/* binding */ throttle),
/* harmony export */   throttleable: () => (/* binding */ throttleable),
/* harmony export */   translateTemplates: () => (/* binding */ translateTemplates),
/* harmony export */   translateXY: () => (/* binding */ translateXY)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 30240);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 34155);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 47530);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 21077);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 71081);








/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */
const _c0 = ["*"];
const _c1 = ["cellTemplate"];
function DataTableBodyCellComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 4)(1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableBodyCellComponent_label_1_Template_input_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onCheckboxChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.isSelected);
  }
}
function DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
  }
}
function DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
  }
}
function DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
  }
}
function DataTableBodyCellComponent_ng_container_2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableBodyCellComponent_ng_container_2_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.onTreeAction());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template, 1, 0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template, 1, 0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.treeStatus === "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "expanded" || ctx_r6.treeStatus === "disabled");
  }
}
function DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template(rf, ctx) {}
const _c2 = function (a0) {
  return {
    cellContext: a0
  };
};
function DataTableBodyCellComponent_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template", 14);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.column.treeToggleTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, ctx_r7.cellContext));
  }
}
function DataTableBodyCellComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyCellComponent_ng_container_2_button_1_Template, 5, 4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_2_Template, 1, 4, null, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.column.treeToggleTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.column.treeToggleTemplate);
  }
}
function DataTableBodyCellComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 15);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r2.sanitizedValue)("innerHTML", ctx_r2.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function DataTableBodyCellComponent_4_ng_template_0_Template(rf, ctx) {}
function DataTableBodyCellComponent_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 14, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.column.cellTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
  }
}
function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-body-cell", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_activate_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ii_r5 = restoredCtx.index;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onActivate($event, ii_r5));
    })("treeAction", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_treeAction_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onTreeAction());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("row", ctx_r3.row)("group", ctx_r3.group)("expanded", ctx_r3.expanded)("isSelected", ctx_r3.isSelected)("rowIndex", ctx_r3.rowIndex)("column", column_r4)("rowHeight", ctx_r3.rowHeight)("displayCheck", ctx_r3.displayCheck)("treeStatus", ctx_r3.treeStatus);
  }
}
function DataTableBodyRowComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template, 1, 9, "datatable-body-cell", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const colGroup_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("datatable-row-", colGroup_r1.type, " datatable-row-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0._groupStyles[colGroup_r1.type]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
  }
}
function DataTableSummaryRowComponent_datatable_body_row_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-body-row", 1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerWidth", ctx_r0.innerWidth)("offsetX", ctx_r0.offsetX)("columns", ctx_r0._internalColumns)("rowHeight", ctx_r0.rowHeight)("row", ctx_r0.summaryRow)("rowIndex", -1);
  }
}
function DataTableRowWrapperComponent_div_0_1_ng_template_0_Template(rf, ctx) {}
function DataTableRowWrapperComponent_div_0_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.groupHeader.template)("ngTemplateOutletContext", ctx_r3.groupContext);
  }
}
function DataTableRowWrapperComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_0_1_Template, 1, 2, null, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.getGroupHeaderStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.groupHeader && ctx_r0.groupHeader.template);
  }
}
function DataTableRowWrapperComponent_ng_content_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template"]);
  }
}
function DataTableRowWrapperComponent_div_2_1_ng_template_0_Template(rf, ctx) {}
function DataTableRowWrapperComponent_div_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_2_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.rowDetail.template)("ngTemplateOutletContext", ctx_r5.rowContext);
  }
}
function DataTableRowWrapperComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_2_1_Template, 1, 2, null, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx_r2.detailRowHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.rowDetail && ctx_r2.rowDetail.template);
  }
}
function DataTableBodyComponent_datatable_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-progress");
  }
}
function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-summary-row", 9);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowHeight", ctx_r4.summaryHeight)("offsetX", ctx_r4.offsetX)("innerWidth", ctx_r4.innerWidth)("rows", ctx_r4.rows)("columns", ctx_r4.columns);
  }
}
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-body-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("treeAction", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_treeAction_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.onTreeAction(group_r7));
    })("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_activate_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r1.onActivate($event, ctx_r15.indexes.first + i_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSelected", _r1.getRowSelected(group_r7))("innerWidth", ctx_r9.innerWidth)("offsetX", ctx_r9.offsetX)("columns", ctx_r9.columns)("rowHeight", ctx_r9.getRowHeight(group_r7))("row", group_r7)("rowIndex", ctx_r9.getRowIndex(group_r7))("expanded", ctx_r9.getRowExpanded(group_r7))("rowClass", ctx_r9.rowClass)("displayCheck", ctx_r9.displayCheck)("treeStatus", group_r7 && group_r7.treeStatus);
  }
}
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-body-row", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template_datatable_body_row_activate_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);
      const i_r20 = restoredCtx.index;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r1.onActivate($event, i_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r19 = ctx.$implicit;
    const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSelected", _r1.getRowSelected(row_r19))("innerWidth", ctx_r18.innerWidth)("offsetX", ctx_r18.offsetX)("columns", ctx_r18.columns)("rowHeight", ctx_r18.getRowHeight(row_r19))("row", row_r19)("group", group_r7.value)("rowIndex", ctx_r18.getRowIndex(row_r19))("expanded", ctx_r18.getRowExpanded(row_r19))("rowClass", ctx_r18.rowClass);
  }
}
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template, 1, 10, "datatable-body-row", 14);
  }
  if (rf & 2) {
    const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r7.value)("ngForTrackBy", ctx_r11.rowTrackingFn);
  }
}
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-row-wrapper", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowContextmenu", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template_datatable_row_wrapper_rowContextmenu_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r25.rowContextmenu.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template, 1, 11, "datatable-body-row", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template, 1, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groupedRows", ctx_r5.groupedRows)("innerWidth", ctx_r5.innerWidth)("ngStyle", ctx_r5.getRowsStyles(group_r7))("rowDetail", ctx_r5.rowDetail)("groupHeader", ctx_r5.groupHeader)("offsetX", ctx_r5.offsetX)("detailRowHeight", ctx_r5.getDetailRowHeight(group_r7 && group_r7[i_r8], i_r8))("row", group_r7)("expanded", ctx_r5.getRowExpanded(group_r7))("rowIndex", ctx_r5.getRowIndex(group_r7 && group_r7[i_r8]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.groupedRows)("ngIfElse", _r10);
  }
}
function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-summary-row", 16);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r6.getBottomSummaryRowStyles())("rowHeight", ctx_r6.summaryHeight)("offsetX", ctx_r6.offsetX)("innerWidth", ctx_r6.innerWidth)("rows", ctx_r6.rows)("columns", ctx_r6.columns);
  }
}
function DataTableBodyComponent_datatable_scroller_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-scroller", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function DataTableBodyComponent_datatable_scroller_3_Template_datatable_scroller_scroll_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r27.onBodyScroll($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template, 1, 5, "datatable-summary-row", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template, 4, 12, "datatable-row-wrapper", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template, 1, 6, "datatable-summary-row", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollbarV", ctx_r2.scrollbarV)("scrollbarH", ctx_r2.scrollbarH)("scrollHeight", ctx_r2.scrollHeight)("scrollWidth", ctx_r2.columnGroupWidths == null ? null : ctx_r2.columnGroupWidths.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "top");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.temp)("ngForTrackBy", ctx_r2.rowTrackingFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "bottom");
  }
}
function DataTableBodyComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 17);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r3.emptyMessage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function DataTableHeaderCellComponent_1_ng_template_0_Template(rf, ctx) {}
function DataTableHeaderCellComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableHeaderCellComponent_1_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.targetMarkerTemplate)("ngTemplateOutletContext", ctx_r0.targetMarkerContext);
  }
}
function DataTableHeaderCellComponent_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 6)(1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DataTableHeaderCellComponent_label_2_Template_input_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.select.emit(!ctx_r5.allRowsSelected));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.allRowsSelected);
  }
}
function DataTableHeaderCellComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_span_3_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onSort());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function DataTableHeaderCellComponent_4_ng_template_0_Template(rf, ctx) {}
function DataTableHeaderCellComponent_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableHeaderCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.column.headerTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
  }
}
function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-header-cell", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_resize_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const column_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onColumnResized($event, column_r3));
    })("longPressStart", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressStart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onLongPressStart($event));
    })("longPressEnd", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressEnd_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onLongPressEnd($event));
    })("sort", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_sort_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onSort($event));
    })("select", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_select_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.select.emit($event));
    })("columnContextmenu", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_columnContextmenu_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.columnContextmenu.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resizeEnabled", column_r3.resizeable)("pressModel", column_r3)("pressEnabled", ctx_r2.reorderable && column_r3.draggable)("dragX", ctx_r2.reorderable && column_r3.draggable && column_r3.dragging)("dragY", false)("dragModel", column_r3)("dragEventTarget", ctx_r2.dragEventTarget)("headerHeight", ctx_r2.headerHeight)("isTarget", column_r3.isTarget)("targetMarkerTemplate", ctx_r2.targetMarkerTemplate)("targetMarkerContext", column_r3.targetMarkerContext)("column", column_r3)("sortType", ctx_r2.sortType)("sorts", ctx_r2.sorts)("selectionType", ctx_r2.selectionType)("sortAscendingIcon", ctx_r2.sortAscendingIcon)("sortDescendingIcon", ctx_r2.sortDescendingIcon)("sortUnsetIcon", ctx_r2.sortUnsetIcon)("allRowsSelected", ctx_r2.allRowsSelected);
  }
}
function DataTableHeaderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_datatable_header_cell_1_Template, 1, 19, "datatable-header-cell", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const colGroup_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("datatable-row-" + colGroup_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0._styleByGroup[colGroup_r1.type]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
  }
}
function DataTablePagerComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_li_7_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const pg_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.selectPage(pg_r1.number));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pg_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pg_r1.number === ctx_r0.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "page " + pg_r1.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pg_r1.text, " ");
  }
}
function DataTableFooterComponent_1_ng_template_0_Template(rf, ctx) {}
const _c3 = function (a0, a1, a2, a3, a4) {
  return {
    rowCount: a0,
    pageSize: a1,
    selectedCount: a2,
    curPage: a3,
    offset: a4
  };
};
function DataTableFooterComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableFooterComponent_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.footerTemplate.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c3, ctx_r0.rowCount, ctx_r0.pageSize, ctx_r0.selectedCount, ctx_r0.curPage, ctx_r0.offset));
  }
}
function DataTableFooterComponent_div_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r4.selectedCount == null ? null : ctx_r4.selectedCount.toLocaleString(), " ", ctx_r4.selectedMessage, " / ");
  }
}
function DataTableFooterComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableFooterComponent_div_2_span_1_Template, 2, 2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1.rowCount == null ? null : ctx_r1.rowCount.toLocaleString(), " ", ctx_r1.totalMessage, " ");
  }
}
function DataTableFooterComponent_datatable_pager_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-pager", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DataTableFooterComponent_datatable_pager_3_Template_datatable_pager_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.page.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagerLeftArrowIcon", ctx_r2.pagerLeftArrowIcon)("pagerRightArrowIcon", ctx_r2.pagerRightArrowIcon)("pagerPreviousIcon", ctx_r2.pagerPreviousIcon)("pagerNextIcon", ctx_r2.pagerNextIcon)("page", ctx_r2.curPage)("size", ctx_r2.pageSize)("count", ctx_r2.rowCount)("hidden", !ctx_r2.isVisible);
  }
}
const _c4 = function (a0) {
  return {
    "selected-count": a0
  };
};
function DatatableComponent_datatable_header_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function DatatableComponent_datatable_header_1_Template_datatable_header_sort_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onColumnSort($event));
    })("resize", function DatatableComponent_datatable_header_1_Template_datatable_header_resize_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onColumnResize($event));
    })("reorder", function DatatableComponent_datatable_header_1_Template_datatable_header_reorder_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.onColumnReorder($event));
    })("select", function DatatableComponent_datatable_header_1_Template_datatable_header_select_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onHeaderSelect($event));
    })("columnContextmenu", function DatatableComponent_datatable_header_1_Template_datatable_header_columnContextmenu_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onColumnContextmenu($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sorts", ctx_r0.sorts)("sortType", ctx_r0.sortType)("scrollbarH", ctx_r0.scrollbarH)("innerWidth", ctx_r0._innerWidth)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 15, ctx_r0._offsetX))("dealsWithGroup", ctx_r0.groupedRows !== undefined)("columns", ctx_r0._internalColumns)("headerHeight", ctx_r0.headerHeight)("reorderable", ctx_r0.reorderable)("targetMarkerTemplate", ctx_r0.targetMarkerTemplate)("sortAscendingIcon", ctx_r0.cssClasses.sortAscending)("sortDescendingIcon", ctx_r0.cssClasses.sortDescending)("sortUnsetIcon", ctx_r0.cssClasses.sortUnset)("allRowsSelected", ctx_r0.allRowsSelected)("selectionType", ctx_r0.selectionType);
  }
}
function DatatableComponent_datatable_footer_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-footer", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function DatatableComponent_datatable_footer_4_Template_datatable_footer_page_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onFooterPage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowCount", ctx_r1.rowCount)("pageSize", ctx_r1.pageSize)("offset", ctx_r1.offset)("footerHeight", ctx_r1.footerHeight)("footerTemplate", ctx_r1.footer)("totalMessage", ctx_r1.messages.totalMessage)("pagerLeftArrowIcon", ctx_r1.cssClasses.pagerLeftArrow)("pagerRightArrowIcon", ctx_r1.cssClasses.pagerRightArrow)("pagerPreviousIcon", ctx_r1.cssClasses.pagerPrevious)("selectedCount", ctx_r1.selected.length)("selectedMessage", !!ctx_r1.selectionType && ctx_r1.messages.selectedMessage)("pagerNextIcon", ctx_r1.cssClasses.pagerNext);
  }
}
class ScrollbarHelper {
  constructor(document) {
    this.document = document;
    this.width = this.getWidth();
  }
  getWidth() {
    const outer = this.document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.msOverflowStyle = 'scrollbar';
    this.document.body.appendChild(outer);
    const widthNoScroll = outer.offsetWidth;
    outer.style.overflow = 'scroll';
    const inner = this.document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);
    const widthWithScroll = inner.offsetWidth;
    outer.parentNode.removeChild(outer);
    return widthNoScroll - widthWithScroll;
  }
}
ScrollbarHelper.ɵfac = function ScrollbarHelper_Factory(t) {
  return new (t || ScrollbarHelper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
};
ScrollbarHelper.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ScrollbarHelper,
  factory: ScrollbarHelper.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollbarHelper, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }];
  }, null);
})();

/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */
class DimensionsHelper {
  getDimensions(element) {
    return element.getBoundingClientRect();
  }
}
DimensionsHelper.ɵfac = function DimensionsHelper_Factory(t) {
  return new (t || DimensionsHelper)();
};
DimensionsHelper.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: DimensionsHelper,
  factory: DimensionsHelper.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DimensionsHelper, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

/**
 * service to make DatatableComponent aware of changes to
 * input bindings of DataTableColumnDirective
 */
class ColumnChangesService {
  constructor() {
    this.columnInputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  get columnInputChanges$() {
    return this.columnInputChanges.asObservable();
  }
  onInputChange() {
    this.columnInputChanges.next();
  }
}
ColumnChangesService.ɵfac = function ColumnChangesService_Factory(t) {
  return new (t || ColumnChangesService)();
};
ColumnChangesService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ColumnChangesService,
  factory: ColumnChangesService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColumnChangesService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
class DataTableFooterTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
DataTableFooterTemplateDirective.ɵfac = function DataTableFooterTemplateDirective_Factory(t) {
  return new (t || DataTableFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
DataTableFooterTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DataTableFooterTemplateDirective,
  selectors: [["", "ngx-datatable-footer-template", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableFooterTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngx-datatable-footer-template]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();

/**
 * Visibility Observer Directive
 *
 * Usage:
 *
 * 		<div
 * 			visibilityObserver
 * 			(visible)="onVisible($event)">
 * 		</div>
 *
 */
class VisibilityDirective {
  constructor(element, zone) {
    this.element = element;
    this.zone = zone;
    this.isVisible = false;
    this.visible = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {
    this.runCheck();
  }
  ngOnDestroy() {
    clearTimeout(this.timeout);
  }
  onVisibilityChange() {
    // trigger zone recalc for columns
    this.zone.run(() => {
      this.isVisible = true;
      this.visible.emit(true);
    });
  }
  runCheck() {
    const check = () => {
      // https://davidwalsh.name/offsetheight-visibility
      const {
        offsetHeight,
        offsetWidth
      } = this.element.nativeElement;
      if (offsetHeight && offsetWidth) {
        clearTimeout(this.timeout);
        this.onVisibilityChange();
      } else {
        clearTimeout(this.timeout);
        this.zone.runOutsideAngular(() => {
          this.timeout = setTimeout(() => check(), 50);
        });
      }
    };
    this.timeout = setTimeout(() => check());
  }
}
VisibilityDirective.ɵfac = function VisibilityDirective_Factory(t) {
  return new (t || VisibilityDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
VisibilityDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: VisibilityDirective,
  selectors: [["", "visibilityObserver", ""]],
  hostVars: 2,
  hostBindings: function VisibilityDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", ctx.isVisible);
    }
  },
  outputs: {
    visible: "visible"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisibilityDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[visibilityObserver]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    isVisible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.visible']
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

/**
 * Draggable Directive for Angular2
 *
 * Inspiration:
 *   https://github.com/AngularClass/angular2-examples/blob/master/rx-draggable/directives/draggable.ts
 *   http://stackoverflow.com/questions/35662530/how-to-implement-drag-and-drop-in-angular2
 *
 */
class DraggableDirective {
  constructor(element) {
    this.dragX = true;
    this.dragY = true;
    this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.isDragging = false;
    this.element = element.nativeElement;
  }
  ngOnChanges(changes) {
    if (changes['dragEventTarget'] && changes['dragEventTarget'].currentValue && this.dragModel.dragging) {
      this.onMousedown(changes['dragEventTarget'].currentValue);
    }
  }
  ngOnDestroy() {
    this._destroySubscription();
  }
  onMouseup(event) {
    if (!this.isDragging) return;
    this.isDragging = false;
    this.element.classList.remove('dragging');
    if (this.subscription) {
      this._destroySubscription();
      this.dragEnd.emit({
        event,
        element: this.element,
        model: this.dragModel
      });
    }
  }
  onMousedown(event) {
    // we only want to drag the inner header text
    const isDragElm = event.target.classList.contains('draggable');
    if (isDragElm && (this.dragX || this.dragY)) {
      event.preventDefault();
      this.isDragging = true;
      const mouseDownPos = {
        x: event.clientX,
        y: event.clientY
      };
      const mouseup = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mouseup');
      this.subscription = mouseup.subscribe(ev => this.onMouseup(ev));
      const mouseMoveSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mousemove').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(mouseup)).subscribe(ev => this.move(ev, mouseDownPos));
      this.subscription.add(mouseMoveSub);
      this.dragStart.emit({
        event,
        element: this.element,
        model: this.dragModel
      });
    }
  }
  move(event, mouseDownPos) {
    if (!this.isDragging) return;
    const x = event.clientX - mouseDownPos.x;
    const y = event.clientY - mouseDownPos.y;
    if (this.dragX) this.element.style.left = `${x}px`;
    if (this.dragY) this.element.style.top = `${y}px`;
    this.element.classList.add('dragging');
    this.dragging.emit({
      event,
      element: this.element,
      model: this.dragModel
    });
  }
  _destroySubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = undefined;
    }
  }
}
DraggableDirective.ɵfac = function DraggableDirective_Factory(t) {
  return new (t || DraggableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
DraggableDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DraggableDirective,
  selectors: [["", "draggable", ""]],
  inputs: {
    dragEventTarget: "dragEventTarget",
    dragModel: "dragModel",
    dragX: "dragX",
    dragY: "dragY"
  },
  outputs: {
    dragStart: "dragStart",
    dragging: "dragging",
    dragEnd: "dragEnd"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DraggableDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[draggable]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    dragEventTarget: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dragModel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dragX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dragY: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dragging: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class ResizeableDirective {
  constructor(element, renderer) {
    this.renderer = renderer;
    this.resizeEnabled = true;
    this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.resizing = false;
    this.element = element.nativeElement;
  }
  ngAfterViewInit() {
    const renderer2 = this.renderer;
    this.resizeHandle = renderer2.createElement('span');
    if (this.resizeEnabled) {
      renderer2.addClass(this.resizeHandle, 'resize-handle');
    } else {
      renderer2.addClass(this.resizeHandle, 'resize-handle--not-resizable');
    }
    renderer2.appendChild(this.element, this.resizeHandle);
  }
  ngOnDestroy() {
    this._destroySubscription();
    if (this.renderer.destroyNode) {
      this.renderer.destroyNode(this.resizeHandle);
    } else if (this.resizeHandle) {
      this.renderer.removeChild(this.renderer.parentNode(this.resizeHandle), this.resizeHandle);
    }
  }
  onMouseup() {
    this.resizing = false;
    if (this.subscription && !this.subscription.closed) {
      this._destroySubscription();
      this.resize.emit(this.element.clientWidth);
    }
  }
  onMousedown(event) {
    const isHandle = event.target.classList.contains('resize-handle');
    const initialWidth = this.element.clientWidth;
    const mouseDownScreenX = event.screenX;
    if (isHandle) {
      event.stopPropagation();
      this.resizing = true;
      const mouseup = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mouseup');
      this.subscription = mouseup.subscribe(ev => this.onMouseup());
      const mouseMoveSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mousemove').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(mouseup)).subscribe(e => this.move(e, initialWidth, mouseDownScreenX));
      this.subscription.add(mouseMoveSub);
    }
  }
  move(event, initialWidth, mouseDownScreenX) {
    const movementX = event.screenX - mouseDownScreenX;
    const newWidth = initialWidth + movementX;
    const overMinWidth = !this.minWidth || newWidth >= this.minWidth;
    const underMaxWidth = !this.maxWidth || newWidth <= this.maxWidth;
    if (overMinWidth && underMaxWidth) {
      this.element.style.width = `${newWidth}px`;
    }
  }
  _destroySubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = undefined;
    }
  }
}
ResizeableDirective.ɵfac = function ResizeableDirective_Factory(t) {
  return new (t || ResizeableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};
ResizeableDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ResizeableDirective,
  selectors: [["", "resizeable", ""]],
  hostVars: 2,
  hostBindings: function ResizeableDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ResizeableDirective_mousedown_HostBindingHandler($event) {
        return ctx.onMousedown($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("resizeable", ctx.resizeEnabled);
    }
  },
  inputs: {
    resizeEnabled: "resizeEnabled",
    minWidth: "minWidth",
    maxWidth: "maxWidth"
  },
  outputs: {
    resize: "resize"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizeableDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[resizeable]',
      host: {
        '[class.resizeable]': 'resizeEnabled'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, {
    resizeEnabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mousedown', ['$event']]
    }]
  });
})();
class OrderableDirective {
  constructor(differs, document) {
    this.document = document;
    this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.targetChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.differ = differs.find({}).create();
  }
  ngAfterContentInit() {
    // HACK: Investigate Better Way
    this.updateSubscriptions();
    this.draggables.changes.subscribe(this.updateSubscriptions.bind(this));
  }
  ngOnDestroy() {
    this.draggables.forEach(d => {
      d.dragStart.unsubscribe();
      d.dragging.unsubscribe();
      d.dragEnd.unsubscribe();
    });
  }
  updateSubscriptions() {
    const diffs = this.differ.diff(this.createMapDiffs());
    if (diffs) {
      const subscribe = ({
        currentValue,
        previousValue
      }) => {
        unsubscribe({
          previousValue
        });
        if (currentValue) {
          currentValue.dragStart.subscribe(this.onDragStart.bind(this));
          currentValue.dragging.subscribe(this.onDragging.bind(this));
          currentValue.dragEnd.subscribe(this.onDragEnd.bind(this));
        }
      };
      const unsubscribe = ({
        previousValue
      }) => {
        if (previousValue) {
          previousValue.dragStart.unsubscribe();
          previousValue.dragging.unsubscribe();
          previousValue.dragEnd.unsubscribe();
        }
      };
      diffs.forEachAddedItem(subscribe);
      // diffs.forEachChangedItem(subscribe.bind(this));
      diffs.forEachRemovedItem(unsubscribe);
    }
  }
  onDragStart() {
    this.positions = {};
    let i = 0;
    for (const dragger of this.draggables.toArray()) {
      const elm = dragger.element;
      const left = parseInt(elm.offsetLeft.toString(), 0);
      this.positions[dragger.dragModel.prop] = {
        left,
        right: left + parseInt(elm.offsetWidth.toString(), 0),
        index: i++,
        element: elm
      };
    }
  }
  onDragging({
    element,
    model,
    event
  }) {
    const prevPos = this.positions[model.prop];
    const target = this.isTarget(model, event);
    if (target) {
      if (this.lastDraggingIndex !== target.i) {
        this.targetChanged.emit({
          prevIndex: this.lastDraggingIndex,
          newIndex: target.i,
          initialIndex: prevPos.index
        });
        this.lastDraggingIndex = target.i;
      }
    } else if (this.lastDraggingIndex !== prevPos.index) {
      this.targetChanged.emit({
        prevIndex: this.lastDraggingIndex,
        initialIndex: prevPos.index
      });
      this.lastDraggingIndex = prevPos.index;
    }
  }
  onDragEnd({
    element,
    model,
    event
  }) {
    const prevPos = this.positions[model.prop];
    const target = this.isTarget(model, event);
    if (target) {
      this.reorder.emit({
        prevIndex: prevPos.index,
        newIndex: target.i,
        model
      });
    }
    this.lastDraggingIndex = undefined;
    element.style.left = 'auto';
  }
  isTarget(model, event) {
    let i = 0;
    const x = event.x || event.clientX;
    const y = event.y || event.clientY;
    const targets = this.document.elementsFromPoint(x, y);
    for (const prop in this.positions) {
      // current column position which throws event.
      const pos = this.positions[prop];
      // since we drag the inner span, we need to find it in the elements at the cursor
      if (model.prop !== prop && targets.find(el => el === pos.element)) {
        return {
          pos,
          i
        };
      }
      i++;
    }
  }
  createMapDiffs() {
    return this.draggables.toArray().reduce((acc, curr) => {
      acc[curr.dragModel.$$id] = curr;
      return acc;
    }, {});
  }
}
OrderableDirective.ɵfac = function OrderableDirective_Factory(t) {
  return new (t || OrderableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
};
OrderableDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: OrderableDirective,
  selectors: [["", "orderable", ""]],
  contentQueries: function OrderableDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DraggableDirective, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.draggables = _t);
    }
  },
  outputs: {
    reorder: "reorder",
    targetChanged: "targetChanged"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderableDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[orderable]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }];
  }, {
    reorder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    targetChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    draggables: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [DraggableDirective, {
        descendants: true
      }]
    }]
  });
})();
class LongPressDirective {
  constructor() {
    this.pressEnabled = true;
    this.duration = 500;
    this.longPressStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.longPressing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.longPressEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.mouseX = 0;
    this.mouseY = 0;
  }
  get press() {
    return this.pressing;
  }
  get isLongPress() {
    return this.isLongPressing;
  }
  onMouseDown(event) {
    // don't do right/middle clicks
    if (event.which !== 1 || !this.pressEnabled) return;
    // don't start drag if its on resize handle
    const target = event.target;
    if (target.classList.contains('resize-handle')) return;
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
    this.pressing = true;
    this.isLongPressing = false;
    const mouseup = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mouseup');
    this.subscription = mouseup.subscribe(ev => this.onMouseup());
    this.timeout = setTimeout(() => {
      this.isLongPressing = true;
      this.longPressStart.emit({
        event,
        model: this.pressModel
      });
      this.subscription.add((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mousemove').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(mouseup)).subscribe(mouseEvent => this.onMouseMove(mouseEvent)));
      this.loop(event);
    }, this.duration);
    this.loop(event);
  }
  onMouseMove(event) {
    if (this.pressing && !this.isLongPressing) {
      const xThres = Math.abs(event.clientX - this.mouseX) > 10;
      const yThres = Math.abs(event.clientY - this.mouseY) > 10;
      if (xThres || yThres) {
        this.endPress();
      }
    }
  }
  loop(event) {
    if (this.isLongPressing) {
      this.timeout = setTimeout(() => {
        this.longPressing.emit({
          event,
          model: this.pressModel
        });
        this.loop(event);
      }, 50);
    }
  }
  endPress() {
    clearTimeout(this.timeout);
    this.isLongPressing = false;
    this.pressing = false;
    this._destroySubscription();
    this.longPressEnd.emit({
      model: this.pressModel
    });
  }
  onMouseup() {
    this.endPress();
  }
  ngOnDestroy() {
    this._destroySubscription();
  }
  _destroySubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = undefined;
    }
  }
}
LongPressDirective.ɵfac = function LongPressDirective_Factory(t) {
  return new (t || LongPressDirective)();
};
LongPressDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: LongPressDirective,
  selectors: [["", "long-press", ""]],
  hostVars: 4,
  hostBindings: function LongPressDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function LongPressDirective_mousedown_HostBindingHandler($event) {
        return ctx.onMouseDown($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("press", ctx.press)("longpress", ctx.isLongPress);
    }
  },
  inputs: {
    pressEnabled: "pressEnabled",
    pressModel: "pressModel",
    duration: "duration"
  },
  outputs: {
    longPressStart: "longPressStart",
    longPressing: "longPressing",
    longPressEnd: "longPressEnd"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LongPressDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[long-press]'
    }]
  }], null, {
    pressEnabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pressModel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    duration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    longPressStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    longPressing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    longPressEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    press: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.press']
    }],
    isLongPress: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.longpress']
    }],
    onMouseDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mousedown', ['$event']]
    }]
  });
})();
class ScrollerComponent {
  constructor(ngZone, element, renderer) {
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.scrollbarV = false;
    this.scrollbarH = false;
    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.scrollYPos = 0;
    this.scrollXPos = 0;
    this.prevScrollYPos = 0;
    this.prevScrollXPos = 0;
    this._scrollEventListener = null;
    this.element = element.nativeElement;
  }
  ngOnInit() {
    // manual bind so we don't always listen
    if (this.scrollbarV || this.scrollbarH) {
      const renderer = this.renderer;
      this.parentElement = renderer.parentNode(renderer.parentNode(this.element));
      this._scrollEventListener = this.onScrolled.bind(this);
      this.parentElement.addEventListener('scroll', this._scrollEventListener);
    }
  }
  ngOnDestroy() {
    if (this._scrollEventListener) {
      this.parentElement.removeEventListener('scroll', this._scrollEventListener);
      this._scrollEventListener = null;
    }
  }
  setOffset(offsetY) {
    if (this.parentElement) {
      this.parentElement.scrollTop = offsetY;
    }
  }
  onScrolled(event) {
    const dom = event.currentTarget;
    requestAnimationFrame(() => {
      this.scrollYPos = dom.scrollTop;
      this.scrollXPos = dom.scrollLeft;
      this.updateOffset();
    });
  }
  updateOffset() {
    let direction;
    if (this.scrollYPos < this.prevScrollYPos) {
      direction = 'down';
    } else if (this.scrollYPos > this.prevScrollYPos) {
      direction = 'up';
    }
    this.scroll.emit({
      direction,
      scrollYPos: this.scrollYPos,
      scrollXPos: this.scrollXPos
    });
    this.prevScrollYPos = this.scrollYPos;
    this.prevScrollXPos = this.scrollXPos;
  }
}
ScrollerComponent.ɵfac = function ScrollerComponent_Factory(t) {
  return new (t || ScrollerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};
ScrollerComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ScrollerComponent,
  selectors: [["datatable-scroller"]],
  hostAttrs: [1, "datatable-scroll"],
  hostVars: 4,
  hostBindings: function ScrollerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.scrollHeight, "px")("width", ctx.scrollWidth, "px");
    }
  },
  inputs: {
    scrollbarV: "scrollbarV",
    scrollbarH: "scrollbarH",
    scrollHeight: "scrollHeight",
    scrollWidth: "scrollWidth"
  },
  outputs: {
    scroll: "scroll"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function ScrollerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-scroller',
      template: ` <ng-content></ng-content> `,
      host: {
        class: 'datatable-scroll'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, {
    scrollbarV: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollbarH: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.height.px']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.width.px']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class DatatableGroupHeaderTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
DatatableGroupHeaderTemplateDirective.ɵfac = function DatatableGroupHeaderTemplateDirective_Factory(t) {
  return new (t || DatatableGroupHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
DatatableGroupHeaderTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DatatableGroupHeaderTemplateDirective,
  selectors: [["", "ngx-datatable-group-header-template", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableGroupHeaderTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngx-datatable-group-header-template]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
class DatatableGroupHeaderDirective {
  constructor() {
    /**
     * Row height is required when virtual scroll is enabled.
     */
    this.rowHeight = 0;
    /**
     * Track toggling of group visibility
     */
    this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  get template() {
    return this._templateInput || this._templateQuery;
  }
  /**
   * Toggle the expansion of a group
   */
  toggleExpandGroup(group) {
    this.toggle.emit({
      type: 'group',
      value: group
    });
  }
  /**
   * Expand all groups
   */
  expandAllGroups() {
    this.toggle.emit({
      type: 'all',
      value: true
    });
  }
  /**
   * Collapse all groups
   */
  collapseAllGroups() {
    this.toggle.emit({
      type: 'all',
      value: false
    });
  }
}
DatatableGroupHeaderDirective.ɵfac = function DatatableGroupHeaderDirective_Factory(t) {
  return new (t || DatatableGroupHeaderDirective)();
};
DatatableGroupHeaderDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DatatableGroupHeaderDirective,
  selectors: [["ngx-datatable-group-header"]],
  contentQueries: function DatatableGroupHeaderDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DatatableGroupHeaderTemplateDirective, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
    }
  },
  inputs: {
    rowHeight: "rowHeight",
    _templateInput: ["template", "_templateInput"]
  },
  outputs: {
    toggle: "toggle"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableGroupHeaderDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ngx-datatable-group-header'
    }]
  }], null, {
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _templateInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['template']
    }],
    _templateQuery: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [DatatableGroupHeaderTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
        static: true
      }]
    }],
    toggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

/**
 * Always returns the empty string ''
 */
function emptyStringGetter() {
  return '';
}
/**
 * Returns the appropriate getter function for this kind of prop.
 * If prop == null, returns the emptyStringGetter.
 */
function getterForProp(prop) {
  if (prop == null) {
    return emptyStringGetter;
  }
  if (typeof prop === 'number') {
    return numericIndexGetter;
  } else {
    // deep or simple
    if (prop.indexOf('.') !== -1) {
      return deepValueGetter;
    } else {
      return shallowValueGetter;
    }
  }
}
/**
 * Returns the value at this numeric index.
 * @param row array of values
 * @param index numeric index
 * @returns any or '' if invalid index
 */
function numericIndexGetter(row, index) {
  if (row == null) {
    return '';
  }
  // mimic behavior of deepValueGetter
  if (!row || index == null) {
    return row;
  }
  const value = row[index];
  if (value == null) {
    return '';
  }
  return value;
}
/**
 * Returns the value of a field.
 * (more efficient than deepValueGetter)
 * @param obj object containing the field
 * @param fieldName field name string
 */
function shallowValueGetter(obj, fieldName) {
  if (obj == null) {
    return '';
  }
  if (!obj || !fieldName) {
    return obj;
  }
  const value = obj[fieldName];
  if (value == null) {
    return '';
  }
  return value;
}
/**
 * Returns a deep object given a string. zoo['animal.type']
 */
function deepValueGetter(obj, path) {
  if (obj == null) {
    return '';
  }
  if (!obj || !path) {
    return obj;
  }
  // check if path matches a root-level field
  // { "a.b.c": 123 }
  let current = obj[path];
  if (current !== undefined) {
    return current;
  }
  current = obj;
  const split = path.split('.');
  if (split.length) {
    for (let i = 0; i < split.length; i++) {
      current = current[split[i]];
      // if found undefined, return empty string
      if (current === undefined || current === null) {
        return '';
      }
    }
  }
  return current;
}
function optionalGetterForProp(prop) {
  return prop && (row => getterForProp(prop)(row, prop));
}
/**
 * This functions rearrange items by their parents
 * Also sets the level value to each of the items
 *
 * Note: Expecting each item has a property called parentId
 * Note: This algorithm will fail if a list has two or more items with same ID
 * NOTE: This algorithm will fail if there is a deadlock of relationship
 *
 * For example,
 *
 * Input
 *
 * id -> parent
 * 1  -> 0
 * 2  -> 0
 * 3  -> 1
 * 4  -> 1
 * 5  -> 2
 * 7  -> 8
 * 6  -> 3
 *
 *
 * Output
 * id -> level
 * 1      -> 0
 * --3    -> 1
 * ----6  -> 2
 * --4    -> 1
 * 2      -> 0
 * --5    -> 1
 * 7     -> 8
 *
 *
 * @param rows
 *
 */
function groupRowsByParents(rows, from, to) {
  if (from && to) {
    const nodeById = {};
    const l = rows.length;
    let node = null;
    nodeById[0] = new TreeNode(); // that's the root node
    const uniqIDs = rows.reduce((arr, item) => {
      const toValue = to(item);
      if (arr.indexOf(toValue) === -1) {
        arr.push(toValue);
      }
      return arr;
    }, []);
    for (let i = 0; i < l; i++) {
      // make TreeNode objects for each item
      nodeById[to(rows[i])] = new TreeNode(rows[i]);
    }
    for (let i = 0; i < l; i++) {
      // link all TreeNode objects
      node = nodeById[to(rows[i])];
      let parent = 0;
      const fromValue = from(node.row);
      if (!!fromValue && uniqIDs.indexOf(fromValue) > -1) {
        parent = fromValue;
      }
      node.parent = nodeById[parent];
      node.row['level'] = node.parent.row['level'] + 1;
      node.parent.children.push(node);
    }
    let resolvedRows = [];
    nodeById[0].flatten(function () {
      resolvedRows = [...resolvedRows, this.row];
    }, true);
    return resolvedRows;
  } else {
    return rows;
  }
}
class TreeNode {
  constructor(row = null) {
    if (!row) {
      row = {
        level: -1,
        treeStatus: 'expanded'
      };
    }
    this.row = row;
    this.parent = null;
    this.children = [];
  }
  flatten(f, recursive) {
    if (this.row['treeStatus'] === 'expanded') {
      for (let i = 0, l = this.children.length; i < l; i++) {
        const child = this.children[i];
        f.apply(child, Array.prototype.slice.call(arguments, 2));
        if (recursive) child.flatten.apply(child, arguments);
      }
    }
  }
}

/**
 * Converts strings from something to camel case
 * http://stackoverflow.com/questions/10425287/convert-dash-separated-string-to-camelcase
 */
function camelCase(str) {
  // Replace special characters with a space
  str = str.replace(/[^a-zA-Z0-9 ]/g, ' ');
  // put a space before an uppercase letter
  str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
  // Lower case first character and some other stuff
  str = str.replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, '').trim().toLowerCase();
  // uppercase characters preceded by a space or number
  str = str.replace(/([ 0-9]+)([a-zA-Z])/g, function (a, b, c) {
    return b.trim() + c.toUpperCase();
  });
  return str;
}
/**
 * Converts strings from camel case to words
 * http://stackoverflow.com/questions/7225407/convert-camelcasetext-to-camel-case-text
 */
function deCamelCase(str) {
  return str.replace(/([A-Z])/g, match => ` ${match}`).replace(/^./, match => match.toUpperCase());
}

/**
 * Creates a unique object id.
 * http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
 */
function id() {
  return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
}

/**
 * Sets the column defaults
 */
function setColumnDefaults(columns) {
  if (!columns) return;
  // Only one column should hold the tree view
  // Thus if multiple columns are provided with
  // isTreeColumn as true we take only the first one
  let treeColumnFound = false;
  for (const column of columns) {
    if (!column.$$id) {
      column.$$id = id();
    }
    // prop can be numeric; zero is valid not a missing prop
    // translate name => prop
    if (isNullOrUndefined(column.prop) && column.name) {
      column.prop = camelCase(column.name);
    }
    if (!column.$$valueGetter) {
      column.$$valueGetter = getterForProp(column.prop);
    }
    // format props if no name passed
    if (!isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
      column.name = deCamelCase(String(column.prop));
    }
    if (isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
      column.name = ''; // Fixes IE and Edge displaying `null`
    }

    if (!column.hasOwnProperty('resizeable')) {
      column.resizeable = true;
    }
    if (!column.hasOwnProperty('sortable')) {
      column.sortable = true;
    }
    if (!column.hasOwnProperty('draggable')) {
      column.draggable = true;
    }
    if (!column.hasOwnProperty('canAutoResize')) {
      column.canAutoResize = true;
    }
    if (!column.hasOwnProperty('width')) {
      column.width = 150;
    }
    if (!column.hasOwnProperty('isTreeColumn')) {
      column.isTreeColumn = false;
    } else {
      if (column.isTreeColumn && !treeColumnFound) {
        // If the first column with isTreeColumn is true found
        // we mark that treeCoulmn is found
        treeColumnFound = true;
      } else {
        // After that isTreeColumn property for any other column
        // will be set as false
        column.isTreeColumn = false;
      }
    }
  }
}
function isNullOrUndefined(value) {
  return value === null || value === undefined;
}
/**
 * Translates templates definitions to objects
 */
function translateTemplates(templates) {
  const result = [];
  for (const temp of templates) {
    const col = {};
    const props = Object.getOwnPropertyNames(temp);
    for (const prop of props) {
      col[prop] = temp[prop];
    }
    if (temp.headerTemplate) {
      col.headerTemplate = temp.headerTemplate;
    }
    if (temp.cellTemplate) {
      col.cellTemplate = temp.cellTemplate;
    }
    if (temp.summaryFunc) {
      col.summaryFunc = temp.summaryFunc;
    }
    if (temp.summaryTemplate) {
      col.summaryTemplate = temp.summaryTemplate;
    }
    result.push(col);
  }
  return result;
}
var ColumnMode;
(function (ColumnMode) {
  ColumnMode["standard"] = "standard";
  ColumnMode["flex"] = "flex";
  ColumnMode["force"] = "force";
})(ColumnMode || (ColumnMode = {}));
var SelectionType;
(function (SelectionType) {
  SelectionType["single"] = "single";
  SelectionType["multi"] = "multi";
  SelectionType["multiClick"] = "multiClick";
  SelectionType["cell"] = "cell";
  SelectionType["checkbox"] = "checkbox";
})(SelectionType || (SelectionType = {}));
var SortType;
(function (SortType) {
  SortType["single"] = "single";
  SortType["multi"] = "multi";
})(SortType || (SortType = {}));
var ContextmenuType;
(function (ContextmenuType) {
  ContextmenuType["header"] = "header";
  ContextmenuType["body"] = "body";
})(ContextmenuType || (ContextmenuType = {}));
class DataTableColumnHeaderDirective {
  constructor(template) {
    this.template = template;
  }
}
DataTableColumnHeaderDirective.ɵfac = function DataTableColumnHeaderDirective_Factory(t) {
  return new (t || DataTableColumnHeaderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
DataTableColumnHeaderDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DataTableColumnHeaderDirective,
  selectors: [["", "ngx-datatable-header-template", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableColumnHeaderDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngx-datatable-header-template]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
class DataTableColumnCellDirective {
  constructor(template) {
    this.template = template;
  }
}
DataTableColumnCellDirective.ɵfac = function DataTableColumnCellDirective_Factory(t) {
  return new (t || DataTableColumnCellDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
DataTableColumnCellDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DataTableColumnCellDirective,
  selectors: [["", "ngx-datatable-cell-template", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableColumnCellDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngx-datatable-cell-template]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
class DataTableColumnCellTreeToggle {
  constructor(template) {
    this.template = template;
  }
}
DataTableColumnCellTreeToggle.ɵfac = function DataTableColumnCellTreeToggle_Factory(t) {
  return new (t || DataTableColumnCellTreeToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
DataTableColumnCellTreeToggle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DataTableColumnCellTreeToggle,
  selectors: [["", "ngx-datatable-tree-toggle", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableColumnCellTreeToggle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngx-datatable-tree-toggle]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
class DataTableColumnDirective {
  constructor(columnChangesService) {
    this.columnChangesService = columnChangesService;
    this.isFirstChange = true;
  }
  get cellTemplate() {
    return this._cellTemplateInput || this._cellTemplateQuery;
  }
  get headerTemplate() {
    return this._headerTemplateInput || this._headerTemplateQuery;
  }
  get treeToggleTemplate() {
    return this._treeToggleTemplateInput || this._treeToggleTemplateQuery;
  }
  ngOnChanges() {
    if (this.isFirstChange) {
      this.isFirstChange = false;
    } else {
      this.columnChangesService.onInputChange();
    }
  }
}
DataTableColumnDirective.ɵfac = function DataTableColumnDirective_Factory(t) {
  return new (t || DataTableColumnDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColumnChangesService));
};
DataTableColumnDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DataTableColumnDirective,
  selectors: [["ngx-datatable-column"]],
  contentQueries: function DataTableColumnDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DataTableColumnCellDirective, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DataTableColumnHeaderDirective, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DataTableColumnCellTreeToggle, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._cellTemplateQuery = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._headerTemplateQuery = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._treeToggleTemplateQuery = _t.first);
    }
  },
  inputs: {
    name: "name",
    prop: "prop",
    frozenLeft: "frozenLeft",
    frozenRight: "frozenRight",
    flexGrow: "flexGrow",
    resizeable: "resizeable",
    comparator: "comparator",
    pipe: "pipe",
    sortable: "sortable",
    draggable: "draggable",
    canAutoResize: "canAutoResize",
    minWidth: "minWidth",
    width: "width",
    maxWidth: "maxWidth",
    checkboxable: "checkboxable",
    headerCheckboxable: "headerCheckboxable",
    headerClass: "headerClass",
    cellClass: "cellClass",
    isTreeColumn: "isTreeColumn",
    treeLevelIndent: "treeLevelIndent",
    summaryFunc: "summaryFunc",
    summaryTemplate: "summaryTemplate",
    _cellTemplateInput: ["cellTemplate", "_cellTemplateInput"],
    _headerTemplateInput: ["headerTemplate", "_headerTemplateInput"],
    _treeToggleTemplateInput: ["treeToggleTemplate", "_treeToggleTemplateInput"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableColumnDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ngx-datatable-column'
    }]
  }], function () {
    return [{
      type: ColumnChangesService
    }];
  }, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    prop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    frozenLeft: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    frozenRight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    flexGrow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resizeable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    comparator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pipe: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    draggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    canAutoResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    checkboxable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    headerCheckboxable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    headerClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cellClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isTreeColumn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    treeLevelIndent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    summaryFunc: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    summaryTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _cellTemplateInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cellTemplate']
    }],
    _cellTemplateQuery: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [DataTableColumnCellDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
        static: true
      }]
    }],
    _headerTemplateInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['headerTemplate']
    }],
    _headerTemplateQuery: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [DataTableColumnHeaderDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
        static: true
      }]
    }],
    _treeToggleTemplateInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['treeToggleTemplate']
    }],
    _treeToggleTemplateQuery: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [DataTableColumnCellTreeToggle, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
        static: true
      }]
    }]
  });
})();
class DatatableRowDetailTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
DatatableRowDetailTemplateDirective.ɵfac = function DatatableRowDetailTemplateDirective_Factory(t) {
  return new (t || DatatableRowDetailTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
DatatableRowDetailTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DatatableRowDetailTemplateDirective,
  selectors: [["", "ngx-datatable-row-detail-template", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableRowDetailTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngx-datatable-row-detail-template]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
class DatatableRowDetailDirective {
  constructor() {
    /**
     * The detail row height is required especially
     * when virtual scroll is enabled.
     */
    this.rowHeight = 0;
    /**
     * Row detail row visbility was toggled.
     */
    this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  get template() {
    return this._templateInput || this._templateQuery;
  }
  /**
   * Toggle the expansion of the row
   */
  toggleExpandRow(row) {
    this.toggle.emit({
      type: 'row',
      value: row
    });
  }
  /**
   * API method to expand all the rows.
   */
  expandAllRows() {
    this.toggle.emit({
      type: 'all',
      value: true
    });
  }
  /**
   * API method to collapse all the rows.
   */
  collapseAllRows() {
    this.toggle.emit({
      type: 'all',
      value: false
    });
  }
}
DatatableRowDetailDirective.ɵfac = function DatatableRowDetailDirective_Factory(t) {
  return new (t || DatatableRowDetailDirective)();
};
DatatableRowDetailDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DatatableRowDetailDirective,
  selectors: [["ngx-datatable-row-detail"]],
  contentQueries: function DatatableRowDetailDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DatatableRowDetailTemplateDirective, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
    }
  },
  inputs: {
    rowHeight: "rowHeight",
    _templateInput: ["template", "_templateInput"]
  },
  outputs: {
    toggle: "toggle"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableRowDetailDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ngx-datatable-row-detail'
    }]
  }], null, {
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _templateInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['template']
    }],
    _templateQuery: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [DatatableRowDetailTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
        static: true
      }]
    }],
    toggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class DatatableFooterDirective {
  get template() {
    return this._templateInput || this._templateQuery;
  }
}
DatatableFooterDirective.ɵfac = function DatatableFooterDirective_Factory(t) {
  return new (t || DatatableFooterDirective)();
};
DatatableFooterDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DatatableFooterDirective,
  selectors: [["ngx-datatable-footer"]],
  contentQueries: function DatatableFooterDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DataTableFooterTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
    }
  },
  inputs: {
    footerHeight: "footerHeight",
    totalMessage: "totalMessage",
    selectedMessage: "selectedMessage",
    pagerLeftArrowIcon: "pagerLeftArrowIcon",
    pagerRightArrowIcon: "pagerRightArrowIcon",
    pagerPreviousIcon: "pagerPreviousIcon",
    pagerNextIcon: "pagerNextIcon",
    _templateInput: ["template", "_templateInput"]
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableFooterDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ngx-datatable-footer'
    }]
  }], null, {
    footerHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    totalMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerLeftArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerRightArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerPreviousIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerNextIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _templateInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['template']
    }],
    _templateQuery: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [DataTableFooterTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }]
  });
})();

/**
 * Returns the columns by pin.
 */
function columnsByPin(cols) {
  const ret = {
    left: [],
    center: [],
    right: []
  };
  if (cols) {
    for (const col of cols) {
      if (col.frozenLeft) {
        ret.left.push(col);
      } else if (col.frozenRight) {
        ret.right.push(col);
      } else {
        ret.center.push(col);
      }
    }
  }
  return ret;
}
/**
 * Returns the widths of all group sets of a column
 */
function columnGroupWidths(groups, all) {
  return {
    left: columnTotalWidth(groups.left),
    center: columnTotalWidth(groups.center),
    right: columnTotalWidth(groups.right),
    total: Math.floor(columnTotalWidth(all))
  };
}
/**
 * Calculates the total width of all columns and their groups
 */
function columnTotalWidth(columns, prop) {
  let totalWidth = 0;
  if (columns) {
    for (const c of columns) {
      const has = prop && c[prop];
      const width = has ? c[prop] : c.width;
      totalWidth = totalWidth + parseFloat(width);
    }
  }
  return totalWidth;
}
/**
 * Calculates the total width of all columns and their groups
 */
function columnsTotalWidth(columns, prop) {
  let totalWidth = 0;
  for (const column of columns) {
    const has = prop && column[prop];
    totalWidth = totalWidth + (has ? column[prop] : column.width);
  }
  return totalWidth;
}
function columnsByPinArr(val) {
  const colsByPinArr = [];
  const colsByPin = columnsByPin(val);
  colsByPinArr.push({
    type: 'left',
    columns: colsByPin['left']
  });
  colsByPinArr.push({
    type: 'center',
    columns: colsByPin['center']
  });
  colsByPinArr.push({
    type: 'right',
    columns: colsByPin['right']
  });
  return colsByPinArr;
}

/**
 * This object contains the cache of the various row heights that are present inside
 * the data table.   Its based on Fenwick tree data structure that helps with
 * querying sums that have time complexity of log n.
 *
 * Fenwick Tree Credits: http://petr-mitrichev.blogspot.com/2013/05/fenwick-tree-range-updates.html
 * https://github.com/mikolalysenko/fenwick-tree
 *
 */
class RowHeightCache {
  constructor() {
    /**
     * Tree Array stores the cumulative information of the row heights to perform efficient
     * range queries and updates.  Currently the tree is initialized to the base row
     * height instead of the detail row height.
     */
    this.treeArray = [];
  }
  /**
   * Clear the Tree array.
   */
  clearCache() {
    this.treeArray = [];
  }
  /**
   * Initialize the Fenwick tree with row Heights.
   *
   * @param rows The array of rows which contain the expanded status.
   * @param rowHeight The row height.
   * @param detailRowHeight The detail row height.
   */
  initCache(details) {
    const {
      rows,
      rowHeight,
      detailRowHeight,
      externalVirtual,
      rowCount,
      rowIndexes,
      rowExpansions
    } = details;
    const isFn = typeof rowHeight === 'function';
    const isDetailFn = typeof detailRowHeight === 'function';
    if (!isFn && isNaN(rowHeight)) {
      throw new Error(`Row Height cache initialization failed. Please ensure that 'rowHeight' is a
        valid number or function value: (${rowHeight}) when 'scrollbarV' is enabled.`);
    }
    // Add this additional guard in case detailRowHeight is set to 'auto' as it wont work.
    if (!isDetailFn && isNaN(detailRowHeight)) {
      throw new Error(`Row Height cache initialization failed. Please ensure that 'detailRowHeight' is a
        valid number or function value: (${detailRowHeight}) when 'scrollbarV' is enabled.`);
    }
    const n = externalVirtual ? rowCount : rows.length;
    this.treeArray = new Array(n);
    for (let i = 0; i < n; ++i) {
      this.treeArray[i] = 0;
    }
    for (let i = 0; i < n; ++i) {
      const row = rows[i];
      let currentRowHeight = rowHeight;
      if (isFn) {
        currentRowHeight = rowHeight(row);
      }
      // Add the detail row height to the already expanded rows.
      // This is useful for the table that goes through a filter or sort.
      const expanded = rowExpansions.has(row);
      if (row && expanded) {
        if (isDetailFn) {
          const index = rowIndexes.get(row);
          currentRowHeight += detailRowHeight(row, index);
        } else {
          currentRowHeight += detailRowHeight;
        }
      }
      this.update(i, currentRowHeight);
    }
  }
  /**
   * Given the ScrollY position i.e. sum, provide the rowIndex
   * that is present in the current view port.  Below handles edge cases.
   */
  getRowIndex(scrollY) {
    if (scrollY === 0) return 0;
    return this.calcRowIndex(scrollY);
  }
  /**
   * When a row is expanded or rowHeight is changed, update the height.  This can
   * be utilized in future when Angular Data table supports dynamic row heights.
   */
  update(atRowIndex, byRowHeight) {
    if (!this.treeArray.length) {
      throw new Error(`Update at index ${atRowIndex} with value ${byRowHeight} failed:
        Row Height cache not initialized.`);
    }
    const n = this.treeArray.length;
    atRowIndex |= 0;
    while (atRowIndex < n) {
      this.treeArray[atRowIndex] += byRowHeight;
      atRowIndex |= atRowIndex + 1;
    }
  }
  /**
   * Range Sum query from 1 to the rowIndex
   */
  query(atIndex) {
    if (!this.treeArray.length) {
      throw new Error(`query at index ${atIndex} failed: Fenwick tree array not initialized.`);
    }
    let sum = 0;
    atIndex |= 0;
    while (atIndex >= 0) {
      sum += this.treeArray[atIndex];
      atIndex = (atIndex & atIndex + 1) - 1;
    }
    return sum;
  }
  /**
   * Find the total height between 2 row indexes
   */
  queryBetween(atIndexA, atIndexB) {
    return this.query(atIndexB) - this.query(atIndexA - 1);
  }
  /**
   * Given the ScrollY position i.e. sum, provide the rowIndex
   * that is present in the current view port.
   */
  calcRowIndex(sum) {
    if (!this.treeArray.length) return 0;
    let pos = -1;
    const dataLength = this.treeArray.length;
    // Get the highest bit for the block size.
    const highestBit = Math.pow(2, dataLength.toString(2).length - 1);
    for (let blockSize = highestBit; blockSize !== 0; blockSize >>= 1) {
      const nextPos = pos + blockSize;
      if (nextPos < dataLength && sum >= this.treeArray[nextPos]) {
        sum -= this.treeArray[nextPos];
        pos = nextPos;
      }
    }
    return pos + 1;
  }
}
const cache = {};
const testStyle = typeof document !== 'undefined' ? document.createElement('div').style : undefined;
// Get Prefix
// http://davidwalsh.name/vendor-prefix
const prefix = function () {
  const styles = typeof window !== 'undefined' ? window.getComputedStyle(document.documentElement, '') : undefined;
  const match = typeof styles !== 'undefined' ? Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) : null;
  const pre = match !== null ? match[1] : undefined;
  // tslint:disable-next-line: tsr-detect-non-literal-regexp
  const dom = typeof pre !== 'undefined' ? 'WebKit|Moz|MS|O'.match(new RegExp('(' + pre + ')', 'i'))[1] : undefined;
  return dom ? {
    dom,
    lowercase: pre,
    css: `-${pre}-`,
    js: pre[0].toUpperCase() + pre.substr(1)
  } : undefined;
}();
function getVendorPrefixedName(property) {
  const name = camelCase(property);
  if (!cache[name]) {
    if (prefix !== undefined && testStyle[prefix.css + property] !== undefined) {
      cache[name] = prefix.css + property;
    } else if (testStyle[property] !== undefined) {
      cache[name] = property;
    }
  }
  return cache[name];
}

// browser detection and prefixing tools
const transform = typeof window !== 'undefined' ? getVendorPrefixedName('transform') : undefined;
const backfaceVisibility = typeof window !== 'undefined' ? getVendorPrefixedName('backfaceVisibility') : undefined;
const hasCSSTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('transform') : undefined;
const hasCSS3DTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('perspective') : undefined;
const ua = typeof window !== 'undefined' ? window.navigator.userAgent : 'Chrome';
const isSafari = /Safari\//.test(ua) && !/Chrome\//.test(ua);
function translateXY(styles, x, y) {
  if (typeof transform !== 'undefined' && hasCSSTransforms) {
    if (!isSafari && hasCSS3DTransforms) {
      styles[transform] = `translate3d(${x}px, ${y}px, 0)`;
      styles[backfaceVisibility] = 'hidden';
    } else {
      styles[camelCase(transform)] = `translate(${x}px, ${y}px)`;
    }
  } else {
    styles.top = `${y}px`;
    styles.left = `${x}px`;
  }
}
class ProgressBarComponent {}
ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) {
  return new (t || ProgressBarComponent)();
};
ProgressBarComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProgressBarComponent,
  selectors: [["datatable-progress"]],
  decls: 3,
  vars: 0,
  consts: [["role", "progressbar", 1, "progress-linear"], [1, "container"], [1, "bar"]],
  template: function ProgressBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBarComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-progress',
      template: `
    <div class="progress-linear" role="progressbar">
      <div class="container">
        <div class="bar"></div>
      </div>
    </div>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
function selectRows(selected, row, comparefn) {
  const selectedIndex = comparefn(row, selected);
  if (selectedIndex > -1) {
    selected.splice(selectedIndex, 1);
  } else {
    selected.push(row);
  }
  return selected;
}
function selectRowsBetween(selected, rows, index, prevIndex, comparefn) {
  const reverse = index < prevIndex;
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const greater = i >= prevIndex && i <= index;
    const lesser = i <= prevIndex && i >= index;
    let range = {
      start: 0,
      end: 0
    };
    if (reverse) {
      range = {
        start: index,
        end: prevIndex
      };
    } else {
      range = {
        start: prevIndex,
        end: index + 1
      };
    }
    if (reverse && lesser || !reverse && greater) {
      // if in the positive range to be added to `selected`, and
      // not already in the selected array, add it
      if (i >= range.start && i <= range.end) {
        selected.push(row);
      }
    }
  }
  return selected;
}
var Keys;
(function (Keys) {
  Keys[Keys["up"] = 38] = "up";
  Keys[Keys["down"] = 40] = "down";
  Keys[Keys["return"] = 13] = "return";
  Keys[Keys["escape"] = 27] = "escape";
  Keys[Keys["left"] = 37] = "left";
  Keys[Keys["right"] = 39] = "right";
})(Keys || (Keys = {}));
class DataTableSelectionComponent {
  constructor() {
    this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  selectRow(event, index, row) {
    if (!this.selectEnabled) return;
    const chkbox = this.selectionType === SelectionType.checkbox;
    const multi = this.selectionType === SelectionType.multi;
    const multiClick = this.selectionType === SelectionType.multiClick;
    let selected = [];
    if (multi || chkbox || multiClick) {
      if (event.shiftKey) {
        selected = selectRowsBetween([], this.rows, index, this.prevIndex, this.getRowSelectedIdx.bind(this));
      } else if (event.ctrlKey || event.metaKey || multiClick || chkbox) {
        selected = selectRows([...this.selected], row, this.getRowSelectedIdx.bind(this));
      } else {
        selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
      }
    } else {
      selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
    }
    if (typeof this.selectCheck === 'function') {
      selected = selected.filter(this.selectCheck.bind(this));
    }
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
    this.prevIndex = index;
    this.select.emit({
      selected
    });
  }
  onActivate(model, index) {
    const {
      type,
      event,
      row
    } = model;
    const chkbox = this.selectionType === SelectionType.checkbox;
    const select = !chkbox && (type === 'click' || type === 'dblclick') || chkbox && type === 'checkbox';
    if (select) {
      this.selectRow(event, index, row);
    } else if (type === 'keydown') {
      if (event.keyCode === Keys.return) {
        this.selectRow(event, index, row);
      } else {
        this.onKeyboardFocus(model);
      }
    }
    this.activate.emit(model);
  }
  onKeyboardFocus(model) {
    const {
      keyCode
    } = model.event;
    const shouldFocus = keyCode === Keys.up || keyCode === Keys.down || keyCode === Keys.right || keyCode === Keys.left;
    if (shouldFocus) {
      const isCellSelection = this.selectionType === SelectionType.cell;
      if (!model.cellElement || !isCellSelection) {
        this.focusRow(model.rowElement, keyCode);
      } else if (isCellSelection) {
        this.focusCell(model.cellElement, model.rowElement, keyCode, model.cellIndex);
      }
    }
  }
  focusRow(rowElement, keyCode) {
    const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
    if (nextRowElement) nextRowElement.focus();
  }
  getPrevNextRow(rowElement, keyCode) {
    const parentElement = rowElement.parentElement;
    if (parentElement) {
      let focusElement;
      if (keyCode === Keys.up) {
        focusElement = parentElement.previousElementSibling;
      } else if (keyCode === Keys.down) {
        focusElement = parentElement.nextElementSibling;
      }
      if (focusElement && focusElement.children.length) {
        return focusElement.children[0];
      }
    }
  }
  focusCell(cellElement, rowElement, keyCode, cellIndex) {
    let nextCellElement;
    if (keyCode === Keys.left) {
      nextCellElement = cellElement.previousElementSibling;
    } else if (keyCode === Keys.right) {
      nextCellElement = cellElement.nextElementSibling;
    } else if (keyCode === Keys.up || keyCode === Keys.down) {
      const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
      if (nextRowElement) {
        const children = nextRowElement.getElementsByClassName('datatable-body-cell');
        if (children.length) nextCellElement = children[cellIndex];
      }
    }
    if (nextCellElement) nextCellElement.focus();
  }
  getRowSelected(row) {
    return this.getRowSelectedIdx(row, this.selected) > -1;
  }
  getRowSelectedIdx(row, selected) {
    if (!selected || !selected.length) return -1;
    const rowId = this.rowIdentity(row);
    return selected.findIndex(r => {
      const id = this.rowIdentity(r);
      return id === rowId;
    });
  }
}
DataTableSelectionComponent.ɵfac = function DataTableSelectionComponent_Factory(t) {
  return new (t || DataTableSelectionComponent)();
};
DataTableSelectionComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTableSelectionComponent,
  selectors: [["datatable-selection"]],
  inputs: {
    rows: "rows",
    selected: "selected",
    selectEnabled: "selectEnabled",
    selectionType: "selectionType",
    rowIdentity: "rowIdentity",
    selectCheck: "selectCheck"
  },
  outputs: {
    activate: "activate",
    select: "select"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function DataTableSelectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableSelectionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-selection',
      template: ` <ng-content></ng-content> `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    rows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectEnabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowIdentity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    activate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
var SortDirection;
(function (SortDirection) {
  SortDirection["asc"] = "asc";
  SortDirection["desc"] = "desc";
})(SortDirection || (SortDirection = {}));
class DataTableBodyCellComponent {
  constructor(element, cd) {
    this.cd = cd;
    this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.isFocused = false;
    this.onCheckboxChangeFn = this.onCheckboxChange.bind(this);
    this.activateFn = this.activate.emit.bind(this.activate);
    this.cellContext = {
      onCheckboxChangeFn: this.onCheckboxChangeFn,
      activateFn: this.activateFn,
      row: this.row,
      group: this.group,
      value: this.value,
      column: this.column,
      rowHeight: this.rowHeight,
      isSelected: this.isSelected,
      rowIndex: this.rowIndex,
      treeStatus: this.treeStatus,
      onTreeAction: this.onTreeAction.bind(this)
    };
    this._element = element.nativeElement;
  }
  set group(group) {
    this._group = group;
    this.cellContext.group = group;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }
  get group() {
    return this._group;
  }
  set rowHeight(val) {
    this._rowHeight = val;
    this.cellContext.rowHeight = val;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }
  get rowHeight() {
    return this._rowHeight;
  }
  set isSelected(val) {
    this._isSelected = val;
    this.cellContext.isSelected = val;
    this.cd.markForCheck();
  }
  get isSelected() {
    return this._isSelected;
  }
  set expanded(val) {
    this._expanded = val;
    this.cellContext.expanded = val;
    this.cd.markForCheck();
  }
  get expanded() {
    return this._expanded;
  }
  set rowIndex(val) {
    this._rowIndex = val;
    this.cellContext.rowIndex = val;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }
  get rowIndex() {
    return this._rowIndex;
  }
  set column(column) {
    this._column = column;
    this.cellContext.column = column;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }
  get column() {
    return this._column;
  }
  set row(row) {
    this._row = row;
    this.cellContext.row = row;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }
  get row() {
    return this._row;
  }
  set sorts(val) {
    this._sorts = val;
    this.calcSortDir = this.calcSortDir(val);
  }
  get sorts() {
    return this._sorts;
  }
  set treeStatus(status) {
    if (status !== 'collapsed' && status !== 'expanded' && status !== 'loading' && status !== 'disabled') {
      this._treeStatus = 'collapsed';
    } else {
      this._treeStatus = status;
    }
    this.cellContext.treeStatus = this._treeStatus;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }
  get treeStatus() {
    return this._treeStatus;
  }
  get columnCssClasses() {
    let cls = 'datatable-body-cell';
    if (this.column.cellClass) {
      if (typeof this.column.cellClass === 'string') {
        cls += ' ' + this.column.cellClass;
      } else if (typeof this.column.cellClass === 'function') {
        const res = this.column.cellClass({
          row: this.row,
          group: this.group,
          column: this.column,
          value: this.value,
          rowHeight: this.rowHeight
        });
        if (typeof res === 'string') {
          cls += ' ' + res;
        } else if (typeof res === 'object') {
          const keys = Object.keys(res);
          for (const k of keys) {
            if (res[k] === true) {
              cls += ` ${k}`;
            }
          }
        }
      }
    }
    if (!this.sortDir) {
      cls += ' sort-active';
    }
    if (this.isFocused) {
      cls += ' active';
    }
    if (this.sortDir === SortDirection.asc) {
      cls += ' sort-asc';
    }
    if (this.sortDir === SortDirection.desc) {
      cls += ' sort-desc';
    }
    return cls;
  }
  get width() {
    return this.column.width;
  }
  get minWidth() {
    return this.column.minWidth;
  }
  get maxWidth() {
    return this.column.maxWidth;
  }
  get height() {
    const height = this.rowHeight;
    if (isNaN(height)) {
      return height;
    }
    return height + 'px';
  }
  ngDoCheck() {
    this.checkValueUpdates();
  }
  ngOnDestroy() {
    if (this.cellTemplate) {
      this.cellTemplate.clear();
    }
  }
  checkValueUpdates() {
    let value = '';
    if (!this.row || !this.column) {
      value = '';
    } else {
      const val = this.column.$$valueGetter(this.row, this.column.prop);
      const userPipe = this.column.pipe;
      if (userPipe) {
        value = userPipe.transform(val);
      } else if (value !== undefined) {
        value = val;
      }
    }
    if (this.value !== value) {
      this.value = value;
      this.cellContext.value = value;
      this.sanitizedValue = value !== null && value !== undefined ? this.stripHtml(value) : value;
      this.cd.markForCheck();
    }
  }
  onFocus() {
    this.isFocused = true;
  }
  onBlur() {
    this.isFocused = false;
  }
  onClick(event) {
    this.activate.emit({
      type: 'click',
      event,
      row: this.row,
      group: this.group,
      rowHeight: this.rowHeight,
      column: this.column,
      value: this.value,
      cellElement: this._element
    });
  }
  onDblClick(event) {
    this.activate.emit({
      type: 'dblclick',
      event,
      row: this.row,
      group: this.group,
      rowHeight: this.rowHeight,
      column: this.column,
      value: this.value,
      cellElement: this._element
    });
  }
  onKeyDown(event) {
    const keyCode = event.keyCode;
    const isTargetCell = event.target === this._element;
    const isAction = keyCode === Keys.return || keyCode === Keys.down || keyCode === Keys.up || keyCode === Keys.left || keyCode === Keys.right;
    if (isAction && isTargetCell) {
      event.preventDefault();
      event.stopPropagation();
      this.activate.emit({
        type: 'keydown',
        event,
        row: this.row,
        group: this.group,
        rowHeight: this.rowHeight,
        column: this.column,
        value: this.value,
        cellElement: this._element
      });
    }
  }
  onCheckboxChange(event) {
    this.activate.emit({
      type: 'checkbox',
      event,
      row: this.row,
      group: this.group,
      rowHeight: this.rowHeight,
      column: this.column,
      value: this.value,
      cellElement: this._element,
      treeStatus: 'collapsed'
    });
  }
  calcSortDir(sorts) {
    if (!sorts) {
      return;
    }
    const sort = sorts.find(s => {
      return s.prop === this.column.prop;
    });
    if (sort) {
      return sort.dir;
    }
  }
  stripHtml(html) {
    if (!html.replace) {
      return html;
    }
    return html.replace(/<\/?[^>]+(>|$)/g, '');
  }
  onTreeAction() {
    this.treeAction.emit(this.row);
  }
  calcLeftMargin(column, row) {
    const levelIndent = column.treeLevelIndent != null ? column.treeLevelIndent : 50;
    return column.isTreeColumn ? row.level * levelIndent : 0;
  }
}
DataTableBodyCellComponent.ɵfac = function DataTableBodyCellComponent_Factory(t) {
  return new (t || DataTableBodyCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
DataTableBodyCellComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTableBodyCellComponent,
  selectors: [["datatable-body-cell"]],
  viewQuery: function DataTableBodyCellComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cellTemplate = _t.first);
    }
  },
  hostVars: 10,
  hostBindings: function DataTableBodyCellComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function DataTableBodyCellComponent_focus_HostBindingHandler() {
        return ctx.onFocus();
      })("blur", function DataTableBodyCellComponent_blur_HostBindingHandler() {
        return ctx.onBlur();
      })("click", function DataTableBodyCellComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("dblclick", function DataTableBodyCellComponent_dblclick_HostBindingHandler($event) {
        return ctx.onDblClick($event);
      })("keydown", function DataTableBodyCellComponent_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.columnCssClasses);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width, "px")("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("height", ctx.height);
    }
  },
  inputs: {
    displayCheck: "displayCheck",
    group: "group",
    rowHeight: "rowHeight",
    isSelected: "isSelected",
    expanded: "expanded",
    rowIndex: "rowIndex",
    column: "column",
    row: "row",
    sorts: "sorts",
    treeStatus: "treeStatus"
  },
  outputs: {
    activate: "activate",
    treeAction: "treeAction"
  },
  decls: 5,
  vars: 6,
  consts: [[1, "datatable-body-cell-label"], ["class", "datatable-checkbox", 4, "ngIf"], [4, "ngIf"], [3, "title", "innerHTML", 4, "ngIf"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "click"], ["class", "datatable-tree-button", 3, "disabled", "click", 4, "ngIf"], [1, "datatable-tree-button", 3, "disabled", "click"], ["class", "icon datatable-icon-collapse", 4, "ngIf"], ["class", "icon datatable-icon-up", 4, "ngIf"], ["class", "icon datatable-icon-down", 4, "ngIf"], [1, "icon", "datatable-icon-collapse"], [1, "icon", "datatable-icon-up"], [1, "icon", "datatable-icon-down"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "title", "innerHTML"], ["cellTemplate", ""]],
  template: function DataTableBodyCellComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyCellComponent_label_1_Template, 2, 1, "label", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableBodyCellComponent_span_3_Template, 1, 2, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableBodyCellComponent_4_Template, 2, 2, null, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", ctx.calcLeftMargin(ctx.column, ctx.row), "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.checkboxable && (!ctx.displayCheck || ctx.displayCheck(ctx.row, ctx.column, ctx.value)));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.isTreeColumn);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.column.cellTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.cellTemplate);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableBodyCellComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-body-cell',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <div class="datatable-body-cell-label" [style.margin-left.px]="calcLeftMargin(column, row)">
      <label
        *ngIf="column.checkboxable && (!displayCheck || displayCheck(row, column, value))"
        class="datatable-checkbox"
      >
        <input type="checkbox" [checked]="isSelected" (click)="onCheckboxChange($event)" />
      </label>
      <ng-container *ngIf="column.isTreeColumn">
        <button
          *ngIf="!column.treeToggleTemplate"
          class="datatable-tree-button"
          [disabled]="treeStatus === 'disabled'"
          (click)="onTreeAction()"
        >
          <span>
            <i *ngIf="treeStatus === 'loading'" class="icon datatable-icon-collapse"></i>
            <i *ngIf="treeStatus === 'collapsed'" class="icon datatable-icon-up"></i>
            <i *ngIf="treeStatus === 'expanded' || treeStatus === 'disabled'" class="icon datatable-icon-down"></i>
          </span>
        </button>
        <ng-template
          *ngIf="column.treeToggleTemplate"
          [ngTemplateOutlet]="column.treeToggleTemplate"
          [ngTemplateOutletContext]="{ cellContext: cellContext }"
        >
        </ng-template>
      </ng-container>

      <span *ngIf="!column.cellTemplate" [title]="sanitizedValue" [innerHTML]="value"> </span>
      <ng-template
        #cellTemplate
        *ngIf="column.cellTemplate"
        [ngTemplateOutlet]="column.cellTemplate"
        [ngTemplateOutletContext]="cellContext"
      >
      </ng-template>
    </div>
  `
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    displayCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    group: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    expanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    column: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    row: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sorts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    treeStatus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    activate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    treeAction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    cellTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['cellTemplate', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef,
        static: true
      }]
    }],
    columnCssClasses: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class']
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.width.px']
    }],
    minWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.minWidth.px']
    }],
    maxWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.maxWidth.px']
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.height']
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['focus']
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['blur']
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }],
    onDblClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['dblclick', ['$event']]
    }],
    onKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown', ['$event']]
    }]
  });
})();
class DataTableBodyRowComponent {
  constructor(differs, scrollbarHelper, cd, element) {
    this.differs = differs;
    this.scrollbarHelper = scrollbarHelper;
    this.cd = cd;
    this.treeStatus = 'collapsed';
    this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._groupStyles = {
      left: {},
      center: {},
      right: {}
    };
    this._element = element.nativeElement;
    this._rowDiffer = differs.find({}).create();
  }
  set columns(val) {
    this._columns = val;
    this.recalculateColumns(val);
    this.buildStylesByGroup();
  }
  get columns() {
    return this._columns;
  }
  set innerWidth(val) {
    if (this._columns) {
      const colByPin = columnsByPin(this._columns);
      this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
    }
    this._innerWidth = val;
    this.recalculateColumns();
    this.buildStylesByGroup();
  }
  get innerWidth() {
    return this._innerWidth;
  }
  set offsetX(val) {
    this._offsetX = val;
    this.buildStylesByGroup();
  }
  get offsetX() {
    return this._offsetX;
  }
  get cssClass() {
    let cls = 'datatable-body-row';
    if (this.isSelected) {
      cls += ' active';
    }
    if (this.rowIndex % 2 !== 0) {
      cls += ' datatable-row-odd';
    }
    if (this.rowIndex % 2 === 0) {
      cls += ' datatable-row-even';
    }
    if (this.rowClass) {
      const res = this.rowClass(this.row);
      if (typeof res === 'string') {
        cls += ` ${res}`;
      } else if (typeof res === 'object') {
        const keys = Object.keys(res);
        for (const k of keys) {
          if (res[k] === true) {
            cls += ` ${k}`;
          }
        }
      }
    }
    return cls;
  }
  get columnsTotalWidths() {
    return this._columnGroupWidths.total;
  }
  ngDoCheck() {
    if (this._rowDiffer.diff(this.row)) {
      this.cd.markForCheck();
    }
  }
  trackByGroups(index, colGroup) {
    return colGroup.type;
  }
  columnTrackingFn(index, column) {
    return column.$$id;
  }
  buildStylesByGroup() {
    this._groupStyles.left = this.calcStylesByGroup('left');
    this._groupStyles.center = this.calcStylesByGroup('center');
    this._groupStyles.right = this.calcStylesByGroup('right');
    this.cd.markForCheck();
  }
  calcStylesByGroup(group) {
    const widths = this._columnGroupWidths;
    const offsetX = this.offsetX;
    const styles = {
      width: `${widths[group]}px`
    };
    if (group === 'left') {
      translateXY(styles, offsetX, 0);
    } else if (group === 'right') {
      const bodyWidth = parseInt(this.innerWidth + '', 0);
      const totalDiff = widths.total - bodyWidth;
      const offsetDiff = totalDiff - offsetX;
      const offset = (offsetDiff + this.scrollbarHelper.width) * -1;
      translateXY(styles, offset, 0);
    }
    return styles;
  }
  onActivate(event, index) {
    event.cellIndex = index;
    event.rowElement = this._element;
    this.activate.emit(event);
  }
  onKeyDown(event) {
    const keyCode = event.keyCode;
    const isTargetRow = event.target === this._element;
    const isAction = keyCode === Keys.return || keyCode === Keys.down || keyCode === Keys.up || keyCode === Keys.left || keyCode === Keys.right;
    if (isAction && isTargetRow) {
      event.preventDefault();
      event.stopPropagation();
      this.activate.emit({
        type: 'keydown',
        event,
        row: this.row,
        rowElement: this._element
      });
    }
  }
  onMouseenter(event) {
    this.activate.emit({
      type: 'mouseenter',
      event,
      row: this.row,
      rowElement: this._element
    });
  }
  recalculateColumns(val = this.columns) {
    this._columns = val;
    const colsByPin = columnsByPin(this._columns);
    this._columnsByPin = columnsByPinArr(this._columns);
    this._columnGroupWidths = columnGroupWidths(colsByPin, this._columns);
  }
  onTreeAction() {
    this.treeAction.emit();
  }
}
DataTableBodyRowComponent.ɵfac = function DataTableBodyRowComponent_Factory(t) {
  return new (t || DataTableBodyRowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
DataTableBodyRowComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTableBodyRowComponent,
  selectors: [["datatable-body-row"]],
  hostVars: 6,
  hostBindings: function DataTableBodyRowComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function DataTableBodyRowComponent_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      })("mouseenter", function DataTableBodyRowComponent_mouseenter_HostBindingHandler($event) {
        return ctx.onMouseenter($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.cssClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.rowHeight, "px")("width", ctx.columnsTotalWidths, "px");
    }
  },
  inputs: {
    columns: "columns",
    innerWidth: "innerWidth",
    expanded: "expanded",
    rowClass: "rowClass",
    row: "row",
    group: "group",
    isSelected: "isSelected",
    rowIndex: "rowIndex",
    displayCheck: "displayCheck",
    treeStatus: "treeStatus",
    offsetX: "offsetX",
    rowHeight: "rowHeight"
  },
  outputs: {
    activate: "activate",
    treeAction: "treeAction"
  },
  decls: 1,
  vars: 2,
  consts: [[3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["role", "cell", "tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "cell", "tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction"]],
  template: function DataTableBodyRowComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyRowComponent_div_0_Template, 2, 6, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
    }
  },
  dependencies: [DataTableBodyCellComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableBodyRowComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-body-row',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <div
      *ngFor="let colGroup of _columnsByPin; let i = index; trackBy: trackByGroups"
      class="datatable-row-{{ colGroup.type }} datatable-row-group"
      [ngStyle]="_groupStyles[colGroup.type]"
    >
      <datatable-body-cell
        role="cell"
        *ngFor="let column of colGroup.columns; let ii = index; trackBy: columnTrackingFn"
        tabindex="-1"
        [row]="row"
        [group]="group"
        [expanded]="expanded"
        [isSelected]="isSelected"
        [rowIndex]="rowIndex"
        [column]="column"
        [rowHeight]="rowHeight"
        [displayCheck]="displayCheck"
        [treeStatus]="treeStatus"
        (activate)="onActivate($event, ii)"
        (treeAction)="onTreeAction()"
      >
      </datatable-body-cell>
    </div>
  `
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers
    }, {
      type: ScrollbarHelper,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    innerWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    expanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    row: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    group: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    displayCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    treeStatus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    offsetX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cssClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class']
    }],
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.height.px']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    columnsTotalWidths: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.width.px']
    }],
    activate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    treeAction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown', ['$event']]
    }],
    onMouseenter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mouseenter', ['$event']]
    }]
  });
})();
function defaultSumFunc(cells) {
  const cellsWithValues = cells.filter(cell => !!cell);
  if (!cellsWithValues.length) {
    return null;
  }
  if (cellsWithValues.some(cell => typeof cell !== 'number')) {
    return null;
  }
  return cellsWithValues.reduce((res, cell) => res + cell);
}
function noopSumFunc(cells) {
  return null;
}
class DataTableSummaryRowComponent {
  constructor() {
    this.summaryRow = {};
  }
  ngOnChanges() {
    if (!this.columns || !this.rows) {
      return;
    }
    this.updateInternalColumns();
    this.updateValues();
  }
  updateInternalColumns() {
    this._internalColumns = this.columns.map(col => ({
      ...col,
      cellTemplate: col.summaryTemplate
    }));
  }
  updateValues() {
    this.summaryRow = {};
    this.columns.filter(col => !col.summaryTemplate).forEach(col => {
      const cellsFromSingleColumn = this.rows.map(row => row[col.prop]);
      const sumFunc = this.getSummaryFunction(col);
      this.summaryRow[col.prop] = col.pipe ? col.pipe.transform(sumFunc(cellsFromSingleColumn)) : sumFunc(cellsFromSingleColumn);
    });
  }
  getSummaryFunction(column) {
    if (column.summaryFunc === undefined) {
      return defaultSumFunc;
    } else if (column.summaryFunc === null) {
      return noopSumFunc;
    } else {
      return column.summaryFunc;
    }
  }
}
DataTableSummaryRowComponent.ɵfac = function DataTableSummaryRowComponent_Factory(t) {
  return new (t || DataTableSummaryRowComponent)();
};
DataTableSummaryRowComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTableSummaryRowComponent,
  selectors: [["datatable-summary-row"]],
  hostAttrs: [1, "datatable-summary-row"],
  inputs: {
    rows: "rows",
    columns: "columns",
    rowHeight: "rowHeight",
    offsetX: "offsetX",
    innerWidth: "innerWidth"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 1,
  vars: 1,
  consts: [["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", 4, "ngIf"], ["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex"]],
  template: function DataTableSummaryRowComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableSummaryRowComponent_datatable_body_row_0_Template, 1, 6, "datatable-body-row", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.summaryRow && ctx._internalColumns);
    }
  },
  dependencies: [DataTableBodyRowComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableSummaryRowComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-summary-row',
      template: `
    <datatable-body-row
      *ngIf="summaryRow && _internalColumns"
      tabindex="-1"
      [innerWidth]="innerWidth"
      [offsetX]="offsetX"
      [columns]="_internalColumns"
      [rowHeight]="rowHeight"
      [row]="summaryRow"
      [rowIndex]="-1"
    >
    </datatable-body-row>
  `,
      host: {
        class: 'datatable-summary-row'
      }
    }]
  }], null, {
    rows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    offsetX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    innerWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class DataTableRowWrapperComponent {
  constructor(cd, differs) {
    this.cd = cd;
    this.differs = differs;
    this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
    this._expanded = false;
    this.groupContext = {
      group: this.row,
      expanded: this.expanded,
      rowIndex: this.rowIndex
    };
    this.rowContext = {
      row: this.row,
      expanded: this.expanded,
      rowIndex: this.rowIndex
    };
    this.rowDiffer = differs.find({}).create();
  }
  set rowIndex(val) {
    this._rowIndex = val;
    this.rowContext.rowIndex = val;
    this.groupContext.rowIndex = val;
    this.cd.markForCheck();
  }
  get rowIndex() {
    return this._rowIndex;
  }
  set expanded(val) {
    this._expanded = val;
    this.groupContext.expanded = val;
    this.rowContext.expanded = val;
    this.cd.markForCheck();
  }
  get expanded() {
    return this._expanded;
  }
  ngDoCheck() {
    if (this.rowDiffer.diff(this.row)) {
      this.rowContext.row = this.row;
      this.groupContext.group = this.row;
      this.cd.markForCheck();
    }
  }
  onContextmenu($event) {
    this.rowContextmenu.emit({
      event: $event,
      row: this.row
    });
  }
  getGroupHeaderStyle() {
    const styles = {};
    styles['transform'] = 'translate3d(' + this.offsetX + 'px, 0px, 0px)';
    styles['backface-visibility'] = 'hidden';
    styles['width'] = this.innerWidth;
    return styles;
  }
}
DataTableRowWrapperComponent.ɵfac = function DataTableRowWrapperComponent_Factory(t) {
  return new (t || DataTableRowWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers));
};
DataTableRowWrapperComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTableRowWrapperComponent,
  selectors: [["datatable-row-wrapper"]],
  hostAttrs: [1, "datatable-row-wrapper"],
  hostBindings: function DataTableRowWrapperComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function DataTableRowWrapperComponent_contextmenu_HostBindingHandler($event) {
        return ctx.onContextmenu($event);
      });
    }
  },
  inputs: {
    innerWidth: "innerWidth",
    rowDetail: "rowDetail",
    groupHeader: "groupHeader",
    offsetX: "offsetX",
    detailRowHeight: "detailRowHeight",
    row: "row",
    groupedRows: "groupedRows",
    rowIndex: "rowIndex",
    expanded: "expanded"
  },
  outputs: {
    rowContextmenu: "rowContextmenu"
  },
  ngContentSelectors: _c0,
  decls: 3,
  vars: 3,
  consts: [["class", "datatable-group-header", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], ["class", "datatable-row-detail", 3, "height", 4, "ngIf"], [1, "datatable-group-header", 3, "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-row-detail"]],
  template: function DataTableRowWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_Template, 2, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableRowWrapperComponent_ng_content_1_Template, 1, 0, "ng-content", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableRowWrapperComponent_div_2_Template, 2, 3, "div", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template && ctx.expanded || !ctx.groupHeader || !ctx.groupHeader.template);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rowDetail && ctx.rowDetail.template && ctx.expanded);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableRowWrapperComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-row-wrapper',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <div *ngIf="groupHeader && groupHeader.template" class="datatable-group-header" [ngStyle]="getGroupHeaderStyle()">
      <ng-template
        *ngIf="groupHeader && groupHeader.template"
        [ngTemplateOutlet]="groupHeader.template"
        [ngTemplateOutletContext]="groupContext"
      >
      </ng-template>
    </div>
    <ng-content *ngIf="(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template">
    </ng-content>
    <div
      *ngIf="rowDetail && rowDetail.template && expanded"
      [style.height.px]="detailRowHeight"
      class="datatable-row-detail"
    >
      <ng-template
        *ngIf="rowDetail && rowDetail.template"
        [ngTemplateOutlet]="rowDetail.template"
        [ngTemplateOutletContext]="rowContext"
      >
      </ng-template>
    </div>
  `,
      host: {
        class: 'datatable-row-wrapper'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers
    }];
  }, {
    innerWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowDetail: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    offsetX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    detailRowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    row: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupedRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    rowIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    expanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['contextmenu', ['$event']]
    }]
  });
})();
class DataTableBodyComponent {
  /**
   * Creates an instance of DataTableBodyComponent.
   */
  constructor(cd) {
    this.cd = cd;
    this.selected = [];
    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.detailToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
    this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.rowHeightsCache = new RowHeightCache();
    this.temp = [];
    this.offsetY = 0;
    this.indexes = {};
    this.rowIndexes = new WeakMap();
    this.rowExpansions = [];
    /**
     * Get the height of the detail row.
     */
    this.getDetailRowHeight = (row, index) => {
      if (!this.rowDetail) {
        return 0;
      }
      const rowHeight = this.rowDetail.rowHeight;
      return typeof rowHeight === 'function' ? rowHeight(row, index) : rowHeight;
    };
    // declare fn here so we can get access to the `this` property
    this.rowTrackingFn = (index, row) => {
      const idx = this.getRowIndex(row);
      if (this.trackByProp) {
        return row[this.trackByProp];
      } else {
        return idx;
      }
    };
  }
  set pageSize(val) {
    this._pageSize = val;
    this.recalcLayout();
  }
  get pageSize() {
    return this._pageSize;
  }
  set rows(val) {
    this._rows = val;
    this.recalcLayout();
  }
  get rows() {
    return this._rows;
  }
  set columns(val) {
    this._columns = val;
    const colsByPin = columnsByPin(val);
    this.columnGroupWidths = columnGroupWidths(colsByPin, val);
  }
  get columns() {
    return this._columns;
  }
  set offset(val) {
    this._offset = val;
    if (!this.scrollbarV || this.scrollbarV && !this.virtualization) this.recalcLayout();
  }
  get offset() {
    return this._offset;
  }
  set rowCount(val) {
    this._rowCount = val;
    this.recalcLayout();
  }
  get rowCount() {
    return this._rowCount;
  }
  get bodyWidth() {
    if (this.scrollbarH) {
      return this.innerWidth + 'px';
    } else {
      return '100%';
    }
  }
  set bodyHeight(val) {
    if (this.scrollbarV) {
      this._bodyHeight = val + 'px';
    } else {
      this._bodyHeight = 'auto';
    }
    this.recalcLayout();
  }
  get bodyHeight() {
    return this._bodyHeight;
  }
  /**
   * Returns if selection is enabled.
   */
  get selectEnabled() {
    return !!this.selectionType;
  }
  /**
   * Property that would calculate the height of scroll bar
   * based on the row heights cache for virtual scroll and virtualization. Other scenarios
   * calculate scroll height automatically (as height will be undefined).
   */
  get scrollHeight() {
    if (this.scrollbarV && this.virtualization && this.rowCount) {
      return this.rowHeightsCache.query(this.rowCount - 1);
    }
    // avoid TS7030: Not all code paths return a value.
    return undefined;
  }
  /**
   * Called after the constructor, initializing input properties
   */
  ngOnInit() {
    if (this.rowDetail) {
      this.listener = this.rowDetail.toggle.subscribe(({
        type,
        value
      }) => {
        if (type === 'row') {
          this.toggleRowExpansion(value);
        }
        if (type === 'all') {
          this.toggleAllRows(value);
        }
        // Refresh rows after toggle
        // Fixes #883
        this.updateIndexes();
        this.updateRows();
        this.cd.markForCheck();
      });
    }
    if (this.groupHeader) {
      this.listener = this.groupHeader.toggle.subscribe(({
        type,
        value
      }) => {
        if (type === 'group') {
          this.toggleRowExpansion(value);
        }
        if (type === 'all') {
          this.toggleAllRows(value);
        }
        // Refresh rows after toggle
        // Fixes #883
        this.updateIndexes();
        this.updateRows();
        this.cd.markForCheck();
      });
    }
  }
  /**
   * Called once, before the instance is destroyed.
   */
  ngOnDestroy() {
    if (this.rowDetail || this.groupHeader) {
      this.listener.unsubscribe();
    }
  }
  /**
   * Updates the Y offset given a new offset.
   */
  updateOffsetY(offset) {
    // scroller is missing on empty table
    if (!this.scroller) {
      return;
    }
    if (this.scrollbarV && this.virtualization && offset) {
      // First get the row Index that we need to move to.
      const rowIndex = this.pageSize * offset;
      offset = this.rowHeightsCache.query(rowIndex - 1);
    } else if (this.scrollbarV && !this.virtualization) {
      offset = 0;
    }
    this.scroller.setOffset(offset || 0);
  }
  /**
   * Body was scrolled, this is mainly useful for
   * when a user is server-side pagination via virtual scroll.
   */
  onBodyScroll(event) {
    const scrollYPos = event.scrollYPos;
    const scrollXPos = event.scrollXPos;
    // if scroll change, trigger update
    // this is mainly used for header cell positions
    if (this.offsetY !== scrollYPos || this.offsetX !== scrollXPos) {
      this.scroll.emit({
        offsetY: scrollYPos,
        offsetX: scrollXPos
      });
    }
    this.offsetY = scrollYPos;
    this.offsetX = scrollXPos;
    this.updateIndexes();
    this.updatePage(event.direction);
    this.updateRows();
  }
  /**
   * Updates the page given a direction.
   */
  updatePage(direction) {
    let offset = this.indexes.first / this.pageSize;
    if (direction === 'up') {
      offset = Math.ceil(offset);
    } else if (direction === 'down') {
      offset = Math.floor(offset);
    }
    if (direction !== undefined && !isNaN(offset)) {
      this.page.emit({
        offset
      });
    }
  }
  /**
   * Updates the rows in the view port
   */
  updateRows() {
    const {
      first,
      last
    } = this.indexes;
    let rowIndex = first;
    let idx = 0;
    const temp = [];
    // if grouprowsby has been specified treat row paging
    // parameters as group paging parameters ie if limit 10 has been
    // specified treat it as 10 groups rather than 10 rows
    if (this.groupedRows) {
      let maxRowsPerGroup = 3;
      // if there is only one group set the maximum number of
      // rows per group the same as the total number of rows
      if (this.groupedRows.length === 1) {
        maxRowsPerGroup = this.groupedRows[0].value.length;
      }
      while (rowIndex < last && rowIndex < this.groupedRows.length) {
        // Add the groups into this page
        const group = this.groupedRows[rowIndex];
        this.rowIndexes.set(group, rowIndex);
        if (group.value) {
          // add indexes for each group item
          group.value.forEach((g, i) => {
            const _idx = `${rowIndex}-${i}`;
            this.rowIndexes.set(g, _idx);
          });
        }
        temp[idx] = group;
        idx++;
        // Group index in this context
        rowIndex++;
      }
    } else {
      while (rowIndex < last && rowIndex < this.rowCount) {
        const row = this.rows[rowIndex];
        if (row) {
          // add indexes for each row
          this.rowIndexes.set(row, rowIndex);
          temp[idx] = row;
        }
        idx++;
        rowIndex++;
      }
    }
    this.temp = temp;
  }
  /**
   * Get the row height
   */
  getRowHeight(row) {
    // if its a function return it
    if (typeof this.rowHeight === 'function') {
      return this.rowHeight(row);
    }
    return this.rowHeight;
  }
  /**
   * @param group the group with all rows
   */
  getGroupHeight(group) {
    let rowHeight = 0;
    if (group.value) {
      for (let index = 0; index < group.value.length; index++) {
        rowHeight += this.getRowAndDetailHeight(group.value[index]);
      }
    }
    return rowHeight;
  }
  /**
   * Calculate row height based on the expanded state of the row.
   */
  getRowAndDetailHeight(row) {
    let rowHeight = this.getRowHeight(row);
    const expanded = this.getRowExpanded(row);
    // Adding detail row height if its expanded.
    if (expanded) {
      rowHeight += this.getDetailRowHeight(row);
    }
    return rowHeight;
  }
  /**
   * Calculates the styles for the row so that the rows can be moved in 2D space
   * during virtual scroll inside the DOM.   In the below case the Y position is
   * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
   * 100 px then following styles are generated:
   *
   * transform: translate3d(0px, 0px, 0px);    ->  row0
   * transform: translate3d(0px, 30px, 0px);   ->  row1
   * transform: translate3d(0px, 130px, 0px);  ->  row2
   *
   * Row heights have to be calculated based on the row heights cache as we wont
   * be able to determine which row is of what height before hand.  In the above
   * case the positionY of the translate3d for row2 would be the sum of all the
   * heights of the rows before it (i.e. row0 and row1).
   *
   * @param rows the row that needs to be placed in the 2D space.
   * @returns the CSS3 style to be applied
   *
   * @memberOf DataTableBodyComponent
   */
  getRowsStyles(rows) {
    const styles = {};
    // only add styles for the group if there is a group
    if (this.groupedRows) {
      styles.width = this.columnGroupWidths.total;
    }
    if (this.scrollbarV && this.virtualization) {
      let idx = 0;
      if (this.groupedRows) {
        // Get the latest row rowindex in a group
        const row = rows[rows.length - 1];
        idx = row ? this.getRowIndex(row) : 0;
      } else {
        idx = this.getRowIndex(rows);
      }
      // const pos = idx * rowHeight;
      // The position of this row would be the sum of all row heights
      // until the previous row position.
      const pos = this.rowHeightsCache.query(idx - 1);
      translateXY(styles, 0, pos);
    }
    return styles;
  }
  /**
   * Calculate bottom summary row offset for scrollbar mode.
   * For more information about cache and offset calculation
   * see description for `getRowsStyles` method
   *
   * @returns the CSS3 style to be applied
   *
   * @memberOf DataTableBodyComponent
   */
  getBottomSummaryRowStyles() {
    if (!this.scrollbarV || !this.rows || !this.rows.length) {
      return null;
    }
    const styles = {
      position: 'absolute'
    };
    const pos = this.rowHeightsCache.query(this.rows.length - 1);
    translateXY(styles, 0, pos);
    return styles;
  }
  /**
   * Hides the loading indicator
   */
  hideIndicator() {
    setTimeout(() => this.loadingIndicator = false, 500);
  }
  /**
   * Updates the index of the rows in the viewport
   */
  updateIndexes() {
    let first = 0;
    let last = 0;
    if (this.scrollbarV) {
      if (this.virtualization) {
        // Calculation of the first and last indexes will be based on where the
        // scrollY position would be at.  The last index would be the one
        // that shows up inside the view port the last.
        const height = parseInt(this.bodyHeight, 0);
        first = this.rowHeightsCache.getRowIndex(this.offsetY);
        last = this.rowHeightsCache.getRowIndex(height + this.offsetY) + 1;
      } else {
        // If virtual rows are not needed
        // We render all in one go
        first = 0;
        last = this.rowCount;
      }
    } else {
      // The server is handling paging and will pass an array that begins with the
      // element at a specified offset.  first should always be 0 with external paging.
      if (!this.externalPaging) {
        first = Math.max(this.offset * this.pageSize, 0);
      }
      last = Math.min(first + this.pageSize, this.rowCount);
    }
    this.indexes = {
      first,
      last
    };
  }
  /**
   * Refreshes the full Row Height cache.  Should be used
   * when the entire row array state has changed.
   */
  refreshRowHeightCache() {
    if (!this.scrollbarV || this.scrollbarV && !this.virtualization) {
      return;
    }
    // clear the previous row height cache if already present.
    // this is useful during sorts, filters where the state of the
    // rows array is changed.
    this.rowHeightsCache.clearCache();
    // Initialize the tree only if there are rows inside the tree.
    if (this.rows && this.rows.length) {
      const rowExpansions = new Set();
      for (const row of this.rows) {
        if (this.getRowExpanded(row)) {
          rowExpansions.add(row);
        }
      }
      this.rowHeightsCache.initCache({
        rows: this.rows,
        rowHeight: this.rowHeight,
        detailRowHeight: this.getDetailRowHeight,
        externalVirtual: this.scrollbarV && this.externalPaging,
        rowCount: this.rowCount,
        rowIndexes: this.rowIndexes,
        rowExpansions
      });
    }
  }
  /**
   * Gets the index for the view port
   */
  getAdjustedViewPortIndex() {
    // Capture the row index of the first row that is visible on the viewport.
    // If the scroll bar is just below the row which is highlighted then make that as the
    // first index.
    const viewPortFirstRowIndex = this.indexes.first;
    if (this.scrollbarV && this.virtualization) {
      const offsetScroll = this.rowHeightsCache.query(viewPortFirstRowIndex - 1);
      return offsetScroll <= this.offsetY ? viewPortFirstRowIndex - 1 : viewPortFirstRowIndex;
    }
    return viewPortFirstRowIndex;
  }
  /**
   * Toggle the Expansion of the row i.e. if the row is expanded then it will
   * collapse and vice versa.   Note that the expanded status is stored as
   * a part of the row object itself as we have to preserve the expanded row
   * status in case of sorting and filtering of the row set.
   */
  toggleRowExpansion(row) {
    // Capture the row index of the first row that is visible on the viewport.
    const viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
    const rowExpandedIdx = this.getRowExpandedIdx(row, this.rowExpansions);
    const expanded = rowExpandedIdx > -1;
    // If the detailRowHeight is auto --> only in case of non-virtualized scroll
    if (this.scrollbarV && this.virtualization) {
      const detailRowHeight = this.getDetailRowHeight(row) * (expanded ? -1 : 1);
      // const idx = this.rowIndexes.get(row) || 0;
      const idx = this.getRowIndex(row);
      this.rowHeightsCache.update(idx, detailRowHeight);
    }
    // Update the toggled row and update thive nevere heights in the cache.
    if (expanded) {
      this.rowExpansions.splice(rowExpandedIdx, 1);
    } else {
      this.rowExpansions.push(row);
    }
    this.detailToggle.emit({
      rows: [row],
      currentIndex: viewPortFirstRowIndex
    });
  }
  /**
   * Expand/Collapse all the rows no matter what their state is.
   */
  toggleAllRows(expanded) {
    // clear prev expansions
    this.rowExpansions = [];
    // Capture the row index of the first row that is visible on the viewport.
    const viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
    if (expanded) {
      for (const row of this.rows) {
        this.rowExpansions.push(row);
      }
    }
    if (this.scrollbarV) {
      // Refresh the full row heights cache since every row was affected.
      this.recalcLayout();
    }
    // Emit all rows that have been expanded.
    this.detailToggle.emit({
      rows: this.rows,
      currentIndex: viewPortFirstRowIndex
    });
  }
  /**
   * Recalculates the table
   */
  recalcLayout() {
    this.refreshRowHeightCache();
    this.updateIndexes();
    this.updateRows();
  }
  /**
   * Tracks the column
   */
  columnTrackingFn(index, column) {
    return column.$$id;
  }
  /**
   * Gets the row pinning group styles
   */
  stylesByGroup(group) {
    const widths = this.columnGroupWidths;
    const offsetX = this.offsetX;
    const styles = {
      width: `${widths[group]}px`
    };
    if (group === 'left') {
      translateXY(styles, offsetX, 0);
    } else if (group === 'right') {
      const bodyWidth = parseInt(this.innerWidth + '', 0);
      const totalDiff = widths.total - bodyWidth;
      const offsetDiff = totalDiff - offsetX;
      const offset = offsetDiff * -1;
      translateXY(styles, offset, 0);
    }
    return styles;
  }
  /**
   * Returns if the row was expanded and set default row expansion when row expansion is empty
   */
  getRowExpanded(row) {
    if (this.rowExpansions.length === 0 && this.groupExpansionDefault) {
      for (const group of this.groupedRows) {
        this.rowExpansions.push(group);
      }
    }
    return this.getRowExpandedIdx(row, this.rowExpansions) > -1;
  }
  getRowExpandedIdx(row, expanded) {
    if (!expanded || !expanded.length) return -1;
    const rowId = this.rowIdentity(row);
    return expanded.findIndex(r => {
      const id = this.rowIdentity(r);
      return id === rowId;
    });
  }
  /**
   * Gets the row index given a row
   */
  getRowIndex(row) {
    return this.rowIndexes.get(row) || 0;
  }
  onTreeAction(row) {
    this.treeAction.emit({
      row
    });
  }
}
DataTableBodyComponent.ɵfac = function DataTableBodyComponent_Factory(t) {
  return new (t || DataTableBodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
DataTableBodyComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTableBodyComponent,
  selectors: [["datatable-body"]],
  viewQuery: function DataTableBodyComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ScrollerComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
    }
  },
  hostAttrs: [1, "datatable-body"],
  hostVars: 4,
  hostBindings: function DataTableBodyComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.bodyWidth)("height", ctx.bodyHeight);
    }
  },
  inputs: {
    scrollbarV: "scrollbarV",
    scrollbarH: "scrollbarH",
    loadingIndicator: "loadingIndicator",
    externalPaging: "externalPaging",
    rowHeight: "rowHeight",
    offsetX: "offsetX",
    emptyMessage: "emptyMessage",
    selectionType: "selectionType",
    selected: "selected",
    rowIdentity: "rowIdentity",
    rowDetail: "rowDetail",
    groupHeader: "groupHeader",
    selectCheck: "selectCheck",
    displayCheck: "displayCheck",
    trackByProp: "trackByProp",
    rowClass: "rowClass",
    groupedRows: "groupedRows",
    groupExpansionDefault: "groupExpansionDefault",
    innerWidth: "innerWidth",
    groupRowsBy: "groupRowsBy",
    virtualization: "virtualization",
    summaryRow: "summaryRow",
    summaryPosition: "summaryPosition",
    summaryHeight: "summaryHeight",
    pageSize: "pageSize",
    rows: "rows",
    columns: "columns",
    offset: "offset",
    rowCount: "rowCount",
    bodyHeight: "bodyHeight"
  },
  outputs: {
    scroll: "scroll",
    page: "page",
    activate: "activate",
    select: "select",
    detailToggle: "detailToggle",
    rowContextmenu: "rowContextmenu",
    treeAction: "treeAction"
  },
  decls: 5,
  vars: 9,
  consts: [[4, "ngIf"], [3, "selected", "rows", "selectCheck", "selectEnabled", "selectionType", "rowIdentity", "select", "activate"], ["selector", ""], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll", 4, "ngIf"], ["class", "empty-row", 3, "innerHTML", 4, "ngIf"], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row", 3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu"], ["role", "row", "tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate", 4, "ngIf", "ngIfElse"], ["groupedRowsTemplate", ""], ["role", "row", "tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate"], ["role", "row", "tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row", "tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate"], ["role", "row", 3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [1, "empty-row", 3, "innerHTML"]],
  template: function DataTableBodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyComponent_datatable_progress_0_Template, 1, 0, "datatable-progress", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "datatable-selection", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function DataTableBodyComponent_Template_datatable_selection_select_1_listener($event) {
        return ctx.select.emit($event);
      })("activate", function DataTableBodyComponent_Template_datatable_selection_activate_1_listener($event) {
        return ctx.activate.emit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableBodyComponent_datatable_scroller_3_Template, 4, 8, "datatable-scroller", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableBodyComponent_div_4_Template, 1, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingIndicator);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.selected)("rows", ctx.rows)("selectCheck", ctx.selectCheck)("selectEnabled", ctx.selectEnabled)("selectionType", ctx.selectionType)("rowIdentity", ctx.rowIdentity);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rows == null ? null : ctx.rows.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.rows == null ? null : ctx.rows.length) && !ctx.loadingIndicator);
    }
  },
  dependencies: [ProgressBarComponent, DataTableSelectionComponent, ScrollerComponent, DataTableSummaryRowComponent, DataTableRowWrapperComponent, DataTableBodyRowComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableBodyComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-body',
      template: `
    <datatable-progress *ngIf="loadingIndicator"> </datatable-progress>
    <datatable-selection
      #selector
      [selected]="selected"
      [rows]="rows"
      [selectCheck]="selectCheck"
      [selectEnabled]="selectEnabled"
      [selectionType]="selectionType"
      [rowIdentity]="rowIdentity"
      (select)="select.emit($event)"
      (activate)="activate.emit($event)"
    >
      <datatable-scroller
        *ngIf="rows?.length"
        [scrollbarV]="scrollbarV"
        [scrollbarH]="scrollbarH"
        [scrollHeight]="scrollHeight"
        [scrollWidth]="columnGroupWidths?.total"
        (scroll)="onBodyScroll($event)"
      >
        <datatable-summary-row
          *ngIf="summaryRow && summaryPosition === 'top'"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
        <datatable-row-wrapper
          [groupedRows]="groupedRows"
          *ngFor="let group of temp; let i = index; trackBy: rowTrackingFn"
          [innerWidth]="innerWidth"
          [ngStyle]="getRowsStyles(group)"
          [rowDetail]="rowDetail"
          [groupHeader]="groupHeader"
          [offsetX]="offsetX"
          [detailRowHeight]="getDetailRowHeight(group && group[i], i)"
          [row]="group"
          [expanded]="getRowExpanded(group)"
          [rowIndex]="getRowIndex(group && group[i])"
          (rowContextmenu)="rowContextmenu.emit($event)"
        >
          <datatable-body-row
            role="row"
            *ngIf="!groupedRows; else groupedRowsTemplate"
            tabindex="-1"
            [isSelected]="selector.getRowSelected(group)"
            [innerWidth]="innerWidth"
            [offsetX]="offsetX"
            [columns]="columns"
            [rowHeight]="getRowHeight(group)"
            [row]="group"
            [rowIndex]="getRowIndex(group)"
            [expanded]="getRowExpanded(group)"
            [rowClass]="rowClass"
            [displayCheck]="displayCheck"
            [treeStatus]="group && group.treeStatus"
            (treeAction)="onTreeAction(group)"
            (activate)="selector.onActivate($event, indexes.first + i)"
          >
          </datatable-body-row>
          <ng-template #groupedRowsTemplate>
            <datatable-body-row
              role="row"
              *ngFor="let row of group.value; let i = index; trackBy: rowTrackingFn"
              tabindex="-1"
              [isSelected]="selector.getRowSelected(row)"
              [innerWidth]="innerWidth"
              [offsetX]="offsetX"
              [columns]="columns"
              [rowHeight]="getRowHeight(row)"
              [row]="row"
              [group]="group.value"
              [rowIndex]="getRowIndex(row)"
              [expanded]="getRowExpanded(row)"
              [rowClass]="rowClass"
              (activate)="selector.onActivate($event, i)"
            >
            </datatable-body-row>
          </ng-template>
        </datatable-row-wrapper>
        <datatable-summary-row
          role="row"
          *ngIf="summaryRow && summaryPosition === 'bottom'"
          [ngStyle]="getBottomSummaryRowStyles()"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
      </datatable-scroller>
      <div class="empty-row" *ngIf="!rows?.length && !loadingIndicator" [innerHTML]="emptyMessage"></div>
    </datatable-selection>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        class: 'datatable-body'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    scrollbarV: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollbarH: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loadingIndicator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    externalPaging: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    offsetX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    emptyMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowIdentity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowDetail: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    displayCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    trackByProp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupedRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupExpansionDefault: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    innerWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupRowsBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualization: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    summaryRow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    summaryPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    summaryHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    offset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowCount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    bodyWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.width']
    }],
    bodyHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.height']
    }],
    scroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    activate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    detailToggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    rowContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    treeAction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    scroller: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [ScrollerComponent]
    }]
  });
})();

/**
 * Gets the next sort direction
 */
function nextSortDir(sortType, current) {
  if (sortType === SortType.single) {
    if (current === SortDirection.asc) {
      return SortDirection.desc;
    } else {
      return SortDirection.asc;
    }
  } else {
    if (!current) {
      return SortDirection.asc;
    } else if (current === SortDirection.asc) {
      return SortDirection.desc;
    } else if (current === SortDirection.desc) {
      return undefined;
    }
    // avoid TS7030: Not all code paths return a value.
    return undefined;
  }
}
/**
 * Adapted from fueld-ui on 6/216
 * https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/OrderBy
 */
function orderByComparator(a, b) {
  if (a === null || typeof a === 'undefined') a = 0;
  if (b === null || typeof b === 'undefined') b = 0;
  if (a instanceof Date && b instanceof Date) {
    if (a < b) return -1;
    if (a > b) return 1;
  } else if (isNaN(parseFloat(a)) || !isFinite(a) || isNaN(parseFloat(b)) || !isFinite(b)) {
    // Convert to string in case of a=0 or b=0
    a = String(a);
    b = String(b);
    // Isn't a number so lowercase the string to properly compare
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
  } else {
    // Parse strings as numbers to compare properly
    if (parseFloat(a) < parseFloat(b)) return -1;
    if (parseFloat(a) > parseFloat(b)) return 1;
  }
  // equal each other
  return 0;
}
/**
 * creates a shallow copy of the `rows` input and returns the sorted copy. this function
 * does not sort the `rows` argument in place
 */
function sortRows(rows, columns, dirs) {
  if (!rows) return [];
  if (!dirs || !dirs.length || !columns) return [...rows];
  /**
   * record the row ordering of results from prior sort operations (if applicable)
   * this is necessary to guarantee stable sorting behavior
   */
  const rowToIndexMap = new Map();
  rows.forEach((row, index) => rowToIndexMap.set(row, index));
  const temp = [...rows];
  const cols = columns.reduce((obj, col) => {
    if (col.comparator && typeof col.comparator === 'function') {
      obj[col.prop] = col.comparator;
    }
    return obj;
  }, {});
  // cache valueGetter and compareFn so that they
  // do not need to be looked-up in the sort function body
  const cachedDirs = dirs.map(dir => {
    const prop = dir.prop;
    return {
      prop,
      dir: dir.dir,
      valueGetter: getterForProp(prop),
      compareFn: cols[prop] || orderByComparator
    };
  });
  return temp.sort(function (rowA, rowB) {
    for (const cachedDir of cachedDirs) {
      // Get property and valuegetters for column to be sorted
      const {
        prop,
        valueGetter
      } = cachedDir;
      // Get A and B cell values from rows based on properties of the columns
      const propA = valueGetter(rowA, prop);
      const propB = valueGetter(rowB, prop);
      // Compare function gets five parameters:
      // Two cell values to be compared as propA and propB
      // Two rows corresponding to the cells as rowA and rowB
      // Direction of the sort for this column as SortDirection
      // Compare can be a standard JS comparison function (a,b) => -1|0|1
      // as additional parameters are silently ignored. The whole row and sort
      // direction enable more complex sort logic.
      const comparison = cachedDir.dir !== SortDirection.desc ? cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir) : -cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir);
      // Don't return 0 yet in case of needing to sort by next property
      if (comparison !== 0) return comparison;
    }
    if (!(rowToIndexMap.has(rowA) && rowToIndexMap.has(rowB))) return 0;
    /**
     * all else being equal, preserve original order of the rows (stable sort)
     */
    return rowToIndexMap.get(rowA) < rowToIndexMap.get(rowB) ? -1 : 1;
  });
}
class DataTableHeaderCellComponent {
  constructor(cd) {
    this.cd = cd;
    this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
    this.sortFn = this.onSort.bind(this);
    this.selectFn = this.select.emit.bind(this.select);
    this.cellContext = {
      column: this.column,
      sortDir: this.sortDir,
      sortFn: this.sortFn,
      allRowsSelected: this.allRowsSelected,
      selectFn: this.selectFn
    };
  }
  set allRowsSelected(value) {
    this._allRowsSelected = value;
    this.cellContext.allRowsSelected = value;
  }
  get allRowsSelected() {
    return this._allRowsSelected;
  }
  set column(column) {
    this._column = column;
    this.cellContext.column = column;
    this.cd.markForCheck();
  }
  get column() {
    return this._column;
  }
  set sorts(val) {
    this._sorts = val;
    this.sortDir = this.calcSortDir(val);
    this.cellContext.sortDir = this.sortDir;
    this.sortClass = this.calcSortClass(this.sortDir);
    this.cd.markForCheck();
  }
  get sorts() {
    return this._sorts;
  }
  get columnCssClasses() {
    let cls = 'datatable-header-cell';
    if (this.column.sortable) cls += ' sortable';
    if (this.column.resizeable) cls += ' resizeable';
    if (this.column.headerClass) {
      if (typeof this.column.headerClass === 'string') {
        cls += ' ' + this.column.headerClass;
      } else if (typeof this.column.headerClass === 'function') {
        const res = this.column.headerClass({
          column: this.column
        });
        if (typeof res === 'string') {
          cls += res;
        } else if (typeof res === 'object') {
          const keys = Object.keys(res);
          for (const k of keys) {
            if (res[k] === true) cls += ` ${k}`;
          }
        }
      }
    }
    const sortDir = this.sortDir;
    if (sortDir) {
      cls += ` sort-active sort-${sortDir}`;
    }
    return cls;
  }
  get name() {
    // guaranteed to have a value by setColumnDefaults() in column-helper.ts
    return this.column.headerTemplate === undefined ? this.column.name : undefined;
  }
  get minWidth() {
    return this.column.minWidth;
  }
  get maxWidth() {
    return this.column.maxWidth;
  }
  get width() {
    return this.column.width;
  }
  get isCheckboxable() {
    return this.column.checkboxable && this.column.headerCheckboxable && this.selectionType === SelectionType.checkbox;
  }
  onContextmenu($event) {
    this.columnContextmenu.emit({
      event: $event,
      column: this.column
    });
  }
  ngOnInit() {
    this.sortClass = this.calcSortClass(this.sortDir);
  }
  calcSortDir(sorts) {
    if (sorts && this.column) {
      const sort = sorts.find(s => {
        return s.prop === this.column.prop;
      });
      if (sort) return sort.dir;
    }
  }
  onSort() {
    if (!this.column.sortable) return;
    const newValue = nextSortDir(this.sortType, this.sortDir);
    this.sort.emit({
      column: this.column,
      prevValue: this.sortDir,
      newValue
    });
  }
  calcSortClass(sortDir) {
    if (!this.cellContext.column.sortable) return;
    if (sortDir === SortDirection.asc) {
      return `sort-btn sort-asc ${this.sortAscendingIcon}`;
    } else if (sortDir === SortDirection.desc) {
      return `sort-btn sort-desc ${this.sortDescendingIcon}`;
    } else {
      return `sort-btn ${this.sortUnsetIcon}`;
    }
  }
}
DataTableHeaderCellComponent.ɵfac = function DataTableHeaderCellComponent_Factory(t) {
  return new (t || DataTableHeaderCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
DataTableHeaderCellComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTableHeaderCellComponent,
  selectors: [["datatable-header-cell"]],
  hostAttrs: [1, "datatable-header-cell"],
  hostVars: 11,
  hostBindings: function DataTableHeaderCellComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function DataTableHeaderCellComponent_contextmenu_HostBindingHandler($event) {
        return ctx.onContextmenu($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.columnCssClasses);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.headerHeight, "px")("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("width", ctx.width, "px");
    }
  },
  inputs: {
    sortType: "sortType",
    sortAscendingIcon: "sortAscendingIcon",
    sortDescendingIcon: "sortDescendingIcon",
    sortUnsetIcon: "sortUnsetIcon",
    isTarget: "isTarget",
    targetMarkerTemplate: "targetMarkerTemplate",
    targetMarkerContext: "targetMarkerContext",
    allRowsSelected: "allRowsSelected",
    selectionType: "selectionType",
    column: "column",
    headerHeight: "headerHeight",
    sorts: "sorts"
  },
  outputs: {
    sort: "sort",
    select: "select",
    columnContextmenu: "columnContextmenu"
  },
  decls: 6,
  vars: 6,
  consts: [[1, "datatable-header-cell-template-wrap"], [4, "ngIf"], ["class", "datatable-checkbox", 4, "ngIf"], ["class", "datatable-header-cell-wrapper", 4, "ngIf"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "change"], [1, "datatable-header-cell-wrapper"], [1, "datatable-header-cell-label", "draggable", 3, "innerHTML", "click"]],
  template: function DataTableHeaderCellComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableHeaderCellComponent_1_Template, 1, 2, null, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableHeaderCellComponent_label_2_Template, 2, 1, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableHeaderCellComponent_span_3_Template, 2, 1, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableHeaderCellComponent_4_Template, 1, 2, null, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_Template_span_click_5_listener() {
        return ctx.onSort();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTarget);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCheckboxable);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.column.headerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.headerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.sortClass);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableHeaderCellComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-header-cell',
      template: `
    <div class="datatable-header-cell-template-wrap">
      <ng-template
        *ngIf="isTarget"
        [ngTemplateOutlet]="targetMarkerTemplate"
        [ngTemplateOutletContext]="targetMarkerContext"
      >
      </ng-template>
      <label *ngIf="isCheckboxable" class="datatable-checkbox">
        <input type="checkbox" [checked]="allRowsSelected" (change)="select.emit(!allRowsSelected)" />
      </label>
      <span *ngIf="!column.headerTemplate" class="datatable-header-cell-wrapper">
        <span class="datatable-header-cell-label draggable" (click)="onSort()" [innerHTML]="name"> </span>
      </span>
      <ng-template
        *ngIf="column.headerTemplate"
        [ngTemplateOutlet]="column.headerTemplate"
        [ngTemplateOutletContext]="cellContext"
      >
      </ng-template>
      <span (click)="onSort()" [class]="sortClass"> </span>
    </div>
  `,
      host: {
        class: 'datatable-header-cell'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    sortType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortAscendingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortDescendingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortUnsetIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isTarget: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    targetMarkerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    targetMarkerContext: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    allRowsSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    column: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    headerHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.height.px']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sorts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    columnContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    columnCssClasses: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class']
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['attr.title']
    }],
    minWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.minWidth.px']
    }],
    maxWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.maxWidth.px']
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.width.px']
    }],
    onContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['contextmenu', ['$event']]
    }]
  });
})();
class DataTableHeaderComponent {
  constructor(cd) {
    this.cd = cd;
    this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
    this._columnGroupWidths = {
      total: 100
    };
    this._styleByGroup = {
      left: {},
      center: {},
      right: {}
    };
    this.destroyed = false;
  }
  set innerWidth(val) {
    this._innerWidth = val;
    setTimeout(() => {
      if (this._columns) {
        const colByPin = columnsByPin(this._columns);
        this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
        this.setStylesByGroup();
      }
    });
  }
  get innerWidth() {
    return this._innerWidth;
  }
  set headerHeight(val) {
    if (val !== 'auto') {
      this._headerHeight = `${val}px`;
    } else {
      this._headerHeight = val;
    }
  }
  get headerHeight() {
    return this._headerHeight;
  }
  set columns(val) {
    this._columns = val;
    const colsByPin = columnsByPin(val);
    this._columnsByPin = columnsByPinArr(val);
    setTimeout(() => {
      this._columnGroupWidths = columnGroupWidths(colsByPin, val);
      this.setStylesByGroup();
    });
  }
  get columns() {
    return this._columns;
  }
  set offsetX(val) {
    this._offsetX = val;
    this.setStylesByGroup();
  }
  get offsetX() {
    return this._offsetX;
  }
  ngOnDestroy() {
    this.destroyed = true;
  }
  onLongPressStart({
    event,
    model
  }) {
    model.dragging = true;
    this.dragEventTarget = event;
  }
  onLongPressEnd({
    event,
    model
  }) {
    this.dragEventTarget = event;
    // delay resetting so sort can be
    // prevented if we were dragging
    setTimeout(() => {
      // datatable component creates copies from columns on reorder
      // set dragging to false on new objects
      const column = this._columns.find(c => c.$$id === model.$$id);
      if (column) {
        column.dragging = false;
      }
    }, 5);
  }
  get headerWidth() {
    if (this.scrollbarH) {
      return this.innerWidth + 'px';
    }
    return '100%';
  }
  trackByGroups(index, colGroup) {
    return colGroup.type;
  }
  columnTrackingFn(index, column) {
    return column.$$id;
  }
  onColumnResized(width, column) {
    if (width <= column.minWidth) {
      width = column.minWidth;
    } else if (width >= column.maxWidth) {
      width = column.maxWidth;
    }
    this.resize.emit({
      column,
      prevValue: column.width,
      newValue: width
    });
  }
  onColumnReordered({
    prevIndex,
    newIndex,
    model
  }) {
    const column = this.getColumn(newIndex);
    column.isTarget = false;
    column.targetMarkerContext = undefined;
    this.reorder.emit({
      column: model,
      prevValue: prevIndex,
      newValue: newIndex
    });
  }
  onTargetChanged({
    prevIndex,
    newIndex,
    initialIndex
  }) {
    if (prevIndex || prevIndex === 0) {
      const oldColumn = this.getColumn(prevIndex);
      oldColumn.isTarget = false;
      oldColumn.targetMarkerContext = undefined;
    }
    if (newIndex || newIndex === 0) {
      const newColumn = this.getColumn(newIndex);
      newColumn.isTarget = true;
      if (initialIndex !== newIndex) {
        newColumn.targetMarkerContext = {
          class: 'targetMarker '.concat(initialIndex > newIndex ? 'dragFromRight' : 'dragFromLeft')
        };
      }
    }
  }
  getColumn(index) {
    const leftColumnCount = this._columnsByPin[0].columns.length;
    if (index < leftColumnCount) {
      return this._columnsByPin[0].columns[index];
    }
    const centerColumnCount = this._columnsByPin[1].columns.length;
    if (index < leftColumnCount + centerColumnCount) {
      return this._columnsByPin[1].columns[index - leftColumnCount];
    }
    return this._columnsByPin[2].columns[index - leftColumnCount - centerColumnCount];
  }
  onSort({
    column,
    prevValue,
    newValue
  }) {
    // if we are dragging don't sort!
    if (column.dragging) {
      return;
    }
    const sorts = this.calcNewSorts(column, prevValue, newValue);
    this.sort.emit({
      sorts,
      column,
      prevValue,
      newValue
    });
  }
  calcNewSorts(column, prevValue, newValue) {
    let idx = 0;
    if (!this.sorts) {
      this.sorts = [];
    }
    const sorts = this.sorts.map((s, i) => {
      s = {
        ...s
      };
      if (s.prop === column.prop) {
        idx = i;
      }
      return s;
    });
    if (newValue === undefined) {
      sorts.splice(idx, 1);
    } else if (prevValue) {
      sorts[idx].dir = newValue;
    } else {
      if (this.sortType === SortType.single) {
        sorts.splice(0, this.sorts.length);
      }
      sorts.push({
        dir: newValue,
        prop: column.prop
      });
    }
    return sorts;
  }
  setStylesByGroup() {
    this._styleByGroup.left = this.calcStylesByGroup('left');
    this._styleByGroup.center = this.calcStylesByGroup('center');
    this._styleByGroup.right = this.calcStylesByGroup('right');
    if (!this.destroyed) {
      this.cd.detectChanges();
    }
  }
  calcStylesByGroup(group) {
    const widths = this._columnGroupWidths;
    const offsetX = this.offsetX;
    const styles = {
      width: `${widths[group]}px`
    };
    if (group === 'center') {
      translateXY(styles, offsetX * -1, 0);
    } else if (group === 'right') {
      const totalDiff = widths.total - this.innerWidth;
      const offset = totalDiff * -1;
      translateXY(styles, offset, 0);
    }
    return styles;
  }
}
DataTableHeaderComponent.ɵfac = function DataTableHeaderComponent_Factory(t) {
  return new (t || DataTableHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
DataTableHeaderComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTableHeaderComponent,
  selectors: [["datatable-header"]],
  hostAttrs: [1, "datatable-header"],
  hostVars: 4,
  hostBindings: function DataTableHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.headerHeight)("width", ctx.headerWidth);
    }
  },
  inputs: {
    sortAscendingIcon: "sortAscendingIcon",
    sortDescendingIcon: "sortDescendingIcon",
    sortUnsetIcon: "sortUnsetIcon",
    scrollbarH: "scrollbarH",
    dealsWithGroup: "dealsWithGroup",
    targetMarkerTemplate: "targetMarkerTemplate",
    innerWidth: "innerWidth",
    sorts: "sorts",
    sortType: "sortType",
    allRowsSelected: "allRowsSelected",
    selectionType: "selectionType",
    reorderable: "reorderable",
    headerHeight: "headerHeight",
    columns: "columns",
    offsetX: "offsetX"
  },
  outputs: {
    sort: "sort",
    reorder: "reorder",
    resize: "resize",
    select: "select",
    columnContextmenu: "columnContextmenu"
  },
  decls: 2,
  vars: 4,
  consts: [["role", "row", "orderable", "", 1, "datatable-header-inner", 3, "reorder", "targetChanged"], [3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["role", "columnheader", "resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "columnheader", "resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu"]],
  template: function DataTableHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("reorder", function DataTableHeaderComponent_Template_div_reorder_0_listener($event) {
        return ctx.onColumnReordered($event);
      })("targetChanged", function DataTableHeaderComponent_Template_div_targetChanged_0_listener($event) {
        return ctx.onTargetChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_Template, 2, 5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx._columnGroupWidths.total, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
    }
  },
  dependencies: [DataTableHeaderCellComponent, OrderableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, ResizeableDirective, LongPressDirective, DraggableDirective],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableHeaderComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-header',
      template: `
    <div
      role="row"
      orderable
      (reorder)="onColumnReordered($event)"
      (targetChanged)="onTargetChanged($event)"
      [style.width.px]="_columnGroupWidths.total"
      class="datatable-header-inner"
    >
      <div
        *ngFor="let colGroup of _columnsByPin; trackBy: trackByGroups"
        [class]="'datatable-row-' + colGroup.type"
        [ngStyle]="_styleByGroup[colGroup.type]"
      >
        <datatable-header-cell
          role="columnheader"
          *ngFor="let column of colGroup.columns; trackBy: columnTrackingFn"
          resizeable
          [resizeEnabled]="column.resizeable"
          (resize)="onColumnResized($event, column)"
          long-press
          [pressModel]="column"
          [pressEnabled]="reorderable && column.draggable"
          (longPressStart)="onLongPressStart($event)"
          (longPressEnd)="onLongPressEnd($event)"
          draggable
          [dragX]="reorderable && column.draggable && column.dragging"
          [dragY]="false"
          [dragModel]="column"
          [dragEventTarget]="dragEventTarget"
          [headerHeight]="headerHeight"
          [isTarget]="column.isTarget"
          [targetMarkerTemplate]="targetMarkerTemplate"
          [targetMarkerContext]="column.targetMarkerContext"
          [column]="column"
          [sortType]="sortType"
          [sorts]="sorts"
          [selectionType]="selectionType"
          [sortAscendingIcon]="sortAscendingIcon"
          [sortDescendingIcon]="sortDescendingIcon"
          [sortUnsetIcon]="sortUnsetIcon"
          [allRowsSelected]="allRowsSelected"
          (sort)="onSort($event)"
          (select)="select.emit($event)"
          (columnContextmenu)="columnContextmenu.emit($event)"
        >
        </datatable-header-cell>
      </div>
    </div>
  `,
      host: {
        class: 'datatable-header'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    sortAscendingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortDescendingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortUnsetIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollbarH: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dealsWithGroup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    targetMarkerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    innerWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sorts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    allRowsSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    reorderable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    headerHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.height']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    offsetX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    reorder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    resize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    columnContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    headerWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.width']
    }]
  });
})();

/**
 * Throttle a function
 */
function throttle(func, wait, options) {
  options = options || {};
  let context;
  let args;
  let result;
  let timeout = null;
  let previous = 0;
  function later() {
    previous = options.leading === false ? 0 : +new Date();
    timeout = null;
    result = func.apply(context, args);
  }
  return function () {
    const now = +new Date();
    if (!previous && options.leading === false) {
      previous = now;
    }
    const remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}
/**
 * Throttle decorator
 *
 *  class MyClass {
 *    throttleable(10)
 *    myFn() { ... }
 *  }
 */
function throttleable(duration, options) {
  return function innerDecorator(target, key, descriptor) {
    return {
      configurable: true,
      enumerable: descriptor.enumerable,
      get: function getter() {
        Object.defineProperty(this, key, {
          configurable: true,
          enumerable: descriptor.enumerable,
          value: throttle(descriptor.value, duration, options)
        });
        return this[key];
      }
    };
  };
}

/**
 * Calculates the Total Flex Grow
 */
function getTotalFlexGrow(columns) {
  let totalFlexGrow = 0;
  for (const c of columns) {
    totalFlexGrow += c.flexGrow || 0;
  }
  return totalFlexGrow;
}
/**
 * Adjusts the column widths.
 * Inspired by: https://github.com/facebook/fixed-data-table/blob/master/src/FixedDataTableWidthHelper.js
 */
function adjustColumnWidths(allColumns, expectedWidth) {
  const columnsWidth = columnsTotalWidth(allColumns);
  const totalFlexGrow = getTotalFlexGrow(allColumns);
  const colsByGroup = columnsByPin(allColumns);
  if (columnsWidth !== expectedWidth) {
    scaleColumns(colsByGroup, expectedWidth, totalFlexGrow);
  }
}
/**
 * Resizes columns based on the flexGrow property, while respecting manually set widths
 */
function scaleColumns(colsByGroup, maxWidth, totalFlexGrow) {
  // calculate total width and flexgrow points for coulumns that can be resized
  for (const attr in colsByGroup) {
    for (const column of colsByGroup[attr]) {
      if (!column.canAutoResize) {
        maxWidth -= column.width;
        totalFlexGrow -= column.flexGrow ? column.flexGrow : 0;
      } else {
        column.width = 0;
      }
    }
  }
  const hasMinWidth = {};
  let remainingWidth = maxWidth;
  // resize columns until no width is left to be distributed
  do {
    const widthPerFlexPoint = remainingWidth / totalFlexGrow;
    remainingWidth = 0;
    for (const attr in colsByGroup) {
      for (const column of colsByGroup[attr]) {
        // if the column can be resize and it hasn't reached its minimum width yet
        if (column.canAutoResize && !hasMinWidth[column.prop]) {
          const newWidth = column.width + column.flexGrow * widthPerFlexPoint;
          if (column.minWidth !== undefined && newWidth < column.minWidth) {
            remainingWidth += newWidth - column.minWidth;
            column.width = column.minWidth;
            hasMinWidth[column.prop] = true;
          } else {
            column.width = newWidth;
          }
        }
      }
    }
  } while (remainingWidth !== 0);
}
/**
 * Forces the width of the columns to
 * distribute equally but overflowing when necessary
 *
 * Rules:
 *
 *  - If combined withs are less than the total width of the grid,
 *    proportion the widths given the min / max / normal widths to fill the width.
 *
 *  - If the combined widths, exceed the total width of the grid,
 *    use the standard widths.
 *
 *  - If a column is resized, it should always use that width
 *
 *  - The proportional widths should never fall below min size if specified.
 *
 *  - If the grid starts off small but then becomes greater than the size ( + / - )
 *    the width should use the original width; not the newly proportioned widths.
 */
function forceFillColumnWidths(allColumns, expectedWidth, startIdx, allowBleed, defaultColWidth = 300) {
  const columnsToResize = allColumns.slice(startIdx + 1, allColumns.length).filter(c => {
    return c.canAutoResize !== false;
  });
  for (const column of columnsToResize) {
    if (!column.$$oldWidth) {
      column.$$oldWidth = column.width;
    }
  }
  let additionWidthPerColumn = 0;
  let exceedsWindow = false;
  let contentWidth = getContentWidth(allColumns, defaultColWidth);
  let remainingWidth = expectedWidth - contentWidth;
  const columnsProcessed = [];
  const remainingWidthLimit = 1; // when to stop
  // This loop takes care of the
  do {
    additionWidthPerColumn = remainingWidth / columnsToResize.length;
    exceedsWindow = contentWidth >= expectedWidth;
    for (const column of columnsToResize) {
      if (exceedsWindow && allowBleed) {
        column.width = column.$$oldWidth || column.width || defaultColWidth;
      } else {
        const newSize = (column.width || defaultColWidth) + additionWidthPerColumn;
        if (column.minWidth && newSize < column.minWidth) {
          column.width = column.minWidth;
          columnsProcessed.push(column);
        } else if (column.maxWidth && newSize > column.maxWidth) {
          column.width = column.maxWidth;
          columnsProcessed.push(column);
        } else {
          column.width = newSize;
        }
      }
      column.width = Math.max(0, column.width);
    }
    contentWidth = getContentWidth(allColumns);
    remainingWidth = expectedWidth - contentWidth;
    removeProcessedColumns(columnsToResize, columnsProcessed);
  } while (remainingWidth > remainingWidthLimit && columnsToResize.length !== 0);
}
/**
 * Remove the processed columns from the current active columns.
 */
function removeProcessedColumns(columnsToResize, columnsProcessed) {
  for (const column of columnsProcessed) {
    const index = columnsToResize.indexOf(column);
    columnsToResize.splice(index, 1);
  }
}
/**
 * Gets the width of the columns
 */
function getContentWidth(allColumns, defaultColWidth = 300) {
  let contentWidth = 0;
  for (const column of allColumns) {
    contentWidth += column.width || defaultColWidth;
  }
  return contentWidth;
}
class DataTablePagerComponent {
  constructor() {
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._count = 0;
    this._page = 1;
    this._size = 0;
  }
  set size(val) {
    this._size = val;
    this.pages = this.calcPages();
  }
  get size() {
    return this._size;
  }
  set count(val) {
    this._count = val;
    this.pages = this.calcPages();
  }
  get count() {
    return this._count;
  }
  set page(val) {
    this._page = val;
    this.pages = this.calcPages();
  }
  get page() {
    return this._page;
  }
  get totalPages() {
    const count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
    return Math.max(count || 0, 1);
  }
  canPrevious() {
    return this.page > 1;
  }
  canNext() {
    return this.page < this.totalPages;
  }
  prevPage() {
    this.selectPage(this.page - 1);
  }
  nextPage() {
    this.selectPage(this.page + 1);
  }
  selectPage(page) {
    if (page > 0 && page <= this.totalPages && page !== this.page) {
      this.page = page;
      this.change.emit({
        page
      });
    }
  }
  calcPages(page) {
    const pages = [];
    let startPage = 1;
    let endPage = this.totalPages;
    const maxSize = 5;
    const isMaxSized = maxSize < this.totalPages;
    page = page || this.page;
    if (isMaxSized) {
      startPage = page - Math.floor(maxSize / 2);
      endPage = page + Math.floor(maxSize / 2);
      if (startPage < 1) {
        startPage = 1;
        endPage = Math.min(startPage + maxSize - 1, this.totalPages);
      } else if (endPage > this.totalPages) {
        startPage = Math.max(this.totalPages - maxSize + 1, 1);
        endPage = this.totalPages;
      }
    }
    for (let num = startPage; num <= endPage; num++) {
      pages.push({
        number: num,
        text: num
      });
    }
    return pages;
  }
}
DataTablePagerComponent.ɵfac = function DataTablePagerComponent_Factory(t) {
  return new (t || DataTablePagerComponent)();
};
DataTablePagerComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTablePagerComponent,
  selectors: [["datatable-pager"]],
  hostAttrs: [1, "datatable-pager"],
  inputs: {
    pagerLeftArrowIcon: "pagerLeftArrowIcon",
    pagerRightArrowIcon: "pagerRightArrowIcon",
    pagerPreviousIcon: "pagerPreviousIcon",
    pagerNextIcon: "pagerNextIcon",
    size: "size",
    count: "count",
    page: "page"
  },
  outputs: {
    change: "change"
  },
  decls: 14,
  vars: 21,
  consts: [[1, "pager"], ["role", "button", "aria-label", "go to first page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to previous page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "class", "pages", 3, "active", 4, "ngFor", "ngForOf"], ["role", "button", "aria-label", "go to next page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to last page", "href", "javascript:void(0)", 3, "click"], ["role", "button", 1, "pages"], ["href", "javascript:void(0)", 3, "click"]],
  template: function DataTablePagerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0)(1, "li")(2, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_2_listener() {
        return ctx.selectPage(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li")(5, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_5_listener() {
        return ctx.prevPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DataTablePagerComponent_li_7_Template, 3, 4, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li")(9, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_9_listener() {
        return ctx.nextPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li")(12, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_12_listener() {
        return ctx.selectPage(ctx.totalPages);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canPrevious());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerPreviousIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canPrevious());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerLeftArrowIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canNext());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerRightArrowIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canNext());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerNextIcon);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTablePagerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-pager',
      template: `
    <ul class="pager">
      <li [class.disabled]="!canPrevious()">
        <a role="button" aria-label="go to first page" href="javascript:void(0)" (click)="selectPage(1)">
          <i class="{{ pagerPreviousIcon }}"></i>
        </a>
      </li>
      <li [class.disabled]="!canPrevious()">
        <a role="button" aria-label="go to previous page" href="javascript:void(0)" (click)="prevPage()">
          <i class="{{ pagerLeftArrowIcon }}"></i>
        </a>
      </li>
      <li
        role="button"
        [attr.aria-label]="'page ' + pg.number"
        class="pages"
        *ngFor="let pg of pages"
        [class.active]="pg.number === page"
      >
        <a href="javascript:void(0)" (click)="selectPage(pg.number)">
          {{ pg.text }}
        </a>
      </li>
      <li [class.disabled]="!canNext()">
        <a role="button" aria-label="go to next page" href="javascript:void(0)" (click)="nextPage()">
          <i class="{{ pagerRightArrowIcon }}"></i>
        </a>
      </li>
      <li [class.disabled]="!canNext()">
        <a role="button" aria-label="go to last page" href="javascript:void(0)" (click)="selectPage(totalPages)">
          <i class="{{ pagerNextIcon }}"></i>
        </a>
      </li>
    </ul>
  `,
      host: {
        class: 'datatable-pager'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    pagerLeftArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerRightArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerPreviousIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerNextIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    count: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class DataTableFooterComponent {
  constructor() {
    this.selectedCount = 0;
    this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  get isVisible() {
    return this.rowCount / this.pageSize > 1;
  }
  get curPage() {
    return this.offset + 1;
  }
}
DataTableFooterComponent.ɵfac = function DataTableFooterComponent_Factory(t) {
  return new (t || DataTableFooterComponent)();
};
DataTableFooterComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTableFooterComponent,
  selectors: [["datatable-footer"]],
  hostAttrs: [1, "datatable-footer"],
  inputs: {
    footerHeight: "footerHeight",
    rowCount: "rowCount",
    pageSize: "pageSize",
    offset: "offset",
    pagerLeftArrowIcon: "pagerLeftArrowIcon",
    pagerRightArrowIcon: "pagerRightArrowIcon",
    pagerPreviousIcon: "pagerPreviousIcon",
    pagerNextIcon: "pagerNextIcon",
    totalMessage: "totalMessage",
    footerTemplate: "footerTemplate",
    selectedCount: "selectedCount",
    selectedMessage: "selectedMessage"
  },
  outputs: {
    page: "page"
  },
  decls: 4,
  vars: 8,
  consts: [[1, "datatable-footer-inner", 3, "ngClass"], [4, "ngIf"], ["class", "page-count", 4, "ngIf"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "page-count"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change"]],
  template: function DataTableFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableFooterComponent_1_Template, 1, 8, null, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableFooterComponent_div_2_Template, 3, 3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableFooterComponent_datatable_pager_3_Template, 1, 8, "datatable-pager", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.footerHeight, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c4, ctx.selectedMessage));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);
    }
  },
  dependencies: [DataTablePagerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableFooterComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-footer',
      template: `
    <div
      class="datatable-footer-inner"
      [ngClass]="{ 'selected-count': selectedMessage }"
      [style.height.px]="footerHeight"
    >
      <ng-template
        *ngIf="footerTemplate"
        [ngTemplateOutlet]="footerTemplate.template"
        [ngTemplateOutletContext]="{
          rowCount: rowCount,
          pageSize: pageSize,
          selectedCount: selectedCount,
          curPage: curPage,
          offset: offset
        }"
      >
      </ng-template>
      <div class="page-count" *ngIf="!footerTemplate">
        <span *ngIf="selectedMessage"> {{ selectedCount?.toLocaleString() }} {{ selectedMessage }} / </span>
        {{ rowCount?.toLocaleString() }} {{ totalMessage }}
      </div>
      <datatable-pager
        *ngIf="!footerTemplate"
        [pagerLeftArrowIcon]="pagerLeftArrowIcon"
        [pagerRightArrowIcon]="pagerRightArrowIcon"
        [pagerPreviousIcon]="pagerPreviousIcon"
        [pagerNextIcon]="pagerNextIcon"
        [page]="curPage"
        [size]="pageSize"
        [count]="rowCount"
        [hidden]="!isVisible"
        (change)="page.emit($event)"
      >
      </datatable-pager>
    </div>
  `,
      host: {
        class: 'datatable-footer'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    footerHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowCount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    offset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerLeftArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerRightArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerPreviousIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerNextIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    totalMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    footerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedCount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class DatatableComponent {
  constructor(scrollbarHelper, dimensionsHelper, cd, element, differs, columnChangesService, configuration) {
    this.scrollbarHelper = scrollbarHelper;
    this.dimensionsHelper = dimensionsHelper;
    this.cd = cd;
    this.columnChangesService = columnChangesService;
    this.configuration = configuration;
    /**
     * List of row objects that should be
     * represented as selected in the grid.
     * Default value: `[]`
     */
    this.selected = [];
    /**
     * Enable vertical scrollbars
     */
    this.scrollbarV = false;
    /**
     * Enable horz scrollbars
     */
    this.scrollbarH = false;
    /**
     * The row height; which is necessary
     * to calculate the height for the lazy rendering.
     */
    this.rowHeight = 30;
    /**
     * Type of column width distribution formula.
     * Example: flex, force, standard
     */
    this.columnMode = ColumnMode.standard;
    /**
     * The minimum header height in pixels.
     * Pass a falsey for no header
     */
    this.headerHeight = 30;
    /**
     * The minimum footer height in pixels.
     * Pass falsey for no footer
     */
    this.footerHeight = 0;
    /**
     * If the table should use external paging
     * otherwise its assumed that all data is preloaded.
     */
    this.externalPaging = false;
    /**
     * If the table should use external sorting or
     * the built-in basic sorting.
     */
    this.externalSorting = false;
    /**
     * Show the linear loading bar.
     * Default value: `false`
     */
    this.loadingIndicator = false;
    /**
     * Enable/Disable ability to re-order columns
     * by dragging them.
     */
    this.reorderable = true;
    /**
     * Swap columns on re-order columns or
     * move them.
     */
    this.swapColumns = true;
    /**
     * The type of sorting
     */
    this.sortType = SortType.single;
    /**
     * Array of sorted columns by property and type.
     * Default value: `[]`
     */
    this.sorts = [];
    /**
     * Css class overrides
     */
    this.cssClasses = {
      sortAscending: 'datatable-icon-up',
      sortDescending: 'datatable-icon-down',
      sortUnset: 'datatable-icon-sort-unset',
      pagerLeftArrow: 'datatable-icon-left',
      pagerRightArrow: 'datatable-icon-right',
      pagerPrevious: 'datatable-icon-prev',
      pagerNext: 'datatable-icon-skip'
    };
    /**
     * Message overrides for localization
     *
     * emptyMessage     [default] = 'No data to display'
     * totalMessage     [default] = 'total'
     * selectedMessage  [default] = 'selected'
     */
    this.messages = {
      // Message to show when array is presented
      // but contains no values
      emptyMessage: 'No data to display',
      // Footer total message
      totalMessage: 'total',
      // Footer selected message
      selectedMessage: 'selected'
    };
    /**
     * A boolean you can use to set the detault behaviour of rows and groups
     * whether they will start expanded or not. If ommited the default is NOT expanded.
     *
     */
    this.groupExpansionDefault = false;
    /**
     * Property to which you can use for determining select all
     * rows on current page or not.
     *
     * @memberOf DatatableComponent
     */
    this.selectAllRowsOnPage = false;
    /**
     * A flag for row virtualization on / off
     */
    this.virtualization = true;
    /**
     * A flag for switching summary row on / off
     */
    this.summaryRow = false;
    /**
     * A height of summary row
     */
    this.summaryHeight = 30;
    /**
     * A property holds a summary row position: top/bottom
     */
    this.summaryPosition = 'top';
    /**
     * Body was scrolled typically in a `scrollbarV:true` scenario.
     */
    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * A cell or row was focused via keyboard or mouse click.
     */
    this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * A cell or row was selected.
     */
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Column sort was invoked.
     */
    this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * The table was paged either triggered by the pager or the body scroll.
     */
    this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Columns were re-ordered.
     */
    this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Column was resized.
     */
    this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * The context menu was invoked on the table.
     * type indicates whether the header or the body was clicked.
     * content contains either the column or the row that was clicked.
     */
    this.tableContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
    /**
     * A row was expanded ot collapsed for tree
     */
    this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.rowCount = 0;
    this._offsetX = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(0);
    this._count = 0;
    this._offset = 0;
    this._subscriptions = [];
    /**
     * This will be used when displaying or selecting rows.
     * when tracking/comparing them, we'll use the value of this fn,
     *
     * (`fn(x) === fn(y)` instead of `x === y`)
     */
    this.rowIdentity = x => {
      if (this._groupRowsBy) {
        // each group in groupedRows are stored as {key, value: [rows]},
        // where key is the groupRowsBy index
        return x.key;
      } else {
        return x;
      }
    };
    // get ref to elm for measuring
    this.element = element.nativeElement;
    this.rowDiffer = differs.find({}).create();
    // apply global settings from Module.forRoot
    if (this.configuration && this.configuration.messages) {
      this.messages = {
        ...this.configuration.messages
      };
    }
  }
  /**
   * Rows that are displayed in the table.
   */
  set rows(val) {
    this._rows = val;
    if (val) {
      this._internalRows = [...val];
    }
    // auto sort on new updates
    if (!this.externalSorting) {
      this.sortInternalRows();
    }
    // auto group by parent on new update
    this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
    // recalculate sizes/etc
    this.recalculate();
    if (this._rows && this._groupRowsBy) {
      // If a column has been specified in _groupRowsBy created a new array with the data grouped by that row
      this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
    }
    this.cd.markForCheck();
  }
  /**
   * Gets the rows.
   */
  get rows() {
    return this._rows;
  }
  /**
   * This attribute allows the user to set the name of the column to group the data with
   */
  set groupRowsBy(val) {
    if (val) {
      this._groupRowsBy = val;
      if (this._rows && this._groupRowsBy) {
        // cretes a new array with the data grouped
        this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
      }
    }
  }
  get groupRowsBy() {
    return this._groupRowsBy;
  }
  /**
   * Columns to be displayed.
   */
  set columns(val) {
    if (val) {
      this._internalColumns = [...val];
      setColumnDefaults(this._internalColumns);
      this.recalculateColumns();
    }
    this._columns = val;
  }
  /**
   * Get the columns.
   */
  get columns() {
    return this._columns;
  }
  /**
   * The page size to be shown.
   * Default value: `undefined`
   */
  set limit(val) {
    this._limit = val;
    // recalculate sizes/etc
    this.recalculate();
  }
  /**
   * Gets the limit.
   */
  get limit() {
    return this._limit;
  }
  /**
   * The total count of all rows.
   * Default value: `0`
   */
  set count(val) {
    this._count = val;
    // recalculate sizes/etc
    this.recalculate();
  }
  /**
   * Gets the count.
   */
  get count() {
    return this._count;
  }
  /**
   * The current offset ( page - 1 ) shown.
   * Default value: `0`
   */
  set offset(val) {
    this._offset = val;
  }
  get offset() {
    return Math.max(Math.min(this._offset, Math.ceil(this.rowCount / this.pageSize) - 1), 0);
  }
  /**
   * CSS class applied if the header height if fixed height.
   */
  get isFixedHeader() {
    const headerHeight = this.headerHeight;
    return typeof headerHeight === 'string' ? headerHeight !== 'auto' : true;
  }
  /**
   * CSS class applied to the root element if
   * the row heights are fixed heights.
   */
  get isFixedRow() {
    return this.rowHeight !== 'auto';
  }
  /**
   * CSS class applied to root element if
   * vertical scrolling is enabled.
   */
  get isVertScroll() {
    return this.scrollbarV;
  }
  /**
   * CSS class applied to root element if
   * virtualization is enabled.
   */
  get isVirtualized() {
    return this.virtualization;
  }
  /**
   * CSS class applied to the root element
   * if the horziontal scrolling is enabled.
   */
  get isHorScroll() {
    return this.scrollbarH;
  }
  /**
   * CSS class applied to root element is selectable.
   */
  get isSelectable() {
    return this.selectionType !== undefined;
  }
  /**
   * CSS class applied to root is checkbox selection.
   */
  get isCheckboxSelection() {
    return this.selectionType === SelectionType.checkbox;
  }
  /**
   * CSS class applied to root if cell selection.
   */
  get isCellSelection() {
    return this.selectionType === SelectionType.cell;
  }
  /**
   * CSS class applied to root if single select.
   */
  get isSingleSelection() {
    return this.selectionType === SelectionType.single;
  }
  /**
   * CSS class added to root element if mulit select
   */
  get isMultiSelection() {
    return this.selectionType === SelectionType.multi;
  }
  /**
   * CSS class added to root element if mulit click select
   */
  get isMultiClickSelection() {
    return this.selectionType === SelectionType.multiClick;
  }
  /**
   * Column templates gathered from `ContentChildren`
   * if described in your markup.
   */
  set columnTemplates(val) {
    this._columnTemplates = val;
    this.translateColumns(val);
  }
  /**
   * Returns the column templates.
   */
  get columnTemplates() {
    return this._columnTemplates;
  }
  /**
   * Returns if all rows are selected.
   */
  get allRowsSelected() {
    let allRowsSelected = this.rows && this.selected && this.selected.length === this.rows.length;
    if (this.bodyComponent && this.selectAllRowsOnPage) {
      const indexes = this.bodyComponent.indexes;
      const rowsOnPage = indexes.last - indexes.first;
      allRowsSelected = this.selected.length === rowsOnPage;
    }
    return this.selected && this.rows && this.rows.length !== 0 && allRowsSelected;
  }
  /**
   * Lifecycle hook that is called after data-bound
   * properties of a directive are initialized.
   */
  ngOnInit() {
    // need to call this immediatly to size
    // if the table is hidden the visibility
    // listener will invoke this itself upon show
    this.recalculate();
  }
  /**
   * Lifecycle hook that is called after a component's
   * view has been fully initialized.
   */
  ngAfterViewInit() {
    if (!this.externalSorting) {
      this.sortInternalRows();
    }
    // this has to be done to prevent the change detection
    // tree from freaking out because we are readjusting
    if (typeof requestAnimationFrame === 'undefined') {
      return;
    }
    requestAnimationFrame(() => {
      this.recalculate();
      // emit page for virtual server-side kickoff
      if (this.externalPaging && this.scrollbarV) {
        this.page.emit({
          count: this.count,
          pageSize: this.pageSize,
          limit: this.limit,
          offset: 0
        });
      }
    });
  }
  /**
   * Lifecycle hook that is called after a component's
   * content has been fully initialized.
   */
  ngAfterContentInit() {
    this.columnTemplates.changes.subscribe(v => this.translateColumns(v));
    this.listenForColumnInputChanges();
  }
  /**
   * Translates the templates to the column objects
   */
  translateColumns(val) {
    if (val) {
      const arr = val.toArray();
      if (arr.length) {
        this._internalColumns = translateTemplates(arr);
        setColumnDefaults(this._internalColumns);
        this.recalculateColumns();
        this.sortInternalRows();
        this.cd.markForCheck();
      }
    }
  }
  /**
   * Creates a map with the data grouped by the user choice of grouping index
   *
   * @param originalArray the original array passed via parameter
   * @param groupByIndex  the index of the column to group the data by
   */
  groupArrayBy(originalArray, groupBy) {
    // create a map to hold groups with their corresponding results
    const map = new Map();
    let i = 0;
    originalArray.forEach(item => {
      const key = item[groupBy];
      if (!map.has(key)) {
        map.set(key, [item]);
      } else {
        map.get(key).push(item);
      }
      i++;
    });
    const addGroup = (key, value) => {
      return {
        key,
        value
      };
    };
    // convert map back to a simple array of objects
    return Array.from(map, x => addGroup(x[0], x[1]));
  }
  /*
   * Lifecycle hook that is called when Angular dirty checks a directive.
   */
  ngDoCheck() {
    if (this.rowDiffer.diff(this.rows)) {
      if (!this.externalSorting) {
        this.sortInternalRows();
      } else {
        this._internalRows = [...this.rows];
      }
      // auto group by parent on new update
      this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
      this.recalculatePages();
      this.cd.markForCheck();
    }
  }
  /**
   * Recalc's the sizes of the grid.
   *
   * Updated automatically on changes to:
   *
   *  - Columns
   *  - Rows
   *  - Paging related
   *
   * Also can be manually invoked or upon window resize.
   */
  recalculate() {
    this.recalculateDims();
    this.recalculateColumns();
    this.cd.markForCheck();
  }
  /**
   * Window resize handler to update sizes.
   */
  onWindowResize() {
    this.recalculate();
  }
  /**
   * Recalulcates the column widths based on column width
   * distribution mode and scrollbar offsets.
   */
  recalculateColumns(columns = this._internalColumns, forceIdx = -1, allowBleed = this.scrollbarH) {
    if (!columns) return undefined;
    let width = this._innerWidth;
    if (this.scrollbarV) {
      width = width - this.scrollbarHelper.width;
    }
    if (this.columnMode === ColumnMode.force) {
      forceFillColumnWidths(columns, width, forceIdx, allowBleed);
    } else if (this.columnMode === ColumnMode.flex) {
      adjustColumnWidths(columns, width);
    }
    return columns;
  }
  /**
   * Recalculates the dimensions of the table size.
   * Internally calls the page size and row count calcs too.
   *
   */
  recalculateDims() {
    const dims = this.dimensionsHelper.getDimensions(this.element);
    this._innerWidth = Math.floor(dims.width);
    if (this.scrollbarV) {
      let height = dims.height;
      if (this.headerHeight) height = height - this.headerHeight;
      if (this.footerHeight) height = height - this.footerHeight;
      this.bodyHeight = height;
    }
    this.recalculatePages();
  }
  /**
   * Recalculates the pages after a update.
   */
  recalculatePages() {
    this.pageSize = this.calcPageSize();
    this.rowCount = this.calcRowCount();
  }
  /**
   * Body triggered a page event.
   */
  onBodyPage({
    offset
  }) {
    // Avoid pagination caming from body events like scroll when the table
    // has no virtualization and the external paging is enable.
    // This means, let's the developer handle pagination by my him(her) self
    if (this.externalPaging && !this.virtualization) {
      return;
    }
    this.offset = offset;
    this.page.emit({
      count: this.count,
      pageSize: this.pageSize,
      limit: this.limit,
      offset: this.offset
    });
  }
  /**
   * The body triggered a scroll event.
   */
  onBodyScroll(event) {
    this._offsetX.next(event.offsetX);
    this.scroll.emit(event);
    this.cd.detectChanges();
  }
  /**
   * The footer triggered a page event.
   */
  onFooterPage(event) {
    this.offset = event.page - 1;
    this.bodyComponent.updateOffsetY(this.offset);
    this.page.emit({
      count: this.count,
      pageSize: this.pageSize,
      limit: this.limit,
      offset: this.offset
    });
    if (this.selectAllRowsOnPage) {
      this.selected = [];
      this.select.emit({
        selected: this.selected
      });
    }
  }
  /**
   * Recalculates the sizes of the page
   */
  calcPageSize(val = this.rows) {
    // Keep the page size constant even if the row has been expanded.
    // This is because an expanded row is still considered to be a child of
    // the original row.  Hence calculation would use rowHeight only.
    if (this.scrollbarV && this.virtualization) {
      const size = Math.ceil(this.bodyHeight / this.rowHeight);
      return Math.max(size, 0);
    }
    // if limit is passed, we are paging
    if (this.limit !== undefined) {
      return this.limit;
    }
    // otherwise use row length
    if (val) {
      return val.length;
    }
    // other empty :(
    return 0;
  }
  /**
   * Calculates the row count.
   */
  calcRowCount(val = this.rows) {
    if (!this.externalPaging) {
      if (!val) return 0;
      if (this.groupedRows) {
        return this.groupedRows.length;
      } else if (this.treeFromRelation != null && this.treeToRelation != null) {
        return this._internalRows.length;
      } else {
        return val.length;
      }
    }
    return this.count;
  }
  /**
   * The header triggered a contextmenu event.
   */
  onColumnContextmenu({
    event,
    column
  }) {
    this.tableContextmenu.emit({
      event,
      type: ContextmenuType.header,
      content: column
    });
  }
  /**
   * The body triggered a contextmenu event.
   */
  onRowContextmenu({
    event,
    row
  }) {
    this.tableContextmenu.emit({
      event,
      type: ContextmenuType.body,
      content: row
    });
  }
  /**
   * The header triggered a column resize event.
   */
  onColumnResize({
    column,
    newValue
  }) {
    /* Safari/iOS 10.2 workaround */
    if (column === undefined) {
      return;
    }
    let idx;
    const cols = this._internalColumns.map((c, i) => {
      c = {
        ...c
      };
      if (c.$$id === column.$$id) {
        idx = i;
        c.width = newValue;
        // set this so we can force the column
        // width distribution to be to this value
        c.$$oldWidth = newValue;
      }
      return c;
    });
    this.recalculateColumns(cols, idx);
    this._internalColumns = cols;
    this.resize.emit({
      column,
      newValue
    });
  }
  /**
   * The header triggered a column re-order event.
   */
  onColumnReorder({
    column,
    newValue,
    prevValue
  }) {
    const cols = this._internalColumns.map(c => {
      return {
        ...c
      };
    });
    if (this.swapColumns) {
      const prevCol = cols[newValue];
      cols[newValue] = column;
      cols[prevValue] = prevCol;
    } else {
      if (newValue > prevValue) {
        const movedCol = cols[prevValue];
        for (let i = prevValue; i < newValue; i++) {
          cols[i] = cols[i + 1];
        }
        cols[newValue] = movedCol;
      } else {
        const movedCol = cols[prevValue];
        for (let i = prevValue; i > newValue; i--) {
          cols[i] = cols[i - 1];
        }
        cols[newValue] = movedCol;
      }
    }
    this._internalColumns = cols;
    this.reorder.emit({
      column,
      newValue,
      prevValue
    });
  }
  /**
   * The header triggered a column sort event.
   */
  onColumnSort(event) {
    // clean selected rows
    if (this.selectAllRowsOnPage) {
      this.selected = [];
      this.select.emit({
        selected: this.selected
      });
    }
    this.sorts = event.sorts;
    // this could be optimized better since it will resort
    // the rows again on the 'push' detection...
    if (this.externalSorting === false) {
      // don't use normal setter so we don't resort
      this.sortInternalRows();
    }
    // auto group by parent on new update
    this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
    // Always go to first page when sorting to see the newly sorted data
    this.offset = 0;
    this.bodyComponent.updateOffsetY(this.offset);
    this.sort.emit(event);
  }
  /**
   * Toggle all row selection
   */
  onHeaderSelect(event) {
    if (this.bodyComponent && this.selectAllRowsOnPage) {
      // before we splice, chk if we currently have all selected
      const first = this.bodyComponent.indexes.first;
      const last = this.bodyComponent.indexes.last;
      const allSelected = this.selected.length === last - first;
      // remove all existing either way
      this.selected = [];
      // do the opposite here
      if (!allSelected) {
        this.selected.push(...this._internalRows.slice(first, last));
      }
    } else {
      // before we splice, chk if we currently have all selected
      const allSelected = this.selected.length === this.rows.length;
      // remove all existing either way
      this.selected = [];
      // do the opposite here
      if (!allSelected) {
        this.selected.push(...this.rows);
      }
    }
    this.select.emit({
      selected: this.selected
    });
  }
  /**
   * A row was selected from body
   */
  onBodySelect(event) {
    this.select.emit(event);
  }
  /**
   * A row was expanded or collapsed for tree
   */
  onTreeAction(event) {
    const row = event.row;
    // TODO: For duplicated items this will not work
    const rowIndex = this._rows.findIndex(r => r[this.treeToRelation] === event.row[this.treeToRelation]);
    this.treeAction.emit({
      row,
      rowIndex
    });
  }
  ngOnDestroy() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }
  /**
   * listen for changes to input bindings of all DataTableColumnDirective and
   * trigger the columnTemplates.changes observable to emit
   */
  listenForColumnInputChanges() {
    this._subscriptions.push(this.columnChangesService.columnInputChanges$.subscribe(() => {
      if (this.columnTemplates) {
        this.columnTemplates.notifyOnChanges();
      }
    }));
  }
  sortInternalRows() {
    this._internalRows = sortRows(this._internalRows, this._internalColumns, this.sorts);
  }
}
DatatableComponent.ɵfac = function DatatableComponent_Factory(t) {
  return new (t || DatatableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DimensionsHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColumnChangesService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('configuration', 8));
};
DatatableComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DatatableComponent,
  selectors: [["ngx-datatable"]],
  contentQueries: function DatatableComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DatatableRowDetailDirective, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DatatableGroupHeaderDirective, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DatatableFooterDirective, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DataTableColumnDirective, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rowDetail = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.groupHeader = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.columnTemplates = _t);
    }
  },
  viewQuery: function DatatableComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](DataTableBodyComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](DataTableHeaderComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bodyComponent = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerComponent = _t.first);
    }
  },
  hostAttrs: [1, "ngx-datatable"],
  hostVars: 22,
  hostBindings: function DatatableComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function DatatableComponent_resize_HostBindingHandler() {
        return ctx.onWindowResize();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fixed-header", ctx.isFixedHeader)("fixed-row", ctx.isFixedRow)("scroll-vertical", ctx.isVertScroll)("virtualized", ctx.isVirtualized)("scroll-horz", ctx.isHorScroll)("selectable", ctx.isSelectable)("checkbox-selection", ctx.isCheckboxSelection)("cell-selection", ctx.isCellSelection)("single-selection", ctx.isSingleSelection)("multi-selection", ctx.isMultiSelection)("multi-click-selection", ctx.isMultiClickSelection);
    }
  },
  inputs: {
    targetMarkerTemplate: "targetMarkerTemplate",
    rows: "rows",
    groupRowsBy: "groupRowsBy",
    groupedRows: "groupedRows",
    columns: "columns",
    selected: "selected",
    scrollbarV: "scrollbarV",
    scrollbarH: "scrollbarH",
    rowHeight: "rowHeight",
    columnMode: "columnMode",
    headerHeight: "headerHeight",
    footerHeight: "footerHeight",
    externalPaging: "externalPaging",
    externalSorting: "externalSorting",
    limit: "limit",
    count: "count",
    offset: "offset",
    loadingIndicator: "loadingIndicator",
    selectionType: "selectionType",
    reorderable: "reorderable",
    swapColumns: "swapColumns",
    sortType: "sortType",
    sorts: "sorts",
    cssClasses: "cssClasses",
    messages: "messages",
    rowClass: "rowClass",
    selectCheck: "selectCheck",
    displayCheck: "displayCheck",
    groupExpansionDefault: "groupExpansionDefault",
    trackByProp: "trackByProp",
    selectAllRowsOnPage: "selectAllRowsOnPage",
    virtualization: "virtualization",
    treeFromRelation: "treeFromRelation",
    treeToRelation: "treeToRelation",
    summaryRow: "summaryRow",
    summaryHeight: "summaryHeight",
    summaryPosition: "summaryPosition",
    rowIdentity: "rowIdentity"
  },
  outputs: {
    scroll: "scroll",
    activate: "activate",
    select: "select",
    sort: "sort",
    page: "page",
    reorder: "reorder",
    resize: "resize",
    tableContextmenu: "tableContextmenu",
    treeAction: "treeAction"
  },
  decls: 5,
  vars: 34,
  consts: [["role", "table", "visibilityObserver", "", 3, "visible"], ["role", "rowgroup", 3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu", 4, "ngIf"], ["role", "rowgroup", 3, "groupRowsBy", "groupedRows", "rows", "groupExpansionDefault", "scrollbarV", "scrollbarH", "virtualization", "loadingIndicator", "externalPaging", "rowHeight", "rowCount", "offset", "trackByProp", "columns", "pageSize", "offsetX", "rowDetail", "groupHeader", "selected", "innerWidth", "bodyHeight", "selectionType", "emptyMessage", "rowIdentity", "rowClass", "selectCheck", "displayCheck", "summaryRow", "summaryHeight", "summaryPosition", "page", "activate", "rowContextmenu", "select", "scroll", "treeAction"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page", 4, "ngIf"], ["role", "rowgroup", 3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page"]],
  template: function DatatableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visible", function DatatableComponent_Template_div_visible_0_listener() {
        return ctx.recalculate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatatableComponent_datatable_header_1_Template, 2, 17, "datatable-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "datatable-body", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function DatatableComponent_Template_datatable_body_page_2_listener($event) {
        return ctx.onBodyPage($event);
      })("activate", function DatatableComponent_Template_datatable_body_activate_2_listener($event) {
        return ctx.activate.emit($event);
      })("rowContextmenu", function DatatableComponent_Template_datatable_body_rowContextmenu_2_listener($event) {
        return ctx.onRowContextmenu($event);
      })("select", function DatatableComponent_Template_datatable_body_select_2_listener($event) {
        return ctx.onBodySelect($event);
      })("scroll", function DatatableComponent_Template_datatable_body_scroll_2_listener($event) {
        return ctx.onBodyScroll($event);
      })("treeAction", function DatatableComponent_Template_datatable_body_treeAction_2_listener($event) {
        return ctx.onTreeAction($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DatatableComponent_datatable_footer_4_Template, 1, 12, "datatable-footer", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerHeight);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groupRowsBy", ctx.groupRowsBy)("groupedRows", ctx.groupedRows)("rows", ctx._internalRows)("groupExpansionDefault", ctx.groupExpansionDefault)("scrollbarV", ctx.scrollbarV)("scrollbarH", ctx.scrollbarH)("virtualization", ctx.virtualization)("loadingIndicator", ctx.loadingIndicator)("externalPaging", ctx.externalPaging)("rowHeight", ctx.rowHeight)("rowCount", ctx.rowCount)("offset", ctx.offset)("trackByProp", ctx.trackByProp)("columns", ctx._internalColumns)("pageSize", ctx.pageSize)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 32, ctx._offsetX))("rowDetail", ctx.rowDetail)("groupHeader", ctx.groupHeader)("selected", ctx.selected)("innerWidth", ctx._innerWidth)("bodyHeight", ctx.bodyHeight)("selectionType", ctx.selectionType)("emptyMessage", ctx.messages.emptyMessage)("rowIdentity", ctx.rowIdentity)("rowClass", ctx.rowClass)("selectCheck", ctx.selectCheck)("displayCheck", ctx.displayCheck)("summaryRow", ctx.summaryRow)("summaryHeight", ctx.summaryHeight)("summaryPosition", ctx.summaryPosition);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerHeight);
    }
  },
  dependencies: [DataTableHeaderComponent, DataTableBodyComponent, DataTableFooterComponent, VisibilityDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe],
  styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;transform:translate(0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable *:before,.ngx-datatable *:after{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-header-inner{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:none}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:none}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:none}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([throttleable(5)], DatatableComponent.prototype, "onWindowResize", null);
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-datatable',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'ngx-datatable'
      },
      template: "<div role=\"table\" visibilityObserver (visible)=\"recalculate()\">\n  <datatable-header\n    role=\"rowgroup\"\n    *ngIf=\"headerHeight\"\n    [sorts]=\"sorts\"\n    [sortType]=\"sortType\"\n    [scrollbarH]=\"scrollbarH\"\n    [innerWidth]=\"_innerWidth\"\n    [offsetX]=\"_offsetX | async\"\n    [dealsWithGroup]=\"groupedRows !== undefined\"\n    [columns]=\"_internalColumns\"\n    [headerHeight]=\"headerHeight\"\n    [reorderable]=\"reorderable\"\n    [targetMarkerTemplate]=\"targetMarkerTemplate\"\n    [sortAscendingIcon]=\"cssClasses.sortAscending\"\n    [sortDescendingIcon]=\"cssClasses.sortDescending\"\n    [sortUnsetIcon]=\"cssClasses.sortUnset\"\n    [allRowsSelected]=\"allRowsSelected\"\n    [selectionType]=\"selectionType\"\n    (sort)=\"onColumnSort($event)\"\n    (resize)=\"onColumnResize($event)\"\n    (reorder)=\"onColumnReorder($event)\"\n    (select)=\"onHeaderSelect($event)\"\n    (columnContextmenu)=\"onColumnContextmenu($event)\"\n  >\n  </datatable-header>\n  <datatable-body\n    role=\"rowgroup\"\n    [groupRowsBy]=\"groupRowsBy\"\n    [groupedRows]=\"groupedRows\"\n    [rows]=\"_internalRows\"\n    [groupExpansionDefault]=\"groupExpansionDefault\"\n    [scrollbarV]=\"scrollbarV\"\n    [scrollbarH]=\"scrollbarH\"\n    [virtualization]=\"virtualization\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [externalPaging]=\"externalPaging\"\n    [rowHeight]=\"rowHeight\"\n    [rowCount]=\"rowCount\"\n    [offset]=\"offset\"\n    [trackByProp]=\"trackByProp\"\n    [columns]=\"_internalColumns\"\n    [pageSize]=\"pageSize\"\n    [offsetX]=\"_offsetX | async\"\n    [rowDetail]=\"rowDetail\"\n    [groupHeader]=\"groupHeader\"\n    [selected]=\"selected\"\n    [innerWidth]=\"_innerWidth\"\n    [bodyHeight]=\"bodyHeight\"\n    [selectionType]=\"selectionType\"\n    [emptyMessage]=\"messages.emptyMessage\"\n    [rowIdentity]=\"rowIdentity\"\n    [rowClass]=\"rowClass\"\n    [selectCheck]=\"selectCheck\"\n    [displayCheck]=\"displayCheck\"\n    [summaryRow]=\"summaryRow\"\n    [summaryHeight]=\"summaryHeight\"\n    [summaryPosition]=\"summaryPosition\"\n    (page)=\"onBodyPage($event)\"\n    (activate)=\"activate.emit($event)\"\n    (rowContextmenu)=\"onRowContextmenu($event)\"\n    (select)=\"onBodySelect($event)\"\n    (scroll)=\"onBodyScroll($event)\"\n    (treeAction)=\"onTreeAction($event)\"\n  >\n  </datatable-body>\n  <datatable-footer\n    *ngIf=\"footerHeight\"\n    [rowCount]=\"rowCount\"\n    [pageSize]=\"pageSize\"\n    [offset]=\"offset\"\n    [footerHeight]=\"footerHeight\"\n    [footerTemplate]=\"footer\"\n    [totalMessage]=\"messages.totalMessage\"\n    [pagerLeftArrowIcon]=\"cssClasses.pagerLeftArrow\"\n    [pagerRightArrowIcon]=\"cssClasses.pagerRightArrow\"\n    [pagerPreviousIcon]=\"cssClasses.pagerPrevious\"\n    [selectedCount]=\"selected.length\"\n    [selectedMessage]=\"!!selectionType && messages.selectedMessage\"\n    [pagerNextIcon]=\"cssClasses.pagerNext\"\n    (page)=\"onFooterPage($event)\"\n  >\n  </datatable-footer>\n</div>\n",
      styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;transform:translate(0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable *:before,.ngx-datatable *:after{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-header-inner{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:none}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:none}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:none}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}\n"]
    }]
  }], function () {
    return [{
      type: ScrollbarHelper,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
      }]
    }, {
      type: DimensionsHelper,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers
    }, {
      type: ColumnChangesService
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: ['configuration']
      }]
    }];
  }, {
    targetMarkerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupRowsBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupedRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollbarV: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollbarH: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    columnMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    headerHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    footerHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    externalPaging: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    externalSorting: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    limit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    count: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    offset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loadingIndicator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    reorderable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    swapColumns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sorts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cssClasses: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    messages: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    displayCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupExpansionDefault: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    trackByProp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectAllRowsOnPage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualization: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    treeFromRelation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    treeToRelation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    summaryRow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    summaryHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    summaryPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    activate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    reorder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    resize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    tableContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    treeAction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    isFixedHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.fixed-header']
    }],
    isFixedRow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.fixed-row']
    }],
    isVertScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.scroll-vertical']
    }],
    isVirtualized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.virtualized']
    }],
    isHorScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.scroll-horz']
    }],
    isSelectable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.selectable']
    }],
    isCheckboxSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.checkbox-selection']
    }],
    isCellSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.cell-selection']
    }],
    isSingleSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.single-selection']
    }],
    isMultiSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.multi-selection']
    }],
    isMultiClickSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.multi-click-selection']
    }],
    columnTemplates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [DataTableColumnDirective]
    }],
    rowDetail: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [DatatableRowDetailDirective]
    }],
    groupHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [DatatableGroupHeaderDirective]
    }],
    footer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [DatatableFooterDirective]
    }],
    bodyComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [DataTableBodyComponent]
    }],
    headerComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [DataTableHeaderComponent]
    }],
    rowIdentity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onWindowResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['window:resize']
    }]
  });
})();
class NgxDatatableModule {
  /**
   * Configure global configuration via INgxDatatableConfig
   * @param configuration
   */
  static forRoot(configuration) {
    return {
      ngModule: NgxDatatableModule,
      providers: [{
        provide: 'configuration',
        useValue: configuration
      }]
    };
  }
}
NgxDatatableModule.ɵfac = function NgxDatatableModule_Factory(t) {
  return new (t || NgxDatatableModule)();
};
NgxDatatableModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgxDatatableModule
});
NgxDatatableModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDatatableModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
      declarations: [DataTableFooterTemplateDirective, VisibilityDirective, DraggableDirective, ResizeableDirective, OrderableDirective, LongPressDirective, ScrollerComponent, DatatableComponent, DataTableColumnDirective, DataTableHeaderComponent, DataTableHeaderCellComponent, DataTableBodyComponent, DataTableFooterComponent, DataTablePagerComponent, ProgressBarComponent, DataTableBodyRowComponent, DataTableRowWrapperComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableBodyCellComponent, DataTableSelectionComponent, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DatatableFooterDirective, DatatableGroupHeaderTemplateDirective, DataTableSummaryRowComponent],
      exports: [DatatableComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DataTableFooterTemplateDirective, DatatableFooterDirective, DataTablePagerComponent, DatatableGroupHeaderTemplateDirective]
    }]
  }], null, null);
})();
var ClickType;
(function (ClickType) {
  ClickType["single"] = "single";
  ClickType["double"] = "double";
})(ClickType || (ClickType = {}));
if (typeof document !== 'undefined' && !document.elementsFromPoint) {
  document.elementsFromPoint = elementsFromPoint;
}
/*tslint:disable*/
/**
 * Polyfill for `elementsFromPoint`
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/elementsFromPoint
 * https://gist.github.com/iddan/54d5d9e58311b0495a91bf06de661380
 * https://gist.github.com/oslego/7265412
 */
function elementsFromPoint(x, y) {
  const elements = [];
  const previousPointerEvents = [];
  let current; // TODO: window.getComputedStyle should be used with inferred type (Element)
  let i;
  let d;
  //if (document === undefined) return elements;
  // get all elements via elementFromPoint, and remove them from hit-testing in order
  while ((current = document.elementFromPoint(x, y)) && elements.indexOf(current) === -1 && current != null) {
    // push the element and its current style
    elements.push(current);
    previousPointerEvents.push({
      value: current.style.getPropertyValue('pointer-events'),
      priority: current.style.getPropertyPriority('pointer-events')
    });
    // add "pointer-events: none", to get to the underlying element
    current.style.setProperty('pointer-events', 'none', 'important');
  }
  // restore the previous pointer-events values
  for (i = previousPointerEvents.length; d = previousPointerEvents[--i];) {
    elements[i].style.setProperty('pointer-events', d.value ? d.value : '', d.priority);
  }
  // return our results
  return elements;
}
/*tslint:enable*/

/*
 * Public API Surface of ngx-datatable
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_components_tables_tables_module_ts.js.map