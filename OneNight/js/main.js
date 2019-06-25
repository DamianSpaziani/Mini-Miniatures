const allProducts = [
    {name: "Abaddon the Despoiler", 
        photo: "abby.png",  
        army: "chaos" ,
        chaos: true , 
        lore: "Striding onto the battlefield like a demigod of war, the Despoiler scowls at the mortal chattel before him. He is an ender of worlds, a destroyer of hope, a bane unto the galaxy itself. Yet he is not beyond the siren call of battle, and leads his Black Legion to acts of pitiless slaughter whenever a worthy foe is near.", 
        type: "lord of war", 
        isInStock: true, 
        price: 70},
      
        {name: "Haarken Worldclaimer", 
        photo: "Haarken.png", 
        army: "chaos" , 
        lore: "Haarken Worldclaimer takes a heinous joy in his role as the mouthpiece of Abaddon, for it is he who proclaims the death of worlds. He does so not with some quotidian threat or hollow boast, but by driving his weapon, the Daemon-touched Helspear deep into the heart of citizen and soldier alike. He is a dark omen given form, and the otherworldly destruction he heralds is the coming of the Warmaster himself.", 
        type: "hq", 
        isInStock: false, 
        price: 40},
      
        {name: "Roboute Guilimant", 
        photo: "bigG.png", 
        army: "imperium" , 
        lore: "Strategist. Hero. Avenging Son. Roboute Guilliman is the Primarch of the Ultramarines, Lord of Ultramar, and a peerless leader of men. Resurrected by the Adeptus Mechanicus and the Ynnari, he seeks to muster the strength of the Imperium and drive back the minions of the Dark Gods. Towering over even the heroic battle-brothers of his Chapter, Guilliman storms to war with a thunderous scowl. He clutches the burning sword of the Emperor, and wears the Hand of Dominion, with which he can tear apart tanks and crush his foes with ease. Yet it is the Primarch’s strategic brilliance that is his greatest weapon, dooming enemies to defeat before the battle has even begun.", 
        type: "lord of war", 
        isInStock: true, 
        price: 75},
        
        {name: "Mega Nobs", 
        photo: "Meganob.png", 
        army: "xenos" , 
        lore: "The Meganobz are the richest and most battle-hardened Nobz around. Clad in Mek-built mega armour (with enough protective plating to turn the wearer into a walking tank), these Nobz can shrug off the hail of bullets that would kill lesser Orks.", 
        type: "elite", 
        isInStock: true, 
        price: 76},
      
        {name: "Space Marine", 
        photo: "SM.png", 
        army: "imperium" , 
        lore: "Designed by the Adeptus Mechanicus to replace the worn-down power armour used during the Great Crusade, Mark IV power armour is ancient and powerful. The most common pre-Heresy armour still in wide use, with even a few Chapters still producing new suits, it is a testament to the ingenuity and longevity of the Space Marines.", 
        type: "troop", 
        isInStock: false, 
        price: 50},
      
        {name: "Chaos Terminators", 
        photo: "Term.png", 
        army: "chaos" , 
        lore: "Chaos Terminators are heavily armoured veterans clad in debased suits of Tactical Dreadnought armour. They form the elite of their masters’ warbands, for though they are ponderous compared to their power armour-clad comrades, nothing short of a dedicated anti-tank laser can stop a Terminator in full stride. Spiked trophy racks protrude from massive shoulders, the skulls of the enemy a barbaric testament to their wearer’s martial prowess. Helmets have grown into bestial masks that sprout great tusks and razored horns, many of which have fused directly into the skulls of their wearers.", 
        type: "elite", 
        isInStock: true, 
        price: 70},
      
        {name: "Chaos Space Marines", 
        photo: "csm.png", 
        army: "chaos" , 
        lore: "Not even the Space Marines are safe from the lure of Chaos. Whether they hail from the dark days of the Horus Heresy or turned traitor more recently, these baleful warriors combine their gene-given gifts with dark blessings and malefic sorceries, transformed by years of battle into fearless, superhuman reavers.", 
        type: "troop", 
        isInStock: false, 
        price: 50},
      
        {name: "DeffRoller", 
        photo: "DeffRoller.png", 
        army: "xenos" , 
        lore: "Battlewagons are massive metal gunbeasts that prowl through the ranks of the Orks on great clanking treads. Some are mobile fortresses, packed to the gunnels with Ork warriors. Others bristle with ordnance and heavy weaponry. The iron fists of the Ork warband, Battlewagons fulfil many battlefield roles, but first amongst them is grinding the enemy into the ground.", 
        type: "vehicle", 
        isInStock: true, 
        price: 80},
      
        {name: "BlitzaBommer", 
        photo: "blitzabommer.png", 
        army: "xenos" , 
        lore: "The Blitza-Bommer is suitable for the bravest (some might say the most unhinged) flyboy. These aircraft 'aim' their bombs by diving at the target and releasing their Boom Bomb at the very last moment possible! Once they've blown everything up (hopefully not including themselves) they unleash a pair of super shootas, perfect for mopping up any stray or squishy targets.", 
        type: "vehicle", 
        isInStock: false, 
        price: 80},
      
      
        {name: "Droppod", 
        photo: "drop.png", 
        army: "imperium" , 
        lore: "The Space Marines are known as the Angels of Death, and the title is never more appropriate than when they attack using Drop Pods. Drop Pod assaults are the ultimate weapon of terror and surprise, aimed right at the heart of the foe. Scarcely have the smouldering hulls come to rest when their hatches blow clear, and the occupants disembark to wreak havoc on wrong-footed enemies.", 
        type: "vehicle", 
        isInStock: true, 
        price: 50},
      
        {name: "Droppod", 
        photo: "drop.png", 
        army: "imperium" , 
        lore: "The Space Marines are known as the Angels of Death, and the title is never more appropriate than when they attack using Drop Pods. Drop Pod assaults are the ultimate weapon of terror and surprise, aimed right at the heart of the foe. Scarcely have the smouldering hulls come to rest when their hatches blow clear, and the occupants disembark to wreak havoc on wrong-footed enemies.", 
        type: "vehicle", 
        isInStock: true, 
        price: 50},
      
        {name: "Droppod", 
        photo: "drop.png", 
        army: "imperium" , 
        lore: "The Space Marines are known as the Angels of Death, and the title is never more appropriate than when they attack using Drop Pods. Drop Pod assaults are the ultimate weapon of terror and surprise, aimed right at the heart of the foe. Scarcely have the smouldering hulls come to rest when their hatches blow clear, and the occupants disembark to wreak havoc on wrong-footed enemies.", 
        type: "vehicle", 
        isInStock: true, 
        price: 50},
      
        {name: "Droppod", 
        photo: "drop.png", 
        army: "imperium" , 
        lore: "The Space Marines are known as the Angels of Death, and the title is never more appropriate than when they attack using Drop Pods. Drop Pod assaults are the ultimate weapon of terror and surprise, aimed right at the heart of the foe. Scarcely have the smouldering hulls come to rest when their hatches blow clear, and the occupants disembark to wreak havoc on wrong-footed enemies.", 
        type: "vehicle", 
        isInStock: true, 
        price: 50},
      
        {name: "Droppod", 
        photo: "drop.png", 
        army: "imperium" , 
        lore: "The Space Marines are known as the Angels of Death, and the title is never more appropriate than when they attack using Drop Pods. Drop Pod assaults are the ultimate weapon of terror and surprise, aimed right at the heart of the foe. Scarcely have the smouldering hulls come to rest when their hatches blow clear, and the occupants disembark to wreak havoc on wrong-footed enemies.", 
        type: "vehicle", 
        isInStock: true, 
        price: 50},
      
        {name: "Droppod", 
        photo: "drop.png", 
        army: "imperium" , 
        lore: "The Space Marines are known as the Angels of Death, and the title is never more appropriate than when they attack using Drop Pods. Drop Pod assaults are the ultimate weapon of terror and surprise, aimed right at the heart of the foe. Scarcely have the smouldering hulls come to rest when their hatches blow clear, and the occupants disembark to wreak havoc on wrong-footed enemies.", 
        type: "vehicle", 
        isInStock: true, 
        price: 50}]

