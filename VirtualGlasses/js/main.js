let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

const renderProd = (arr) =>{
    let arrResult = [];
    
    for (let i=0; i<arr.length; i++){
        let prod = arr[i];
        arrResult.push(prod)
    }
    console.log(arrResult);
}
renderProd(dataGlasses);


// dataGlasses.forEach(function(Glasses){
    dataGlasses.forEach(Glasses => {
    console.log(Glasses.src);
    document.getElementById("renderVglasses").innerHTML+= `
        <div class="col-4">
        <img class="glasses" src="${Glasses.src}" alt="">
        </div>    
    `
});


let Pickglasses = document.getElementsByClassName('glasses');
    for (let i = 0; i < Pickglasses.length; i++){
        Pickglasses[i].addEventListener('click',function(){
           
          document.getElementById('avatar').innerHTML=`
                 <img class="active"src="${dataGlasses[i].virtualImg}" alt="">
             `
            document.getElementById('glassesInfo').innerHTML=`
            <div class="title">
                            <h3>${dataGlasses[i].name} - ${dataGlasses[i].brand} (${dataGlasses[i].color})</h3>
                        </div>
                        <div class="content">
                            <span>${dataGlasses[i].price}</span> <span class="gcolor">Stocking</span>
                            <p>${dataGlasses[i].description}</p>
                        </div>
            `
            console.log(dataGlasses[i],i);
        });

    }

    
        // function removeGlasses(){
        //     let PickNext=[];
        //     for (let i = 0; i <PickNext.length; i++){
        //         PickNext[i];
        //         console.log(dataGlasses[i].id, i)
        //     }
        // }

    // for (let i = 1; i < Pickglasses.length; i++){
    //     PickNext[i].addEventListener('click',function(){
           
    //       document.getElementById('avatar').innerHTML=`
    //              <img class="active"src="${dataGlasses[i].virtualImg}" alt="">
    //          `
    //         document.getElementById('glassesInfo').innerHTML=`
    //         <div class="title">
    //                         <h3>${dataGlasses[i].name} - ${dataGlasses[i].brand} (${dataGlasses[i].color})</h3>
    //                     </div>
    //                     <div class="content">
    //                         <span>${dataGlasses[i].price}</span> <span class="gcolor">Stocking</span>
    //                         <p>${dataGlasses[i].description}</p>
    //                     </div>
    //         `
    //         console.log(dataGlasses[i],i);
    // });

    // }

