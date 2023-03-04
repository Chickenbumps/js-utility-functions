// JS Utility Functions -> js-utility-functions

const slugify = (string, separator = "-") => {
  return string
    .toString() // Cast to string  
    .toLowerCase()  // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a stirng
    .replace(/\s+/g, separator) // Replace spaces with -
    .replace(/\[^\w\-]+/g, "")  // Remove all non-word chars
    .replace(/\_/g, separator)  // Replace _ with -
    .replace(/\-+/g, separator) // Replace multiple - with single -
    .replace(/\-$/g, "")  // Remove trailing -
};


console.log(slugify("Hello_WORLD__!__"));
