var intlst = [
    [
        "\\int^{\\frac{\\pi}{2}}_0 \\frac{dx}{1 + \\cos x}", 
        "\\int^{\\frac{\\pi}{2}}_0 \\frac{dx}{1 + \\sin x}", 
        "\\int^{2 \\pi}_0 \\frac{\\cos (2x)}{2 + \\cos x}", 
        "\\int^{\\frac{\\pi}{2}}_0 \\frac{xdx}{1 + \\cos x}", 
        "\\int^{\\frac{\\pi}{2}}_0 \\frac{xdx}{1 + \\sin x}", 
        "\\int^{\\infty}_0 \\frac{1-x}{x^2 e^{-x} + e^x} dx",
        "\\int^{\\frac{\\pi}{2}}_0 \\frac{dx}{\\cos^4 x + \\sin^4 x}", 
        "\\int^{\\frac{\\pi}{2}}_0 \\frac{dx}{\\cos^6 x + \\sin^6 x}",
        "\\int^{\\frac{\\pi}{2}}_0 \\frac{dx}{1 + \\cos^4 x + \\sin^4 x}", 
        "\\int^{\\frac{\\pi}{2}}_0 \\frac{dx}{1 + \\tan x}",
        "\\int^{\\infty}_0 \\frac{dx}{1 + e^x}", 
        "\\int^1_0 \\frac{\\ln (1 + x)}{1 + x^2} dx",
        "\\int^{\\frac{\\pi}{2}}_0 \\arccos (\\sin x) \\arcsin (\\cos x) dx", 
        "\\int^{2 \\pi}_0 \\frac{xdx}{\\varphi - \\cos^2 x}",
        "\\int^{\\pi}_0 \\ln (\\sin x) dx",
        "\\int^1_0 \\sin ( \\ln x) dx",
        "\\int^1_0 \\cos ( \\ln x) dx",
        "\\int^1_0 x^n \\ln ^k x dx",
        "\\int^{\\infty}_1 \\frac{x}{\\sqrt{x^2 - 1}} - 1 \\ dx",
        "\\int^{\\infty}_0 \\ln \\left( 1 + \\frac{1}{x^2} \\right) dx",
        "\\int^{+\\infty}_{-\\infty} \\frac{\\arctan x^2}{1 + x^2} dx",
        "\\int^{\\infty}_0 \\sec x - \\tan x \\ dx",
        "\\int^{\\infty}_0 \\frac{1}{\\sqrt x} - \\operatorname{arccot} \\sqrt x \\ dx",
        "\\int^1_0 \\ln \\left( 1 + \\sqrt{1-x^2} \\right) dx",
        "\\int^{+\\frac{\\pi}{2}}_{-\\frac{\\pi}{2}} \\frac{x}{\\tan x} dx",
        "\\int^1_0 \\ln \\left( 1 - \\ln x \\right) \\ln x \\ dx",
        "\\int^{\\infty}_0 \\frac{\\ln x}{1 + x^2} dx",
        "\\int^{\\infty}_0 1 - \\tanh x \\ dx",
        "\\int_{0}^{\\infty}\\operatorname{arccot}\\left(\\sqrt{e^{x}-1}\\right)dx",
        "\\int_{0}^{\\pi}\\left(\\cos x\\right)^{n}dx",
        "\\int_{0}^{1}e^{\\arcsin x}dx",
        "\\int_{0}^{\\infty}\\frac{dx}{\\left(1+x^{\\varphi}\\right)^{\\varphi}}",
        "\\int_{-\\frac{\\pi}{2}}^{+\\frac{\\pi}{2}}\\frac{\\cos x}{1+\\left(\\cos x\\right)^{\\tan x}}dx",
        "\\int_{-1}^{+1}\\arctan\\sqrt{1-x^{2}} \\ dx",
        "\\int_{\\frac{1}{2}}^{2}\\left(x+\\frac{1}{x}\\right)^{\\left(x+\\frac{1}{x}\\right)}\\frac{\\ln x}{x}dx",
        "\\int_{1}^{2}\\sqrt{x+\\sqrt{x-\\sqrt{x+\\sqrt{x-...}}}} \\ dx",
        "\\int_{-\\infty}^{+\\infty}\\frac{dx}{\\left(e^{x}+1\\right)\\left(x^{2}+1\\right)}",
        "\\int_{-\\infty}^{+\\infty}\\frac{dx}{\\left(x^{2}+1\\right)^{n}}",
        "\\int_{0}^{1}\\frac{dx}{\\sqrt{x+\\sqrt{x+\\sqrt{x+...}}}}",
        "\\int e^{\\cos x}\\sin\\left(x+\\sin x\\right)dx",
        "\\int e^{\\cos x}\\cos\\left(x+\\sin x\\right)dx",
        "\\int_{0}^{\\infty}\\ln\\left(x+\\frac{1}{x}\\right)\\frac{\\ln x}{x}dx",
        "\\int_{0}^{\\frac{\\pi}{2}}x\\cdot\\prod_{n=1}^{\\infty}\\cos\\left(\\frac{x}{2^{n}}\\right)dx",
        "\\int_{-\\infty}^{+\\infty}\\frac{x\\ln\\left(1+e^{x}\\right)}{\\left(1+x^{2}\\right)^{2}}dx",
        "\\int_{0}^{1}\\arcsin x\\ln x \\ dx",
        "\\int_{0}^{\\frac{\\pi}{2}}\\frac{\\sin nx}{\\sin x}dx",
        "\\int_{0}^{1}\\frac{xe^{x}}{\\left(1+x\\right)^{2}}dx",
        "\\int_{0}^{\\frac{\\pi}{4}}e^{-2\\operatorname{arctanh}\\left(\\tan x\\right)}dx",
    ],

    [
        "\\int_{0}^{1}\\frac{\\ln x}{1-x}dx",
        "\\int_{-\\infty}^{+\\infty}e^{-x^{2}}dx",
        "\\int_{-\\infty}^{+\\infty}\\frac{\\sin x}{x}dx",
        "\\iint_{x^2+y^2=1} \\ln(x^2+y^2)dxdy",
        "\\int_{0}^{1}\\int_{0}^{1}\\frac{dxdy}{1+xy}",
        "\\int_{0}^{1}\\ln\\left(x\\right)\\ln\\left(1-x\\right)dx",
        "\\int_{0}^{1}\\ln\\left(x\\right)\\ln\\left(1+x\\right)dx",
        "\\int_{0}^{\\infty}\\operatorname{arccot}x^{2}dx",
        "\\int_{0}^{\\infty}\\frac{x}{e^{x}+1}dx",
        "\\int_{0}^{\\infty}\\frac{x}{e^{x}-1}dx",
        "\\int_{0}^{\\infty}\\frac{dt}{t^{x}+1}",
        "\\int_{0}^{1}\\arctan x\\ln xdx",
        "\\int_{0}^{\\infty}\\frac{x^{b}-x^{a}}{\\ln x}dx",
        "\\int_{0}^{\\infty}\\frac{e^{-t}-e^{-tx}}{t}dt",
        "\\int_{0}^{1}x\\ln\\left(1+x\\right)\\ln\\left(1-x\\right)dx",
        "\\int_{0}^{1}\\ln\\Gamma\\left(x\\right)dx",
        "\\int_{0}^{\\infty}\\frac{\\sin x}{xe^{x}}dx",
        "\\int_{0}^{1}\\operatorname{arctanh}x\\ln xdx",
        "\\int_{0}^{\\frac{\\pi}{2}}\\frac{\\ln\\sec x}{\\tan x}dx",
        "\\int_{0}^{\\infty}\\ln\\left(1+e^{-x}\\right)dx",
        "\\int_{0}^{\\frac{\\pi}{2}}\\sqrt{\\tan x}dx",
        "\\int_{0}^{\\infty}\\frac{\\ln\\left(2e^{x}-1\\right)}{e^{x}-1}dx",
        "\\int_{0}^{1}\\frac{x^{b}-x^{a}}{\\ln x}\\cos\\left(\\ln x\\right)dx",
        "\\int_{0}^{\\frac{\\pi}{2}}\\frac{\\arctan\\left(2\\cos^{2}x\\right)}{\\cos^{2}x}dx",
        "\\int_{-\\infty}^{+\\infty}\\operatorname{arccot}\\left(x^{2}+x+1\\right)dx",
        "\\int_{0}^{1}\\frac{\\arctan\\sqrt{1-x^{2}}}{1-x^{2}}dx",
        "\\int_{0}^{\\infty}i^{ix^{2}}dx",
        "\\int_{-1}^{+1}\\int_{0}^{1}\\frac{dydx}{y^{x}+1}",
        "\\int_{0}^{1}\\frac{\\sin\\ln x}{\\ln x}dx",
        "\\int_{0}^{1} \\operatorname{Li}_2 \\left( \\sqrt{x} \\right) dx",
        "\\int_{-\\infty}^{+\\infty}e^{-x^{2}}\\cosh xdx",
        "\\int_{0}^{\\infty}\\left(\\frac{1-e^{-x}}{x}\\right)^{2}dx",
        "\\int_{0}^{\\infty}\\frac{1-\\cos x}{xe^{x}}dx",
        "\\int_{0}^{\\infty}\\frac{\\cos ax-\\cos bx}{x}dx",
        "\\int_{0}^{e}\\frac{x}{\\sqrt{1-\\ln x}}dx",
        "\\int_{0}^{\\infty}\\frac{dx}{e^{\\sqrt[4]{x}}-1}",
        "\\int_{0}^{\\infty}\\ln\\left(\\frac{1+x}{2x}\\right)\\frac{dx}{1-x^{2}}",
        "\\int_{0}^{1}\\ln\\left(\\frac{1+x}{2x}\\right)\\frac{dx}{1-x^{2}}",
        "\\int_{0}^{1}\\left(x^{x}\\right)^{\\left(x^{x}\\right)^{\\left(x^{x}\\right)^{...}}}dx",
        "\\int_{-\\infty}^{+\\infty}\\left(\\frac{\\sin x}{x}\\right)^{2}dx",
        "\\int_{-\\infty}^{+\\infty}\\left(\\frac{\\sin x}{x}\\right)^{3}dx",
        "\\int_{-\\infty}^{+\\infty}\\left(\\frac{\\sin x}{x}\\right)^{4}dx",
        "\\int_{-\\infty}^{+\\infty}\\frac{x}{\\sinh x}dx",
        "\\int_{0}^{\\infty}e^{-\\ln^{2}x}dx",
        "\\int_{0}^{\\frac{\\pi}{2}}\\ln^{2}\\left(\\tan x\\right)dx",
        "\\int_{0}^{\\infty}\\frac{1-\\cos x}{x^{2}e^{x}}dx",
        "\\int_{0}^{1}\\frac{x\\sin\\ln x}{\\ln x}dx",
        "\\int_{0}^{\\infty}t^{x-\\ln t}\\ln tdt",
        "\\int_{-\\infty}^{+\\infty}\\frac{\\sin x^{2}}{x^{2}}dx",
        "\\int_{0}^{\\infty}e^{-x^{2}-\\frac{1}{x^{2}}}dx",
        "\\int_{-\\infty}^{+\\infty}\\left(\\frac{\\arctan x}{x}\\right)^{2}dx",
        "\\int_{0}^{\\infty}1-x\\sin\\frac{1}{x} \\ dx",
        "\\int_{0}^{\\infty}1-e^{-\\frac{1}{x^{2}}}dx",
        "\\int_{-\\frac{\\pi}{2}}^{+\\frac{\\pi}{2}}e^{-\\tan^{2}x}dx",
        "\\int_{0}^{1}\\sinh\\left(\\sqrt{1-x^{2}}\\right)\\cos xdx",
        "\\int_{0}^{\\frac{\\pi}{2}}\\ln\\left(x^{2}+\\ln^{2}\\cos x\\right)dx",
        "\\int_{0}^{\\infty}e^{-x^{2}}\\ln xdx",
        "\\int_{-\\infty}^{+\\infty}\\frac{e^{-x^{2}}\\sin^{2}x^{2}}{x^{2}}dx",
        "\\int_{0}^{\\infty}\\frac{e^{-x}\\sin x\\ln x}{x}dx",
    ],

    [
        "\\int_{0}^{\\infty}\\frac{\\sin x}{\\sinh x}dx",
        "\\int_{0}^{2\\pi}\\frac{\\cos x}{1+e^{ix}}dx",
        "\\int_{0}^{\\infty}\\cos\\left(x^{2}\\right)dx",
        "\\int_{0}^{\\infty}\\sin\\left(x^{2}\\right)dx",
        "\\int_{-\\frac{\\pi}{2}}^{+\\frac{\\pi}{2}}\\cos\\left(\\tan x\\right)dx",
        "\\int_{-\\infty}^{+\\infty}\\frac{\\sin x}{x+i}dx",
        "\\int_{0}^{2\\pi}e^{\\cos x}\\sin\\left(\\sin x\\right)\\sin xdx",
        "\\int_{0}^{\\infty}\\frac{t^{x}}{1+t^{2}}dt",
        "\\int_{0}^{\\infty}\\left(\\frac{1}{\\sinh x}-\\frac{1}{x}\\right)\\frac{dx}{x}",
        "\\int_{0}^{\\frac{\\pi}{2}}\\left(\\tan x\\right)^{i}dx",
        "\\int_{-\\infty}^{+\\infty}\\frac{e^{\\cos x}\\cos\\left(\\sin x\\right)}{1+x^{2}}dx",
        "\\int_{-\\infty}^{+\\infty}\\Gamma\\left(1+ix\\right)\\Gamma\\left(1-ix\\right)dx",
        "\\int_{-\\infty}^{+\\infty}\\frac{\\cos x}{1+x^{2}}\\frac{\\sin x}{x}dx",
        "\\int_{-\\infty}^{+\\infty}\\cos\\left(x^{2}+x+1\\right)dx",
        "\\int_{0}^{\\infty}\\frac{\\sin x}{e^{x}+1}dx",
        "\\int_{0}^{\\infty}\\frac{\\sin x}{e^{x}-1}dx",
        "\\int_{0}^{\\frac{\\pi}{2}}\\cos\\left(\\ln\\tan x\\right)dx",
        "\\int_{0}^{1}\\sin\\sqrt{-\\ln x} \\ dx",
        "\\int_{0}^{\\pi}\\frac{e^{\\cos2x}\\sin\\left(x+\\sin2x\\right)}{\\sin x}dx",
        "\\int_{0}^{\\frac{\\pi}{2}}\\ln^{2}\\left(\\cos x\\right)dx",
        "\\int_{0}^{\\frac{\\pi}{2}}\\ln\\left(\\cos x\\right)\\ln\\left(\\sin x\\right)dx",
        "\\int_{0}^{\\pi}e^{2\\cos^{2}\\left(\\frac{x}{2}\\right)}\\cos\\left(\\sin x\\right)dx",
        "\\int_{-\\infty}^{+\\infty}\\frac{e^{\\cos x}\\sin\\left(\\sin x\\right)}{x}dx",
        "\\int_{0}^{\\infty}\\frac{\\ln x}{e^{x}+1}dx",
        "\\int_{0}^{2\\pi}\\frac{dx}{\\Gamma\\left(1-e^{ix}\\right)}",
        "\\int_{-\\infty}^{+\\infty}\\frac{dx}{x^{4}+x^{3}+x^{2}+x+1}",
        "\\int_{0}^{\\infty}\\frac{\\ln\\left(\\frac{1}{x}\\right)}{\\pi^{2}+\\ln^{2}x}\\frac{dx}{\\sqrt{x}\\left(1+x\\right)^{2}}",
        "\\int_{0}^{\\infty}\\frac{\\arctan x}{e^{2\\pi x}-1}dx",
        "\\int_{0}^{\\infty}\\frac{\\arctan x}{e^{2\\pi x}+1}dx",
        "\\int_{0}^{\\infty}\\frac{\\arctan x}{\\sinh\\pi x}dx",
        "\\int_{-\\infty}^{+\\infty}1-\\cos\\frac{1}{x}\\ dx",
        "\\int_{-\\infty}^{+\\infty}\\left(1-\\cos\\frac{1}{x}\\right)^{2}dx",
        "\\int_{-\\frac{\\pi}{2}}^{+\\frac{\\pi}{2}}\\frac{\\sin\\left(\\tan x\\right)}{e^{\\tan x}-1}dx",
        "\\int_{-\\frac{\\pi}{2}}^{+\\frac{\\pi}{2}}\\frac{\\sin\\left(\\tan x\\right)}{\\sinh\\left(\\pi\\tan x\\right)}dx",
        "\\int_{0}^{\\infty}\\frac{x\\sin x}{\\cos x+\\cosh x}dx",
        "\\int_{-\\infty}^{+\\infty}\\frac{\\sin x}{x+x\\cos^{2}x}dx",
        "\\int_{-\\infty}^{+\\infty}e-e^{\\cos\\frac{1}{x}}\\cos\\left(\\frac{1}{x}+\\sin\\frac{1}{x}\\right)dx",
        "\\int_{\\frac{\\pi}{4}}^{\\frac{\\pi}{2}}\\ln\\left(\\ln\\tan x\\right)dx",
        "\\int_{0}^{\\infty}\\frac{\\sin x\\ln x}{x}dx",
        "\\int_{-\\infty}^{+\\infty}\\frac{\\sin\\left(\\tan x\\right)}{x}dx",
        "\\int_{0}^{\\infty}\\frac{\\sin x-\\cos x}{\\sqrt{x}}\\ln xdx",
        "\\int_{-\\infty}^{+\\infty}e^{-\\cot^{2}\\frac{1}{x}}dx",
        "\\int_{-\\infty}^{+\\infty}1-\\cos\\left(\\tan\\frac{1}{x}\\right)dx",
        "\\int_{-\\infty}^{+\\infty}1-x\\sin\\left(\\tan\\frac{1}{x}\\right)dx",
        "\\int_{0}^{\\infty}\\sin\\left(x^{2}\\right)\\ln xdx",
        "\\int_{-\\infty}^{+\\infty}\\sin\\left(\\tan^{2}\\frac{1}{x}\\right)dx",
        "\\int_{-\\infty}^{+\\infty}e-e^{\\cos\\frac{1}{x}}\\cos\\left(\\sin\\frac{1}{x}\\right)dx",
        "\\int_{-\\infty}^{+\\infty}e-xe^{\\cos\\frac{1}{x}}\\sin\\left(\\sin\\frac{1}{x}\\right)dx",
        "\\int_{-\\infty}^{+\\infty}1-e^{-\\tan^{2}\\frac{1}{x}}dx",
        "\\int_{0}^{\\pi}\\frac{\\sin x}{x}e^{x\\cot x}dx",
    ]
];

