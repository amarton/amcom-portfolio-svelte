
//fetch your json file
export const load = async ({ fetch, params }) => {
    const res = await fetch('../port.json');
    const projects = await res.json();
    return {
    projects,
}
}
