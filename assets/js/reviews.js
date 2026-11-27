const $template = $('#review');
const REVIEWS = [
    {
        author: "Sophia S",
        date: new Date("2026-11-26"),
        message: "De beste film die ik in lange tijd heb gezien!! De casting is werkelijk perfect en het verhaal is zo uniek en intrigerend. Dylan O’Brien en Thomas Brodie-Sangster zijn fenomenaal en brengen hun personages op fantastische wijze tot leven. Ik heb onlangs het eerste boek gelezen en was oprecht onder de indruk van hoe goed de film het verhaal heeft verwerkt. Natuurlijk kan een film nooit elk detail uit een boek overnemen, zeker niet wanneer bepaalde elementen lastig naar het witte doek te vertalen zijn. Daarom zijn er wat verschillen in de verhaallijn, maar gezien hoe uitdagend sommige aspecten ongetwijfeld waren om te verfilmen, vind ik dat ze fantastisch werk hebben geleverd. De wereldopbouw, het mysterie, de spanning en de personages maken deze film ontzettend boeiend. Absoluut een film die je bijblijft."
    },
    {
        author: "Jaycen D",
        date: new Date("2026-9-23"),
        message: "Om te beginnen is het lastig om Will Poulter serieus te nemen, maar tegen het einde van de film lukte dat toch. Zijn personage, Gally, werkt behoorlijk op mijn zenuwen, dus ik ben blij dat hij aan het eind doodgaat. Maar WAAROM MOESTEN ZE CHUCK LATEN STERVEN?! DIE JONGEN?! HALLO?! Ava Paige is een volslagen gestoord en verdorven mens; ze liet de Gladers die uit het Labyrint ontsnapten in de waan dat ze vrij waren. Ze is net zo psychopathisch als President Snow. Dylan O’Brien speelt, zoals altijd – zeker in dystopische films – een geweldig personage. Ik kan niet geloven dat hij 23 was toen deze film uitkwam! Voor een film uit 2014 zijn de beelden van behoorlijk goede kwaliteit, moet ik zeggen. De Grievers zijn echt afschuwelijk. Newt vind ik een toffe gast. Ik had liever gezien dat Alby niet dood was gegaan. Ik vraag me ook af waarom Ava Paige, op Teresa na, nooit meisjes in het Labyrint heeft geplaatst. Het feit dat ze haar eigen dood en die van alle andere wetenschappers in scène heeft gezet, is werkelijk krankzinnig. Ik begrijp niet hoe auteurs op zulke ideeën komen voor hun boeken. Kijk deze film!!"
    },
    {
        author: "Bogi B",
        date: new Date("2026-9-5"),
        message: "Ik heb deze film in mijn Engelse les voor gevorderden gezien (moest even opscheppen tegen jullie tr***en, hè?) en hij was echt prachtig, een cinematografisch meesterwerk. Ik ben meteen naar huis gegaan en heb de andere twee films gekeken. Het was gewoonweg prachtig en het kan me niet schelen. Als je iets anders beweert, ga dan alsjeblieft van mijn tijdlijn af en naar de tandarts, want je hebt echt geen smaak, tsss. De acteurs waren superknap en het was zo realistisch, ik was er helemaal door gegrepen. Ik baal ervan dat Newt dood is. Kan iemand een fanfictie schrijven waarin hij overleeft op AO3 en me taggen? Ik moet in mijn waanideeën blijven dat mijn stomme kleine Britse zoon, die ik uit een ei heb laten komen, niet besmet is geraakt. Kijk hem in ieder geval, hij is goed, alsjeblieft. #istandwithnewt #justicefornewt #iloveyoumrskrubski #yuh",
    },
    {
        author: "MC R",
        date: new Date("2026-7-7"),
        message: "Ik dacht: laat ik deze reeks eens opnieuw bekijken. Het is alweer een hele tijd geleden dat ik deze films zag, en ik kon me er eigenlijk niets meer van herinneren. Dus leek het me leuk om ze opnieuw te kijken! En dat was het ook! Het is een boeiende film, en vooral erg mysterieus. Wie zijn deze kinderen, waar zijn ze, wat is er aan de hand en wie in vredesnaam is WCKD? Ik vond de samenleving die de kinderen in het doolhof hebben opgebouwd geweldig. De cast is top, de personages zijn interessant en het verhaal zit goed in elkaar. Een uitstekend begin van de reeks. De wending en verrassing aan het einde vond ik ook erg goed. Als ik tijd heb, kijk ik morgen het vervolg. Ik vind het geweldig om deze trilogie opnieuw te bekijken! P.S. Ik vond Chuck geweldig; wat ze met hem hebben gedaan, is echt oneerlijk!"
    },
    {
        author: "Marcus G",
        date: new Date("2026-2-7"),
        message: "Geweldige prestatie van Dylan O'Brien en de rest van de cast. Het tempo zit goed en de actiescènes zijn van een hoger niveau. Het is mooi gedaan dat Thomas precies evenveel weet als wij; we ontdekken de geheimen van zijn wereld samen met hem. Sommige zaken worden minder goed uitgelegd dan in de boeken (zoals waarom de 'runners' niet simpelweg de muren kunnen beklimmen), maar al met al is het acteerwerk uitstekend, de actie indrukwekkend, het geluidsontwerp sterk en het plot intrigerend en origineel – een verhaal dat echt opvalt in een zee van *Hunger Games*-klonen."
    },
    {
        author: "Thiago B",
        date: new Date("2025-11-30"),
        message: "Maze Runner is een verrassend boeiend sciencefictionavontuur dat de kijker van begin tot eind weet te boeien. De dialogen zijn goed geschreven, ook al volgen ze vaak bekende patronen. Wat ze echter effectief maakt, is het tempo en de spanning die met elk gesprek verder oploopt; hierdoor verloopt het verhaal op een natuurlijke wijze, zonder dat het geforceerd of overdreven dramatisch aanvoelt. De visuele effecten zijn werkelijk opmerkelijk: de CGI is zo overtuigend dat het de indruk wekt van een echt, kolossaal doolhof dat speciaal voor de film is gebouwd. Elke omgeving voelt levendig aan, rijk aan textuur en detail, wat bijdraagt ​​aan een sterke onderdompeling in het verhaal. Het is duidelijk dat het technische team enorm veel moeite heeft gestoken in het creëren van een wereld die zowel futuristisch als geloofwaardig aanvoelt. De acteerprestaties zijn bekwaam en overtuigend. Hoewel het merendeel van de cast afkomstig is uit projecten die niet erg succesvol waren, leveren zij hier stuk voor stuk degelijk werk. De chemie tussen de personages voelt oprecht aan, zeker tijdens momenten van spanning en samenwerking. Het verhaal behoudt een vlot tempo, waardoor het publiek voortdurend nieuwsgierig blijft naar wat er komen gaat. Het mysterie achter het doolhof wordt langzaam maar doeltreffend onthuld, waardoor de spanning tot op het laatste moment behouden blijft. Hoewel de uiteindelijke plotwending enkele vragen onbeantwoord laat, fungeert deze als een slimme opzet voor de vervolgfilms, die beloven het universum verder uit te breiden en opheldering te bieden over wat nog verborgen is. Al met al overtreft Maze Runner de verwachtingen. De film combineert sterke beelden, consistente acteerprestaties en een intrigerend verhaal dat de kijker geboeid houdt. Ondanks de minpunten biedt de film een ​​meeslepende ervaring die zowel vermakelijk als prikkelend is.",
    },
    {
        author: "Thomas L",
        date: new Date("2025-10-14"),
        message: "Ik ben absoluut dol op deze film, net als op de rest van de reeks. Sinds de release heb ik hem al meerdere keren bekeken. Je leeft mee met de personages en alles wat zij doormaken. Het biedt een verrassende wending aan het genre van de dystopische toekomst, waardoor je aan het scherm gekluisterd blijft. Ik had graag gezien dat sommige personages wat meer uitgediept waren, maar dan zouden de films nog langer zijn geworden. Ik zou willen dat meer filmmakers zoveel moeite zouden steken in het maken van zulke geweldige films. Wat mij betreft hoort deze reeks thuis in het rijtje van de beste trilogieën van de afgelopen decennia."
    },
    {
        author: "Pang J",
        date: new Date("2025-5-27"),
        message: "minstens drie keer bekeken"
    },
    {
        author: "Hailee K",
        date: new Date("2025-4-8"),
        message: "Ik vind dit een geweldige film, net als de andere twee, maar deze... was werkelijk fantastisch; geen enkele andere film kan mijn liefde hiervoor evenaren. Volgens mij is dit de beste film uit de reeks (ik raad aan om eerst het boek te lezen). Het kan me niet schelen wat anderen zeggen: Thomas is mijn favoriete personage."
    },
    {
        author: "Sam M",
        date: new Date("2025-4-4"),
        message: "Deze film is zo goed; er zit enorm veel spanning in en een hoop sterke plotwendingen. Ik heb de boeken niet gelezen, maar heb desondanks erg van de film genoten. Absoluut een aanrader, 5/5!"
    }
]

function renderReview(props) {
    const $review = $($template.prop('content')).clone();
    const $message = $review.find('#message');
    const $clampBtn = $review.find('#clamp-btn');

    $message.text(props.message);
    $review.find("#author").text(`@${props.author}`)
    $review.find("#author_img").attr("src", `https://ui-avatars.com/api/?name=${props.author}`)
    $review.find("#date").text(props.date.toLocaleDateString())
    $clampBtn.on('click', function () {
        $message.toggleClass("is-block")
        $clampBtn.text($message.hasClass("is-block") ? "View less" : "View more");
    })

    return $review
}

$('#reviews').append(REVIEWS.map(renderReview))