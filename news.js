let allNews = [];


async function loadNews() {

    try {

        const response = await fetch("news.json");

        allNews = await response.json();

        displayNews(allNews);

    }

    catch (error) {

        document.getElementById("newsContainer").innerHTML = `

            <div class="card">

                <h3>⚠️ Unable to Load Data</h3>

                <p>
                    Please run this website using Live Server.
                </p>

            </div>

        `;

        console.error(error);

    }

}


function displayNews(newsList) {

    const container =
        document.getElementById("newsContainer");


    container.innerHTML = "";


    if (newsList.length === 0) {

        container.innerHTML = `

            <div class="card">

                <h3>No Results</h3>

                <p>
                    No awareness topics were found.
                </p>

            </div>

        `;

        return;

    }


    newsList.forEach(function(news) {

        const card = document.createElement("div");

        card.className = "card news-card";


        card.innerHTML = `

            <span class="news-type">
                ${news.type}
            </span>

            <h3>
                ${news.title}
            </h3>

            <p class="news-category">
                ${news.category}
            </p>

            <p>
                ${news.description}
            </p>

        `;


        container.appendChild(card);

    });

}


function searchNews() {

    const searchText =
        document.getElementById("searchInput")
        .value
        .toLowerCase();


    const filteredNews = allNews.filter(function(news) {

        return (

            news.title.toLowerCase().includes(searchText) ||

            news.category.toLowerCase().includes(searchText) ||

            news.description.toLowerCase().includes(searchText)

        );

    });


    displayNews(filteredNews);

}


loadNews();