var indexlst = [
    [...Array(intlst[0].length).keys()], [...Array(intlst[1].length).keys()], [...Array(intlst[2].length).keys()]
];

var lvls = ["Beginner Level", "Advanced Level", "Master Level"];

var s = "$$ \\Huge ";
var scount = 0;
var pcount = 0;
var beg = 0, adv = 0, mas = 0;
var solvedarr = [];
var passedarr = [];
var x, y;


function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeFormula(status) {

    let indx = [];

    beg = document.getElementById("1").checked;
    adv = document.getElementById("2").checked;
    mas = document.getElementById("3").checked;


    if (status == "run") {
        if (beg + adv + mas) {
            document.getElementById('afterrun').style.display = 'flex';
            document.getElementById('afterrun').style.visibility = 'visible';
            document.getElementById('run').style.display = 'none';
        }
    } else {

        if (indexlst[y].length > 0) {
            if (status == "solved"){
                scount += 1;
                solvedarr.push(x.toString() + "," + y.toString());
            }

            if (status == "passed"){
                pcount += 1;
                passedarr.push(x.toString() + "," + y.toString());
            }

            indexlst[y].splice(indexlst[y].indexOf(x), 1);
        }
    }


    if (!(beg*indexlst[0].length + adv*indexlst[1].length + mas*indexlst[2].length)) {

        let s0 = "Why don't you choose difficulties, huh?";

        if (!(indexlst[0].length * indexlst[1].length * indexlst[2].length)) s0 = "Looks like the integrals in the selected groups have run out already";

        document.getElementById("curint").innerText = s0;
    }
    else {

        if (beg * indexlst[0].length) indx.push(0);
        if (adv * indexlst[1].length) indx.push(1);
        if (mas * indexlst[2].length) indx.push(2);

        y = indx[randint(0, indx.length-1)];
        x = indexlst[y][randint(0, indexlst[y].length-1)];
        const newFormula = s + x.toString() + ") " + intlst[y][x] + "$$";

        const fdiv = document.getElementById('formula');
        fdiv.innerHTML = newFormula;
        MathJax.typesetPromise([fdiv]);

        if (y == 0) document.getElementById("curint").innerText = "Beginner";
        if (y == 1) document.getElementById("curint").innerText = "Advanced";
        if (y == 2) document.getElementById("curint").innerText = "Master";

        document.getElementById("statsolved").innerText = "Solved: " + scount.toString();
        document.getElementById("statpassed").innerText = "Passed: " + pcount.toString();
    }
}


function ilopen(){
    document.getElementById('popup').style.display = 'flex';

    document.getElementById("intcount").innerText = "This is a list of all the integrals that participate in roulette. As of 9/11/2024, there are " + (intlst[0].length + intlst[1].length + intlst[2].length).toString() + " different integrals listed.";
    const container = document.getElementById('IL');

    for (let j = 0; j < 3; j++) {
        const h1 = document.createElement('h1');
        h1.innerHTML = lvls[j];
        container.appendChild(h1);

        for (let i = 0; i < intlst[j].length; i++) {
            const newParagraph = document.createElement('p');
            newParagraph.innerHTML = "$$ " + (i).toString() + ") " + intlst[j][i] + " $$";

            if (solvedarr.includes(i.toString() + "," + j.toString())) {
                newParagraph.style.color = '#00910c';
            }

            if (passedarr.includes(i.toString() + "," + j.toString())) {
                newParagraph.style.color = '#910000';
            }
            container.appendChild(newParagraph);
        }

        container.appendChild(document.createElement('hr'));
    }

    MathJax.typesetPromise([container]);
}


function ilclose(){

    const container = document.getElementById('IL');
    container.innerHTML = "";

    document.getElementById('popup').style.display = 'none';
}