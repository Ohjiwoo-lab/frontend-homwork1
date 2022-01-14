window.onload = function(){
    document.getElementById('good').onclick = function(){
        if(this.value == 'empty'){
            this.src = '../images/icon_thumbs_up_fill.png';
            document.querySelector('.circle').style.backgroundColor = '#1b55f5';
            this.value = 'fill';
        }
        else{
            this.src = '../images/icon_thumbs_up.png';
            document.querySelector('.circle').style.backgroundColor = '#2e2c2c';
            this.value = 'empty';
        }
    }
    document.getElementById('heart').onclick = function(){
        if(this.value == 'empty'){
            this.src = '../images/icon_heart_fill.png';
            document.querySelector('.circle2').style.backgroundColor = '#e83838';
            this.value = 'fill';
        }
        else{
            this.src = '../images/icon_heart.png';
            document.querySelector('.circle2').style.backgroundColor = '#2e2c2c';
            this.value = 'empty';
        }
    }

    document.getElementsByClassName('star_remove').onclick = function(){
        let items = document.querySelector('.star_rating');
        items.forEach(function(item){
            item.src = '../../images/icon_empty_star.png';
        });
    }
}
