let  t_user=[{Firstname:"Lazare",Lastname:"tchappi",Email:"lazare.tchappi@yahoo.fr"
,Sexe:"M",born:"1994-04-20", password:"Lazare123",plan:"gratuit"},
{Firstname:"valeur",Lastname:"tchouadak",Email:"valeurtchouadak@yahoo.fr"
,Sexe:"M",born:"1990-04-20", password:"valeur123",plan:"payer"},
{Firstname:"stevine",Lastname:"lafleur",Email:"lafleur@yahoo.fr"
,Sexe:"F",born:"1995-04-20", password:"qwerty123",plan:"gratuit"},
{Firstname:"bobo",Lastname:"toto",Email:"lazare.tchappi@yahoo.fr"
,Sexe:"M",born:"1994-04-20", password:"toto123",plan:"gratuit"},
{Firstname:"bebe",Lastname:"eau",Email:"bebe@yahoo.fr"
,Sexe:"F",born:"2020-04-20", password:"bebe123",plan:"gratuit"}],
t_publication = [
    {nompub:'Elephants Dream', annee:'2006',site: 'http://www.elephantsdream.org/', plan:'gratuit'},
    {nompub:'Big Buck Bunny', annee:'2008', site:'http://www.bigbuckbunny.org/', plan:'payer'},
    {nompub:'Sintel', annee:'2010', site:'http://www.sintel.org/', plan:'payer'},
    {nompub:'Tears Of Steel', annee:'2012', site:'http://tearsofsteel.org/', plan:'payer'},
    {nompub:'Caminandes 1: Llama Drama', annee:'2013',site: 'http://www.caminandes.com/',plan: 'payer'},
    {nompub:'Caminandes 2: Gran Dillama', annee:'2013', site:'http://www.caminandes.com/', plan:'gratuit'},
    {nompub:'Cosmos Laundromat',annee: '2015', site:'https://gooseberry.blender.org/', plan:'gratuit'},
    {nompub:'Glass Half',annee: '2015', site:'https://cloud.blender.org/p/glass-half/',plan: 'gratuit'},
    {nompub:'Caminandes 3: Llamigos', annee:'2016',site: 'http://www.caminandes.com/', plan:'gratuit'},
    {nompub:'Agent 327: Operation Barbershop', annee:'2017', site:'https://agent327.com/', plan:'gratuit'},
    {nompub:'Daily Dweebs', annee:'2017', site:'https://www.dailydweebs.com/', plan:'gratuit'},
    {nompub:'Hero', annee:'2018', site:'https://cloud.blender.org/p/hero/', plan:'gratuit'},
    {nompub:'Spring', annee:'2019', site:'https://cloud.blender.org/p/spring/', plan:'gratuit'}
]
function publication(){
    for(let userName=0;userName<t_user.length;userName++){
         if(t_user[userName].plan=="gratuit"){
            for(nbpub=0;nbpub<t_publication.length;nbpub++){
                if(t_publication[nbpub].plan=="gratuit"){
                    let data="";
                     data=t_publication[nbpub].nompub+t_publication[nbpub].annee+ t_publication[nbpub].site;
                    afficherInfos(data);//dngvcns
                }
            }
        }
    }
}
function afficherInfos(texte){
    let message=document.getElementById('corps');
    let element=document.createElement("span");
    element.innerHTML=texte;
    element.style.color="red";
    element.className="card  bg-dark mr-1 mt-2 pt-2 pb-2 pr-1 pl-1";
    message.append(element);
}
