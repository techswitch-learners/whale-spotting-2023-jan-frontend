interface Famous {
    header: string;
    detail: string;
    imageUrl: string;
}

export function famousWhaleInfo(): Array<Famous>  {
    const famousHeader1 = "1. Moby Dick";
    const famousHeader2 = "2. Free Willy";
    const famousHeader3 = "3. Monstro";
    const famousHeader4 = "4. Jonah and the Whale";
    const famousHeader5 = "5. The Thames Whale";
    const famousHeader6 = "6. Hvaldimir";


    const famousDetail1 = "Moby-Dick; or, The Whale is an 1851 novel by American writer Herman Melville. The book is the sailor Ishmael's narrative of the maniacal quest of Ahab, captain of the whaling ship Pequod, for vengeance against Moby Dick, the giant white sperm whale that crippled him on the ship's previous voyage. A contribution to the literature of the American Renaissance, Moby-Dick was published to mixed reviews, was a commercial failure, and was out of print at the time of the author's death in 1891. Its reputation as a Great American Novel was established only in the 20th century, after the 1919 centennial of its author's birth. William Faulkner said he wished he had written the book himself, and D. H. Lawrence called it \"one of the strangest and most wonderful books in the world\" and \"the greatest book of the sea ever written\". Its opening sentence, \"Call me Ishmael\", is among world literature's most famous.";
    const famousDetail2 = "\"Free Willy\" was a 1993 movie about an unconventional friendship between a young boy and a captive orca that's forced to perform at a water park. In the movie, the title role was played by Keiko the orca, who really was captured from the wild as a young whale and brought to live at an aquarium in Iceland. The movie's success created a wave of support for releasing Keiko back into the wild, and although that did eventually happen, it didn\'t produce a happy ending. Keiko died in 2003 at the age of 27, after coming down with pneumonia following his release.";
    const famousDetail3 = "Monstro is a gigantic sperm whale, and the fourth and final antagonist of Disney's 1940 animated feature film, Pinocchio. Dwelling in the depths of the ocean, Monstro is a creature of monstrous proportions and is infamous for swallowing anything in his path.";
    const famousDetail4 = "God called to Jonah one day and told him to go preach to Nineveh because the people were very wicked. Jonah hated this idea because Nineveh was one of Israel's greatest enemies and Jonah wanted nothing to do with preaching to them! onah tried to run away from God in the opposite direction of Nineveh and headed by boat to Tarshish. God sent a great storm upon the ship and the men decided Jonah was to blame so they threw him overboard. As soon as they tossed Jonah in the water, the storm stopped. God sent a whale, to swallow Jonah and to save him from drowning. While in the belly of the big whale, Jonah prayed to God for help, repented, and praised God. For three days Jonah sat in the belly of the fish. Then, God had the big fish throw up Jonah onto the shores of Nineveh.Jonah preached to Nineveh and warned them to repent before the city is destroyed in 40 days. The people believed Jonah, turned from their wickedness, and God had mercy on them. Jonah now became angry and bitter because God did not destroy the Ninevites who were Israel\'s enemy! When Jonah sat to rest God provided a vine to give him shade. The next day, God sent a worm to eat the vine. Jonah now sat in the hot sun complaining and wanting to die. God called out to Jonah and scolded him for being so concerned and worried about just a plant while God was concerned with the heart condition and lives of 120,000 people who lived in the city of Nineveh.";
    const famousDetail5 = "The River Thames whale, affectionately nicknamed Willy by Londoners, was a juvenile female northern bottlenose whale which was discovered swimming in the River Thames in central London on Friday 20 January 2006. According to the BBC, she was five metres (16-18ft) long and weighed about twelve tonnes (24,400 lb). The whale appeared to have been lost, as her normal habitat would have been around the coasts of the far north of Scotland and Northern Ireland, and in the seas around the Arctic Ocean. It was the first time the species had been seen in the Thames since records began in 1913. She died from convulsions as she was being rescued shortly after 19:00 GMT on 21 January 2006.";
    const famousDetail6 = "Hvaldimir is a male beluga whale that fishermen near Hammerfest in northern Norway noticed in April 2019 wearing a camera harness. After being freed from the harness, the whale remained in the area and appeared used to humans. Speculation that he had been trained by Russia as a spy whale led to his being dubbed Hvaldimir, a pun on the Norwegian hval (whale) and Vladimir Putin.";
    
    const factsArray: Array<Famous> = [
        { header: famousHeader1, detail : famousDetail1, imageUrl : "https://th-thumbnailer.cdn-si-edu.com/BuT64NBO1dbq3RxT0fP0XyiAje4=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/fb/ca/fbca423e-0269-42d8-a25e-7de4b1768728/sperm_whale.jpeg"},
        { header: famousHeader2, detail : famousDetail2, imageUrl : "https://rb.gy/et4xw9"},
        { header: famousHeader3, detail : famousDetail3, imageUrl : "https://static.tvtropes.org/pmwiki/pub/images/monstro2.png"},
        { header: famousHeader4, detail : famousDetail4, imageUrl : "https://manchesterinklink.com/wp-content/uploads/2018/11/Jonah.jpg"},
        { header: famousHeader5, detail : famousDetail5, imageUrl : "https://static.standard.co.uk/2021/05/10/20/7e1ccef877936fe641ad04eea297b235Y29udGVudHNlYXJjaGFwaSwxNjIwNzU5MTgz-2.59688527.jpg?width=1200&auto=webp&quality=75"},
        { header: famousHeader6, detail : famousDetail6, imageUrl : "https://gdb.rferl.org/0C1584A4-FA73-4EB7-B5FD-5BD36691AA5F_cx0_cy17_cw85_w1200_r1.jpg"}
       ]

    return factsArray;
}
