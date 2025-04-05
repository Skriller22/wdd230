const baseURL = "https://skriller22.github.io/wdd230/";
const linksURL = "https://skriller22.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching links data:', error);
    }
    console.log(data);
}

getLinks();