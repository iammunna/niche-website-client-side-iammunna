const ServiceData = [
    {
        id: 101,
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.toiimg.com%2Fthumb%2F56868564.cms%3Fimgsize%3D1948751%26width%3D800%26height%3D800&imgrefurl=https%3A%2F%2Frecipes.timesofindia.com%2Frecipes%2Fclassic-margherita%2Frs56868564.cms&tbnid=bVIO2Ne9ZC7RGM&vet=12ahUKEwigvq_I8JD0AhU-C7cAHXUkCuwQMygAegUIARDxAQ..i&docid=u3C-pZNBYKX3MM&w=800&h=800&q=pizza%20margherita&ved=2ahUKEwigvq_I8JD0AhU-C7cAHXUkCuwQMygAegUIARDxAQ",
        name: "Pizza margherita",
        description: "Pizza Margherita (more commonly known in English as Margherita pizza) is a typical Neapolitan pizza",
        price: "$45",

    },
    {
        id: 102,
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn77-s3.lazycatkitchen.com%2Fwp-content%2Fuploads%2F2017%2F11%2Fvegan-bolognese-lunch.jpg&imgrefurl=https%3A%2F%2Fwww.lazycatkitchen.com%2Fvegan-bolognese-tagliatelle%2F&tbnid=xwl1hVbvIpHH8M&vet=12ahUKEwj0x4WO8ZD0AhVZj9gFHZutCScQMygAegUIARDLAQ..i&docid=6zf4ZpIGKcSpkM&w=1280&h=1920&q=Veggie%20Tagliatelle%20Bolognese&ved=2ahUKEwj0x4WO8ZD0AhVZj9gFHZutCScQMygAegUIARDLAQ",
        name: "Veggie Tagliatelle Bolognese",
        description: "Put the root vegetable to good use in this vegan version of the classic pasta bolognese. Carrots act as both the tagliatelle noodles and the base for the",
        price: "$76",

    },
    {
        id: 103,
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.sndimg.com%2Ffood%2Fimage%2Fupload%2Fq_92%2Cfl_progressive%2Cw_1200%2Cc_scale%2Fv1%2Fimg%2Frecipes%2F96%2F17%2F4%2FpicgORWq8.jpg&imgrefurl=https%3A%2F%2Fwww.food.com%2Frecipe%2Fthree-meat-lasagna-96174&tbnid=HH3tJpVCsO7V9M&vet=12ahUKEwj1zai68ZD0AhWTeysKHdbQAA0QMygAegUIARDFAQ..i&docid=UUT_Jprm2iPvpM&w=1200&h=900&q=Three-Meat%20Special%20Lasagna&ved=2ahUKEwj1zai68ZD0AhWTeysKHdbQAA0QMygAegUIARDFAQ",
        name: "Three-Meat Special Lasagna",
        description: "On top of the meat sauce in pan, layer the lasagna as follows: 4 noodles (to cover pan), 8 ounces shredded mozzarella, 4 ounces slice",
        price: "$34",

    },
    {
        id: 104,
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Faflavorjournal.com%2Fwp-content%2Fuploads%2F2017%2F04%2FIMG_8521.jpg&imgrefurl=https%3A%2F%2Faflavorjournal.com%2Fcreamy-cajun-linguine-a-small-batch-recipe-for-two%2F&tbnid=8sMQ8rBoClBZCM&vet=12ahUKEwiAuPHY8ZD0AhXDlUsFHdZDAugQMygHegUIARDWAQ..i&docid=e8_BzFzoR_SgHM&w=2560&h=1805&q=Linguine%20with%20Two-Cheese%20Sauce&ved=2ahUKEwiAuPHY8ZD0AhXDlUsFHdZDAugQMygHegUIARDWAQ",
        name: "Linguine with Two-Cheese Sauce",
        description: "INGREDIENTS · 8 ounces Uncooked linguine noodles · 1 cup 1% lowfat milk · 2 tablespoon Chopped fresh basil ; , divided · 1/2 tea",
        price: "$14",

    },
    {
        id: 105,
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.schaer.com%2Fsites%2Fdefault%2Ffiles%2F2016-08%2F1119_Ravioli%2520mit%2520Ricotta%2520und%2520Spinat.jpg&imgrefurl=https%3A%2F%2Fwww.schaer.com%2Fen-int%2Fr%2Fravioli-ricotta-cheese-and-spinach&tbnid=3rIlsQrsFnjmlM&vet=12ahUKEwjp9LrH8pD0AhX4KbcAHTFDCKsQMygBegUIARDCAQ..i&docid=hjJ2aEV7YIPUoM&w=5656&h=3182&q=Ravioli%20with%20Spinach%20and%20Ricotta%20cheese&ved=2ahUKEwjp9LrH8pD0AhX4KbcAHTFDCKsQMygBegUIARDCAQ",
        name: "Ravioli with Spinach and Ricotta cheese",
        description: "Ravioli with spinach and ricotta cheese filling, in tomato cream sauce · Mix flour with salt. · Heat olive oil on medium heat, add spinach and",
        price: "$97",

    },
    {
        id: 106,
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fjuliasalbum.com%2Fwp-content%2Fuploads%2F2019%2F02%2Ffarfalle-with-spinach-mushrooms-caramelized-onions-500x500.jpg&imgrefurl=https%3A%2F%2Fjuliasalbum.com%2Ffarfalle-with-spinach-mushrooms-caramelized-onions%2F&tbnid=Y8yjyUtgcOT6gM&vet=12ahUKEwiAh5_88pD0AhUDS3wKHZw-CZEQMygAegUIARChAQ..i&docid=a76SkKCYeKggHM&w=500&h=500&q=Farfalle%20with%20Mushrooms%20and%20Spinach&ved=2ahUKEwiAh5_88pD0AhUDS3wKHZw-CZEQMygAegUIARChAQ",
        name: "Farfalle with Mushrooms and Spinach",
        description: "mushrooms and spinach: · Heat 1 tablespoon olive oil in the same skillet on medium heat. Add sliced mushrooms. ",
        price: "$45",

    },
    {
        id: 107,
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.thespruceeats.com%2Fthmb%2F-YUYSXc4T2H4P8o2JBApzJ3F5rw%3D%2F2069x2069%2Fsmart%2Ffilters%3Ano_upscale()%2Fwhite-and-red-sauce-lasagna-recipe-995925-hero-1-fb2c2142b39042069f0c50310047256d.jpg&imgrefurl=https%3A%2F%2Fwww.thespruceeats.com%2Fwhite-and-red-sauce-lasagna-recipe-995925&tbnid=xCJuTyrXDjePjM&vet=12ahUKEwjB4ruh85D0AhUoNbcAHcaUBx4QMygBegUIARD4AQ..i&docid=kAxCekYkF1uCCM&w=2069&h=2069&q=lasagna&ved=2ahUKEwjB4ruh85D0AhUoNbcAHcaUBx4QMygBegUIARD4AQ",
        name: "Lasagna",
        description: "To assemble, spread 1 1/2 cups of meat sauce in the bottom of a 9x13-inch baking dish. Arrange 6 noodles lengthwise over meat sau",
        price: "$85",

    },
    {
        id: 108,
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.fanpage.it%2Fwp-content%2Fuploads%2Fsites%2F22%2F2021%2F09%2Fbeef-burger.jpg&imgrefurl=https%3A%2F%2Fwww.cookist.com%2Fbeef-burger%2F&tbnid=W1kP9IuwVPCK7M&vet=12ahUKEwiR5Ovp85D0AhXMj9gFHeC-CGcQMygFegUIARCDAg..i&docid=-pe3ybQeE1brFM&w=4252&h=2838&q=beef%20burger&ved=2ahUKEwiR5Ovp85D0AhXMj9gFHeC-CGcQMygFegUIARCDAg",
        name: "Beef burger",
        description: "ngredients · ½ tbsp olive oil · 1 onion, peeled and finely chopped · 1 x 500g pack British Beef Steak Mince 15% fat · 1 tsp mixed dried herbs · 1 eg",
        price: "$32",

    },
    {
        id: 109,
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.immediate.co.uk%2Fproduction%2Fvolatile%2Fsites%2F30%2F2020%2F11%2Fprofiteroles-0dde0bb.jpg%3Fquality%3D45%26resize%3D504%2C458%3Fquality%3D90%26webp%3Dtrue%26resize%3D504%2C458&imgrefurl=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fprofiteroles&tbnid=Gcbgb28nekDtzM&vet=12ahUKEwij--vI9JD0AhWRFnIKHbMkAdEQMygBegUIARD2AQ..i&docid=2laNUDWAsR_SmM&w=504&h=554&q=profiteroles&ved=2ahUKEwij--vI9JD0AhWRFnIKHbMkAdEQMygBegUIARD2AQ",
        name: "Profiteroles",
        description: "A profiterole, cream puff, or chou à la crème is a filled French choux",
        price: "$90",

    },
    {
        id: 110,
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2018%2F06%2F19%2F17%2F16%2Fantipasto-3484840_1280.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fphotos%2Fantipasto-antipasti-meal-food-3484840%2F&tbnid=6iTLZ7Xm0S9EiM&vet=12ahUKEwighbKP9ZD0AhUWkksFHeYfA-YQMygCegUIARDsAQ..i&docid=Q3dHlMZhWE2bzM&w=1280&h=853&q=antipasti&ved=2ahUKEwighbKP9ZD0AhUWkksFHeYfA-YQMygCegUIARDsAQ",
        name: "Antipasto",
        description: "Antipasto is the traditional first course of a formal Italian meal. Typical ingredients of a traditional antipasto include cure",
        price: "$12",

    }

]