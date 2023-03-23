export function amazingWhaleFacts() {
    const factsHeader1 = "1. Whales are Not Fish";
    const factsHeader2 = "2. Relatives of Hippos";
    const factsHeader3 = "3. Giant Ancient Whales";
    const factsHeader4 = "4. Adapted Breathing";
    const factsHeader5 = "5. Flippers with Fingers";
    
//     const headersArray: Array<string> = [factsHeader1, factsHeader2, factsHeader3, factsHeader4, factsHeader5]
//     return headersArray;
// }

// export function amazingWhaleFactsDetails() {

    const factsDetail1 = "Whales are marine mammals, not fish! These warm-blooded creatures breathe air and grow body hair. Instead of eggs, they give birth to live babies and produce milk.";
    const factsDetail2 = "They sure look different, but whales are closer to hippos than any other animal. They evolved from a common four-legged ancestor that lived around 50 million years ago.";
    const factsDetail3 = "Giant fossils originally thought to be dinosaurs turned out to be ancient whales. The “Basilosaurus” is longer than modern whales, with small back legs and nostrils near the snout.";
    const factsDetail4 = "As whales evolved, their nostrils gradually moved up to make surface breathing easier. They expel stale air through this blowhole on the top of their head, then inhale about 5,000 liters of fresh air into their lungs.";
    const factsDetail5 = "Whale anatomy is filled with clues about its land origins. If you examine their paddle-shaped flippers using X-ray, you will see bones that resemble a hand with long fingers.";    

    const factsArray: Array<any> = [
        { header: factsHeader1,  detail : factsDetail1},
        { header: factsHeader2 , detail : factsDetail2}, 
        { header: factsHeader3 , detail : factsDetail3},  
        { header: factsHeader4 , detail : factsDetail4},  
        { header: factsHeader5 , detail : factsDetail5}, ]

    return factsArray;
}
