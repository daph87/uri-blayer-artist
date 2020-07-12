export const openModal = function(id) {
    
    this.paintings.map(painting => {
        if (painting.id === id) {
            this.painting = painting;
            this.index = this.paintings.indexOf(painting)
            this.maxLength = this.paintings.length - 1;
        }
    })
    this.artworkModal.nativeElement.style.display = 'block';
 
}

export const closeModal = function() {
    console.log(" escape")
    this.artworkModal.nativeElement.style.display = 'none';
}

export const previousImage = function() {
    console.log("arrow");
    if (this.index == 0) this.index = this.paintings.length;
    this.painting = this.paintings[this.index - 1];
    this.index--;
}

export const nextImage = function() {
    console.log("arrow right");
    if (this.index + 1 > this.maxLength) this.index = -1;
    this.painting = this.paintings[this.index + 1];
    this.index++;
}