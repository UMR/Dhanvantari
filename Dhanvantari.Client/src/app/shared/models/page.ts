/**
 * An array of data with an associated page object used for paging
 */
export class PagedData<T> {
  data = [];
  page = new Page();
}
/**
 * A model for an individual corporate employee
 */
export class CorporateEmployee {
  name: string;
  gender: string;
  company: string;
  age: number;

  constructor(name: string, gender: string, company: string, age: number) {
    this.name = name;
    this.gender = gender;
    this.company = company;
    this.age = age;
  }
}
/**
 * An object used to get page information from the server
 */
export class Page {
  //The number of elements in the page
  size: number = 0;
  //The total number of elements
  totalElements: number = 0;
  //The total number of pages
  totalPages: number = 0;
  //The current page number
  pageNumber: number = 0;
}
