let xhr = new XMLHttpRequest();

let url = "./news.json";

xhr.open("GET", url ,true);

xhr.responseType = "json";


xhr.onload = function(){
    var articles = xhr.response.noticias;
    var articlesDiv = document.getElementById("articles");

    //console.log(articles);

    articles.forEach(function (article) {
    var articleDiv = document.createElement("div");
    articleDiv.classList.add("article");

    var title = document.createElement("h2");
    title.textContent = article.titulo;

    var description = document.createElement("p");
    description.textContent = article.descripcion;

    var waysHeader = document.createElement("h3");
    waysHeader.textContent = "Aspectos claves :";

    var waysList = document.createElement("ul");
    article.aspectos_clave.forEach(function (way) {
        var listItem = document.createElement("li");
        listItem.textContent = way;
        waysList.appendChild(listItem);
    });

    var benefitsHeader = document.createElement("h3");
    benefitsHeader.textContent = "Impacto:";

    var benefitsList = document.createElement("ul");
    article.impacto.forEach(function (benefit) {
        var listItem = document.createElement("li");
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
    });

    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitsHeader);
    articleDiv.appendChild(benefitsList);

    articlesDiv.appendChild(articleDiv);
    });
};


xhr.send();


//hold on, gimme a second