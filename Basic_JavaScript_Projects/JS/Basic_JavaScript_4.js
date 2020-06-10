function myDictionary() {
    var Truck = {
        Make: "Ford",
        Model: "F-150",
        Year: "2001",
        Color: "Blue",
        Miles: "200,000",
        Miles: "250,000",
        Doors: 4,
        Bed: "Short"
    };
    delete Truck.Miles;
    document.getElementById("dictionary").innerHTML = Truck.Miles;
}