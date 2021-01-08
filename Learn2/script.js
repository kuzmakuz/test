class Add {
    constructor(...words) {
        this.words = words;
    }
    // kod
    print() {
        let newWord = "$";
        for (let key of this.words){
            if (key != ",") {
                newWord += key + "$";
            }
        }
        console.log(newWord);
    }
}

var x = new Add ("hehe", "hoho", "haha", "hihi", "huhu");
var y = new Add ("this", "is", "awesome");
var z = new Add ("lorem", "ipsum", "dolor", "sit", "amet", ",", "consectutur", "adipiscing", "elit");

x.print();
y.print();
z.print();