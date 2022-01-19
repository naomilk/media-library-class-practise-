class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    set isCheckedOut(isCheckedOut) {
      this._isCheckedOut = isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    toggleCheckOutStatus() {
      if(this._isCheckedOut === true) {
        this._isCheckedOut = false;
      } else if(this._isCheckedOut === false) {
        this._isCheckedOut = true;
      }
    }
  
    getAverageRating() {
      let ratingsSum = this.ratings.reduce((prevVal, currentVal) => prevVal + currentVal, 0);
      let lengthOfArray = this.ratings.length
      let averageRatings = ratingsSum / lengthOfArray;
      return averageRatings;
    }
  
    addRating(newRating) {
      this.ratings.push(newRating);
    }
  };
  
  class Book extends Media {
    constructor(title, author, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      this._author = author;
    }  
  
    get pages() {
      this._pages = pages;
    }
  };
  
  class Movie extends Media {
    constructor(mediaData, director, runTime) {
      super(mediaData);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      this._director = director;
    }
  
    get runTime() {
      this._runTime = runTime;
    }
  };
  
  class CD extends Media {
    constructor(mediaData, artist, songs) {
      super(mediaData);
      this._artist = artist;
      this._songs = [];
    }
  
    get artist() {
      this._artist = artist;
    }
  
    get songs() {
      this._songs = songs;
    }
  };
  
  
  
  
  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
  
  historyOfEverything.toggleCheckOutStatus();
  
  console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  console.log(historyOfEverything.getAverageRating());
  
  
  
  
  const speed = new Movie('Speed', 'Jan de Bont', 116);
  
  speed.toggleCheckOutStatus();
  
  console.log(speed.isCheckedOut);
  
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  
  console.log(speed.getAverageRating());
  