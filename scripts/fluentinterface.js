var Book = /** @class */ (function () {
    function Book() {
    }
    Book.prototype.setTitle = function (title) {
        this.title = title;
        return this;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
        return this;
    };
    Book.prototype.setRating = function (rating) {
        this.rating = rating;
        return this;
    };
    Book.prototype.setContent = function (content) {
        this.content = content;
        return this;
    };
    Book.prototype.getInfo = function () {
        return "A " + this.title + " book is written by " + this.author + " with " + this.rating + " out of 5 stars";
    };
    return Book;
}());
console.log(new Book()
    .setTitle('Voyna i Mir')
    .setAuthor('Lev Tolstoy')
    .setRating(3)
    .setContent('A very long and boring book... Once ago...')
    .getInfo());
