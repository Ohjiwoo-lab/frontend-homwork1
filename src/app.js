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

    document.getElementById('star-remove').onclick = function(){
        document.getElementById("first_star").style.backgroundImage = "url('../images/icon_empty_star.png')";
        document.getElementById("second_star").style.backgroundImage = "url('../images/icon_empty_star.png')";
        document.getElementById("third_star").style.backgroundImage = "url('../images/icon_empty_star.png')";
        document.getElementById("fourth_star").style.backgroundImage = "url('../images/icon_empty_star.png')";
        document.getElementById("fifth_star").style.backgroundImage = "url('../images/icon_empty_star.png')";
    }
}