/*****************************************************************
        Product Format 
****************************************************************/ 
const formatProduct = (product) => {

    let outOfStock =``; 
    if (product.isInStock == false) {
        outOfStock = ` <div class=no-price>$${product.price}</div>
        <span class="not-available">Out of Stock</span>`;
    }
    else {
        outOfStock = `<div class="price">$${product.price}</div>`;
    }   
    
    return `
    <div class="box">
        <div class = "product"><a href="product-page.html"><img src="img/${product.photo}"></a></div>
        <a>${product.name}</a>
        <div class="price"> army: ${product.army}</div>
        <a> ${product.type}<a>
        <a>${outOfStock}<a>
    </div>`; 
}

/*****************************************************************
        Product Format 
****************************************************************/

const getProductstoHTML =(ary, start, qty=5) => {
    document.getElementById(`productA`).innerHTML = ary.map(formatProduct)
    .slice (start, start+qty)
    .join(``);
}

/*****************************************************************
        DATA Storage 
****************************************************************/

// const $productAList = document.getElementById(`productA`); 
const $bntProducts = document.getElementById(`viewProduct`); 
const $btnPrice = document.getElementById(`btnPrice`)
const $btnArmys = document.getElementById(`btnArmys`)
const $btnColour = document.getElementById(`btnColour`)
const $btnStock = document.getElementById(`btnStock`)
const armyRangeRadio = document.getElementById(`armyRange`)

