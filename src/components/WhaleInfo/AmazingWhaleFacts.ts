interface Fact {
    header: string;
    detail: string;
}

export function amazingWhaleFacts(): Array<Fact>  {
    const factsHeader1 = "1. Whales are Not Fish";
    const factsHeader2 = "2. Relatives of Hippos";
    const factsHeader3 = "3. Giant Ancient Whales";
    const factsHeader4 = "4. Adapted Breathing";
    const factsHeader5 = "5. Flippers with Fingers";
    const factsHeader6 = "6. Pelvic Bones";
    const factsHeader7 = "7. Whale Vision";
    const factsHeader8 = "8. Blubber Use";
    const factsHeader9 = "9. Earwax Age";
    const factsHeader10 = "10. Whales vs Dinosaurs";
    const factsHeader11 = "11. Playing with Bubble Rings";
    const factsHeader12 = "12. Whale Sailing";
    const factsHeader13 = "13. Sleeping";
    const factsHeader14 = "14. Whale Names";
    const factsHeader15 = "15. Tail-first Birth";
    const factsHeader16 = "16. Thick Milk";
    const factsHeader17 = "17. Pregnancy";
    const factsHeader18 = "18. Dependency";
    const factsHeader19 = "19. Maturity";
    const factsHeader20 = "20. Mating";

    const factsDetail1 = "Whales are marine mammals, not fish! These warm-blooded creatures breathe air and grow body hair. Instead of eggs, they give birth to live babies and produce milk.";
    const factsDetail2 = "They sure look different, but whales are closer to hippos than any other animal. They evolved from a common four-legged ancestor that lived around 50 million years ago.";
    const factsDetail3 = "Giant fossils originally thought to be dinosaurs turned out to be ancient whales. The “Basilosaurus” is longer than modern whales, with small back legs and nostrils near the snout.";
    const factsDetail4 = "As whales evolved, their nostrils gradually moved up to make surface breathing easier. They expel stale air through this blowhole on the top of their head, then inhale about 5,000 liters of fresh air into their lungs.";
    const factsDetail5 = "Whale anatomy is filled with clues about its land origins. If you examine their paddle-shaped flippers using X-ray, you will see bones that resemble a hand with long fingers.";    
    const factsDetail6 = "Whale embryos are known to have tiny back legs, but these disappear before they are born. Some whales even have free-floating pelvic bones even if they haven’t needed these for millions of years.";
    const factsDetail7 = "They sure look different, but whales are closer to hippos than any other animal. They evolved from a common four-legged ancestor that lived around 50 million years ago.";
    const factsDetail8 = "Whales don’t mind cold waters. Their thick fatty insulation called blubber keeps them warm. It also helps their heavy bodies float and gives them energy when fasting.";
    const factsDetail9 = "To know the age of a blue whale, check the earwax. A new layer forms every 6 months to protect the ear canal. Count these layers just like the rings of a tree.";
    const factsDetail10 = "Whales are bigger than dinosaurs. The growth of land animals is limited by gravity: their bones must support their weight. Water eases this limitation, enabling the fantastic size of whales.";    
    const factsDetail11 = "Small whales love to play, like making bubble rings in the water. They can do this by swimming in a circle and puffing air. They might even bite the ring to burst the bubble.";
    const factsDetail12 = "Large whales are not as active, but they have their own games like “sailing”. They elevate their tail above the water like a sail and try to hold the position for as long as possible.";
    const factsDetail13 = "Whales might drown if they fall asleep for too long. Since they need to be conscious to breathe, one side of their brain remains active while the other side sleeps.";
    const factsDetail14 = "Adult female whales are called cows, babies are calves, and adult males are bulls. Mothers give birth to a calf which they raise single-handedly for years, or even decades.";
    const factsDetail15 = "Whales are often born tail-first at sea. This method of delivery prevents them from drowning in the water in the case of extended births.";    
    const factsDetail16 = "Mothers squirt milk into the mouths of their calf. The milk is so high in fat that it has the consistency of toothpaste. This helps them develop blubber fast.";
    const factsDetail17 = "The gestation period of most whales typically last for about 12 months. This could go up to 18 months in the case of sperm whales. They tend to get pregnant every 2-3 years.";
    const factsDetail18 = "Before birth, baby whales get nutrients from their umbilical cord. That’s why they have a belly button like humans. After birth, they depend on their mother’s milk for about a year until they can hunt independently.";
    const factsDetail19 = "Depending on the species, whales may take 5 to 20 years to reach maturity. They mate with different partners but give birth to only one baby each time.";
    const factsDetail20 = "Mating rituals vary. Among right whales, up to 20 males may compete for female attention through gentle courtship. Meanwhile, humpback males will fight and sustain battle scars to get noticed.";    

    const factsArray: Array<Fact> = [
        { header: factsHeader1, detail : factsDetail1},
        { header: factsHeader2, detail : factsDetail2}, 
        { header: factsHeader3, detail : factsDetail3},  
        { header: factsHeader4, detail : factsDetail4},  
        { header: factsHeader5, detail : factsDetail5}, 
        { header: factsHeader6, detail : factsDetail6},
        { header: factsHeader7, detail : factsDetail7}, 
        { header: factsHeader8, detail : factsDetail8},  
        { header: factsHeader9, detail : factsDetail9},  
        { header: factsHeader10, detail : factsDetail10},
        { header: factsHeader11, detail : factsDetail11},
        { header: factsHeader12, detail : factsDetail12}, 
        { header: factsHeader13, detail : factsDetail13},  
        { header: factsHeader14, detail : factsDetail14},  
        { header: factsHeader15, detail : factsDetail15},
        { header: factsHeader16, detail : factsDetail16},
        { header: factsHeader17, detail : factsDetail17}, 
        { header: factsHeader18, detail : factsDetail18},  
        { header: factsHeader19, detail : factsDetail19},  
        { header: factsHeader20, detail : factsDetail20},]

    return factsArray;
}
