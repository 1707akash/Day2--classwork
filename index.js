const h2 = React.createElement('h1', {
    style: {
        fontSize:'4rem',
        fontWeight:'400'
    }
}, 'Topics covered');

const p1 = React.createElement('p', {
    style: {fontSize:'1.5rem'}
}, 'The following is a list of all the topics we cover in the MDN learning area.');

const link1 = React.createElement('a',{href:"", style: {fontSize:'1.5rem'}}, 'Getting started with the web ');
let br = React.createElement('br');



const p2= React.createElement('p',{
    style: {fontSize:'1.5rem'}
},' Provides a practical introduction to web development for complete beginners. ');
const link2 = React.createElement('a',{href:"", style: {fontSize:'1.5rem'}}, 'HTML — Structuring the web ');

const p3 = React.createElement('p', {style: {fontSize:'1.5rem'}}, ' HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.');
const link3 = React.createElement('a',{href:"", style: {fontSize:'1.5rem'}}, 'CSS — Styling the web ');

const p4 = React.createElement('p',{style: {fontSize:'1.5rem'}}," CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.");

const div = React.createElement('div',{
    style: {padding:'10rem',width:"60%"}
},[h2, p1,br, link1, p2,br, link2, p3,br, link3,p4]);

ReactDOM.render(div, document.getElementById("root"));