/*****************************************************************
        allProducts
****************************************************************/

const showAllProducts =(ary) => {
    $bntProducts.type.visibility =  `hidden`;
    document.getElementById(`productA`).innerHTML = ary.map(formatProduct).join(``);
}

/**************************************************************
            First Page Load 
****************************************************************/
const fistFourProducts =() => {

    getProductstoHTML(allProducts, nextIndex, nextQty);  
    
    nextIndex += nextQty;
    }
    
let nextIndex = 0;
let nextQty = 5;
    
window.addEventListener(`load`, fistFourProducts(0));


/**************************************************************
    Next Page Formats 
****************************************************************/

const nextProducts = () => {
    
    getProductstoHTML(allProducts, nextIndex, nextQty);
    nextIndex += nextQty;

    if (nextIndex >= allProducts.length)
        $bntProducts.type.visibility =  `hidden`;
    else if (allProducts.length >= nextIndex + nextQty)
        $bntProducts.innerHTML = `Show next ${nextQty} products`;
    else if (allProducts.length < nextIndex + nextQty)
        $bntProducts.innerHTML = `Show next ${allProducts.length - nextIndex} products`;
}


$bntProducts.addEventListener(`click`, nextProducts); 



/**************************************************************
                Search by Name Button
****************************************************************/

const showMatchingProds = (query) => {
    showAllProducts( allProducts.filter( prod => prod.name.toLowerCase().includes( query.toLowerCase() ) ) );

    $bntProducts.type.visibility =  `hidden`;

    // document.getElementById(`title`).innerHTML = `<h1 class="title"> We found ${newList.length} results </h1>`;
  }

    document.getElementById(`search`).addEventListener(`submit`, (event) => {
    event.preventDefault();
    let q = document.getElementById(`search`).query.value;
     
 
    
    showMatchingProds(q);

   
});

/**************************************************************
                Sort By Price 
****************************************************************/

const sortByPrice = (event) => {
    const priceRange = allProducts.sort((a,b)=> b.price - a.price);
    document.getElementById(`title`).innerHTML = `<h1 class="title">Sorted by Price: High to Low</h1>`;
    showAllProducts(priceRange );
}

$btnPrice.addEventListener(`click`, sortByPrice); 


/**************************************************************
                Sort By armies
****************************************************************/ 

const sortByArmy = (event) => {
    const armySort = allProducts.sort((a,b)=> {
    const armyA = a.army.toUpperCase(); 
    const armyB= b.army.toUpperCase();
        if (armyA < armyB) {
         return - 1; 
    }
        if (armyA > armyB) {
            return 1;
    }

    return 0;
    });
    
    document.getElementById(`title`).innerHTML = `<h1 class="title">Sorted by Armies</h1>`;
    showAllProducts( armySort );

    armyRangeRadio.style.visibility = `visible`; 
    $btnArmys.addEventListener(`click`, sortByArmy); 
}



armyRangeRadio.addEventListener(`click`, (event) => {

    let val = document.getElementById(`armyRange`).pop.value;
  
    if (val == 0) {
        showAllProducts( allProducts.filter(prod => prod.army ==`All`))
    } else if (val == 1) {
        showAllProducts ( allProducts.filter(prod=> prod.army ==`chaos`))
    }
    
    else if (val == 2) {
        showAllProducts ( allProducts.filter(prod=> prod.army ==`xenos`))
    }
    
    else if (val == 3) {
        showAllProducts ( allProducts.filter(prod=> prod.army ==`imperium`))
    } 

  });
$btnArmys.addEventListener(`click`, sortByArmy); 

/**************************************************************
                Sort By Availability 
****************************************************************/

const filterInStock = (event) => {
    const inStockFilter = allProducts.filter(prod => prod.isInStock == true);

    
    document.getElementById(`title`).innerHTML = `<h1 class="title">Products in Stock</h1>`;
    showAllProducts( inStockFilter );
    armyRangeRadio.army.visibility = `hidden`; 

}

$btnStock.addEventListener(`click`, filterInStock); 