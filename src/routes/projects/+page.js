//call in the json file with the portfolio data
    //data is located in static folder
export const load = async ({ fetch }) => {
    const res = await fetch("../port.json");
    const projects = await res.json();
    return {
        projects
}
}
 
