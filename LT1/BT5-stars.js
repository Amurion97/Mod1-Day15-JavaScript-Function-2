let stars = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let constellationFamilies = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"]
function printConstellation (star){
    return (stars.indexOf(star)!== -1)?constellationFamilies[stars.indexOf(star)]:"Not found";
}
alert(printConstellation(prompt("Nhap ten ngoi sao")));
