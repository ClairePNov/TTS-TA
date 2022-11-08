let slideshow = {
    photoList: ['Scout', 'Maya', 'Sabastian', 'Adalaide', 'Fable','Estelle'],
    currentPhotoIndex: 0,

    nextPhoto: function() {
        if(this.currentPhotoIndex < this.photoList.length - 1) {
            this.currentPhotoIndex++;
            console.log('currentPhoto is: '+ this.photoList[this.currentPhotoIndex]);
        } else {}
                this.currentPhotoIndex++;
                console.log('currentPhoto is')
            }
        }
    }
}
playInterval= null 
play: function(){}

setInterval(2000ms);
clearInterval(playInterval);
