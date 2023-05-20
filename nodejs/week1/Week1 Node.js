const averageCalculate = () => {
    const args = process.argv.slice(2);
    let sum = 0;

    if (args.length === 0){
        console.log('ERROR. No Arguments');
        return;
    }

    for (let j = 0; j < args.length; j++) {

        if(isNaN(args[j])){
            console.log('ERROR. Some Arguments Are Not Number');
            return;
        }
        sum += +(args[j]);
    }

    const avrage = sum / (args.length);
    console.log(avrage);
}

averageCalculate();
