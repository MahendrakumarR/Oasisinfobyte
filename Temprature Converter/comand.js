function temcon(event) {

    const temin = document.getElementById("temprature");
    const symin = document.getElementById("sym");
    const tyin = document.getElementById("which");
    const output = document.getElementById("out");

    if(temin.value !==""){
        const temvalue = parseFloat(temin.value);
        let con, unit;
        if(tyin.value === "celsius"){
            con = (temvalue * 9/5) + 32;
            unit = "&#8457";
        } else {
            con = (temvalue - 32) * 5/9;
            unit = "&#8451";
        }
       
        output.textContent = `${temvalue} ${symin.textContent} is equal to ${con.toFixed(2)}`;
    } else {
        output.textContent = ("please fill all details");
    }
    event.preventDefault();
}