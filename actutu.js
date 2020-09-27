let livres =[
    {
        titre:"coucou1",
        auteur:"anne",
        prix:20,
        resume:"c'est un livre",
    },
    {
        titre:"coucou2",
        auteur:"corinne",
        prix:15,
        resume:"c'est un gros livre",
    },
    {
        titre:"coucou3",
        auteur:"marie",
        prix:12,
        resume:"c'est un petit livre",
    },

    {
        titre:"coucou4",
        auteur:"marie-jeanne",
        prix:10,
        resume:"c'est un petit livre",
    },
    
];
function afficheRecommandation(){
    console.log(livres[0],livres[1],livres[2]);
}
 afficheRecommandation();

 function afficheRecommandation() {
    [1] = Math.floor(Math.random() * livres.length);
    [2]= Math.floor(Math.random() * livres.length);
    [3]= Math.floor(Math.random() * livres.length);
}
console.log(livres[0],livres[1],livres[2]);