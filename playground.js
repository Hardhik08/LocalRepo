/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _eyecolor, _shirttype, _bling) {
    const NFT = {
        "name" : _name,
        "eyecolor": _eyecolor,
        "shirttype" : _shirttype,
        "bling" : _bling,


    }
    NFTs.push(NFT)
    console.log('Minted: '+ _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
        for (i=0; i<NFTs.length; i++){
            console.log("\nID: "+ (i+1));
            console.log("Name: \t\t"+NFTs[i].name);
            console.log("Eye Colour: "+NFTs[i].eyecolor);
            console.log("Shirt Type: "+NFTs[i].shirttype);
            console.log("Bling Worn: "+NFTs[i].bling);
        }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("\nTotal Number of NFTs minted to the console: "+NFTs.length);
}

// call your functions below this line
mintNFT("Hardhik","Blue","T-Shirt","Sun-glasses");
mintNFT("Chris","Gold","Hoodie","Gold Chain");
mintNFT("Joseph","Black","T-Shirt","Cap With silver chain");
mintNFT("MetaTeam","Blue","T-Shirt","Blue Cap");
listNFTs();
getTotalSupply();
