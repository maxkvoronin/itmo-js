function func1(x) {
    throw new Error ("!!!");
}

function func2(x) {
    func1(x);
}

function func3(x) {
    func2(x);
}


func3(1);