let r = process.argv.slice(2);

function area() {
    const area = Math.PI * (r*r);
    console.log(`raduis is (${r}) and the area is ${area}`);
}

area(r)